import { useState } from 'react';
import { Calendar } from '../index';
import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState({});
  const { isValue, setIsVisible, setIsHidden } = useBoolean();
  return (
    <>
      <input
        onFocus={setIsVisible}
        onChange={setIsHidden}
        // selectedDate={selectedDate}
      />
      <div className="dropdownContainer">{isValue && <Calendar />}</div>
    </>
  );
};
