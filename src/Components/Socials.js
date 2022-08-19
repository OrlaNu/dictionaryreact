import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Socials.css";


export default function Socials(){
return (
    <div className="Socials">
        <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer"><FaGithub className="SocialsIcon"/></a>
        <a href="mailto:orla_nugent@hotmail.co.uk" target="_blank" rel="noreferrer"><MdEmail className="SocialsIcon"/></a>
        <a href="https://www.linkedin.com/in/%C3%B3rla-nugent-123054151/" target="_blank" rel="noreferrer"><FaLinkedin className="SocialsIcon"/></a>
        <p>
            <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer"> Open-source code </a>
            {" "} by Órla Nugent
        </p>
    </div> 
);
}