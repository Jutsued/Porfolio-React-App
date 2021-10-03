import React from "react";





function contactForm  () {
    return(<>

            

    
    
    </>)
  
}

export default function Form(){
    function InfoForm() {
        return(<>
        <h1>Send a Message</h1>
            <form>
            <div className="formBox">
                        <div className="row50">
                            <div className="inputBox">
                                <span>First Name</span>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="inputBox">
                                <span>Last Name</span>
                                <input type="text" placeholder="Smith" />
                            </div>
                        </div>
                        <div className="row50">
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="text" placeholder="Johnsmith@gmail.com " />
                            </div>
                            <div className="inputBox">
                                <span>Phone</span>
                                <input type="text" placeholder="+800 111 1111" />
                            </div>
                        </div>

                        <div className="row100">
                            <div className="inputBox">
                                <span>Message</span>
                                <textarea placeholder="Write your message here..."></textarea>
                            </div>
                        </div>

                        <div className="row100">
                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
            </form>
        </>)
    }

    function SocialContact(){
        return(<>
        <div className="contact info">
                <h3>Contact Info</h3>
                <div className="infoBox">
                    <div>
                        <span><ion-icon name="location"></ion-icon></span>
                        <p>New York, NY</p>
                    </div>
                    <div>
                        <span><ion-icon name="mail"></ion-icon></span>
                        <a href="mailto:pabloa.bonilla@outlook.com">
                            pabloa.bonilla@outlook.com
                        </a>
                    </div>
                    <div>
                        <span><ion-icon name="phone-portrait"></ion-icon></span>
                        <a href="tel:+6464190206">
                            +646-419-0206
                        </a>
                    </div>
                    {/* <!-- Social Media --> */}
                    <ul id="sci">
                        <li><a href="https://www.linkedin.com/in/pablo-bonilla-999975190/" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-linkedin" id="outterLogo"></ion-icon></a></li>
                        <li><a href="https://github.com/Jutsued" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github" id="outterLogo"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
        </>)
    }

    function Map(){
        return(<>
        <div className="contact map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8166799353635!2d-73.95224468430285!3d40.810022039549246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f66d3282a545%3A0x1ccd9839e39cdc2d!2sApollo%20Theater!5e0!3m2!1sen!2sus!4v1632784005221!5m2!1sen!2sus" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </>)
    }



    return(<>
    <div className="contactUs">
        <div className="title">
            <h2>Get in Touch</h2>
        </div>
    
    <div className="box">

    <div className="contact form">

    {InfoForm()}
    </div>
    {SocialContact()}
    {Map()}
    
    </div>
    </div>
    </>)
}