import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/header/index";
import SearchBox from "./components/searchBox/index";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SearchBox />
      </div>
    </Provider>
  );
}

export default App;
