import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import logoUnivesp from '../assets/logoUnivesp.png';

const Sobre = () => {
    return (
        <div className='bg-black text-white py-32' id='sobre'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r' 
                        style={{ backgroundImage: 'linear-gradient(to right, #C8C8C8, #5DF58B)' }}>
                        Sobre Mim:
                    </h2>
                    <p className='text-lg mb-16 text-center'>
                        Estudante de Bacharelado em Tecnologia da Informação, com foco em desenvolvimento front-end, em busca de oportunidades para aplicar minhas habilidades e conhecimentos.
                    </p>
                    <h3 className='text-2xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r' 
                        style={{ backgroundImage: 'linear-gradient(to right, #C8C8C8, #5DF58B)' }}>
                        Hardskills
                    </h3>
                    <div className='flex justify-center space-x-8 mb-20'>
                        <div className='flex flex-col items-center'>
                            <FaHtml5 size={50} className='text-orange-600' />
                            <p className='mt-2'>HTML</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaCss3Alt size={50} className='text-blue-600' />
                            <p className='mt-2'>CSS</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaJsSquare size={50} className='text-yellow-500' />
                            <p className='mt-2'>JavaScript</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaReact size={50} className='text-blue-500' />
                            <p className='mt-2'>React JS</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaNodeJs size={50} className='text-green-500' />
                            <p className='mt-2'>Node.js</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r' 
                            style={{ backgroundImage: 'linear-gradient(to right, #C8C8C8, #5DF58B)' }}>
                            Bacharelado em Tecnologia da Informação
                        </p>
                        <img src={logoUnivesp} alt="Logo UNIVESP" className='w-48' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
