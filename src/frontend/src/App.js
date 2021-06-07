import "./App.css";
import { MainNav } from "./components/MainNav";
import { Route, Switch } from "react-router-dom";
import { homepage } from "./pages/homepage";
import { about } from "./pages/about";
import { contact } from "./pages/contact";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route exact path="/" component={homepage} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
      </Switch>
    </div>
  );
}

export default App;
