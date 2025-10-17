import HeroSection from "./sections/HeroSection";
import TeamSection from "./sections/TeamSection";

function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <TeamSection />
    </div>
  );
}

export default CoursePage;
