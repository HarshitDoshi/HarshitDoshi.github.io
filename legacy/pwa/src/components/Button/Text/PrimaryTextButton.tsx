import { ButtonProps } from "../../Button";

export const PrimaryTextButton = (props: ButtonProps) => {
  const { buttonLabel, buttonAction, variant, size, state } = props;
  if (state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    }
  } else if (!state) {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-200 dark:text-purple-200 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-200 dark:text-purple-200 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-200 dark:text-purple-200 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-200 dark:text-purple-200 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    }
  } else {
    if (size === "regular") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "small") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xs font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else if (size === "large") {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-xl font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    } else {
      return (
        <button id={`${variant}-button_${buttonLabel}`} onClick={buttonAction} className="text-base font-semibold m-1 bg-transparent dark:bg-transparent hover:underline dark:hover:underline text-purple-600 dark:text-purple-600 px-1 py-0 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600">
          {buttonLabel}
        </button>
      );
    }
  }
}