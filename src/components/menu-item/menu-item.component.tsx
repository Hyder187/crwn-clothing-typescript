import React from "react";
import "./menu-item.styles.scss";
import { useHistory, useRouteMatch, withRouter } from "react-router-dom";

interface MenuItemType {
  title: string;
  imageUrl: string;
  linkUrl: string;
  //   size: string;
}

const MenuItem = ({ title, imageUrl, linkUrl }: MenuItemType) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
