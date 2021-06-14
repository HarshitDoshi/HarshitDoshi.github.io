type ButtonProps = {
  buttonLabel: string | number;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "information";
  buttonAction: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { buttonLabel, variant, buttonAction } = props;
  if (variant === "primary") {
    return (
      <button onClick={buttonAction} className="m-1 bg-purple-600 dark:bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-purple-600 dark:border-purple-800 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
        {buttonLabel}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button onClick={buttonAction} className="m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
        {buttonLabel}
      </button>
    );
  } else if (variant === "success") {
    return (
      <button className="bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg border border-gray-900 dark:border-gray-50">
        {buttonLabel}
      </button>
    );
  } else if (variant === "danger") {
    return (
      <button className="bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg border border-gray-900 dark:border-gray-50">
        {buttonLabel}
      </button>
    );
  } else if (variant === "warning") {
    return (
      <button className="bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg border border-gray-900 dark:border-gray-50">
        {buttonLabel}
      </button>
    );
  } else if (variant === "information") {
    return (
      <button className="bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg border border-gray-900 dark:border-gray-50">
        {buttonLabel}
      </button>
    );
  } else {
    return (
      <button className="bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg border border-gray-900 dark:border-gray-50">
        {buttonLabel}
      </button>
    );
  }
}

export default Button
