import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './style.css';

interface HeaderProps {
    title: string;
    sub?:string;
}
const HeaderT: React.FC<HeaderProps> = (props) => {
    return (
        <header className="header-list">
            <div className="top-container">
                <a href="/">
                    <img src={backIcon} alt="Voltar ao menu inicial" />
                </a>
                <img src={logoImg} alt="Proffy logo" className="logoimg" />

            </div>

            <div className="h3">
                <h3>{props.title}</h3>
                {props.sub ? <p className="subTititulo">{props.sub}</p> : null}
            </div>
        
            
        </header>
    )
}

export default HeaderT;