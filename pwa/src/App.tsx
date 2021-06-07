import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Lab from "./components/Lab";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <Main>
          <Switch>
            <Route path="/lab">
              <Lab />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
