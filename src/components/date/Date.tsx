import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import serializeDateToYear from '../../helpers/serializeDateToYear';
import './style.css';

interface DateProps {
  published: string;
}

function Date({ published }: DateProps) {
  return (
    <div className='date-container'>
      <BsCalendar2Date className='calendar-icon'/>
      <p className='date-content'>{serializeDateToYear(published)}</p>
    </div>
  );
}

export default Date;
