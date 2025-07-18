import { Link } from 'react-router-dom';
import errorImg from '../assets/error_404.gif'
const ErrorPage = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:flex-row-reverse flex-col-reverse lg:gap-12">
                    <div className="w-full lg:w-1/2">
                        <p className="text-sm font-medium text-primay">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <Link to={-1} className="text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                                <button className='flex items-center justify-center px-5 py-2 gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                        <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                                    <span>Go back</span>
                                </button>
                            </Link>

                            <Link to={'/'} className="px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primay rounded-lg shrink-0 sm:w-auto hover:bg-cyan-600">
                                <button>
                                    Take me home
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img className="w-full max-w-lg lg:mx-auto" src={errorImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;