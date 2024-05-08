import React from "react";
import Alert, { AlertLink } from "../../Alert";
import Button from "../../Button";
import Image from "../../Image";

function Lab() {
  const btnActn = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.tagName + " : " + event.currentTarget.id);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full h-full">
        <div className="flex flex-col md:flex-col justify-start md:justify-start items-center mx-4 my-2">
          <h2 className="my-1 font-sans text-xl font-bold">Images</h2>
          <Image />
        </div>
        <h2 className="my-2 font-sans text-3xl font-bold">Buttons</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="mx-2 flex flex-col justify-center items-center">
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Small - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information" size="small" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Regular - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information" size="regular" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Large - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information" size="large" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Small - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-outlined" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-outlined" size="small" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Regular - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-outlined" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-outlined" size="regular" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Large - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-outlined" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-outlined" size="large" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Small - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-text" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-text" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-text" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-text" size="small" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-text" size="small" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Regular - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-text" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-text" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-text" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-text" size="regular" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-text" size="regular" buttonAction={btnActn} state={true} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Large - Enabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="secondary-text" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="success-text" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="danger-text" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="warning-text" size="large" buttonAction={btnActn} state={true} />
            <Button buttonLabel="Submit" variant="information-text" size="large" buttonAction={btnActn} state={true} />
          </div>
          <div className="mx-2 flex flex-col justify-center items-center">
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Small - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information" size="small" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Regular - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information" size="regular" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Regular - Large - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information" size="large" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Small - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-outlined" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-outlined" size="small" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Regular - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-outlined" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-outlined" size="regular" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Outlined - Large - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-outlined" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-outlined" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-outlined" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-outlined" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-outlined" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-outlined" size="large" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Small - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-text" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-text" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-text" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-text" size="small" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-text" size="small" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Regular - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-text" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-text" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-text" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-text" size="regular" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-text" size="regular" buttonAction={btnActn} state={false} />
            <h2 className="my-1 font-sans text-xl font-bold">Text - Large - Disabled</h2>
            <Button buttonLabel="Submit" variant="primary-text" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="secondary-text" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="success-text" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="danger-text" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="warning-text" size="large" buttonAction={btnActn} state={false} />
            <Button buttonLabel="Submit" variant="information-text" size="large" buttonAction={btnActn} state={false} />
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