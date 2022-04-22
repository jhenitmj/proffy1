import React, { PureComponent, useState, useEffect } from 'react';
import api from '../../conectar/conexaoUm';
import{} from "react-router-dom"
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './style.css';

function Open() {
    const [totalC, setTotalC] = useState(0);

    useEffect(() => {
      api.get('connections').then(response => {
        const { total } = response.data; 
  
        setTotalC(total);
      })
    }, []);
    return (
    <div id="page-open" className="container-page" >
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="logo"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>
            <img src={landingImg} alt=" Alunos estudando online" className="hero-image"/>
            <div className="btn-container">
                <a href="#" className="alunoBtn">
                    <img src={studyIcon} alt="Aluno"/>
                    Estudar
                </a>
                <a href="#" className="professorBtn">
                    <img src={giveClassesIcon} alt="Dar aulas"/>
                    Dar aulas
                </a>
            </div>
            <h3 className="totalConec">
                Total de {totalC} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
            </h3>
        </div>



    </div>
)
}

export default Open;
