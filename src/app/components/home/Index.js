'use client'

import Image from "next/image";
import { DefaultBtn } from "../buttons/home/DefaultBtn";
import { HomeNavbar } from "../navbar/home/HomeNavbar";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import tickIcon from '../../../../public/new-home-assets/tick.svg';

const bullets = [
    { buttet: 'Seamless Web2 to Web3 Data Bridge' },
    { buttet: 'AI Enabled Data Management Tools' },
    { buttet: 'Enterprise Grade Infrastructure and Support' },
];

const industryNames = [
    "Fintech",
    "Pharmaceutical",
    "Cybersecurity",
    "Retail",
    "Universities",
    "Hedge Funds",
    "Genomics",
]

export const IndexHome = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgSize, setBgSize] = useState({ width: 0 });
    const bgRef = useRef(null);


    // Update background size based on the active word
    useEffect(() => {
        if (bgRef.current) {
            const activeElement = bgRef.current.querySelectorAll('span')[currentIndex]; // Access the actual span
            console.log(activeElement)
            if (activeElement) {
                setBgSize({
                    width: activeElement.offsetWidth, // Get the span width
                });
            }
        }
    }, [currentIndex, industryNames]);

    const handleClick = () => {
        // Increment index and reset to 0 if it exceeds the length of the array
        setCurrentIndex((prevIndex) => (prevIndex + 1) % industryNames.length);
    };

    return (
        <>
            <div className="h-available relative">
                <header className="absolute flex justify-center w-full">
                    <HomeNavbar />
                </header>
                <div className="bg-gray-light h-available rounded-lg relative">
                    {/* White Strap */}
                    <div className="absolute md:flex justify-center w-full">
                        <div className=' bg-white 2xl:h-20 h-16 z-10 md:rounded-bl-[32px] rounded-br-[32px] lg:w-4/12 md:w-1/5 sm:w-3/12 w-4/12'></div>
                    </div>
                    <div className=" grid grid-cols-12 h-available items-center">
                        <div className="lg:col-span-5 col-span-11 2xl:pl-20 md:pl-10 pl-5 grid grid-rows-3 items-end h-available">
                            <div className="flex flex-col gap-6 row-span-2">
                                <h2 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extralight 2xl:leading-[45px] md:leading-[48px] leading-8">
                                    Decentralized<br /> data infrastructure<br /> for{" "}
                                    <div className="inline">
                                        <div className="inline-flex h-12 overflow-hidden items-center">
                                            {/* Dynamic width for bg-green based on the active span */}
                                            <motion.div
                                                className="inline-flex h-10 bg-green w-auto cursor-pointer"
                                                style={{ width: bgSize.width !== 0 ? (bgSize.width + 2) + "px" : '100%' }}
                                                ref={bgRef}
                                                animate={{ width: bgSize.width !== 0 ? (bgSize.width + 2) + "px" : '100%' }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 250,
                                                    damping: 25,
                                                }}
                                                onClick={handleClick} // Click event to trigger bounce
                                            >
                                                <motion.div
                                                    className="relative w-full inline-flex h-full flex-col gap-10"
                                                    initial={{ y: 0 }}
                                                    animate={{ y: -currentIndex * 80 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                >
                                                    {industryNames.map((industryName, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="inline-flex w-max font-bold text-4xl cursor-pointer"
                                                            initial={{ opacity: 0, y: 0 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            whileTap={{
                                                                y: 10,      // Moves slightly down on click
                                                            }}
                                                            transition={{
                                                                y: { duration: 0.2, ease: "easeOut" }, // Smooth down
                                                            }}
                                                        >
                                                            {industryName}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </h2>
                                <p className="2xl:text-2xl text-sm">Data mobility. Without limits.</p>
                                <DefaultBtn
                                    btnText={'Get Started'}
                                />
                            </div>
                            <div className="flex flex-col row-span-1 2xl:pb-10 pb-5 w-fit">
                                <div className="border-t-[0.2px] border-t-black border-opacity-20">
                                    {bullets.map((bullet, index) => (
                                        <div key={index} className="flex items-center gap-3 border-b-[0.2px] border-b-black border-opacity-20 py-2">
                                            <Image
                                                src={tickIcon}
                                                alt="tick icon"
                                                width={10}
                                                height={10}
                                            />
                                            <p className="2xl:text-xl md:text-sm text-xs">{bullet.buttet}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}