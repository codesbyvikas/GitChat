import { Folder, File, Plus } from "lucide-react";
import AddRepoDialog from "../components/AddUrl";
import { useState } from "react";

const initialRepos = ["example-repo", "project-1", "test-library", "demo-app"];

const messages = [
  { type: "bot", text: "Hello! How can I assist you today?" },
  { type: "user", text: "I have a question about the index file" },
  { type: "bot", text: "Sure, feel free to ask your question about the index file." },
  { type: "user", text: "What does this code snippet do?" },
];

const ChatPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [repoUrl, setRepoUrl] = useState("");
  const [repos, setRepos] = useState<string[]>(initialRepos);

  const handleAddRepo = (url: string) => {
    const name = url.split("/").pop()?.replace(".git", "") || "new-repo";
    setRepos((prev) => [...prev, name]);
    setRepoUrl("");
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-[#0d1117] min-h-screen flex text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-4 bg-[#0d1117]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold">Repositories</h2>
          </div>
          <button
            title="Add new repository"
            onClick={() => setIsDialogOpen(true)}
            className="p-1 rounded-md hover:bg-[#161b22] border border-gray-700 hover:border-purple-400 transition cursor-pointer"
          >
            <Plus className="w-5 h-5 text-purple-400" />
          </button>
        </div>
        <ul className="space-y-4 pl-2">
          {repos.map((repo) => (
            <li
              key={repo}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition cursor-pointer"
            >
              <File className="w-4 h-4" />
              {repo}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Chat */}
      <main className="flex-1 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-800 px-6 py-4">
          <h2 className="text-lg font-semibold text-purple-400">Chat - example-repo</h2>
          <div className="flex items-center gap-3">
            <img
              src="src/assets/logo.png"
              alt="avatar"
              className="w-9 h-9 rounded-full border border-purple-500"
            />
            <h1 className="text-purple-500 text-2xl font-bold">GitChat</h1>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto custom-scrollbar">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${
                msg.type === "user"
                  ? "bg-purple-600 self-end text-white"
                  : "bg-[#161b22] text-gray-200"
              } p-3 rounded-lg w-fit max-w-[70%]`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="border-t border-gray-800 p-4 flex items-center gap-3 bg-[#0d1117]">
          <input
            type="text"
            placeholder="Message GitChat..."
            className="bg-[#161b22] text-white flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white transition">
            Send
          </button>
        </div>
      </main>

      {/* Add Repo Dialog */}
      <AddRepoDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddRepo}
        repoUrl={repoUrl}
        setRepoUrl={setRepoUrl}
      />
    </div>
  );
};

export default ChatPage;
