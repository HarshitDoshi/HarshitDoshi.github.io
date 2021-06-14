import { PrimaryButton } from "./Regular/PrimaryButton";
import { SecondaryButton } from "./Regular/SecondaryButton";
import { SuccessButton } from "./Regular/SuccessButton";
import { DangerButton } from "./Regular/DangerButton";
import { WarningButton } from "./Regular/WarningButton";
import { InformationButton } from "./Regular/InformationButton";

import { PrimaryOutlinedButton } from "./Outlined/PrimaryOutlinedButton";
import { SecondaryOutlinedButton } from "./Outlined/SecondaryOutlinedButton";
import { SuccessOutlinedButton } from "./Outlined/SuccessOutlinedButton";
import { DangerOutlinedButton } from "./Outlined/DangerOutlinedButton";
import { WarningOutlinedButton } from "./Outlined/WarningOutlinedButton";
import { InformationOutlinedButton } from "./Outlined/InformationOutlinedButton";

export type ButtonProps = {
  buttonLabel: string | number;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "information" | "primary-outlined" | "secondary-outlined" | "success-outlined" | "danger-outlined" | "warning-outlined" | "information-outlined";
  buttonAction(event: React.MouseEvent<HTMLElement>): void;
}

const Button = (props: ButtonProps) => {
  const { buttonLabel, variant, buttonAction } = props;
  if (variant === "primary") {
    return <PrimaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "secondary") {
    return <SecondaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "success") {
    return <SuccessButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "danger") {
    return <DangerButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "warning") {
    return <WarningButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "information") {
    return <InformationButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "primary-outlined") {
    return <PrimaryOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "secondary-outlined") {
    return <SecondaryOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "success-outlined") {
    return <SuccessOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "danger-outlined") {
    return <DangerOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "warning-outlined") {
    return <WarningOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else if (variant === "information-outlined") {
    return <InformationOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  } else {
    return <PrimaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} />;
  }
}

export default Button
