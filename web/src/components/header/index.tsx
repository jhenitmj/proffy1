import React, { ReactNode } from "react";
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './style.css';

interface HeaderProps {
    title: string;
    sub?:string;
    children?:ReactNode;
}
const HeaderT: React.FC<HeaderProps> = (props) => {
    return (
        <header className="header-list">
            <div className="top-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar ao menu inicial" />
                </Link>
                <img src={logoImg} alt="Proffy logo" className="logoimg" />

            </div>

            <div className="h3">
                <strong>{props.title}</strong>
                {props.sub ? <p className="subTititulo">{props.sub}</p> : null}    

                {props.children}
      </div>
    
        </header>
    )
}

export default HeaderT;