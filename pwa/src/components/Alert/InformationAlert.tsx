import { FaInfoCircle } from "react-icons/fa";
import { AlertVariantProps } from "./index";

export const InformationAlert = (props: AlertVariantProps) => {
  const { alertContent } = props;
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row justify-start items-center border border-blue-300 rounded bg-blue-100 shadow mx-2 my-1 w-full">
        <div className="flex flex-col justify-center items-center mx-2 text-blue-800">
          <FaInfoCircle className="h-6 w-6" />
        </div>
        <div className="mx-2 my-2 font-sans text-blue-800">
          <>
            {alertContent}
          </>
        </div>
      </div>
    </div>
  )
}
