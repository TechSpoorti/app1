import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function Expensive(data) {
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date}/>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">₹{data.amount}</div>
      </div>
    </div>
  );
}

export default Expensive;