import { FaMinusCircle } from "react-icons/fa";
import { AlertVariantProps } from "./index";

export const WarningAlert = (props: AlertVariantProps) => {
  const { alertContent } = props;
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row justify-start items-center border border-yellow-300 rounded bg-yellow-100 shadow mx-2 my-1 w-full">
        <div className="flex flex-col justify-center items-center mx-2 text-yellow-800">
          <FaMinusCircle className="h-6 w-6" />
        </div>
        <div className="mx-2 my-2 font-sans text-yellow-800">
          <>
            {alertContent}
          </>
        </div>
      </div>
    </div>
  )
}
