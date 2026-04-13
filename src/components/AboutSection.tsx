import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Background
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          ABOUT ME
        </h2>

        <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            I am a powerful right-back known for my strength, aggression, and defensive dominance on the field. I thrive in one-on-one situations, using my physicality, speed, and timing to shut down attackers and win duels consistently. Fearless in challenges and disciplined in positioning, I bring intensity and authority to the defensive line while maintaining composure under pressure.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My approach to the game is direct, focused, and business-minded. I stay locked in on my role, make smart defensive decisions, and execute my responsibilities with precision. Whether tracking runs, breaking up attacks, or maintaining defensive structure, I remain composed and effective. I bring relentless work rate, strong mentality, and a winning mindset every time I step onto the pitch.
          </p>
          <p className="text-foreground font-semibold text-lg mt-8 border-l-2 border-primary pl-4">
            Available for trials and club opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
