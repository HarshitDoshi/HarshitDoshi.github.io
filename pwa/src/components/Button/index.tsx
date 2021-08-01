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

import { PrimaryTextButton } from "./Text/PrimaryTextButton";
import { SecondaryTextButton } from "./Text/SecondaryTextButton";
import { SuccessTextButton } from "./Text/SuccessTextButton";
import { DangerTextButton } from "./Text/DangerTextButton";
import { WarningTextButton } from "./Text/WarningTextButton";
import { InformationTextButton } from "./Text/InformationTextButton";

export type ButtonProps = {
  buttonLabel: string | number;
  state: boolean;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "information" | "primary-outlined" | "secondary-outlined" | "success-outlined" | "danger-outlined" | "warning-outlined" | "information-outlined" | "primary-text" | "secondary-text" | "success-text" | "danger-text" | "warning-text" | "information-text";
  size: "small" | "regular" | "large";
  buttonAction(event: React.MouseEvent<HTMLElement>): void;
}

const Button = (props: ButtonProps) => {
  const { buttonLabel, state, variant, size, buttonAction } = props;
  if (variant === "primary") {
    return <PrimaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "secondary") {
    return <SecondaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "success") {
    return <SuccessButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "danger") {
    return <DangerButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "warning") {
    return <WarningButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "information") {
    return <InformationButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "primary-outlined") {
    return <PrimaryOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "secondary-outlined") {
    return <SecondaryOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "success-outlined") {
    return <SuccessOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "danger-outlined") {
    return <DangerOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "warning-outlined") {
    return <WarningOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "information-outlined") {
    return <InformationOutlinedButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  } else if (variant === "primary-text") {
    return <PrimaryTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else if (variant === "secondary-text") {
    return <SecondaryTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else if (variant === "success-text") {
    return <SuccessTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else if (variant === "danger-text") {
    return <DangerTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else if (variant === "warning-text") {
    return <WarningTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else if (variant === "information-text") {
    return <InformationTextButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />
  } else {
    return <PrimaryButton buttonLabel={buttonLabel} buttonAction={buttonAction} variant={variant} size={size} state={state} />;
  }
}

export default Button
