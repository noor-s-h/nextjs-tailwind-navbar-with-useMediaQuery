import Menu from "components/icons/Menu";
import Close from "components/icons/Close";

export default function HamBurger({ open, onClick }) {
  return (
    <div className="hamburger-button" onClick={onClick}>
      {open ? (
        <Close iconClass="h-5 w-5 text-gray-500" />
      ) : (
        <Menu iconClass="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
}
