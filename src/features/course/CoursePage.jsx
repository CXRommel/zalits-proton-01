import HeroSection from "#src/features/course/sections/HeroSection";
import TeamSection from "#src/features/course/sections/TeamSection";

function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <TeamSection />
    </div>
  );
}

export default CoursePage;
