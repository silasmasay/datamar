import Header from './components/Header';
import Infos from './components/Infos';
import Form from './components/Form';
import About from './components/About';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <main>
      <Header>
        <Infos />
        <Form />
      </Header>
    
      <About />

      <Footer />
    </main>
  )
}

export default App
