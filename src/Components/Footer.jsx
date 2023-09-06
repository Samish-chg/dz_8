import React from 'react';
import "./footer.css"
import logo from "../image/insta.png"
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer__block">
                    <p>Наши социальные сети</p>
                    <p> Наши контакты</p>
                </div>
                <div className="footer__block">
                    <p><a href="https://www.instagram.com/"><img src={logo} id="logo" alt=""/></a></p>
                    <p>+996999596987</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;