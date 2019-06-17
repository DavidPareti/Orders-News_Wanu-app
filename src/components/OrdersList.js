import React from 'react';
import axios from 'axios';
class OrdersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counterOrders: 0,
      id_ordine: this.props.id_ordine,
      quantita: this.props.counter
    }
  }

  lessOrders(){
    let counterOrder2 = this.state.counterOrders
    this.props.onupdate(this.state.quantita - 1, this.props.id_ordine)
    this.setState({
      counterOrders : counterOrder2,
      quantita: this.state.quantita - 1
    })


    let counterOrder = this.state.counterOrders
    this.setState({
      counterOrders : counterOrder
    })
    var bodyParameters = {
      quantita: this.state.quantita - 1
    }
    axios.put(
      'https://server'+this.state.id_ordine,
      bodyParameters
    ).then((response) => {
          this.setState({
              error:false,
              message:"Ordine inviato"
          });
          this.setState({
            count: this.state.count + 1,
            clicked: true
          })
          setTimeout(()=>{
            this.setState({clicked: 'false'});
            document.body.classList.add('cart_full')
          }, 900)
          var cart = {
            cartState: true
          }
          localStorage.setItem('cart', JSON.stringify(cart));
        })
        .catch((error) => {
          this.setState({
              error:true,
              message:"Ops c'è stato un piccolo problema. Riprovare."
          });
        });
  }

  addOrders(){
    let counterOrder = this.state.counterOrders
    this.props.onupdate(this.state.quantita +1, this.props.id_ordine)
    this.setState({
      counterOrders : counterOrder,
      quantita: this.state.quantita +1
    })

    var bodyParameters = {
      quantita: this.state.quantita +1
    }

    axios.put(
      'https://server'+this.state.id_ordine,
      bodyParameters
    ).then((response) => {
          this.setState({
              error:false,
              message:"Ordine inviato"
          });
          this.setState({
            count: this.state.count + 1,
            clicked: true
          })
          setTimeout(()=>{
            this.setState({clicked: 'false'});
            document.body.classList.add('cart_full')
          }, 900)
          var cart = {
            cartState: true
          }
          localStorage.setItem('cart', JSON.stringify(cart));
        })
        .catch((error) => {
          this.setState({
              error:true,
              message:"Ops c'è stato un piccolo problema. Riprovare."
          });
        });
  }
  render() {
     let counter = parseFloat(this.state.quantita)
     counter=counter+this.state.counterOrders;
     if(counter <= 0){
       counter = 0;
     }

     let price = parseFloat(this.props.price_orders);
     price = counter * price;

     return (
       counter != 0 ?
      <div className = {this.props.ordersList}>
          <p className = "p_orders" >{this.props.p_orders}</p>
          <div className = "counter_container">
            <button className = "button_orders" type="button" onClick={this.lessOrders.bind(this)}>-</button>
            <p className = "counter" >{counter}</p>
            <button className = "button_orders" type="button" onClick={this.addOrders.bind(this)}>+</button>
          </div>
          <p className = "price_orders" >{price} €</p>
      </div>
      : null
    );
  }
}
export default OrdersList
