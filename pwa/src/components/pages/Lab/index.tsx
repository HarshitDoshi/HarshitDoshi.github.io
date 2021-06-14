import Alert, { AlertLink } from "../../Alert";
import Button from "../../Button";

function Lab() {
  const btnActn = () => {
    console.log("Hello from button!");
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full h-full mt-6 mb-6">
        <h2 className="font-sans text-xl font-bold">Buttons</h2>
        <Button buttonLabel="Submit" variant="primary" buttonAction={btnActn} />
        <Button buttonLabel="Submit" variant="secondary" buttonAction={btnActn} />
        <h2 className="font-sans text-xl font-bold">Alerts</h2>
        <Alert variant="primary">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
        <Alert variant="secondary">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
        <Alert variant="success">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
        <Alert variant="danger">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
        <Alert variant="warning">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
        <Alert variant="information">
          Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support.
        </Alert>
      </div>
    </>
  );
}

export default Lab;