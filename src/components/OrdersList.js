import React from 'react'
class OrdersList extends React.Component {
  constructor(props){
    super(props);
    this.state = { counterOrders: 1}
  }
  lessOrders(){
    let counterOrder = this.state.counterOrders - 1
    this.setState({
      counterOrders : counterOrder
    })
  }

  addOrders(){
    let counterOrder = this.state.counterOrders + 1
    this.setState({
      counterOrders : counterOrder
    })
  }

  render() {
     let counter = parseInt(this.props.counter)
     counter=counter+this.state.counterOrders;
     if(counter <= 0){
       counter = 0;
       this.state.counterOrders = 0
     }

     return (
      <div className = {this.props.ordersList}>
          <p className = "p_orders" >{this.props.p_orders}</p>
          <div className = "counter_container">
            <button className = "button_orders" type="button" onClick={this.lessOrders.bind(this)}>-</button>
            <p className = "counter" >{counter}</p>
            <button className = "button_orders" type="button" onClick={this.addOrders.bind(this)}>+</button>
          </div>
          <p className = "price_orders" >{this.props.price_orders}</p>
      </div>

    );
  }
}
export default OrdersList
