import { ButtonProps } from "../../Button";

export const SuccessButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-green-600 dark:bg-green-800 hover:bg-green-700 dark:hover:bg-green-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
      {buttonLabel}
    </button>
  );
}
