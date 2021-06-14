import { PrimaryAlert } from "./PrimaryAlert";
import { SecondaryAlert } from "./SecondaryAlert";
import { SuccessAlert } from "./SuccessAlert";
import { WarningAlert } from "./WarningAlert";
import { DangerAlert } from "./DangerAlert";
import { InformationAlert } from "./InformationAlert";
export { AlertLink } from "./AlertLink";

type AlertProps = {
  children: React.ReactNode | string;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "information";
}

export type AlertVariantProps = {
  alertContent: AlertProps["children"] | string;
}

const Alert = (props: AlertProps) => {

  const { children, variant } = props;

  const alertContent = children ? children : `Alert of type: ${variant}.`;

  if (variant === "primary") {
    return <PrimaryAlert alertContent={alertContent} />;
  } else if (variant === "secondary") {
    return <SecondaryAlert alertContent={alertContent} />;
  } else if (variant === "success") {
    return <SuccessAlert alertContent={alertContent} />;
  } else if (variant === "danger") {
    return <DangerAlert alertContent={alertContent} />;
  } else if (variant === "warning") {
    return <WarningAlert alertContent={alertContent} />;
  } else if (variant === "information") {
    return <InformationAlert alertContent={alertContent} />;
  } else {
    return <PrimaryAlert alertContent={alertContent} />;
  }
}

export default Alert;
