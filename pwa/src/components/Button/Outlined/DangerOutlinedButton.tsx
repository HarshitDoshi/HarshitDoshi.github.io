import { ButtonProps } from "..";

export const DangerOutlinedButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant } = props;
  return (
    <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="m-1 bg-transparent dark:bg-transparent hover:bg-red-100 dark:hover:bg-red-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded-lg hover:shadow-lg border-2 border-red-600 dark:border-red-800 focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600">
      {buttonLabel}
    </button>
  );
}
