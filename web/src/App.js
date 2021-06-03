import Footer from "./blocks/Footer";
import Header from "./blocks/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./blocks/Main";
import Lab from "./pages/Lab";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header headerTitle="Harshit Doshi" />
        <Main>
          <Switch>
            <Route path="/lab">
              <Lab />
            </Route>
            <Route path="/about">
              <About />
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
