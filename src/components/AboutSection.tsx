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
            A dynamic and versatile forward with an eye for goal and an instinct for creating chances. Born and raised in São Paulo, I developed my skills on the streets before joining FC Estrela's academy at age 14. Since then, I've progressed through every level of the club, earning a reputation as one of the most exciting young talents in the league.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My game is defined by pace, close control, and decision-making in the final third. Whether cutting inside from the wing or leading the line, I bring energy, work rate, and a winning mentality every time I step on the pitch.
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
