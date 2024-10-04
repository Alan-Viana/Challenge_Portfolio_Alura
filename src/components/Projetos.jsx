import imagemAlura from '../assets/decodificadorAlura.png';
import imagemNetuno from '../assets/rpgNetuno.png';

const projetosData = [
    {
        id: 1,
        tecnologias: 'Html, Css, JavaScript',
        name: 'Decodificador Alura',
        image: imagemAlura,
        github: 'https://github.com/Alan-Viana/Challenge-Decodificador-de-Texto',
    },
    {
        id: 2,
        tecnologias: 'NodeJS, JavaScript',
        name: 'Rpg Netuno',
        image: imagemNetuno,
        github: 'https://github.com/Alan-Viana/RPG-Projeto-Netuno',
    },
];

const Projetos = () => {
    return (
        <div className='bg-black text-white py-40' id="projetos">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-40 text-transparent bg-clip-text bg-gradient-to-r' 
                    style={{ backgroundImage: 'linear-gradient(to right, #5DF58B, #5DF58B)' }}>
                    Meus Projetos
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center justify-center'>
                    {projetosData.map(projeto => (
                        <div key={projeto.id} className="text-center">
                            <img
                                src={projeto.image}
                                alt={projeto.name}
                                className='rounded-lg mb-4 w-full h-60 object-contain' 
                            />
                            <h3 className='text-2xl font-bold mb-2'>{projeto.name}</h3>
                            <p className='text-gray-400 mb-4'>{projeto.tecnologias}</p>
                            <a
                                href={projeto.github}
                                className='inline-block bg-[#5DF58B] text-black px-4 py-2 rounded-full'>
                                Ver no GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projetos;
