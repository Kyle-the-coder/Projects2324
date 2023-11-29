import "../styles/splitScreen.css";

export default function SplitScreen({ children, leftOrRight }) {
  const [leftPane, rightPane] = children;
  return (
    <>
      <div className="container">
        <div className={`pane ${leftOrRight ? "" : "scroll-pane-left"}`}>
          {leftPane}
        </div>

        <div className="pane"></div>

        <div className={`pane ${leftOrRight ? "scroll-pane-right" : ""}`}>
          {rightPane}
        </div>
      </div>
    </>
  );
}