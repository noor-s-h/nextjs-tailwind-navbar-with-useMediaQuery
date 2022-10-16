import NavData from "data/NavData";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
import DeskTopNav from "./DeskTopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {

  return (
    <header className="border-b">
      <nav className="navbar container max-w-[50rem] mx-auto px-4 flex filter bg-white h-[56px] items-center justify-between">
        <MobileNav NavData={NavData} />
        <Logo />
        <DeskTopNav NavData={NavData} />
        <AuthBtn />
      </nav>
    </header>
  );
}
