import Link from "next/link";

type NavLinkProps = {
  href?: string;
  label: string;
};

export const NavLink = ({ href = "#", label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="hover:text-blue-600 cursor-pointer transition-colors"
    >
      {label}
    </Link>
  );
};
