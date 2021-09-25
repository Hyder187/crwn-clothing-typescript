import React from "react";
import { connect, useSelector } from "react-redux";
import "./collections-overview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import COLLECTION_DATA from "./collection-data";
import { Collections } from "./collection.types";
import { Collection } from "./collection.types";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { ICollection } from "../../redux/shop/shop.interfaces";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollections);
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections
        ? collections.map((collection: ICollection) => (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          ))
        : null}
    </div>
  );
};

export default CollectionsOverview;
