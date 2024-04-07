import GridComp from "./components/GridComp";
import Header from "./components/Header";
import HeroScroller from "./components/HeroScroller";
import HeroSection from "./components/HeroSection";

import Main from './components/Main'
import TopRest from "./components/TopRest";
function App() {
  return (
  <>
  <Header/>
  <HeroSection/>
  <TopRest/>
  <GridComp/>
  {/* <HeroScroller/> */}
  <Main/>
  </>
  );
}

export default App;
