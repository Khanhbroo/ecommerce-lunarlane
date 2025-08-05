import logoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomNavLink, CustomLink, Badges } from "./CustomComponents";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="px-12 py-3 bg-white-100 relative z-20">
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={logoImg} alt="Logo Image" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-4">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path} className="py-4 px-2">
                    {list.link}
                  </CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink>Login</CustomLink>
              <span className="">/</span>
              <CustomLink>Register</CustomLink>
            </div>
            <div className="icon flex items-center justify-center gap-6">
              <IoSearchOutline size={23} />
              <div className="relative z-20">
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
