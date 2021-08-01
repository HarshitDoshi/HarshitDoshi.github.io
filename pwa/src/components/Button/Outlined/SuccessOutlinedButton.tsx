import { ButtonProps } from "..";

export const SuccessOutlinedButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-400 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-400 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-400 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-400 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base m-1 bg-transparent dark:bg-transparent hover:bg-green-100 dark:hover:bg-green-800 text-gray-900 dark:text-gray-50 px-4 py-2 rounded hover:shadow-lg border-2 border-green-600 dark:border-green-800 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  }
}
