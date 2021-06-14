import React from "react";
import Alert, { AlertLink } from "../../Alert";
import Button from "../../Button";

function Lab() {
  const btnActn = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.tagName + " : " + event.currentTarget.id);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full h-full">
        <h2 className="my-2 font-sans text-3xl font-bold">Buttons</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="mx-2 flex flex-col justify-center items-center">
            <h2 className="my-1 font-sans text-xl font-bold">Regular</h2>
            <Button buttonLabel="Submit" variant="primary" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="secondary" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="success" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="danger" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="warning" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="information" buttonAction={btnActn} />
          </div>
          <div className="mx-2 flex flex-col justify-center items-center">
            <h2 className="my-1 font-sans text-xl font-bold">Outlined</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="secondary-outlined" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="success-outlined" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="danger-outlined" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="warning-outlined" buttonAction={btnActn} />
            <Button buttonLabel="Submit" variant="information-outlined" buttonAction={btnActn} />
          </div>
        </div>
        <h2 className="my-2 font-sans text-3xl font-bold">Alerts</h2>
        <div className="mx-2 flex flex-col gap-2 justify-center items-center">
          <Alert variant="primary">
            Test alert. Visit <AlertLink destination="https://shunyaek.se">shunyaek</AlertLink> for more support. Test alert. Test alert. Test alert. Test alert. Test alert. Test alert. Test alert. Test alert.
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
      </div>
    </>
  );
}

export default Lab;