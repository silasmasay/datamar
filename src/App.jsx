import Infos from './components/Infos';
import Form from './components/Form';
import About from './components/About';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <main>
      <section className="top-content">
        <div className="container">
          <div className="row">
            <Infos />
            <Form />
          </div>
        </div>
      </section>
    
      <About />
      <Footer />
    </main>
  )
}

export default App
