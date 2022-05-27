import { useState } from "react";
import MobileDropDown from "./MobileDropDown";
import Link from "components/Link";
import ChevronRight from "components/icons/ChevronRight";

export default function MobileMenu({ title, label, href, childrens }) {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropDown = () => {
        setDropdown(!dropdown);
    }

    return (
        <li
            className="menu-item"
        >
            {childrens ? (
                <>
                    <button
                        className="flex items-center justify-between w-full text-left font-semibold text-gray-500 py-2"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={toggleDropDown}
                    >
                        {label}
                        <ChevronRight iconClass={`h-5 w-5 transition-transform ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${dropdown ? "rotate-90" : "rotate-0"}`} />
                    </button>
                    <MobileDropDown
                        title={title}
                        SubMenuData={childrens}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link linkClass="block py-2" href={href}>{label}</Link>
            )}
        </li>
    );
};
