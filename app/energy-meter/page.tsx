import EnergyMeter from "@/_components/products/energyMeter/EnergyMeter";
import EnergyMeterControlCTA from "@/_components/products/energyMeter/EnergyMeterControlCTA";
import EnergyMeterDeployment from "@/_components/products/energyMeter/EnergyMeterDeployment";
import EnergyMeterFeatures from "@/_components/products/energyMeter/EnergyMeterFeatures";

const EnergyMeterPage = () => {
  return (
    <div>
      <EnergyMeter />
      <EnergyMeterFeatures />
      <EnergyMeterDeployment />
      <EnergyMeterControlCTA />
    </div>
  );
};

export default EnergyMeterPage;
