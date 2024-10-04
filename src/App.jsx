import './App.css';
import Navbar from './components/Navbar';  
import Hero from './components/Hero';      
import Sobre from './components/Sobre';     
import Projetos from './components/Projetos'; 
import Contato from './components/Contato'; 
import Footer from './components/Footer'; 
function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Sobre />
            <Projetos />
            <Contato />
            <Footer /> 
        </div>
    );
}

export default App;
