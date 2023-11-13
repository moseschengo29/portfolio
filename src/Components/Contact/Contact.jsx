import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <div> 
        <div className='contact-titles'>
            <span className="contact-header">Like what you see?</span>
            <span className="contact-subheading">Get In Touch</span>
            <p>I am currently looking for new opportunities, my inbox is open incase you might need some work to be done by me. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>

        <div className='contact-body'>
                <div className='contact-info'>
                    <BsTelephone /> 
                    <span>mochengo29@gmail.com</span>
                </div>

                <div className='contact-info'>
                    <AiOutlineMail /> 
                    <span>+254 115 824 803</span>
                </div>
        </div>

        <div className='contact-socials'>
                <a
                href="https://www.instagram.com/chengoctrrl/"
                className="social-item" target="blank"
                >
                <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://twitter.com/MosesChengo" className="social-item" target="blank">
                <i className="fa-brands fa-twitter"></i>
                </a>

                <a
                href="https://www.linkedin.com/in/moses-chengo-643446234/"
                className="social-item"
                target="blank"
                >
                <i className="fa-brands fa-linkedin"></i>
                </a>

        </div>
        </div>
        <div className='contact-form'>
        <ContactForm />
        </div>
    </div>
  )
}

export default Contact