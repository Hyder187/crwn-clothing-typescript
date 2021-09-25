import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Items } from "../collections-overview/collection.types";
import "./collection-preview.styles.scss";

type CollectionPreviewProp = {
  title: string;
  items: Items[];
};

const CollectionPreview = (collectionItem: CollectionPreviewProp) => {
  const { title, items } = collectionItem;
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
