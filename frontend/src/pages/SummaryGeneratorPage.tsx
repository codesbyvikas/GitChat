import Footer from "@/components/Footer"
import GeneratorCard from "@/components/GeneratorCard"

const SummaryGeneratorPage = () => {
 
   return (
    <div className='bg-[#0d1117] min-h-screen flex flex-col justify-start px-4 items-center'>
      <div className='mt-10'></div>
      <GeneratorCard  Title='Summary'/>
      <div className='mb-4'></div>
      <Footer/>
    </div>
  )

}

export default SummaryGeneratorPage
