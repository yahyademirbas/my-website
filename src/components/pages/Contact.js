import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {

    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <center>
                <div className="git-head-div">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </center>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 half">
                    <p className="lead">
                        {contact.pitch}
                    </p>
                <center>
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                    {social.spotify && <a title="Visit Spotify profile" rel="noopener noreferrer" target="_blank" href={social.spotify}><i className="fab fa-spotify"></i></a>}
                    {social.youtube && <a title="Visit YouTube profile" rel="noopener noreferrer" target="_blank" href={social.youtube}><i className="fab fa-youtube"></i></a>}
                    {social.mail && <a title="Mail me" rel="noopener noreferrer" target="_blank" href={social.mail}><i className="fab fa-rocketchat"></i></a>}
                </div>
                </center>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )

}

export default Contact
