import { useState, useEffect } from 'react';
import Title from './components/Title';
import './App.css';
import BudgetChart from './components/BudgetChart';

function App() {
  const [month, setMonth] = useState('');

  function getMonth() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const current = new Date().getMonth();
    setMonth(months[current]);
  }

  const budgetDetails = [
    { name: 'Montreal', progress: 7000, total: 10000, imgSrc: 'Montreal.png' },
    { name: 'Wild Life', progress: 2500, total: 5000, imgSrc: 'wildLife.png' },
  ];

  useEffect(() => {
    getMonth();
  }, []);
  
  return (
    <>
      <Title month={month} />
      {budgetDetails.map((item, index) => {
        return (
          <BudgetChart
            key={index}
            progress={item.progress}
            total={item.total}
            budgetName={item.name}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </>
  );
}

export default App;
