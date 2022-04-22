import React, { useState, FormEvent } from 'react';
import HeaderT from "../../components/header";

import './style.css';
import InfoP from "../../components/InfoProf";
import warningIcon from '../../assets/images/icons/warning.svg'
import BioP from "../../components/Bio";
import Selec from "../../components/Selecionar";
import api from '../../conectar/conexaoUm';

function FormProf() {
    
  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');



    const [schedule, setSchedule] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNSchedule() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    

    function criarUser() {
    
        api.post('classes', {
          nome,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule,
        }).then(() => {
          alert('Cadastro realizado com sucesso!');
    
        }).catch(() => {
          alert('Erro no cadastro!');
        })
      }
    return (
        <div id="formProf" className="container">
            <HeaderT title="Que incrível que você quer dar aulas" sub="O primeiro passo é preencher o formulário abaixo" />
            <br />
            <main>
<form onSubmit={criarUser}>
                <fieldset>
                    <h2>Seus dados</h2>
                    <InfoP
              nome="name" 
              label="Nome completo" 
              value={nome}
              onChange={(e) => { setNome(e.target.value) }}
            />

            <InfoP
              nome="avatar" 
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />

            <InfoP 
              nome="whatsapp" 
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />

            <BioP
              nome="bio" 
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />

                </fieldset>
                <fieldset>
                    <h2>Sobre a aula</h2>
                    <Selec defaultValue="" 
                    nome="subject" 
                    label="Mátéria"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }} >
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="artes">Artes</option>
                        <option selected value="biologia">Biologia</option>
                        <option value="educaF">Educação física</option>
                        <option value="filosofia">Filosofia</option>
                        <option value="geografia">Geografia</option>
                        <option selected value="historia">História</option>
                        <option value="matematica">Matemática</option>
                    </Selec>
                    <br />
                    <InfoP nome="cost" 
                    label="Custo da sua hora por aula" 
                    value={cost}
                    onChange={(e) => { setCost(e.target.value) }}/>

                </fieldset>
               
                <fieldset>
                    <h2>Horários disponíveis <button type="button" onClick={addNSchedule}> + Novo horário </button></h2>
                    {schedule.map((schedule, indice) => {
                        return (
                            <div key={schedule.week_day} className="schedule-item">
                                <Selec defaultValue=''
                                 nome="week_day" 
                                 label="Dia da semana"
                                 >
                                    <option value='' disabled hidden>Selecione uma opção</option>
                                    <option value='0'>Segunda-feira</option>
                                    <option  value='1'>Terça-feira</option>
                                    <option value='2'>Quarta-feira</option>
                                    <option value='3'>Quinta-feira</option>
                                    <option value='4'>Sexta-feira</option>
                                    <option  value='5'>Sábado</option>
                                    <option value='6'>Domingo</option>
                                </Selec>
                                <InfoP nome="from" 
                                label="Das" 
                                type="time" 
                                value={schedule.from}/>
                                <InfoP nome="to" label="Até" type="time" />
                            </div>

                        );
                 })}
                </fieldset>
                </form>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante!
                        {' '}
                        Preencha todos os dados
                    </p>
                    <button className="submit" type="submit">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default FormProf;