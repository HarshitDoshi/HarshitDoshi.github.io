import { ButtonProps } from "../../Button";

export const SecondaryButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-gray-600 dark:border-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
          {buttonLabel}
        </button>
      );
    }
  }
}
