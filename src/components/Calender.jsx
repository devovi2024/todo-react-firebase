import React from 'react';
import { Calendar2Date, CaretUp } from 'react-bootstrap-icons';
import { calenderItems } from '../constant/index';
import '../style.css';

const Calender = () => {
  // console.log(item, index)
  return (
    <div className="calender-container">
      <div className="sidebar">
        <div className="header">
          <div className="title">
            <Calendar2Date className="icon" />
            <p>Calendar</p>
          </div>

          <div className="btns">
            <span>
              <CaretUp className="arrow" />
            </span>
          </div>
        </div>


    {/* Array element from Item Okay  */}
        <div className="items">
          {calenderItems.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
