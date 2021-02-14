import React, { Component } from "react";

import "./style.css";

class Href extends Component {
  static defaultProps = {
    target: '_blank',
    text: '',
    url: '#',
  };

  render() {
    const { text, url, target } = this.props;

    return (
      <a
        target={target}
        href={url}
      >
        {text}
      </a>
    );
  }
}

export default Href;
