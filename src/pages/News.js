import React from 'react';
import Advise from '../components/Advise';
import Header from '../components/Header';
class NewsView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        promozioni: []
      };

    }
    componentDidMount() {
     fetch("https://nodeuno.mohole.it/promozionis")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             promozionis: result
           });
           var promozionis = this.state.promozionis;

           this.setState({promozioni : promozionis});

         },
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )

     }
  render(){
    return(
      <div>
        <Header/>
        {this.state.promozioni.map(promozione => <Advise  key = {promozione.id} adviseClass="advise" title_advise={promozione.nome} p_advise={promozione.descrizione}/>)}
      </div>
    );
  }
}
export default NewsView
