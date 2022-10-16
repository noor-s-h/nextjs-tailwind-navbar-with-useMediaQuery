import Link from "components/Link";

export default function MobileDropDown({ title, SubMenuData, dropdown }) {
  return (
    <ul
      className={`mobile-sub-menu overflow-hidden flex flex-col bg-white transition-transform ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
        dropdown ? "h-auto translate-y-0" : "h-0 -translate-y-1"
      }`}
    >
      <div className="p-1 font-semibold text-gray-500">{title}</div>
      {SubMenuData.map(({ label, href, icon }, index) => (
        <Link
          key={index}
          linkClass="rounded-lg flex items-center p-2 hover:bg-gray-100"
          href={href}
        >
          <div className="mr-2 text-gray-400">{icon}</div>
          {label}
        </Link>
      ))}
    </ul>
  );
}
