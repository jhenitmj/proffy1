import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../conectar/conexaoUm';

import './style.css';

export interface Prof {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface ProfProps {
  professor: Prof;
}

const ProfessorI: React.FC<ProfProps> = ({ professor }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: professor.id,
    })
  }

  return (
    <article className="profe">
      <header>
        <img src={professor.avatar} alt={professor.name} />
        <div>
          <strong>{professor.name}</strong>
          <span>{professor.subject}</span>
        </div>
      </header>

      <p>{professor.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {professor.cost}</strong>
        </p>
        <a 
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${professor.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default ProfessorI;