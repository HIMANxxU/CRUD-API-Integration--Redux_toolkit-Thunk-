import { Provider } from "react-redux";
import Demo from "./components/Demo";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Home /> */}
        <Demo />
      </Provider>
    </div>
  );
}

export default App;
