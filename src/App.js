import { Contacto } from './pages/landing/Contacto'
import { Portafolio } from './pages/landing/Portafolio'
import { Experiencia } from './pages/landing/Experiencia'
import { Estudios } from './pages/landing/Estudios'
import { Habilidades } from './pages/landing/Habilidades'
import { Perfil} from './pages/landing/Perfil'
import { Navbar } from './routes/Navbar'
import { Inicio } from './pages/landing/Inicio';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Inicio/>
      <Perfil/>
      <Habilidades/>
      <Estudios/>
      <Experiencia/>
      <Portafolio/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
