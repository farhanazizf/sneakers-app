import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import logo from './logo.svg';
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { persistor, storeRedux } from "./utils/redux";
import Home from "./pages/Homepage";
import DetailsPage from "./pages/Details";
import CartPage from "./pages/Cart";

const App = () => {
  return (
    <Provider store={storeRedux}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/details" component={DetailsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
