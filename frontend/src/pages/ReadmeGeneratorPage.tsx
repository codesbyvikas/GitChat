import Footer from '@/components/Footer'
import GeneratorCard from '@/components/GeneratorCard'

const ReadmeGeneratorPage = () => {
  return (
    <div className='bg-[#0d1117] min-h-screen flex flex-col justify-start px-4 items-center'>
      <div className='mt-10'></div>
      <GeneratorCard  Title='README'/>
      <div className='mb-4'></div>
      <Footer/>
    </div>
  )
}

export default ReadmeGeneratorPage
