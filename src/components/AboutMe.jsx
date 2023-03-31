import { aboutMe } from '../data/content'
import { useContext } from 'react'
import { WebContext } from '../components/context/Context'
import '../Css/aboutMe.css'
import '../Css/desktop/about-me-d.css'
import '../Css/fonts.css'
import { skills, skilltitle } from '../data/content'

function AboutMe() {

  const {languaje} = useContext(WebContext)

  return (
    <section className='about-me about-me-d'>
      <div className='about-me-container-d'>
        {aboutMe.map((e) => (
          <div className='about-me-container' key={e.id}>
            <div className='title title-d'> 
              <h2>
                {languaje !== true ? e.entitle : e.estitle}
              </h2>
            </div>
            <div className='content content-d'>
              <p>
                {languaje !== true ? e.enp : e.esp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='skills-container-d'>
        <div className='skills-title skills-title-d'>
          {skilltitle.map((e, i) => (
            <h2 key={i}>
              {languaje !== true ? e.entitle : e.estitle}
            </h2>
          ))}
        </div>
        <div className='skills-container skills-icons-d-container'>
          {skills.map((e, i) => (
            <div key={e.id} className='skill-box skills-box-d'>
              <img src={e.img} alt={`skill ${i}`} className='skills skills-d' title={e.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe