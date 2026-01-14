import SmartFunctional from "@/_components/products/SmartFunctional";
import KeyFeatures from "@/_components/products/KeyFeatures";
import TouchSwitch from "@/_components/products/TouchSwitch";
import DependablePerformance from "@/_components/products/DependablePerformance";
import ControlCTA from "@/_components/products/ControlCTA";

const ProductsPage = () => {
  return (
    <div>
      <TouchSwitch />
      <KeyFeatures />
      <SmartFunctional />
      <DependablePerformance />
      <ControlCTA />
    </div>
  );
};

export default ProductsPage;
