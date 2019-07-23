import React from "react";
import PropTypes from "prop-types";
import BSCard from "react-bootstrap/Card";

import "./Card.scss";

const Card = ({ title, content, dropdown, icon, ...props }) => {
  return (
    <BSCard>
      <div className="cardIconContainer">{icon}</div>
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text>{content}</BSCard.Text>
      </BSCard.Body>
      <div className="cardActions">{dropdown}</div>
    </BSCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  dropdown: PropTypes.node,
  icon: PropTypes.node
};

Card.defaultProps = {};

export default Card;