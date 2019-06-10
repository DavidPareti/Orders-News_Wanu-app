import React from 'react'
class ButtonCS extends React.Component {
  constructor(props){
    super(props)
    this.state = { press: 'null'}
    this.state = { press2: 'null'}
    this.ontouchstart = this.ontouchstart.bind(this);
    this.ontouchend = this.ontouchend.bind(this);
    this.ontouchstart2 = this.ontouchstart2.bind(this);
    this.ontouchend2 = this.ontouchend2.bind(this);
  }
  ontouchstart(){
    this.setState({press: 'true'})
  }
  ontouchend(){
    this.setState({press: 'false'})
    setTimeout(()=>{this.setState({press: 'null'})}, 460)
  }
  ontouchstart2(){
    this.setState({press2: 'true'})
  }
  ontouchend2(){
    this.setState({press2: 'false'})
    setTimeout(()=>{this.setState({press2: 'null'})}, 460)
  }
  render() {
    let classes = this.props.styleClass;
    if (this.state.press =='true'){
      classes += ' is-pressed';
    }else if (this.state.press == 'false'){
      classes += ' is-relased';
    }else {
      classes += '';
    }

    let classes2 = this.props.styleClass2;
    if (this.state.press2 =='true'){
      classes2 += ' is-pressed';
    }else if (this.state.press2 == 'false'){
      classes2 += ' is-relased';
    }else {
      classes2+= '';
    }

    return (
      <div className={this.props.buttoncsClass}>
        <a className={classes} onTouchStart={this.ontouchstart}
        onTouchEnd={this.ontouchend}> Invia</a>
        <a className={classes2} onTouchStart={this.ontouchstart2}
        onTouchEnd={this.ontouchend2}> Annulla </a>
      </div>
    );
  }
}
export default ButtonCS
