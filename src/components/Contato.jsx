import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contato = () => {
    return (
        <div className='bg-black text-white py-40' id='contato'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-[#5DF58B] mb-12 text-center'>
                    Contato
                </h2>
                
                <div className='flex flex-col items-center justify-center'>
                    <div className='md:w-1/2 text-center'>
                        <h3 className='text-2xl mb-4'>Vamos conversar</h3>
                        <p className='text-lg mb-16'>Estou sempre aberto a novas oportunidades e colaborações!</p>

                        <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-12 md:justify-center'>
                            <div className='flex items-center'>
                                <FaEnvelope className='text-[#5DF58B] text-4xl' />
                                <a href='mailto:alanviana0707@gmail.com' className='text-white hover:underline ml-2'>
                                    alanviana0707@gmail.com
                                </a>
                            </div>
                            <div className='flex items-center'>
                                <FaPhone className='text-[#5DF58B] text-4xl' />
                                <span className='text-white ml-2'>(11)988295508</span>
                            </div>
                            <div className='flex items-center'>
                                <FaMapMarkedAlt className='text-[#5DF58B] text-4xl' />
                                <span className='text-white ml-2 whitespace-nowrap'>São Paulo, SP, Brasil</span>
                            </div>
                            <div className='flex items-center'>
                                <FaGithub className='text-[#5DF58B] text-4xl' />
                                <a href='https://github.com/Alan-Viana' target='_blank' rel='noopener noreferrer' className='text-white hover:underline ml-2'>
                                    GitHub
                                </a>
                            </div>
                            <div className='flex items-center'>
                                <FaLinkedin className='text-[#5DF58B] text-4xl' />
                                <a href='https://www.linkedin.com/in/alan-viana7/' target='_blank' rel='noopener noreferrer' className='text-white hover:underline ml-2'>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 mt-10 md:mt-0'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
