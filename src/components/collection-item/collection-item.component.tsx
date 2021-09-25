import React from "react";

import "./collection-item.styles.scss";
import { Items } from "../collections-overview/collection.types";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

type ItemProp = {
  item: Items;
};

const CollectionItem = ({ item }: ItemProp) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button
        onClick={() =>
          dispatch(
            addItem({
              name: name,
              price: price,
              imageUrl: imageUrl,
              quantity: 1,
              id: id,
            })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

export default CollectionItem;
