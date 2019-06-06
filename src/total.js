import React from 'react'
class Total extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

     return (
      <div className = {this.props.total}>
          <p className = "p_total" >{this.props.p_total}</p>
          <p className = "price_total" >{this.props.price_total}</p>
      </div>

    );
  }
}
export default Total
