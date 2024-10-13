import React from 'react';
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// Dependencies Installed = react-datepicker
// Redux
import { setDate } from 'redux/productsSlice';
// Styled
import CalendarIcon from 'react-datepicker/dist/calendar_icon';
import { DatePickerButton, IconImg } from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  //
  const handleChange = date => {
    const formattedDate = moment(date).format('DD.MM.YYYY');
    setSelectedDate(date);
    dispatch(setDate(formattedDate));
  };
  //
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <DatePickerButton onclick={onClick} ref={ref}>
        {value}
        <IconImg src={CalendarIcon} alt="calendar icon" />
      </DatePickerButton>
    </div>
  ));
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={date => handleChange(date)}
        dateFormat="dd.MM.yyyy"
        customInput={<ExampleCustomInput />}
        maxDate={new Date()}
      />
    </div>
  );
};
