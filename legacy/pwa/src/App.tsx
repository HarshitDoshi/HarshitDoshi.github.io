import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Lab from "./components/pages/Lab";
import SignX from "./components/pages/SignX";

function App() {
  const [navigationDrawerState, setNavigationDrawerState] = useState(false);
  return (
    <Router>
      <div className="flex flex-col h-screen max-h-screen">
        <Drawer drawerState={navigationDrawerState} />
        <Header drawerState={navigationDrawerState} drawerController={setNavigationDrawerState} />
        <Main>
          <Switch>
            <Route path="/sign-in">
              <SignX />
            </Route>
            <Route path="/lab">
              <Work />
            </Route>
            <Route path="/projects">
              <Lab />{/* <Work /> */}
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