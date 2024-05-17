"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function Intro() {
  return (
    <section className="flex mb-28 max-w-[48rem] items-center justify-between sm:mb-0">
      <motion.div
        className="flex flex-col items-center justify-center my-auto text-left w-3/4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mt-4 pr-4 text-xl">
          Hey there! I'm Clara, a software engineer and product manager based in New York.
        </p>
        <p className="mb-10 mt-4 pr-4 text-xl">
          I'm designing and developing accessible and enjoyable technological solutions to bring people together.
        </p>
      </motion.div>

      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image 
            src="https://www.lamclara.com/docs/img/pfp.jpg"
            alt="Clara Lam" 
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-full rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
        </motion.div>
      </div>
    </section>
  )
}