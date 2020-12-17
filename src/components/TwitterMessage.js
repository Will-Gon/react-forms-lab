import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { 
      value: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" name="message" id="message" />
        <p>{this.props.maxChars - this.state.value.length} characters remaining!</p>
      </div>
    );
  }
}

export default TwitterMessage;
