import React, {InputHTMLAttributes} from 'react';
import { Interface } from 'readline';
import './style.css';

interface BioProps extends InputHTMLAttributes<HTMLTextAreaElement>{
 label:string;
 nome: string;
}
const BioP: React.FC <BioProps> =({label, nome, ...rest})  => {
    return(
        <div className="bioprops">
        <label htmlFor={nome}>{label}</label>
        <textarea id={nome} {...rest}/>
    </div>

    )
      
}

export default BioP;