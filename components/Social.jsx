"use client"
import { FaFacebook,FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'
const socials=[
    {icon: <FaFacebook/>,path:"https://www.facebook.com/devbelal10/"},
    {icon:<FaLinkedin/>,path:""},
    {icon:<FaGithub/>,path:"https://github.com/coderBelal"},
 

]
const Social = ({containerStyles,iconStyles}) => {

  return (
    <div className={containerStyles}> 
      
 {socials.map((item,index)=>{
    return (
        <Link key={index} href={item.path}  className={iconStyles} >

            {item.icon}
        </Link>
    )
 })}
    </div>
  )
}

export default Social