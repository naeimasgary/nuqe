import { useState, InputHTMLAttributes, ReactNode } from "react";

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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-text-default">
          {label}
          {required && <span className="text-bg-danger-default ml-0.5">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          {...props}
          id={inputId}
          type={resolvedType}
          className={[
            "w-full h-11 px-4 rounded-full border bg-white text-text-default text-sm",
            "placeholder:text-neutral-400 outline-none transition-all duration-150",
            error
              ? "border-bg-danger-default focus:border-bg-danger-default focus:shadow-[0_0_0_3px_rgba(255,102,146,0.15)]"
              : "border-outline-default focus:border-outline-focused focus:shadow-focus-primary",
            (suffix || isPassword) ? "pr-11" : "",
            className || "",
          ].filter(Boolean).join(" ")}
        />
        {isPassword ? (
          <button
            type="button"
            className="absolute right-3 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {eyeIcon}
          </button>
        ) : (
          suffix && (
            <span className="absolute right-3 flex items-center justify-center text-neutral-400">
              {suffix}
            </span>
          )
        )}
      </div>
      {error && <p className="text-xs text-bg-danger-default">{error}</p>}
      {!error && helperText && <p className="text-xs text-text-secondary">{helperText}</p>}
    </div>
  );
}
