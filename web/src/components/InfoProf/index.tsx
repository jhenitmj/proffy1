import React, {InputHTMLAttributes} from 'react';
import './style.css';

interface InfoProps extends InputHTMLAttributes<HTMLInputElement>{
 label:string;
 nome: string;
}
const InfoP: React.FC <InfoProps> =({label, nome, ...rest})  => {
    return(
        <div className="inputb">
        <label htmlFor={nome}>{label}</label>
        <input id={nome} {...rest}/>
    </div>

    )
      
}

export default InfoP;