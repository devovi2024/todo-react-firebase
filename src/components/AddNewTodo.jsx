

import React, { useState } from 'react';
import Modal from './Modal';
import { Bell, Calendar, Clock, Palette, X } from 'react-bootstrap-icons';
import '../style.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(null); // 
  const [time, setTime] = useState(null); 

  const closeModal = () => setShowModal(false);

  return (
    <div className="AddNewTodo">
      <button onClick={() => setShowModal(true)} className="btn">
        + New ToDo
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form>
            <div className="text">
              <h3>Add new Todo</h3>
              <input
                type="text"
                placeholder="To Do..."
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="remind">
              <Bell size={24} color="blue" />
              <p>Remind me!</p>
            </div>

            <div className="pick-day">
              <div className="title">
                <Calendar />
                <p>Choose a day</p>
              </div>
              <DatePicker
                value={day}
                onChange={(newValue) => setDay(newValue)}
               
              />
            </div>

            <div className="pick-time">
              <Clock />
              <p>Choose a time</p>
              <TimePicker
                value={time}
                onChange={(newTime) => setTime(newTime)}
              
              />
            </div>

            <div className="pick-project">
              <Palette />
              <p>Choose a project</p>
            </div>

            <div className="Projects">
              <div className="project-active">Personal</div>
              <div className="project">Work</div>
            </div>

            <div className="cancel" onClick={closeModal}>
              <X size={24} />
            </div>

            <div className="confirm">
              <button type="submit">Add TODO</button>
            </div>
            <button onClick={closeModal} className="btn-close">
              Close
            </button>
          </form>
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
