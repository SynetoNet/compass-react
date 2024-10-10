import React from "react";
import PropTypes from "prop-types";
import BSCard from "react-bootstrap/Card";

import "./Card.scss";

const Card = ({ title, content, dropdown, icon, ...props }) => {
  return (
    <BSCard {...props}>
      <div className="card-icon-container">{icon}</div>
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text as={"div"}>{content}</BSCard.Text>
      </BSCard.Body>
      
      {dropdown ? <div className="card-actions">{dropdown}</div> : null}
    </BSCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  dropdown: PropTypes.node,
  icon: PropTypes.node
};

export default Card;
