import React from "react";
import { connect } from "react-redux";
import { filter } from "../actions";

let Footer = ({ dispatch }) => {
  return (
    <div>
      <button
        onClick={() => {
          dispatch(filter("SET_VISIBILITY_FILTER", "SHOW_ALL"));
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(filter("SET_VISIBILITY_FILTER", "SHOW_ACTIVE"));
        }}
      >
        Undone
      </button>
      <button
        onClick={() => {
          dispatch(filter("SET_VISIBILITY_FILTER", "SHOW_COMPLETED"));
        }}
      >
        Done
      </button>
    </div>
  );
};

Footer = connect()(Footer);

export default Footer;
