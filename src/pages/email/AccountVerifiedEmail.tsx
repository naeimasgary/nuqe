// Illustration and social icons from Figma node 52761:5805
const illustration = "https://www.figma.com/api/mcp/asset/d8262e5e-023d-43b6-bfc4-f8d22baa2a0a";
const iconInstagram = "https://www.figma.com/api/mcp/asset/d163bafb-060c-47c3-9a91-b79f53c6d1cf";
const iconLinkedin  = "https://www.figma.com/api/mcp/asset/cdf80873-d7d4-450f-aeb6-6fd2adc940e4";
const iconFacebook  = "https://www.figma.com/api/mcp/asset/d80fa4d8-b137-44e5-9dad-b91d3229e56e";

import { Link } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

export function AccountVerifiedEmail() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-[640px] bg-white flex flex-col gap-6 p-8">

        {/* Logo */}
        <NuqleiLogo size="sm" variant="default" />

        {/* Illustration */}
        <div className="w-full">
          <img src={illustration} alt="" className="w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[36px] font-normal text-[#262626] leading-tight">
            Congratulations!<br />
            You have been approved by the Nuqlei team and are verified
          </h1>

          <div className="text-[18px] text-[#737373] leading-[24px]">
            <p>Hi John,</p>
            <p>&nbsp;</p>
            <p>
              Thank you for signing up!{" "}
              <Link to="/register/set-password" className="text-[#418fde] hover:underline">
                Activate your account
              </Link>
              {" "}to Create your project.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/register/set-password"
            className="w-full flex items-center justify-center h-11 rounded-full bg-[#418fde] text-white text-sm font-semibold shadow-sm hover:bg-[#3a7fc4] transition-colors"
          >
            Create your first project
          </Link>

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
              <img src={iconInstagram} alt="Instagram" className="w-6 h-6" />
              <img src={iconLinkedin}  alt="LinkedIn"  className="w-6 h-6" />
              <img src={iconFacebook}  alt="Facebook"  className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
