import React, { useState, FormEvent } from "react";
import HeaderT from "../../components/header";
import InfoP from "../../components/InfoProf";
import Selec from "../../components/Selecionar";
import api from "../../conectar/conexaoUm";
import './style.css';
import ProfessorI, { Prof } from "../../components/Professor";

function ListProfe() {
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [prof, setProf] = useState([]);

    async function proProf(e: FormEvent) {  
        e.preventDefault();

        const check = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        });
         setProf(check.data);
          
    }
    return (

        <div id="list-profe" className="container">
            <HeaderT title="Estes são os professores disponíveis">
                <form id="buscarProf" onSubmit={proProf}>
                    <Selec
                        nome="subject"
                        label="Mátéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Selec
                        nome="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <InfoP type="time"
                        nome="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value)  }} />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </HeaderT>
            <main>
                {prof.map((prof:Prof) =>{
                   return <ProfessorI  key ={prof.id} professor={prof}/>
                })}
            </main>

        </div>
    )

}

export default ListProfe;