
const DocumentationPage = () => {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-500 mb-6">📘 GitChat Documentation</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">💡 Introduction</h2>
          <p className="text-subtext">
            GitChat is an AI-powered chat platform that lets users interact with their GitHub profiles in a conversational way.
            Ask questions, get summaries, and explore your GitHub activity using natural language.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🚀 Features</h2>
          <ul className="list-disc pl-6 text-subtext space-y-1">
            <li>Login with GitHub OAuth</li>
            <li>Ask questions about your GitHub profile</li>
            <li>README/Code summarization with LLaMA</li>
            <li>AI-powered response engine</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">⚙️ Installation</h2>
          <pre className="bg-[#161b22] p-4 rounded text-sm text-green-400 overflow-auto">
            <code>
              git clone https://github.com/codesbyvikasgitchat.git{'\n'}
              cd gitchat{'\n'}
              npm install
            </code>
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📦 Usage</h2>
          <pre className="bg-[#161b22] p-4 rounded text-sm text-yellow-400 overflow-auto">
            <code>
              npm run dev
            </code>
          </pre>
          <p className="mt-2 text-subtext">
            Open your browser at <span className="text-white">http://localhost:3000</span> and start chatting!
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📡 API Reference</h2>
          <ul className="list-disc pl-6 text-subtext space-y-1">
            <li><strong>GET</strong> <code>/api/profile</code> – Fetch authenticated user profile</li>
            <li><strong>POST</strong> <code>/api/chat</code> – Send chat messages and get AI responses</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Contributing</h2>
          <p className="text-subtext">
            We welcome contributions! Please fork the repo and open a pull request. For major changes, open an issue first to discuss what you’d like to change.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">📄 License</h2>
          <p className="text-subtext">This project is licensed under the MIT License.</p>
        </section>
      </div>
    </div>
  );
};

export default DocumentationPage;
