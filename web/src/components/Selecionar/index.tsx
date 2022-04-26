import React, {InputHTMLAttributes, SelectHTMLAttributes} from 'react';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
 label:string;
 nome: string;
 options: Array<{
    value: string;
    label: string;
  }>;
}

const Selec: React.FC <SelectProps> =({label, nome, options,...rest})  => {
    return(
        <div className="selectb">
        <label htmlFor={nome}>{label}</label>
        <select value="" id={nome} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
      </div>

    )
      
}

export default Selec;