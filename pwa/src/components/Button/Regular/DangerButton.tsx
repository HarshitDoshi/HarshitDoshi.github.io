import { ButtonProps } from "../../Button";

export const DangerButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-red-600 dark:bg-red-800 hover:bg-red-700 dark:hover:bg-red-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-red-600 dark:border-red-800 focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600">
      {buttonLabel}
    </button>
  );
}
