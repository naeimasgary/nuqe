import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Illustration } from "../../components/Illustration";
import { InstagramIcon, LinkedInIcon, FacebookIcon } from "../../components/SocialIcons";

export function RegistrationConfirmationEmail() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-[640px] bg-white flex flex-col gap-6 p-8">

        {/* Logo */}
        <NuqleiLogo size="sm" variant="default" />

        {/* Illustration */}
        <div className="w-full">
          <Illustration variant="8" alt="" className="w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[36px] font-normal text-[#262626] leading-tight">
            Thank you for applying
          </h1>

          <div className="text-[18px] text-[#737373] leading-[24px] flex flex-col gap-0">
            <p>Hi John,</p>
            <p>&nbsp;</p>
            <p>Thank you for signing up! To activate your account, please be patient while we verify your application.</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-[18px] text-[#737373] leading-[24px]">
              <p>This process may take up to 18 to 24 hours.</p>
              <p>Best regards,</p>
            </div>
            <p className="text-[18px] font-semibold text-[#262626]">Nuqlei Team</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6">
          <div className="text-[18px] text-[#737373] leading-[24px]">
            <p>This email was sent to sammy@email.com. If you'd rather not receive this kind of email, you can unsubscribe or manage your email preferences.</p>
            <p>&nbsp;</p>
            <p>© 2026 Nuqlei, 5100 South Service Rd, Unit 2, Burlington, ON L7L 6A5</p>
          </div>

          <div className="h-px bg-[#e5e5e5]" />

          <div className="flex items-center justify-between">
            <NuqleiLogo size="sm" variant="default" />
            <div className="flex items-center gap-2">
              <InstagramIcon />
              <LinkedInIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
