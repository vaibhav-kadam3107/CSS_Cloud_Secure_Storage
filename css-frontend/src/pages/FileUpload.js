import React, { useState, useRef } from 'react';
import { Upload, Folder, File, X } from 'lucide-react';

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="min-h-screen dark:bg-black-900 flex items-center justify-center ">
      <div className="max-w-full w-full">
        <div className="dark:bg-gray-800 p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold dark:text-white text-center mb-6">
            Upload Your Files
          </h2>

          <div
            className={`border-2 border-dashed rounded-lg p-10 text-center transition-all duration-200 ${
              isDragging
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-gray-600 dark:bg-gray-700 hover:border-purple-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload
              className={`mx-auto h-24 w-24 ${
                isDragging ? 'text-purple-400' : 'text-gray-400'
              } animate-bounce`}
            />
            <p className="mt-4 text-xl dark:text-gray-300">
              Drag and drop your files here
            </p>
            <p className="mt-2 text-md dark:text-gray-400">Or use the buttons below</p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInput}
              className="hidden"
              multiple
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-3 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-purple-400"
            >
              <File className="h-5 w-5" />
              Browse File
            </button>

            <input
              type="file"
              ref={folderInputRef}
              onChange={handleFileInput}
              className="hidden"
              webkitdirectory="true"
              directory="true"
            />
            <button
              onClick={() => folderInputRef.current?.click()}
              className="flex items-center justify-center gap-3 px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-400"
            >
              <Folder className="h-5 w-5" />
              Upload Folder
            </button>
          </div>

          {files.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-medium dark:text-white mb-4">
                Selected Files
              </h3>
              <div className="space-y-4">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between dark:bg-gray-700 p-4 rounded-lg group transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <div className="flex items-center gap-4">
                      <File className="h-5 w-5 dark:text-gray-400" />
                      <div>
                        <p className="text-sm dark:text-gray-200 font-medium truncate">
                          {file.name}
                        </p>
                        <p className="text-xs dark:text-gray-400">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-red-500 rounded-full transition-colors"
                    >
                      <X className="h-4 w-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
