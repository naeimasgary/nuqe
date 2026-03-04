import { useState, InputHTMLAttributes, ReactNode } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  suffix?: ReactNode;
}

export function InputField({
  label,
  required,
  helperText,
  error,
  suffix,
  type = "text",
  className,
  id,
  ...props
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const eyeIcon = showPassword ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    /* eye-disabled icon — matches Figma "eye-disabled" */
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrap}>
        <input
          {...props}
          id={inputId}
          type={resolvedType}
          className={[
            styles.input,
            error ? styles.hasError : "",
            suffix || isPassword ? styles.hasSuffix : "",
            className || "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
        {isPassword ? (
          <button
            type="button"
            className={styles.suffixIcon}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {eyeIcon}
          </button>
        ) : (
          suffix && <span className={styles.suffixIcon}>{suffix}</span>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {!error && helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  );
}
