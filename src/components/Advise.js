import React from 'react'
import { ReactComponent as Marker } from '../img/marker.svg';
class Advise extends React.Component {
  render() {
    return (
      <div className = {this.props.adviseClass}>
        <Marker className ="marker"/>
        <div className ="title_p_container">
          <h2 className = "title_advise" > {this.props.title_advise} </h2>
          <p className = "p_advise" >{this.props.p_advise}</p>
        </div>
      </div>
    );
  }
}
export default Advise
