import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Alert from "./components/Alert";
import { AlertLink } from "./components/Alert";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2 className="font-sans text-xl font-black">Home</h2>
      <Alert type="primary">
        <p>Hello, world.<AlertLink href="https://google.com">This is a link embedded in an alert.</AlertLink></p>
      </Alert>
    </>
  );
}

function About() {
  return <h2 className="font-sans text-xl font-black">About</h2>;
}

function Contact() {
  return <h2 className="font-sans text-xl font-black">Contact</h2>;
}

export default App;
