import AppFooter from "../components/AppFooter/AppFooter";
import Demo from "../components/Demo/Demo";
import Featured from "../components/Featured/Featured";
import FirstPhase from "../components/FirstPhase/FirstPhase";
import SecondPhase from "../components/SecondPhase/SecondPhase";
import ThirdPhase from "../components/ThirdPhase/ThirdPhase";

const Home = () => {
  return (
    <>
        <FirstPhase/>
        <SecondPhase/>
        <ThirdPhase/>
        <Featured/>
        <Demo/>
        <AppFooter/>
    </>
  );
};

export default Home;
