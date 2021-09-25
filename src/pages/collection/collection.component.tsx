import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";
import { connect } from "react-redux";
import COLLECTION_DATA from "../../components/collections-overview/collection-data";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { ICollection, IITems } from "../../redux/shop/shop.interfaces";

type PathParams = {
  collectionId: string;
};

interface ICollectionMap {
  [id: string]: number;
}

const COLLECTION_ID_MAP: ICollectionMap = {
  womens: 0,
  sneakers: 1,
  hats: 2,
  mens: 3,
  jackets: 4,
};

const CollectionPage = () => {
  const { collectionId } = useParams<PathParams>();
  console.log(COLLECTION_ID_MAP[collectionId]);
  const collection = useSelector(
    selectCollection(COLLECTION_ID_MAP[collectionId])
  );

  let title: string = "Loading";
  let items: IITems[] = [];

  if (collection) {
    title = collection.title;
    items = collection.items;
  }
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
