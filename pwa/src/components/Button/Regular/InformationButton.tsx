import { ButtonProps } from "../../Button";

export const InformationButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
      {buttonLabel}
    </button>
  );
}
