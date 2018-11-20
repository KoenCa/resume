import React, { Component } from "react";

const validation = WrappedFormElement => {
  class Validation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        invalid: false
      };
    }

    checkInputValidity = ({ nativeEvent }) => {
      const formEl = nativeEvent.target;
      if (formEl.checkValidity()) {
        this.setState({ invalid: false });
      } else {
        this.setState({ invalid: true });
      }
    };

    onInvalid = () => {
      this.setState({ invalid: true });
    };

    render() {
      const { defaults } = this.props;
      const { invalid } = this.state;

      return (
        <WrappedFormElement
          invalid={invalid}
          defaults={defaults}
          onInput={this.checkInputValidity}
          onBlur={this.checkInputValidity}
          onInvalid={this.onInvalid}
        />
      );
    }
  }

  return Validation;
};

export default validation;
