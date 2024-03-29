import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistor } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import RouterStore from "./router";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <RouterStore />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
