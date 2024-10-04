const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-black text-white py-4 text-center'>
            <p className='text-lg'>Desenvolvido por Alan Viana de Sousa</p>
            <p className='text-sm'>{currentYear}</p>
        </footer>
    );
}

export default Footer;
