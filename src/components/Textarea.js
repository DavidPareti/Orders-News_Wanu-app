import React from 'react'
import ButtonCS from './ButtonCS'
class Textarea extends React.Component {
  render() {
    return (
      <div className={this.props.textarea_container}>
        <textarea className={this.props.textarea} placeholder={this.props.placeholder}></textarea>
        <ButtonCS buttoncsClass="buttoncs" styleClass="buttons" styleClass2="buttonc"/>
      </div>
    );
  }
}
export default Textarea
