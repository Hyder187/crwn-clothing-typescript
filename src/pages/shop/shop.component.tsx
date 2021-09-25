import { createStructuredSelector } from "reselect";
import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect, useDispatch } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPage />}
      ></Route>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   selectIsCollectionsLoaded: selectIsCollectionsLoaded,
// });

// const mapDipatchToProps = (dispatch) => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
// });

export default ShopPage;
