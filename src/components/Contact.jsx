import "../Css/contact.css";
import '../Css/desktop/contact-d.css'
import '../Css/fonts.css'
import { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { WebContext } from './context/Context'
import { contact } from '../data/content'


function Contact() {

  const {languaje, setToggleAlert, handleToggleAlertOn, windowWidth} = useContext(WebContext)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thpkmao",
        "template_zlbti4g",
        form.current,
        "rbYsGrOBulM-gSYEL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="form-container form-container-d">
      <div className="title-container title-contact-d">
          {contact.map((e, i) => (
            <h2 key={i}>
              {languaje !== true ? e.titleEn : e.titleEs}
            </h2>
          ))}
      </div>
      <form ref={form} onSubmit={sendEmail} className='form-list form-list-d'>
        <input type="text" name="user_name" placeholder={languaje !== true ? 'Full Name' : 'Nombre y Apellido'} className='input-style input-style-d' autoComplete="off" />
        <input type="email" name="user_email" placeholder="Email" className='input-style input-style-d' autoComplete="off" />
        <input type="text" name="subject" placeholder={languaje !== true ? 'Subject' : 'Asunto'} className='input-style input-style-d' autoComplete="off" />
        <div className='message-box message-box-d' >
          <textarea name="message" placeholder={languaje !== true ? 'Message' : 'Mensaje'} />
        </div>
        <input type="submit" value={languaje !== true ? 'Send' : 'Enviar'} className='button-submit button-submit-d' onClick={windowWidth > 640 ? () =>  setToggleAlert(true) : () => handleToggleAlertOn()} />
      </form>
    </section>
  );
}

export default Contact;
