import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "./useAuth";

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  const startUpload = async (file: File) => {
    if (!file) {
      return;
    }

    const fileId = uuidv4();
    const formatFile = file.type.split("/")[1];

    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Store data into firestore
        await addDoc(collection(db, "images"), {
          imageUrl: downloadURL,
          createdAt: new Date(),
          userEmail: user?.email,
        });

        // Reset progress
        setProgress(0);
      }
    );
  };

  return {
    progress,
    error,
    startUpload,
  };
};

export default useStorage;
