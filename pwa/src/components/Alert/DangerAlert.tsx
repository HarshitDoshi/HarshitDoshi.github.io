import { FaTimesCircle } from "react-icons/fa";
import { AlertVariantProps } from "./index";

export const DangerAlert = (props: AlertVariantProps) => {
  const { alertContent } = props;
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="h-full flex flex-row justify-start items-center border border-red-300 rounded bg-red-100 shadow mx-2 w-full">
        <div className="h-full flex flex-col justify-start items-start px-2 py-3 text-red-800">
          <FaTimesCircle className="h-6 w-6" />
        </div>
        <div className="mx-2 my-1 font-sans text-red-800">
          <>
            {alertContent}
          </>
        </div>
      </div>
    </div>
  )
}
