import Logo from "./Logo";
import MenuList from "./MenuList";
import { menuLinks } from "../data/menuData";
export default function Header() {
  return (
    <div>
      <nav>
        <Logo />
        <MenuList links={menuLinks} />
      </nav>
    </div>
  );
}
