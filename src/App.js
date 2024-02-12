import React from 'react';
import Expensive from './component/Expensive';
function App() {
  const expense=[
    { title: "Household Expense", amount: 25000, date: new Date(2023, 4, 27) },
    { title: "Travel Expense", amount: 1300, date: new Date(2023, 5, 28) },
    { title: "Education fees", amount: 5000, date: new Date(2023, 6, 29) },
 
  ];
  return (
    <div>
  <h1>HELLO WELLCOME TO REACT </h1>
  <Expensive
    date={expense[0].date}   
    type={expense[0].title}
    cost={expense[0].amount}
 > </Expensive>
  <Expensive
    date={expense[1].date}
    type={expense[1].title}
    cost={expense[1].amount}
 > </Expensive>
 <Expensive
    date={expense[2].date}
    type={expense[2].title}
    cost={expense[2].am}
 > </Expensive>
  </div>
  );
}

export default App;
