import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-5 flex justify-center md:justify-center items-center'>
                <div className='hidden md:flex md:items-center md:justify-center md:space-x-20'>
                    <div className='ml-40'>
                        <a 
                            href="#sobre" 
                            className='hover:text-gray-400'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('sobre');
                            }}
                        >
                            Sobre Mim
                        </a>
                    </div>
                    <div className='ml-10'>
                        <a 
                            href="#projetos" 
                            className='hover:text-gray-400'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('projetos');
                            }}
                        >
                            Projetos
                        </a>
                    </div>
                    <div className='ml-10'>
                        <button 
                            onClick={() => handleScroll('contato')} 
                            className='bg-gradient-to-r from-gray-400 to-[#5DF58B] text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                            Entre em Contato
                        </button>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
                        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 left-0 right-0 flex flex-col items-center w-full bg-black mt-2 ${isMenuOpen ? 'flex' : 'hidden'} z-50`}>
                <a 
                    href="#sobre" 
                    className='hover:text-gray-400 py-2'
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll('sobre');
                    }}
                >
                    Sobre Mim
                </a>
                <a 
                    href="#projetos" 
                    className='hover:text-gray-400 py-2'
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll('projetos');
                    }}
                >
                    Projetos
                </a>
                <button 
                    onClick={() => handleScroll('contato')} 
                    className='bg-gradient-to-r from-gray-400 to-[#5DF58B] text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-2'>
                    Entre em Contato
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
