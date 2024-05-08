import { ButtonProps } from "../../Button";

export const InformationButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 text-gray-500 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 text-gray-50 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-blue-600 dark:border-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600">
          {buttonLabel}
        </button>
      );
    }
  }
}
