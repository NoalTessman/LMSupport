import "./tailwind.output.css"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import {Route, Switch} from "react-router-dom"
import SupportLines from "./components/SupportLines"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <LandingPage/>
        </Route>

        <Route path="/supportlines">
          <Header />
          <SupportLines/>
        </Route>
      </Switch>
  </div>
  );
}

export default App;
