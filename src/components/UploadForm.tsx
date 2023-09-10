import { useState } from "react"
import useStorage from "../hooks/useStorage";

const UploadForm = () => {

  const [selectedFile, setSelectFile] = useState<File | null>(null);
  const { startUpload, progress} = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectFile(e.target.files[0]);
    }
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(selectedFile) {
      startUpload(selectedFile);
    }
    setSelectFile(null);
  };

  return (
    <div className="text-center mt-10">
        <form onSubmit={handlesubmit} className="flex items-center flex-col gap-8">
        <input 
        type="file" 
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full max-w-xs" />
        <button type="submit" className={`btn gap-3 ${Boolean(progress) && 'loading'}`}disabled={!selectedFile}>Uoload 🚀</button>
        </form>
    </div>
  )
}

export default UploadForm