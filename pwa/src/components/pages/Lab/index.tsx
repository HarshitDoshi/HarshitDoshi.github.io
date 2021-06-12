import Alert, { AlertLink } from "../../Alert";

function Lab() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full h-full mt-6 mb-6">
        <h2 className="font-sans text-xl font-bold">Alerts</h2>
        <Alert variant="primary">
        </Alert>
        <Alert variant="secondary">
        </Alert>
        <Alert variant="success">
        </Alert>
        <Alert variant="danger">
        </Alert>
        <Alert variant="warning">
        </Alert>
        <Alert variant="information">
        </Alert>
      </div>
    </>
  );
}

export default Lab;