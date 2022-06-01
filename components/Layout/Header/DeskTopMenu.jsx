import { useState, useEffect } from "react";
import DeskTopDropDown from "./DeskTopDropDown";
import Link from "components/Link";
import { useRouter } from "next/router";
import ChevronDown from "components/icons/ChevronDown";

export default function DeskTopMenu({ title, label, href, childrens }) {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useRouter();

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  useEffect(() => {
    setDropdown(false);
  }, [pathname]);

  return (
    <li
      className="menu-item relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {childrens ? (
        <>
          <button
            className="flex items-center font-semibold text-gray-500 px-4 py-2"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {label}
            <ChevronDown iconClass="h-5 w-5 ml-2" />
          </button>
          <DeskTopDropDown
            title={title}
            SubMenuData={childrens}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link linkClass="block px-4 py-2" href={href}>
          {label}
        </Link>
      )}
    </li>
  );
}
