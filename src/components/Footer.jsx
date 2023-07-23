import LOGO from '../assets/home-logo.png'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='px-5 bg-secondary pt-12'>
            <div className='grid grid-cols-2 md:justify-items-center max-sm:grid-cols-1'>
                <div>
                    <h1 className='text-3xl font-bold'>Just say hi.</h1>
                    <p className='py-3'>I'm always open to discuss your project and talk about new things.</p>
                </div>
                <div>
                    <h1>Follow me</h1>
                    <div className='flex gap-5 text-xl'>
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
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10 pb-5">
                <img 
                    src={LOGO}
                    alt="homer logo" 
                    className='h-8'
                /> &nbsp;
                Homer Salazar &copy; {year}
            </div>
        </footer>
    )
}

export default Footer
