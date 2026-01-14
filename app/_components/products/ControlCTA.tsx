import { Button } from "../ui/Button";

const ControlCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-br from-orange-400 via-orange-500 to-orange-600">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Control Made Effortless
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Upgrade to touch-based switching that feels modern, intuitive, and built for daily comfort.
        </p>
        
        <Button 
          size="lg" 
          className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-6 text-base font-medium"
        >
          Talk to Sales
        </Button>
      </div>
    </section>
  );
};

export default ControlCTA;