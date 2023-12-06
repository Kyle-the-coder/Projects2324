import BreakDancerVid from "./components/BreakDancerVid";
import BreakDanceDisplay from "./components/BreakDanceDisplay";
import PopperVid from "./components/PopperVid";
import HipHopDisplay from "./components/PoppingDisplay";
import SplitScreenContainer from "./containers/SplitScreenContainer";
import { Home } from "./pages/Home";
import "./styles/mainContainer.css";

function App() {
  return (
    <div className="main-container">
      <Home />

      <SplitScreenContainer
        SlidableComp={HipHopDisplay}
        StillComp={PopperVid}
        isScrollLeft={true}
        bgColorBeg={"black"}
        bgColorEnd={"gold"}
      />
      <SplitScreenContainer
        SlidableComp={BreakDanceDisplay}
        StillComp={BreakDancerVid}
        isScrollRight={true}
        bgColorBeg={"gold"}
        bgColorEnd={"black"}
      />
    </div>
  );
}

export default App;
