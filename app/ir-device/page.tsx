import IRDevice from "../_components/products/irDevice/IRDevice";
import IRDeviceFeatures from "../_components/products/irDevice/IRDeviceFeatures";
import IRDeviceDeployment from "../_components/products/irDevice/IRDeviceDeployment";
import IRDeviceControlCTA from "../_components/products/irDevice/IRDeviceControlCTA";

const IRDevicePage = () => {
  return (
    <div>
      <IRDevice />
      <IRDeviceFeatures />
      <IRDeviceDeployment />
      <IRDeviceControlCTA />
    </div>
  );
};

export default IRDevicePage;
