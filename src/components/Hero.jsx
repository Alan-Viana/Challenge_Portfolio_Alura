import HeroImage from '../../src/assets/alan.png';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-12 hero relative'>
            <img 
                src={HeroImage} 
                alt="Foto de Alan Viana, Desenvolvedor Front-end"
                className='mx-auto mb-16 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' 
            />
            <h1 className='text-4xl font-bold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r' 
                    style={{ backgroundImage: 'linear-gradient(to right, #C8C8C8, #5DF58B)' }}>
                    Alan Viana
                </span>
                , Desenvolvedor Front-end
            </h1>
        </div>
    );
}

export default Hero;
