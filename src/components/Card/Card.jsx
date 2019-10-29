import React from "react";
import PropTypes from "prop-types";
import BSCard from "react-bootstrap/Card";

import "./Card.scss";

const Card = ({ title, content, dropdown, icon, ...props }) => {
  return (
    <BSCard {...props}>
      <div className="cardIconContainer">{icon}</div>
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text as={"div"}>{content}</BSCard.Text>
      </BSCard.Body>
      
      {dropdown ? <div className="cardActions">{dropdown}</div> : null}
    </BSCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  dropdown: PropTypes.node,
  icon: PropTypes.node
};

Card.defaultProps = {};

export default Card;
