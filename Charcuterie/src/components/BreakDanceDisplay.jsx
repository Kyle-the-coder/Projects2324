import breaker from "../assets/breakdance.png";
import "../styles/pane.css";

export default function BreakDanceDisplay() {
  return (
    <>
      <div className="right-pane-container">
        <div className="logo-container">
          <img src={breaker} className="logo" />
        </div>
        <div className="right-pane-body">
          <p>This is BreakDance!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}
