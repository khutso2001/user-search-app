import MoonIcon from "../assets/images/icons/icon-moon.svg";
import SunIcon from "../assets/images/icons/icon-sun.svg";
import "../components/Header.css";
interface Props {
  handleChangeMode: () => void;
  changeMode: Boolean;
}
export default function Header(props: Props) {
  const { handleChangeMode, changeMode } = props;
  return (
    <div className="header">
      <span className="title">devfinder</span>
      <div
        className="modeChange"
        onClick={() => {
          handleChangeMode();
        }}
      >
        <p className="modeChangeColor">{changeMode ? "LIGHT" : "DARK"}</p>
        <img src={changeMode ? SunIcon : MoonIcon} />
      </div>
    </div>
  );
}
