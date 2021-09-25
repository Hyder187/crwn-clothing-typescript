import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { IDirectoryState } from "../../redux/directory/directory.interfaces";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  console.log(sections);
  return (
    <div className="directory-menu">
      {sections.map((sectionItem) => (
        <MenuItem key={sectionItem.id} {...sectionItem} />
      ))}
    </div>
  );
};

export default Directory;
