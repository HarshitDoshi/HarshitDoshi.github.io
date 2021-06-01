import Alert from "../components/Alert";
import { AlertLink } from "../components/Alert";

function Home() {
  return (
    <>
      <p>Hello, world!</p>
      <Alert type="primary">
        <p>Hello, world.<AlertLink href="https://google.com">This is a link embedded in an alert</AlertLink>.</p>
      </Alert>
    </>
  );
}

export default Home;