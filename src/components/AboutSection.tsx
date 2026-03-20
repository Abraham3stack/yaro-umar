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
            I am a dynamic left-back and wing-back known for my defensive discipline, pace, and intelligence on the field.
            Strong in 1v1 situations, I take pride in my defensive solidity while also contributing offensively through overlapping runs, quality crosses, and accurate passing.
            My speed on and off the ball allows me to support both defense and attack effectively, making me a reliable and versatile presence on the flank.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My game is built on consistency, awareness, and composure under pressure. I read the game well, anticipate plays, and make smart decisions both defensively and in transition. Whether supporting the attack with precise deliveries or maintaining defensive shape, I stay disciplined and focused. I bring intensity, work rate, and a team-first mentality every time I step onto the pitch.
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
