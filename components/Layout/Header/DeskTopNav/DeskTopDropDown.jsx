import Link from "components/Link";

export default function DeskTopDropDown({ title, SubMenuData, dropdown }) {
  return (
    <ul
      className={`desktop-sub-menu p-4 absolute left-1/2 z-10 -translate-x-1/2 overflow-hidden top-10 flex flex-col min-w-[10rem] whitespace-nowrap border rounded-md bg-white shadow-lg transition-all ease-linear ${
        dropdown
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-1 opacity-0"
      }`}
    >
      <div className="px-3 py-1 font-semibold text-gray-500">{title}</div>
      {SubMenuData.map(({ label, href, icon, sublabel }, index) => (
        <Link
          key={index}
          linkClass="rounded-lg p-2 hover:bg-gray-100"
          href={href}
        >
          <div className="flex items-center ">
            <div className="mr-2 text-gray-400">{icon}</div>
            {label}
          </div>
          <div className="pl-7 text-sm text-gray-400 font-normal">
            {sublabel}
          </div>
        </Link>
      ))}
    </ul>
  );
}
