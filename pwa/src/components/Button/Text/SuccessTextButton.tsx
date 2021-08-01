import { ButtonProps } from "../../Button";

export const SuccessTextButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-200 dark:text-green-200 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-200 dark:text-green-200 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-200 dark:text-green-200 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-200 dark:text-green-200 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-green-600 dark:text-green-600 px-1 py-0 focus:ring-2 focus:ring-green-300 dark:focus:ring-green-600">
          {buttonLabel}
        </button>
      );
    }
  }
}