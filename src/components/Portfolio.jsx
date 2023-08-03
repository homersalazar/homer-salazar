import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Portfolio = () => {
  return (
    <>
      <div 
        className='text-center' 
        id='projects'
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h1 className='pt-20 text-5xl max-sm:text-3xl font-bold'>Portfolio</h1>
        <p className='text-2xl max-sm:text-xl'>Recent Projects</p>
      </div> 
      <div 
        className="flex justify-center items-center relative px-5 max-sm:text-xl"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="600"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper pt-10"
        >
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Office Supply Management System
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span 
                  className='border-b-2 border-outline'
                >
                  Office Supplies Management System 
                </span>
                  , powered by PHP and MySQL, efficiently handles office supplies 
                  and tracks in-and-out transactions. 
                  Easily manage inventory, request supplies, 
                  and ensure a well-organized office environment. 
                  Simplify your office supply management with our user-friendly system.
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5">
                <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                <div><i className="fa-solid fa-arrow-right"></i> Bootstrap</div>
                <div><i className="fa-solid fa-arrow-right"></i> PHP</div>
                <div><i className="fa-solid fa-arrow-right"></i> Mysql</div>
              </div>
              <div className="flex pb-10 gap-5">
                  <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                    href="https://github.com/homersalazar/Office-Supplies-Inventory-System-php"
                    target='_blank'
                  >
                   Repo <i className="fa-brands fa-github"></i> 
                  </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/252271288-a7d4d762-ebc6-48dc-9b9f-0c9b1f9ab968.png" 
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Document Tracking System
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span 
                  className='border-b-2 border-outline'
                >
                  Document Tracking System
                </span>simplifies recording and managing document borrowing and returns. Easily track who borrowed which document and when it was returned, ensuring better organization and accountability. Stay in control of your important records with a user-friendly interface.
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5">
                <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                <div><i className="fa-solid fa-arrow-right"></i> Bootstrap</div>
                <div><i className="fa-solid fa-arrow-right"></i> PHP</div>
                <div><i className="fa-solid fa-arrow-right"></i> Mysql</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Document-Tracking-System"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/252281547-cbbdbaa9-52e2-4a4a-a236-a79fb8447159.png" 
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Global Store              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span 
                  className='border-b-2 border-outline'
                >
                  Global Store                
                </span> is an office supplies system with admin and user logins. Users request supplies, and admins approve requests. Simplify office supply management and enhance accountability with our user-friendly PHP solution.
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
              <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                <div><i className="fa-solid fa-arrow-right"></i> Bootstrap</div>
                <div><i className="fa-solid fa-arrow-right"></i> PHP</div>
                <div><i className="fa-solid fa-arrow-right"></i> Mysql</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Office-supplies-inventory-system"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="http://global-store.infinityfreeapp.com/global-store/dashboard/index.php"
                  target='_blank'
                >
                  View Demo <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/252279808-caec2cba-8c4b-4154-ad52-0849146f3191.png" 
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Spendsense              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span 
                  className='border-b-2 border-outline'
                >
                  Spendsense               
                </span> is a comprehensive and user-friendly application designed to simplify expense tracking and management. With Spendsense, you can effortlessly monitor and organize your financial transactions, helping you gain control over your expenses and make informed financial decisions.
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
                <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                <div><i className="fa-solid fa-arrow-right"></i> Laravel</div>
                <div><i className="fa-solid fa-arrow-right"></i> Mysql</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/SpendSense"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/252285957-6a5eeeb3-b799-495c-9ac7-3938cd89b637.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Skyscape              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span 
                  className='border-b-2 border-outline'
                >
                  Skyscape               
                </span> is a weather app built with PHP and the OpenWeather API, automatically detects your current location and provides you with real-time weather updates. With just a few clicks, you can access accurate weather information, ensuring you're always prepared for the day ahead. Stay informed, stay ready with our user-friendly Weather App!.
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
                <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                <div><i className="fa-solid fa-arrow-right"></i> PHP</div>
                <div><i className="fa-solid fa-arrow-right"></i> Open Weather API</div>
              </div>
              <div className="flex pb-10 gap-5">
                  <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                    href="https://github.com/homersalazar/Skyscape"
                    target='_blank'
                  >
                    Repo <i className="fa-brands fa-github"></i> 
                  </a>
                  <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                    href="https://skyscape.lovestoblog.com/"
                    target='_blank'
                  >
                    View Demo <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                  </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/110954891/252309498-36ed6230-cf17-42d0-b9ae-8542830eb841.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Foodhub              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span   
                  className='border-b-2 border-outline'
                >
                  Foodhub               
                </span> is a Recipe App, built with PHP and powered by the MealDB API. Easily explore a wide range of delicious recipes xld on ingredients, cuisine, or dietary preferences. Whether you're a cooking enthusiast or a beginner, this user-friendly app will inspire your culinary adventures and make cooking a breeze. Get ready to discover new flavors and dishes with our PHP Recipe App and the extensive MealDB dataxl!
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
              <div><i className="fa-solid fa-arrow-right"></i> HTML</div>
                  <div><i className="fa-solid fa-arrow-right"></i> CSS</div>
                  <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                  <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                  <div><i className="fa-solid fa-arrow-right"></i> PHP</div>
                  <div><i className="fa-solid fa-arrow-right"></i> MealDB API</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Foodhub"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://westering-entries.000webhostapp.com/"
                  target='_blank'
                >
                  View Demo <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/253801616-d7789f2a-3b2e-4583-bfb7-8dd51fbfa0e1.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Dad Jokes              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span   
                  className='border-b-2 border-outline'
                >
                  Dad Jokes               
                </span> is a Joke generated App, built with ReactJs and powered by the Dad jokes API. Enjoy endless groan-worthy humor at the tap of a button. React brings a smooth and interactive experience, while the API serves up fresh dad jokes for non-stop laughter. Simple, fun, and perfect for all the dad joke enthusiasts out there!
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
                  <div><i className="fa-solid fa-arrow-right"></i> React Js</div>
                  <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                  <div><i className="fa-solid fa-arrow-right"></i> API</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Dad-Jokes"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://dad-corny-jokes.netlify.app/"
                  target='_blank'
                >
                  View Demo <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/257380362-49317a4a-0170-41d1-9b16-4959409b2862.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Number Facts              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                Discover &nbsp;
                <span   
                  className='border-b-2 border-outline'
                >
                  Number facts               
                </span> with my React app and API combo! Enter any number, and be amazed by fascinating numerical tidbits. Simple, fun, and full of surprises!
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
                  <div><i className="fa-solid fa-arrow-right"></i> React Js</div>
                  <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                  <div><i className="fa-solid fa-arrow-right"></i> API</div>
                  <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Number-facts"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/256534313-313e4fa0-44cb-4e19-9736-f6de9bf12e55.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center'>
            <div className='max-sm:order-2'>
              <h1 className='text-xl lg:text-xl xl:text-2xl max-sm:text-center bg-primary rounded-lg shadow-lg p-2'>
                Bubbly Blendz              
              </h1>
              <div className='max-sm:text-xl md:text-xl lg:text-lg xl:text-xl indent-8 leading-relaxed pt-5'>
                <span   
                  className='border-b-2 border-outline'
                >
                  Bubbly Blendz               
                </span> is a Cocktail App, built with React Js and powered by The Cocktail API. This app offers a delightful array of cocktail recipes at your fingertips. Shake up your evenings with a vast selection of concoctions, and discover new favorites with ease. With Bubbly Blendz, mixing the perfect cocktail has never been more fun and effortless!"
              </div>
              <div className="grid grid-cols-2 gap-2 md:px-2 py-5"> 
                <div><i className="fa-solid fa-arrow-right"></i> React Js</div>
                  <div><i className="fa-solid fa-arrow-right"></i> JavaScript</div>
                  <div><i className="fa-solid fa-arrow-right"></i> Tailwind</div>
                  <div><i className="fa-solid fa-arrow-right"></i> Cocktail API</div>
              </div>
              <div className="flex pb-10 gap-5">
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://github.com/homersalazar/Bubbly-Blendz"
                  target='_blank'
                >
                  Repo <i className="fa-brands fa-github"></i> 
                </a>
                <a className="bg-primary px-5 py-3 rounded-xl hover:bg-transparent hover:text-outline" 
                  href="https://bubbly-blendz.netlify.app/"
                  target='_blank'
                >
                  View Demo <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                </a>
              </div>
            </div>
            <div className='max-sm:order-1'>
              <img 
                src="https://user-images.githubusercontent.com/110954891/257382897-efe38441-a71f-4622-b4e0-c409c6d367b6.png"
                alt="" 
              />
            </div>
          </SwiperSlide>
          <div className="swiper-pagination pt-2"></div>
        </Swiper>
      </div>
    </>
  )
}

export default Portfolio
