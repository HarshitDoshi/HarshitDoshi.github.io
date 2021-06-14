import { ButtonProps } from "../../Button";

export const PrimaryButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-purple-600 dark:bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-purple-600 dark:border-purple-800 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
      {buttonLabel}
    </button>
  );
}
