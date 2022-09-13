import{ BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './routes/Footer'
import { AppNavigate } from './routes/AppNavigate'

const App = () => {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <AppNavigate />
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
