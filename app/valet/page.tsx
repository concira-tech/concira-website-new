import ValetHero from "../_components/valet/ValetHero";
import ValetFeatures from "../_components/valet/ValetFeatures";
import ValetKeyFeatures from "../_components/valet/ValetKeyFeatures";
import ValetBenefits from "../_components/valet/ValetBenefits";
import ValetPoweredBy from "../_components/valet/ValetPoweredBy";
import ValetHowItWorks from "../_components/valet/ValetHowItWorks";
import ValetAccountability from "../_components/valet/ValetAccountability";

const ValetPage = () => {
  return (
    <main>
      <ValetHero />
      <ValetFeatures />
      <ValetKeyFeatures />
      <ValetBenefits />
      <ValetPoweredBy />
      <ValetHowItWorks />
      <ValetAccountability />
    </main>
  );
};

export default ValetPage;
