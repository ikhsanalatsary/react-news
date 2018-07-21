import React from "react";

class P extends React.Component {
  render() {
    return <p style={{ fontSize: 24 }}>{this.props.children}</p>;
  }
}

export default P;
