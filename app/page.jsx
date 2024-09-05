 import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import { FileDownIcon, Phone } from 'lucide-react'
import React from 'react'
 
 const Home = () => {
   return (
     <section className=' h-full'>
      <div className=' container mx-auto'>
          <div className='  flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
           {/* text  */}
            <div className=' text-center xl:text-left order-2 xl:order-none '>
            <span className=' text-xl'>Web Developer</span>
            <h1 className='h1'> Hello I'm <br />  <span className='  text-accent'>Belal Uddin</span></h1> 
              <p className='   max-w-[500px] mb-9 text-white/80'>
              I excel at  crafting elegant digital  experience and I am proficient in various programming language and technologies
              </p>
              <div className=' flex flex-col xl:flex-row items-center gap-8'>
                <Button  variant="outline" size="lg" className=" uppercase flex items-center gap-8">
                     <span className='  hover:text-accent'>Download CV</span>
                   
                </Button>
                <div className=' mb-8 xl:mb-0'> 
                   <Social  containerStyles="flex gap-6" iconStyles="w-9 h-9  text-xl  rounded-full flex justify-content items-center text-accent text-base  hover:transition-all duration" />


                </div>
              </div>
            </div>
            <div className='  order-1 xl:order-none  mb-8 xl:mb-0'>
             <Photo/>
            </div>
          </div>
      </div>
      <Stats/>
     </section>
   )
 }
 
 export default Home