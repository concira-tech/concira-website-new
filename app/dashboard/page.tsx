import ConnectedEcosystem from "@/_components/dashboard/ConnectedEcosystem";
import DashboardHero from "@/_components/dashboard/DashboardHero";
import PoweredByHub from "@/_components/dashboard/PoweredByHub";
import ScalableSuccess from "@/_components/dashboard/ScalableSuccess";
import ServicesOverview from "@/_components/dashboard/ServicesOverview";
const DashboardPage = () => {
  return (
    <div>
      <DashboardHero />
      <ScalableSuccess />
      <ConnectedEcosystem />
      <PoweredByHub />
      <ServicesOverview />
    </div>
  );
};

export default DashboardPage;
