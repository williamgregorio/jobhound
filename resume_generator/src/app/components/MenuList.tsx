import Link from "next/link";
import { MenuLink } from "../data/menuData";

interface MenuListsProps {
  links: MenuLink[];
}

export default function MenuList({ links }: MenuListsProps) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
