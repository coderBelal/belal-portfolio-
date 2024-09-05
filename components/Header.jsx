import React from 'react'
 import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobaileNav from './MobaileNav'
const Header = () => {
  return (
    <header className=' py-8 xl:py-12 text-white   '>
       <div className='  container mx-auto flex  justify-between items-center'> 
          <Link href="/">
          <h1 className='   text-2xl font-semibold '>Belal <span className='   text-accent'>.</span></h1>
          </Link>
             {/* desktop nav */}
       <div className=' hidden xl:flex items-center gap-8'>
       <Nav/>
         <Link  href="/contact"  > 
          <Button  >Hire Me</Button>
         </Link>
 
        
       </div>
             {/* mobile nav */}
       <div className='  xl:hidden '>
           <MobaileNav/>
       </div>
       </div>
    
 
    </header>
  )
}

export default Header
