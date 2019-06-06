import React from 'react'

class AnimationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { press: 'null' }
    this.ontouchstart = this.ontouchstart.bind(this);
    this.ontouchend = this.ontouchend.bind(this);
  }
  ontouchstart(){
    this.setState({press: 'true'})
  }
  ontouchend(){
    this.setState({press: 'false'})
    setTimeout(()=>{this.setState({press: 'null'})}, 460)
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
  return(
      <a
        className={classes}
        onTouchStart={this.ontouchstart}
        onTouchEnd={this.ontouchend}
      >
        {this.props.children}
      </a>
    );
  }
}

export default AnimationButton; 