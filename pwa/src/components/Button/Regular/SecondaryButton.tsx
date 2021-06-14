import { ButtonProps } from "../../Button";

export const SecondaryButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
      {buttonLabel}
    </button>
  );
}
