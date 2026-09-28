import { Phone } from 'lucide-react';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function FloatingLink({
  href,
  label,
  className,
  children,
  external = false,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 sm:h-14 sm:w-14 ${className}`}
    >
      {children}
    </a>
  );
}

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <div className="relative">
        <span className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full bg-[#0068FF]" aria-hidden="true" />
        <FloatingLink
          href="https://zalo.me/0398519485"
          label="Zalo"
          className="relative bg-white"
          external
        >
          <img
            src="https://res.cloudinary.com/qugyphlv/image/upload/v1789264481/Logo-Zalo-Arc.webp"
            alt="Zalo"
            className="h-[70%] w-[70%] object-contain"
          />
        </FloatingLink>
      </div>
      <FloatingLink
        href="https://www.facebook.com/kaynguyen1512"
        label="Facebook"
        className="bg-[#1877F2]"
        external
      >
        <FacebookIcon />
      </FloatingLink>
      <FloatingLink href="tel:0398519485" label="Gọi điện thoại" className="bg-brand-red">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </FloatingLink>
    </div>
  );
}
