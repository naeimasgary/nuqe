import { Link } from "react-router-dom";
import { EmailLayout } from "./EmailLayout";

export function AccountVerifiedEmail() {
  return (
    <EmailLayout illustration="handshake">
      <h1 className="text-3xl font-bold text-text-default mb-6">
        Congratulations!<br />
        You have been approved by the Nuqlei team and are verified
      </h1>

      <p className="text-text-default text-sm mb-4">Hi John,</p>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        Thank you for signing up!{" "}
        <Link to="/register/set-password" className="text-sky-brand-600 font-semibold hover:underline">
          Activate your account
        </Link>{" "}
        to Create your project.
      </p>

      {/* CTA Button */}
      <Link
        to="/register/set-password"
        className="block w-full text-center py-3 px-6 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors mb-8"
      >
        Create your first project
      </Link>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        This process may take up to 18 to 24 hours.
      </p>

      <p className="text-text-secondary text-sm mb-1">Best regards,</p>
      <p className="text-text-default text-sm font-bold">Nuqlei Team</p>
    </EmailLayout>
  );
}
