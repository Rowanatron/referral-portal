import React from "react";
import "./statusStyle.css";

class Status extends React.Component {
  render() {
    return (
      <span
        className={`status ${ this.props.children!=null && (this.props.children.includes("Rejected") || this.props.children.includes("decline")) &&
          "rejected"} ${this.props.children!=null && this.props.children.includes("Joiner") &&
          "accepted"}`}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Status;
