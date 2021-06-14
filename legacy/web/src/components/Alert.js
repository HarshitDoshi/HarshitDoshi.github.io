import React from 'react'

const Alert = (props) => {

  const { children, type } = props;

  const alertContent = children ? children : `This is a ${type} alert.`;

  if (type === "primary") {
    return (
      <div className="border border-blue-300 rounded bg-blue-100 shadow mx-2 my-2">
        <p className="mx-2 my-2 font-sans text-blue-800">{alertContent}</p>
      </div>
    )
  }

  return (
    <div className="border border-gray-900 rounded shadow mx-2 my-2">
      <p className="mx-2 my-2">A simple default alert.</p>
    </div>
  )
}

export function AlertLink(props) {

  const { children, href } = props;

  const alertLinkContent = children ? children : `${href}`;

  return (
    <>
      <a href={href} className="mx-1 font-bold underline">{alertLinkContent}</a>
    </>
  );
}

export default Alert;
