import React, { useState, FormEvent } from 'react';
import HeaderT from "../../components/header";
import { useNavigate } from "react-router-dom";
import './style.css';
import InfoP from "../../components/InfoProf";
import warningIcon from '../../assets/images/icons/warning.svg'
import BioP from "../../components/Bio";
import Selec from "../../components/Selecionar";
import api from '../../conectar/conexaoUm';

function FormProf() {
  const navigate = useNavigate();
  const [name, setNome] = useState('');
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

  function setScheduleItem(position: number, field: string, value: string) {
    const updatedScheduleItems = schedule.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setSchedule(updatedScheduleItems);
  }


  function criarUser(e: FormEvent) {
    e.preventDefault();
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
    
      navigate('/');
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
              nome="nome"
              label="Nome completo"
              value={name}
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
            <Selec
              nome="subject" 
              label="Matéria"
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
            <br />
            <InfoP nome="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => { setCost(e.target.value) }} />

          </fieldset>

          <fieldset>
            <h2>Horários disponíveis <button type="button" onClick={addNSchedule}> + Novo horário </button></h2>
           
            {schedule.map((schedule, index) => {
              return (
                <div key={schedule.week_day} className="schedule-item">
              <Selec
                    nome="week_day" 
                    label="Dia da semana"
                    value={schedule.week_day}
                    onChange={e => setScheduleItem(index, 'week_day', e.target.value)}
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
                  <InfoP nome="from"
                    label="Das"
                    type="time"
                    value={schedule.from}
                    onChange={e => setScheduleItem(index, 'from', e.target.value)} />
                  <InfoP nome="to"
                    label="Até"
                    type="time"
                    value={schedule.to}
                    onChange={e => setScheduleItem(index, 'to', e.target.value)} />
                </div>

              );
            })}
          </fieldset>
        
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
        </form>
      </main>
    </div>
  )
}

export default FormProf;