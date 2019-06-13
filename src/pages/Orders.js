import React from 'react';
import OrdersList from '../components/OrdersList';
import Textarea from '../components/Textarea';
import Total from '../components/Total';
import Header from "../components/Header";
class OrdersView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total:0,
      error: null,
			isLoaded: false,
      ordini: []
    };
  }
  componentDidMount() {
    fetch("https://nodeuno.mohole.it/ordinis?_sort=prodotto:ASC")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          ordinis: result
        });
        var ordinis = this.state.ordinis;
        let tot = this.state.total;
        let lunghezza = ordinis.length
        for(let i = 0; i < lunghezza; i++){
          tot += parseFloat(ordinis[i].Prezzo) * ordinis[i].quantita;
        }
        this.setState({ordini : ordinis, tot: tot});
        console.log(ordinis);

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  onupdate(counter, order_id){
    const ordini = this.state.ordini.map(ordine => {
      if(ordine.id == order_id){
        return {
          ...ordine,
          quantita: counter
        }
      }
      return ordine
    })

    console.log(ordini);

    this.setState({
      ordini: ordini,
      tot: ordini.reduce((tot, ordine)=> parseFloat(ordine.Prezzo) * ordine.quantita + tot, 0)
    });

    console.log(ordini.reduce((tot, ordine)=> parseFloat(ordine.Prezzo) * ordine.quantita + tot, 0));
  }


  render(){


    return(
      <div>
         <Header/>
        <div className="lastOrdersList">
          {this.state.ordini.map(ordine =>
            ordine.quantita != 0 ?
           <OrdersList
           key={ordine.id}
           ordersList="ordersList"
           id_ordine={ordine.id}
           p_orders={ordine.prodotto}
           counter={ordine.quantita}
           price_orders={ordine.Prezzo}
           onupdate = {this.onupdate.bind(this)}
           ></OrdersList>
           : <div></div>
          )}
          <Total total="total" p_total="TOTALE" price_total={this.state.tot}></Total>
        </div>
        <div>
          <Textarea textarea_container="textarea_container" textarea="textarea" placeholder="Richieste"/>
        </div>
      </div>
    );
  }
}
export default OrdersView
