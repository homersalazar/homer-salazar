import React from 'react'
import RESUME from '../assets/HOMER_SALAZAR.pdf'
const About = () => {
  return (
        <div className="flex bg-secondary" id='about'>
            {/* <div className="w-1/12 flex flex-col justify-end items-center max-sm:hidden">
                <div className="flex-1"></div>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 px-5">
                <div>
                </div> */}
                <div 
                    className="grid px-5 lg:px-40 xl:px-40"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                >
                    <div className="py-10">
                        <h1 className="text-2xl max-sm:text-3xl font-bold">About my goals</h1>
                        <p className="py-5 max-sm:text-xl md:text-xl lg:text-xl xl:text-2xl leading-relaxed indent-8">
                        As a web developer, my goals are to gain experience building and
                        deploying web applications; participate in code reviews and bug
                        hunting; optimize and refactor code; collaborate with project
                        managers, designers, and other developers; stay knowledgeable of
                        project stakeholders' needs; and stay up-to-date with the latest web
                        technologies and trends.
                        </p>
                        <a 
                            target='_blank'
                            href={RESUME} 
                            className=" text-white bg-primary cursor-pointer focus:ring-4 focus:ring-outline font-medium rounded-lg px-10 py-3">
                                DOWNLOAD CV
                        </a>
                    </div>
                </div>
                {/* </div>
            </div>
            <div className="w-1/12 flex flex-col justify-end items-center max-sm:hidden">
                <div className="flex-1"></div>
            </div> */}
        </div>

  )
}

export default About
