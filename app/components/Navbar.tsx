import { useLocation } from "react-router";

const LINKS = [
  {
    name: "Home",
    icons: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "/",
  },
  {
    name: "Articles",
    icons: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3-1.3431 3-3 3-3-1.34315-3-3Zm2 3.62992c-.1263-.04413-.25-.08799-.3721-.13131-1.33928-.47482-2.49256-.88372-4.77995-.8482C4.84875 8.66593 4 9.46413 4 10.5v7.2884c0 1.0878.91948 1.8747 1.92888 1.8616 1.283-.0168 2.04625.1322 2.79671.3587.29285.0883.57733.1863.90372.2987l.00249.0008c.11983.0413.24534.0845.379.1299.2989.1015.6242.2088.9892.3185V9.62992Zm2-.00374V20.7551c.5531-.1678 1.0379-.3374 1.4545-.4832.2956-.1034.5575-.1951.7846-.2653.7257-.2245 1.4655-.3734 2.7479-.3566.5019.0065.9806-.1791 1.3407-.4788.3618-.3011.6723-.781.6723-1.3828V10.5c0-.58114-.2923-1.05022-.6377-1.3503-.3441-.29904-.8047-.49168-1.2944-.49929-2.2667-.0352-3.386.36906-4.6847.83812-.1256.04539-.253.09138-.3832.13765Z" />
      </svg>
    ),
    href: "/articles",
  },
];

const baseClassForLink =
  "transition-all ease-in-out bg-black rounded-full py-2 px-2 border-2 ";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="fixed z-50 pt-8 flex items-center justify-center w-full">
      <div className="bg-slate-950/50 px-4 py-2 rounded-full flex justify-center items-center gap-4">
        {LINKS.map((link) => {
          if (link.href === location.pathname) {
            return (
              <a
                href={link.href}
                className={`${baseClassForLink} text-cyan-300 -translate-y-1`}
              >
                {link.icons}
              </a>
            );
          }
          return (
            <a
              href={link.href}
              className={`${baseClassForLink} text-gray-500 hover:-translate-y-1 hover:text-cyan-500`}
            >
              {link.icons}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
