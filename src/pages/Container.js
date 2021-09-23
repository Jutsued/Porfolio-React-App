import React from "react";
import github from './github.svg';
import phone from './smartphone.svg';
import email from './email.svg';
import linkedin from './linkedin.svg';



export default function Container() {
    

    return (<>
     
    <footer>
      <div className="contact" id="ct">
        <h4>Get in contact with me</h4>
      </div>
      <div className="contact-container">
        <ul>
        <li>
          <a href="tel:%6464190206"> 
              <img src={phone} alt="phone" className="contactLogos"/> 
              <span>(646)-419-0206</span> 
          </a>
        </li>
        <li>
          <a href="mailto:%pabloa.bonilla@outlook.com"> 
              <img src={email} alt="email" className="contactLogos"/> 
              <span>pabloa.bonilla@outlook.com</span> 
          </a>
        </li>
        <li>
          <a href="https://github.com/Jutsued" target="_blank" rel="noreferrer"> 
              <img src={github} alt="github" className="contactLogos"/> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pablo-bonilla-999975190/" target="_blank" rel="noreferrer"> 
              <img src={linkedin} alt="linkin" className="contactLogos"/> 
          </a>
        </li>
        </ul>
      </div>
      <div className="form">
        <form
        action="mailto:pabloa.bonilla@outlook.com"
        encType="multipart/form-data"
        name="EmailForm"
        >
          <input type="text" className="input-field" placeholder="Full Name"/>
          <input type="text/number" className="input-field" placeholder="Email"/>
          <input type="text/number" className="input-field" placeholder="Phone"/>
          <input type="text/number" className="input-field" placeholder="Subject"/>
          <textarea name="" id="" className="input-field" placeholder="Your Message" />
          <button className="btn">Submit</button>
        </form>
      </div>

    </footer>      
        </>
    )
}