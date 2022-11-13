import './CostItem.css';
import CostDate from './CostDate';
import Card from './Card'

function CostItem(props) {
    
    return (
    <Card className='cost-item'>
        <CostDate pi_date={props.p_date} />
        <div className='cost-item__description'>
            <h2>{props.p_description}</h2>
            <div className='cost-item__price'>${props.p_amount}</div>
        </div>
    </Card>);
}

export default CostItem;