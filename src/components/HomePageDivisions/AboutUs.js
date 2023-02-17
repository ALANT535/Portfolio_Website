import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <>
            <div id="about-us" className="relative z-10">
                <div className="custom-shape-divider-top-1676038953">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                            fill="#000000"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="w-full h-[80vh] flex justify-around items-center bg-discoverBlue">
                <div className="flex items-center justify-around h-full w-full">
                    <div className="w-2/3 h-full flex items-center flex-col gap-4 justify-around p-28">
                        <p className="font-semibold  w-full py-4 text-5xl">About Me</p>
                        <p className="text-md  w-full">
                        Alan Thomas is a second-year student pursuing his Bachelor of Technology in Computer Science with specialization at the esteemed Vellore Institute of Technology (VIT), Vellore campus. I am interested in Machine Learning and have a few projects on the same. I have an interest in other fields of technology as well as closely follow the sport of Formula1.  I’m currently learning more about AI/ML and am trying to go more in depth into the subject.
                        </p>
                    </div>
                    <div className="w-1/3 h-full">
                        <Image
                            src="People.svg"
                            className="h-full w-full"
                            height={1000}
                            alt="ppl"
                            width={1000}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
