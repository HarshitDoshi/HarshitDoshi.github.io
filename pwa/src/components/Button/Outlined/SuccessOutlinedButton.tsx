import { ButtonProps } from "..";

export const SuccessOutlinedButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
      {buttonLabel}
    </button>
  );
}
