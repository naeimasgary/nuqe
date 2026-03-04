import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import { resolveColorHex } from "../tokens/resolver";
import { textStyles } from "../tokens/typography";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

const sizeStyles: Record<ButtonSize, { paddingX: number; paddingY: number }> = {
  sm: { paddingX: 12, paddingY: 6 },
  md: { paddingX: 16, paddingY: 8 },
  lg: { paddingX: 20, paddingY: 10 }
};

function getColors(variant: ButtonVariant, disabled: boolean) {
  const mode: "light" = "light";

  if (variant === "danger") {
    return {
      bg: resolveColorHex(
        mode,
        disabled ? "bg-error-disabled" : "bg-error-default"
      ),
      fg: resolveColorHex(
        mode,
        disabled ? "text-neutral-disabled" : "text-neutral-white"
      ),
      border: resolveColorHex(
        mode,
        disabled ? "outline-error-disabled" : "outline-error-default"
      )
    };
  }

  if (variant === "secondary") {
    return {
      bg: resolveColorHex(
        mode,
        disabled ? "bg-neutral-disabled" : "bg-neutral-container"
      ),
      fg: resolveColorHex(
        mode,
        disabled ? "text-neutral-disabled" : "text-neutral-default"
      ),
      border: resolveColorHex(
        mode,
        disabled ? "outline-neutral-default-secondary" : "outline-neutral-default"
      )
    };
  }

  return {
    bg: resolveColorHex(
      mode,
      disabled ? "bg-primary-disabled" : "bg-primary-default"
    ),
    fg: resolveColorHex(
      mode,
      disabled ? "text-neutral-disabled" : "text-neutral-white"
    ),
    border: resolveColorHex(
      mode,
      disabled ? "outline-primary-disabled" : "outline-primary-default"
    )
  };
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) => {
  const { paddingX, paddingY } = sizeStyles[size];
  const colors = getColors(variant, !!disabled);
  const typography = textStyles.textMd;

  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : undefined,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: 999,
        borderWidth: 1,
        borderStyle: "solid",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        backgroundColor: colors.bg,
        color: colors.fg,
        borderColor: colors.border,
        fontFamily: typography.fontFamily,
        fontWeight:
          typography.fontWeight === "regular"
            ? 400
            : typography.fontWeight === "medium"
            ? 500
            : typography.fontWeight === "semibold"
            ? 600
            : 700,
        fontSize: typography.fontSize,
        lineHeight: 1.2,
        gap: 8,
        ...style
      }}
    >
      {children}
    </button>
  );
};

