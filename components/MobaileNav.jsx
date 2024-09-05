 "use client"
import Link from "next/link"
import { Sheet,SheetContent, SheetTrigger} from "./ui/sheet"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci";
const MobaileNav = () => {
    const links=[
        {
            name:"home",
            path:"/",
        },
        {
            name:"Services",
            path:"/services",
        },
        {
            name:"resume",
            path:"/resume",
        },
        {
            name:"work",
            path:"/work",
        },
        {
            name:"contact",
            path:"/contact",
        },
    ]
    const pathname =usePathname()
  return (
    
    <Sheet>
       <SheetTrigger className=" flex justify-center items-center">
       <CiMenuFries  className=" text=[32px] text-accent" />
       </SheetTrigger>
       <SheetContent className=" flex flex-col  ">
         <div>
            <Link href="/">  <h1 className=" text-xl   font-semibold">Belal <span className=" text-accent">.</span></h1></Link>
          
         </div>
         <nav className='   flex flex-col justify-center  items-center gap-8 '> 
        {
            links.map((link,index)=>{
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "  text-accent border-b-2 border-accent " }  capitalize font-medium hover:text-accent transition-all `}>
                        {link.name}
                    </Link>
                )
            })
        }
    </nav>

       </SheetContent>
    </Sheet>
  )
}

export default MobaileNav
