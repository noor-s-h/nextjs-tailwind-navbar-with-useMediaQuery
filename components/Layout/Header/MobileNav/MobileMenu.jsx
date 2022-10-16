import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenu({ open, NavData }) {
  return (
    <ul
      className={`mobile-menu z-50 overflow-hidden absolute top-[57px] p-4 left-0 right-0 bg-white transition-transform ease-[cubic-bezier(1, 0.5, 1, 0.25))] ${
        open
          ? "h-auto translate-y-0 visible border-b"
          : "h-0 translate-y-1 invisible"
      }`}
    >
      {open &&
        NavData.map((navdata, index) => {
          return <MobileMenuItem key={index} {...navdata} />;
        })}
    </ul>
  );
}
