import { EmailLayout } from "./EmailLayout";

export function RegistrationConfirmationEmail() {
  return (
    <EmailLayout illustration="gear">
      <h1 className="text-3xl font-bold text-text-default mb-6">
        Thank you for applying
      </h1>

      <p className="text-text-default text-sm mb-4">Hi John,</p>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        Thank you for signing up! To activate your account, please be patient while we verify your application.
      </p>

      <p className="text-text-secondary text-sm leading-relaxed mb-8">
        This process may take up to 18 to 24 hours.
      </p>

      <p className="text-text-secondary text-sm mb-1">Best regards,</p>
      <p className="text-text-default text-sm font-bold">Nuqlei Team</p>
    </EmailLayout>
  );
}
