export function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#262626" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="#262626" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="#262626" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="#262626" strokeWidth="1.5" />
      <path d="M7 10v7M7 7v.5" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 10v7" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="#262626" strokeWidth="1.5" />
      <path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H12v6" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
