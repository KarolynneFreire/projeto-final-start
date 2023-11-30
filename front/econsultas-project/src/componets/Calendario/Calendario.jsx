import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendario/assets/css/Calendario.css';

const Calendario = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="calendario-container">
            <Calendar onChange={handleDateChange} value={date} />
        </div>
    )
}

export default Calendario