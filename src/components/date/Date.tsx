import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar2Date } from 'react-icons/bs';
import './style.css';

interface DateProps {
  published: string;
}

function Date({ published }: DateProps) {
  return (
    <div className='date-container'>
      <BsCalendar2Date className='calendar-icon'/>
      <p className='date-content'>{dayjs(published).format('DD/MM/YYYY')}</p>
    </div>
  );
}

export default Date;
