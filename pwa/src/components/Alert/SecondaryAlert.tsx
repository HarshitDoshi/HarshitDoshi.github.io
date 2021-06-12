import { FaExclamationCircle } from "react-icons/fa";
import { AlertVariantProps } from "./index";

export const SecondaryAlert = (props: AlertVariantProps) => {
  const { alertContent } = props;
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row justify-start items-center border border-gray-300 rounded bg-gray-100 shadow mx-2 my-1 w-full">
        <div className="flex flex-col justify-center items-center mx-2 text-gray-800">
          <FaExclamationCircle className="h-6 w-6" />
        </div>
        <div className="mx-2 my-2 font-sans text-gray-800">
          <>
            {alertContent}
          </>
        </div>
      </div>
    </div>
  )
}
