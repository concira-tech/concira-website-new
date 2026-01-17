import Benefits from "@/_components/dashboard/Benefits";
import ConnectedEcosystem from "@/_components/dashboard/ConnectedEcosystem";
import DashboardHero from "@/_components/dashboard/DashboardHero";
import KeyFeatures from "@/_components/dashboard/KeyFeatures";
import PoweredByHub from "@/_components/dashboard/PoweredByHub";
import ScalableSuccess from "@/_components/dashboard/ScalableSuccess";
import ServicesOverview from "@/_components/dashboard/ServicesOverview";
import SpaceTypes from "@/_components/dashboard/SpaceTypes";
const DashboardPage = () => {
  return (
    <div>
      <DashboardHero />
      <ScalableSuccess />
      <ConnectedEcosystem />
      <PoweredByHub />
      <ServicesOverview />
      <KeyFeatures />
      <Benefits />
      <SpaceTypes />
    </div>
  );
};

export default DashboardPage;
