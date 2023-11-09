import { useState, useEffect } from 'react';
import { Day } from './Day';
import { Header } from './Header';
import { DateObj } from './types';
import './styles.css';

export const DatePicker = () => {
  const [nav, setNav] = useState<number>(0);
  const [days, setDays] = useState<Array<any>>([]);
  const [dateDisplay, setDateDisplay] = useState<string>('');

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  console.log(days);
  useEffect(() => {
    const date = new Date();

    if (nav !== 0) {
      date.setMonth(new Date().getMonth() + nav);
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(
      `${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`
    );

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArray: Array<DateObj> = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if (i > paddingDays) {
        daysArray.push({
          value: (i - paddingDays).toString(),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArray.push({
          value: 'padding',
          isCurrentDay: false,
          date: '',
        });
      }
    }

    setDays(daysArray);
  }, [nav]);

  return (
    <>
      <Header
        dateDisplay={dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
      />
      <header className="calendarHeader">
        {weekdays.map((weekday) => {
          return <div>{weekday}</div>;
        })}
      </header>
      <div className="calendarBody">
        {days.map((date, index) => {
          return <Day key={index} date={date} />;
        })}
      </div>
    </>
  );
};
