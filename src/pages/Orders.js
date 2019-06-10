import React from 'react';
import OrdersList from '../components/OrdersList';
import Textarea from '../components/Textarea';
import Total from '../components/total';
class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {total:0};
  }

  render(){
    let tot=this.state.total
    for(let i= 0;i<5;i++){
      tot += 6;
    }
    return(
      <div>
        <div className="lastOrdersList">
        <OrdersList ordersList="ordersList" p_orders="COSMOPOLITAN" counter="0" price_orders="6.00 €" ></OrdersList>
        <OrdersList ordersList="ordersList" p_orders="MANHATTAN" counter="0" price_orders="6.00 €" ></OrdersList>
        <OrdersList ordersList="ordersList" p_orders="BLOODY MARY" counter="0" price_orders="100.00 €" ></OrdersList>
        <OrdersList ordersList="ordersList" p_orders="CUBA LIBRE" counter="0" price_orders="6.00 €" ></OrdersList>
        <OrdersList ordersList="ordersList" p_orders="MOJITO" counter="0" price_orders="10.00 €" ></OrdersList>
        <OrdersList ordersList="ordersList" p_orders="NEGRONI" counter="0" price_orders="6.00 €" ></OrdersList>
        <Total total="total" p_total="TOTALE" price_total={tot}></Total>
        </div>
        <div>
        <Textarea textarea_container="textarea_container" textarea="textarea" placeholder="Richieste"/>
        </div>
      </div>

    );
  }


}
export default Orders
