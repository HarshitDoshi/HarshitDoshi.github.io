import { ButtonProps } from "../../Button";

export const WarningButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
      {buttonLabel}
    </button>
  );
}
