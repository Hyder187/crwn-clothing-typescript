import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import CollectionsOverview from "./components/collections-overview/collections-overview.component";
import COLLECTION_DATA from "./components/collections-overview/collection-data";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        {/* <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        /> */}
      </Switch>
      {/* <CollectionsOverview collections={COLLECTION_DATA} /> */}
    </div>
  );
}

export default App;
