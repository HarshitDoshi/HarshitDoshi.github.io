import { ButtonProps } from "..";

export const WarningOutlinedButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-transparent dark:bg-transparent hover:bg-yellow-100 dark:hover:bg-yellow-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
      {buttonLabel}
    </button>
  );
}
