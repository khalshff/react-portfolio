"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
    className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I&apos;m Khalisah <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Software Engineer.</h1>
        <p className='max-w-2xl mx-auto'>
        I am a software engineer based in Singapore who is deeply intrigued with the idea of
creating practical solutions to real-world problems that would transform and enhance the lives of
people around the world. My goal is to utilize my technical knowledge to conjure innovative and effective solutions.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href="#resume" download className='px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2'>My resume<Image src={assets.download_icon} alt='' className='w-4'/></a>

        </div>
      </motion.div>

//{/* <AuroraBackground>
    //   <motion.div
    //     initial={{ opacity: 0.0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="relative flex flex-col gap-4 items-center justify-center px-4"
    //   >
    //     <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
    //       Background lights are cool you know.
    //     </div>
    //     <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
    //       And this, is chemical burn.
    //     </div>
    //     <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
    //       Debug now
    //     </button>
    //   </motion.div>
    // </AuroraBackground> */}
  )
}

export default Header
