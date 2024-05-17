"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    })
    
    return (
    <header className="z-[999] relative flex flex-col items-center px-4">
        <motion.nav 
            className="flex fixed w-full max-w-[48rem] top-[0.15rem] h-12 py-2 mx-auto justify-between sm:top-[1.7rem] sm:h-[initial] sm:py-0"
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            animate={hidden ? "hidden" : "visible"}
        >
            <Link className="flex flex-wrap items-center font-medium text-gray-500 text-lg sm:w-[initial] sm:flex-nowrap hover:text-purple-950 transition" href="/">Clara Lam</Link>
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 text-lg sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {
                    links.map(link => (
                        <li 
                            className="h-3/4 flex items-center justify-center" 
                            key={link.hash}
                        >
                            <Link 
                                className="flex w-full items-center justify-center px-3 py-3 hover:text-purple-950 transition"
                                href={link.hash}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </motion.nav>
    </header>
    
    )
}