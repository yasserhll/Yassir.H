import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Diplôme en Développement Digital",
    institution: "OFPPT",
    location: "Maroc",
    period: "2022 – 2025"
  },
  {
    degree: "Baccalauréat",
    institution: "Lycée Chahid Saleh Serghini",
    location: "Maroc",
    period: "2022"
  }
];

const Education = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-4">
            Éducation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Formation & <span className="text-gradient">Diplômes</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card-hover rounded-2xl p-6 flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold font-display mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium mb-2">{edu.institution}, {edu.location}</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
