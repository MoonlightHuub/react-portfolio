import '../Css/projects.css'
import '../Css/desktop/projects-d.css'
import '../Css/fonts.css'
import { projectTitle, buttons } from '../data/content'
import { useContext,  useState } from 'react'
import { WebContext } from './context/Context'
import {cards} from '../data/projects'

function MyProjects() {

  {/* Usando principio de inmutabilidad / Usign immutability principle */}

  const {languaje} = useContext(WebContext)

  const [style, setStyle] = useState(
    cards.map((card) => ({
      id: card.id,
      active: false
    }))
  )

  function handleClickStyle(id){
    const newStyleOn = style.map((style) => {
      return style.id === id ? {...style, active: true} : style
    })
    setStyle(newStyleOn)
  }

  function handleClickStyleOff(id){
    const newStyleOff = style.map((style) => {
      return style.id === id ? {...style, active: false} : style
    })
    setStyle(newStyleOff)
  }

  return (
    <section className='projects-container'>
      <div className='projects-title'>
        {projectTitle.map((item) => (
          <h2 key={item.id}>  
            {languaje !== true ? item.entext : item.estext}
          </h2>
        ))}
      </div>
      <div className='card-container cards-container-d'>
        {cards.map((card, i) => (
          <div className='card card-d' key={card.id}>
            <div 
              className='img-container img-container-d' 
              onClick={() => handleClickStyle(card.id)}
            >
              <img src={card.img} alt={`card ${i}`} className='image-card image-card-d' />
            </div>
            <div className='overflow'>
              <div 
                className={`${style.find((styles) => styles.id === card.id).active ? 'description-on' : 'description-off'} description-d`}
                onClick={() => handleClickStyleOff(card.id)}
              >
                <h3 className='project-title project-title-d'>
                  {card.title}
                </h3>
                <div className='project-p project-p-d'>
                  <p>
                    {languaje !== true ? card.endesc : card.esdesc}
                  </p>
                </div>
                <div
                  className='buttons buttons-d'
                >
                  <button>
                    <a href={card.page} target='_blank'>
                      {languaje !== true ? buttons.enbtnp : buttons.esbtnp}
                    </a>
                  </button>
                  <button>
                    <a href={card.code} target='_blank'>
                    {languaje !== true ? buttons.enbtnc : buttons.esbtnc}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProjects