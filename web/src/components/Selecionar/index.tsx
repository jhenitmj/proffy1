import React, {InputHTMLAttributes, SelectHTMLAttributes} from 'react';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
 label:string;
 nome: string;
}
const Selec: React.FC <SelectProps> =({label, nome, ...rest})  => {
    return(
        <div className="selectb">
        <label htmlFor={nome}>{label}</label>
        <select id={nome} {...rest}/>
    </div>

    )
      
}

export default Selec;