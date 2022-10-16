import useMediaQuery from "lib/useMediaQuery";
import DeskTopMenu from "./DeskTopMenu";

export default function DeskTopNav({ NavData }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    isDesktop && (
      <ul className="desktop-menu inline-flex">
        {NavData.map((navdata, index) => {
          return <DeskTopMenu key={index} {...navdata} />;
        })}
      </ul>
    )
  );
}
