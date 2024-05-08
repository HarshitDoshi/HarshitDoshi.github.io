import { ButtonProps } from "../../Button";

export const WarningButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-200 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-200 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-200 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-200 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-yellow-600 dark:bg-yellow-800 hover:bg-yellow-700 dark:hover:bg-yellow-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-yellow-600 dark:border-yellow-800 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600">
          {buttonLabel}
        </button>
      );
    }
  }
}
