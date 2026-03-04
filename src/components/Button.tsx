import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-bg-primary-default text-text-white border-bg-primary-default",
    "hover:not-disabled:bg-bg-primary-hover hover:not-disabled:border-bg-primary-hover",
    "active:not-disabled:bg-bg-primary-pressed active:not-disabled:border-bg-primary-pressed",
    "focus-visible:not-disabled:bg-bg-primary-pressed focus-visible:not-disabled:border-bg-primary-pressed",
    "focus-visible:shadow-focus-primary",
    "disabled:bg-bg-primary-disabled disabled:border-bg-primary-disabled disabled:text-text-white disabled:cursor-not-allowed disabled:shadow-none",
  ].join(" "),

  secondary: [
    "bg-white text-text-default border-outline-default",
    "hover:not-disabled:bg-neutral-50 hover:not-disabled:border-neutral-500",
    "active:not-disabled:bg-neutral-100 active:not-disabled:border-neutral-600",
    "focus-visible:not-disabled:bg-neutral-100 focus-visible:not-disabled:border-neutral-600",
    "focus-visible:shadow-focus-neutral",
    "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-outline-subtle disabled:cursor-not-allowed disabled:shadow-none",
  ].join(" "),

  danger: [
    "bg-bg-danger-default text-white border-bg-danger-default",
    "hover:not-disabled:bg-bg-danger-hover hover:not-disabled:border-bg-danger-hover",
    "active:not-disabled:bg-bg-danger-pressed active:not-disabled:border-bg-danger-pressed",
    "focus-visible:not-disabled:bg-bg-danger-pressed focus-visible:not-disabled:border-bg-danger-pressed",
    "focus-visible:shadow-focus-danger",
    "disabled:bg-bg-danger-disabled disabled:border-bg-bg-danger-disabled disabled:text-white disabled:cursor-not-allowed disabled:shadow-none",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-[7px] text-[13px]",
  md: "px-4 py-[10px] text-sm",
  lg: "px-[18px] py-3 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const base = [
    "inline-flex items-center justify-center gap-2",
    "rounded-full border-[1.5px] border-transparent",
    "font-sans font-semibold leading-none whitespace-nowrap",
    "cursor-pointer transition-all duration-150 ease-in-out",
    "no-underline shadow-xs outline-none relative",
  ].join(" ");

  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...rest} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
