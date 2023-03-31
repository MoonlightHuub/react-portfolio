import { AboutMe, Contact, Footer, Header, MyProjects, Presentation } from './components/index'
import './normalize.css'
import './App.css'
import './Css/alert.css'
import './Css/desktop/alert-d.css'
import './Css/fonts.css'
import {WebContext} from './components/context/Context'
import { useContext } from 'react'


function App() {

  const {toggleAlert, handleToggleAlertOff, languaje, windowWidth, setToggleAlert} = useContext(WebContext)

  return (
    <main className='App'>
      <div className={`${toggleAlert !== true ? 'alert-container-off' : 'alert-container-active'} ${toggleAlert !== true ? 'alert-container-off-d' : 'alert-container-active-d'}`}>
        <div className="alert alert-d">
          <div className='alert-content alert-content-d'>
            <h2>
              {languaje !== true ? 'Message Sent!' : '¡Mensaje Enviado!'}
            </h2>
            <p>
              {languaje !== true ? 'Thank You! I will reply as soon as possible' : 'Gracias! Repondere en la brevedad'}
            </p>
          </div>
          <div className='alert-btn alert-btn-d'>
            <button
              onClick={windowWidth > 640 ? () => setToggleAlert(false) : () => handleToggleAlertOff()}
            >
              {languaje !== true ? 'Accept' : 'Aceptar'}
            </button>
          </div>
        </div>
      </div>
      <header className='head-style'>
        <Header />
      </header>
      <div className='placeholder' id='home'/>
      <Presentation />
      <div className='placeholder' id='projects'/>
      <MyProjects />
      <div className='placeholder' id='aboutMe' />
      <AboutMe />
      <div className='placeholder' id='contact' />
      <Contact />
      <Footer />
    </main>
  )
}

export default App