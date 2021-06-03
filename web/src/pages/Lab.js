import Alert from "../components/Alert";
import { AlertLink } from "../components/Alert";

const Lab = () => {
  return (
    <div>
      <p>Hello, world!</p>
      <Alert type="primary">
        <p>Hello, world.<AlertLink href="https://google.com">This is a link embedded in an alert</AlertLink>.</p>
      </Alert>
    </div>
  )
}

export default Lab
