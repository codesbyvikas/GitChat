import React from "react";
import { X } from "lucide-react";

interface AddRepoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (url: string) => void;
  repoUrl: string;
  setRepoUrl: (url: string) => void;
}

const AddRepoDialog: React.FC<AddRepoDialogProps> = ({
  isOpen,
  onClose,
  onAdd,
  repoUrl,
  setRepoUrl,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoUrl.trim()) {
      onAdd(repoUrl.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#161b22] border border-gray-700 p-6 rounded-lg w-full max-w-md shadow-xl text-white relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold text-purple-400 mb-4">Add Git Repository</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter GitHub repo URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#0d1117] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition"
            >
              Add Repo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRepoDialog;
