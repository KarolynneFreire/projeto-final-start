import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/AgendamentoConsulta.css';

const AgendamentoConsulta = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate();

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleSaveAndContinue = () => {
        console.log("Data selecionada:", selectedDate);
        console.log("Hora selecionada:", selectedTime);
        
     navigate('/compartilhar-arquivo');
    };


    const availableDates = ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    const availableTimes = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

    return (
        <div className="agendamento-consulta">
            <header>
                <h1>Olá, Carlos!</h1>
                <p>Escolha o dia e horário para sua consulta</p>
            </header>
            <section className="dados-profisisonal">
                <h2>Roberth Lins</h2>
                <p>Nutricionista Clínico - CRN: 012345 (PE)</p>
            </section>
            <section className="selecionar-data">
            <h3>Selecionar dia:</h3>
                {availableDates.map((date) => (
                    <button key={date} onClick={() => handleDateSelect(date)} className={selectedDate === date ? 'active' : ''}>{date}</button>
                ))}
            </section>
            <section className="selecionar-horario">
            <h3>Selecionar horário:</h3>
                {availableTimes.map((time) => (
                    <button key={time} onClick={() => handleTimeSelect(time)} className={selectedTime === time ? 'active' : ''}>{time}</button>
                ))}
            </section>
            <section className="botao-acao">
                <button onClick={handleSaveAndContinue} className="botao-salveContinue">
                    Salvar e continuar
                </button>
            </section>
        </div>
    );
};

export default AgendamentoConsulta;
