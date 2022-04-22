import React, { useState, FormEvent } from "react";
import HeaderT from "../../components/header";
import InfoP from "../../components/InfoProf";
import Selec from "../../components/Selecionar";
import api from "../../conectar/conexaoUm";
import './style.css';
import ProfessorI, {Prof} from "../../components/Professor";

function ListProfe() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [prof, setProfs] = useState([]);

    async function proProf(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        proProf(response.data);
    }
    return (

        <div id="list-profe" className="container">
            <HeaderT title="Estes são os professores disponíveis" />
            <form className="buscarProf">
                <Selec defaultValue=''
                    nome="subject"
                    label="Mátéria"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}>
                    <option value="" disabled hidden>Selecione uma opção</option>
                    <option value="artes">Artes</option>
                    <option selected value="biologia">Biologia</option>
                    <option value="educaF">Educação física</option>
                    <option value="filosofia">Filosofia</option>
                    <option value="geografia">Geografia</option>
                    <option selected value="historia">História</option>
                    <option value="matematica">Matemática</option>
                </Selec>
                <Selec defaultValue='' 
                nome="week_day" 
                label="Dia da semana"
                value={week_day}
                onChange={(e) => { setWeekDay(e.target.value) }}
                >
                    <option value='' disabled hidden>Selecione uma opção</option>
                    <option value='0'>Segunda-feira</option>
                    <option selected value='1'>Terça-feira</option>
                    <option value='2'>Quarta-feira</option>
                    <option value='3'>Quinta-feira</option>
                    <option value='4'>Sexta-feira</option>
                    <option selected value='5'>Sábado</option>
                    <option value='6'>Domingo</option>
                </Selec>
                <InfoP type="time" 
                nome="time" 
                label="Hora"
                   value={time}
                    onChange={(e) => { setTime(e.target.value) }} />
                <button type="submit">
                    Buscar
                </button>
            </form>
            <main>
            {prof.map((professor: Prof) => {
          return <ProfessorI key={professor.id} professor={professor}/>;
        })}   
            </main>

        </div>
    )

}

export default ListProfe;