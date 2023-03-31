import '../Css/presentation.css'
import '../Css/fonts.css'
import { calltoaction, presentation } from '../data/content'
import { useContext } from 'react'
import { WebContext } from './context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Presentation() {

  const {languaje} = useContext(WebContext)

  return (
    <section className='pres-container'>
      {
        presentation.map((item, i) => (
          <div key={item.id}>
            <h2 className={`title-style`}>
              {languaje !== true ? item.entext : item.estext}
            </h2>
            <h2 className={`subtitle-style`}>
              {languaje !== true ? item.ensubtext : item.essubtext}
            </h2>
          </div>
        ))
      }
      <div className='container-btn-pulse'>
        <div className='call-to-action'>
          <h3>
            {calltoaction.map((item) => (
              languaje !== true ? item.encta : item.escta
            ))}
          </h3>
        </div>
        <div className='pulse-button'>
            <span className='span-1'></span>
            <span className='span-2' ></span>
            <span className='span-3' ></span>
            <a href="#projects"><FontAwesomeIcon className='arrow-down' icon={faChevronDown} /></a>
        </div>
      </div>
    </section>
  )
}

export default Presentation