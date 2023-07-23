import React, { useState } from 'react';
import Profile from '../assets/Profile.png'

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const copyText = document.getElementById('myInput');
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Set the copied state to true
        setCopied(true);
    };
    return (
        <div className="flex justify-between px-5" id='home'>
            <div className="w-1/12 flex flex-col justify-end items-center max-sm:hidden">
                <div className="flex-1"></div>
                <div className='flex flex-col gap-5 text-2xl text-center cursor-pointer'>
                    <a 
                        href="https://discordapp.com/users/888385454897000479"
                        target='_blank'
                        className='hover:scale-110 transition-transform duration-200'
                    >
                        <i className="fa-brands fa-discord text-text hover:text-outline hover:scale-x-3 hover:scale-y-3"></i>                    
                    </a>
                    <a 
                        href="https://web.facebook.com/homer.salazar.5"
                        target='_blank'
                        className='hover:scale-110 transition-transform duration-200'

                    >
                        <i className="fa-brands fa-facebook-f text-text hover:text-outline hover:scale-x-3 hover:scale-y-3"></i>
                    </a>
                    <a 
                        href="https://github.com/homersalazar"
                        target='_blank'
                        className='hover:scale-110 transition-transform duration-200'

                    >
                        <i className="fa-brands fa-github text-text hover:text-outline hover:scale-x-3 hover:scale-y-3"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/homer-salazar-4055a11b9/"
                        target='_blank'
                        className='hover:scale-110 transition-transform duration-200'

                    >
                        <i className="fa-brands fa-linkedin-in text-text hover:text-outline hover:scale-x-3 hover:scale-y-3"></i>
                    </a>
                    <div className="h-[9rem] relative">
                        <div className="h-full w-0.5 bg-outline absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>                 
                </div>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div className="py-5 max-sm:order-2 md:order-2">
                        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold"
                            data-aos="fade-left"
                            data-aos-delay="500"
                            data-aos-duration="500"
                        >
                            Hi, I am{' '}
                            <span
                                className="bg-primary px-1 py-0 inline-block"
                                style={{ transform: 'rotate(5deg)' }}
                                
                            >
                                Homer
                            </span>
                        </h1>
                        <p 
                            className='py-7 max-sm:text-xl md:text-xl lg:text-xl xl:text-2xl leading-relaxed indent-8'
                            data-aos="fade-left"
                            data-aos-delay="700"
                            data-aos-duration="500"
                        >
                                I am a Web Developer from Valenzuela, Philippines. I enjoying creating things that live on the internet. I'm passionate about software development and I'm skilled in HTML, JavaScript, and PHP. I'm now looking for a junior dev position.
                                </p>
                        <p 
                            className='max-sm:text-xl md:text-xl lg:text-xl xl:text-2xl'
                            data-aos="fade-left"
                            data-aos-delay="700"
                            data-aos-duration="500"
                        >
                            <em>
                                Everything is a <span className='border-outline border-b-2 '>learning experience.</span>
                            </em>                
                        </p>
                        <div 
                            className='py-7 max-sm:text-xl md:text-xl lg:text-xl xl:text-2xl'
                            data-aos="fade-left"
                            data-aos-delay="800"
                            data-aos-duration="500"
                        >
                            <div className='p-12 max-sm:p-5 border-4 border-outline'>
                                <h1 className='text-center text-2xl font-semibold mb-3'>
                                    When did it all started?
                                </h1>
                                <p className='leading-relaxed mb-5'>
                                    I started liking web development when I was in 2nd year high school. It was when we have a computer subject; I started interest in browsing in Internet daily - then i started wondering how do website created. From there I decided what course i am going to take.   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-center max-sm:order-1 md:order-1">
                        <img 
                            src={Profile} 
                            alt="" 
                            className='md:h-[40rem] profile '
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="500"
                        />
                    </div>  
                </div>
            </div>
            <div className="w-1/12 flex flex-col justify-end items-center max-sm:hidden">
                <div className="flex-1"></div>
                <div className='cursor-pointer'>
                    <a href = "mailto:salazarhomer1@gmail.com?subject = Feedback&body = Message"
                        target='_blank'
                        className='text-xl hover:text-outline mb-5'
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                        onClick={copyToClipboard}
                    >
                        salazarhomer1@gmail.com
                        {copied}
                        <input
                            type="text"
                            id="myInput"
                            value="salazarhomer1@gmail.com"
                            readOnly
                            style={{ position: 'absolute', top: '-9999px' }}
                        />
                    </a>
                    <div className="h-[9rem] relative">
                        <div className="h-full w-0.5 bg-outline absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>           
                </div>        
            </div>        
        </div>
    )
}

export default Hero
