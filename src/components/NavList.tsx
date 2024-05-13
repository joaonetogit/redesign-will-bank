import { navHeader } from '@/constants/navHeader';

export default function NavList() {
  return (
    <nav className="flex items-center gap-10">
      {navHeader.map((item, index) => (
        <a
          href={item.link}
          className="font-inter text-base text-gray800"
          key={index}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
