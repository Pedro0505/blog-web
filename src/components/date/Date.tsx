import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar2Date } from 'react-icons/bs';

interface DateProps {
  published: string;
}

function Date({ published }: DateProps) {
  return (
    <div>
      <BsCalendar2Date />
      <p>{dayjs(published).format('DD/MM/YYYY')}</p>
    </div>
  );
}

export default Date;
