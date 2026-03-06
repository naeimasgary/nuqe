import type { ImgHTMLAttributes } from "react";

export type IllustrationVariant =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

interface IllustrationProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  variant: IllustrationVariant;
  alt?: string;
  className?: string;
}

/**
 * Renders one of the 9 brand illustration SVGs.
 *
 * Illustrations are served from /illustrations/ in the public folder.
 * Use `variant` to select which illustration (1–9).
 *
 * Visual reference (top → bottom in Figma):
 *  1 – Person searching / setting up (hero, create project)
 *  2 – Two people shaking hands / meeting (onboarding)
 *  3 – Person with flag and bar chart (success / goal reached)
 *  4 – Person with stars / rating (review / rating)
 *  5 – Person at laptop with checkmark (verification / approved)
 *  6 – Person with checklist (project setup / walkthrough)
 *  7 – Person with checklist (alternate checklist)
 *  8 – Mobile profile card (registration / account)
 *  9 – Person at desktop (dashboard / overview)
 */
export function Illustration({ variant, alt = "", className, ...props }: IllustrationProps) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <img
      src={`${base}/illustrations/illustration-${variant}.svg`}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
