import './ExpenseLength.css'
import ExcerciseComp from './ExcerciseItem';

const ExpenseLength = (props) => {
    if (props.items.length === 0) {
        return <div className='expenses-list__fallback'>no content found</div>
    }
    return ( 
        <ul className='expenses-list'>{props.items.map((expense) => (
        <ExcerciseComp
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.expDate}
        />
    ))}</ul>
    )
};

export default ExpenseLength;