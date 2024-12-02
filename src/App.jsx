import { useContext } from "react";
import "./App.css";
import LandingCard from "./components/LandingCard";
import ResultCard from "./components/ResultCard";
import { RatingContext } from "../src/context/RatingContext";

function App() {
  // const [isLanding, setIsLanding] = useState(true);
  const { submitted } = useContext(RatingContext);

  return <>{submitted === false ? <LandingCard /> : <ResultCard />}</>;
}

export default App;
