import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "lib/useMediaQuery";
import HamBurger from "./HamBurger";
import MobileMenu from "./MobileMenu";

export default function MobileNav({ NavData }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggle = () => {
    setOpen(!open);
  }

  return (
    isMobile && (
      <>
        <HamBurger open={open} onClick={toggle} />
        <MobileMenu open={open} NavData={NavData} />
      </>
    )
  );
}
