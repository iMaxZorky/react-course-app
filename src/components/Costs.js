import CostItem from "./CostItem";
import './Costs.css';
import Card from "./Card";

function Costs(props) {

    return (
        <Card className="costs">
            <CostItem 
                p_date={props.costs[0].date} 
                p_description={props.costs[0].description} 
                p_amount={props.costs[0].amount}>
            </CostItem>
            <CostItem 
                p_date={props.costs[1].date} 
                p_description={props.costs[1].description} 
                p_amount={props.costs[1].amount}>
            </CostItem>
            <CostItem 
                p_date={props.costs[2].date} 
                p_description={props.costs[2].description} 
                p_amount={props.costs[2].amount}
            />
        </Card>
    
    );
}
export default Costs;

