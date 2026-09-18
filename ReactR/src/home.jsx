import React from 'react'
import reactR from './assets/reactR.webp'
import boy from './assets/boy.jpeg.png'
import resumePdf from './assets/resume.pdf'

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F1F5F9]">

            <div className="mx-auto w-full max-w-7xl">

                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-8">

                    <div className="relative z-10 max-w-screen-xl px-4 pb-8 pt-6 sm:py-12 mx-auto sm:px-6 lg:px-8">

                        <div className="max-w-xl sm:mt-1 mt-80 space-y-6 text-center sm:text-right sm:ml-auto">

                            <h2 className="text-4xl font-bold sm:text-5xl">
                                Hi, I'm
                                <br />
                                Mamtesh Kumar
                                <br />
                                B.Tech CSE Student
                                <br />
                                Aspiring Full Stack Developer

                                <br />

                                <span className="hidden sm:block text-3xl">
                                    I build modern and responsive web applications
                                </span>
                            </h2>

                            {/* Get Resume Button */}
                            <a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>

                                &nbsp; Get Resume
                            </a>

                        </div>
                    </div>

                    {/* React Image */}
                    <div className="absolute inset-0 w-full sm:my-16 sm:pt-1 pt-8 h-full">
                        <img
                            className="w-96"
                            src={reactR}
                            alt="React"
                        />
                    </div>

                </aside>

                {/* Developer Image */}
                <div className="flex justify-center items-center -mt-16 sm:-mt-24 pb-4">
                    <img
                        className="w-[650px] max-w-full"
                        src={boy}
                        alt="developer"
                    />
                </div>

                {/* Bottom Heading */}
                <h1 className="text-center text-2xl sm:text-5xl py-6 font-medium">
                    ᴛʜɪɴᴋ • ʙᴜɪʟᴅ • ᴅᴇᴘʟᴏʏ
                </h1>

            </div>

        </div>
    )
}