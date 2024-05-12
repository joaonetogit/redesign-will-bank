import { navHeader } from '@/constants/navHeader';

export default function NavList() {
  return (
    <nav className="flex items-center gap-10">
      {navHeader.map((item, index) => (
        <a
          href={item.link}
          className="font-inter text-gray800 text-base"
          key={index}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
