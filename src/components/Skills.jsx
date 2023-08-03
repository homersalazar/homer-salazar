import React from 'react'

const Skills = () => {
  return (
    
    <>
      <div 
        className='text-center' 
        id='skills'
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h1 className='pt-24 text-5xl max-sm:text-3xl font-bold '>Skills</h1>
        <p className='text-2xl max-sm:text-xl'>My Technical Level</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-0 xl:gap-0 px-5 py-20 justify-items-center'>        
        <div 
          className="block max-w-sm p-6 border-2 border-outline rounded-lg shadow bg-secondary"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
            <h5 className="mb-2 text-2xl font-bold tracking-tight max-sm:text-xl">
              <i className="fa-solid fa-code text-outline fa-2xl"></i>&nbsp;
                Frontend Developer
            </h5>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto pt-10 justify-center items-center ">
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" 
                  alt="HTML5" 
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                />
                <span>HTML5</span>
              </div>
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" 
                  alt="CSS" 
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                />
                <span>CSS</span>
              </div>
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" 
                  alt="CSS" 
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                />
                <span>JavaScript</span>
              </div>  
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                  alt="Reactjs" 
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                />
                <span>React Js</span>
              </div>  
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                  alt="Tailwind css"
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9' 
                />
                <span>Tailwind</span>
              </div>
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <img 
                  src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                  alt="Bootstrap"
                  className='h-14 hover:scale-x-1.9 hover:scale-y-1.9' 
                />
                <span>Bootstrap</span>
              </div>
            </div>
        </div>

        <div 
          className='max-w-sm'
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="block p-6 border-2 border-outline rounded-lg shadow bg-secondary">
              <h5 className="mb-2 text-2xl font-bold tracking-tight max-sm:text-xl">
                <i className="fa-solid fa-code-branch text-outline fa-2xl"></i>&nbsp;
                Backend Developer
              </h5>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto pt-10 justify-center items-center ">
              <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                    alt="PHP" 
                    className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                  />
                  <span>PHP</span>
                </div>
                <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                  <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/121px-Laravel.svg.png"
                      alt="LARAVEL" 
                      className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                    />
                    <span>LARAVEL</span>
                </div>
                <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                  <img 
                    src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                    alt="MySql" 
                    className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                  />
                  <span>MySql</span>
                </div>
                <div className='flex justify-center flex-col items-center max-h-75'>
                  <div className='h-14 w-24'></div>
                  <span></span>
                </div>
              </div>
          </div>
        </div>

        <div 
          className='max-w-sm'
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="block p-6 border-2 border-outline rounded-lg shadow bg-secondary">
              <h5 className="mb-2 text-2xl font-bold tracking-tight max-sm:text-xl">
                <i className="fa-solid fa-screwdriver-wrench text-outline fa-2xl"></i>&nbsp;
                  Others
              </h5>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto pt-10 justify-center items-center ">
                <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                  <img 
                    src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png"
                    alt="GIT" 
                    className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                  />
                  <span>GIT</span>
                </div>
                <div className='flex justify-center flex-col items-center max-h-75 cursor-pointer hover:scale-110 transition-transform duration-200'>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                    alt="PS" 
                    className='h-14 hover:scale-x-1.9 hover:scale-y-1.9'
                  />
                  <span>Photoshop</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Skills


