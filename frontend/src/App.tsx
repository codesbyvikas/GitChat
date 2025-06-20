import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ReadmeGeneratorPage from './pages/ReadmeGeneratorPage';
import './App.css';
import SummaryGeneratorPage from './pages/SummaryGeneratorPage';
import DocumentationPage from './pages/DocumentationPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/readme-generator" element={<ReadmeGeneratorPage />} />
      <Route path="/summary-generator" element={<SummaryGeneratorPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
