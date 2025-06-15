import { MessageCircle, BookOpen, FileText } from 'lucide-react'
import Footer from '@/components/Footer'
import FeatureCard from '../components/FeatureCard'

const LandingPage = () => {
  return (
    <div className='bg-[#0d1117] min-h-screen flex flex-col justify-between px-4'>

      <div className='flex flex-col justify-center items-center pt-10'>
        <div className='flex items-center justify-center mb-4'>
          <img 
            src="src/assets/logo.png" 
            alt="GitChat Logo" 
            className="w-20 h-20 mr-4"
          />
          <h1 className='text-5xl font-bold text-purple-500'>GitChat</h1>
        </div>

        <h2 className='text-purple-400 text-2xl mt-1'>Chat with git repositories</h2>
        <h3 className='text-[#8b949e] text-xl italic'>Make your repositories talk</h3>

        <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
          <FeatureCard 
            title="Interactive Chat" 
            description="Chat with your GitHub repositories in real-time and get code insights."
            Icon={MessageCircle}
          />
          <FeatureCard 
            title="Summarize Repos" 
            description="Quickly get an overview of any codebase using AI summarization."
            Icon={BookOpen}
          />
          <FeatureCard 
            title="Generate README" 
            description="Automatically create professional README.md files with ease."
            Icon={FileText}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
