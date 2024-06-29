import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Index";
import { TextSlider } from "./components/text-slider/Index";
import { TeamManagement } from "./components/team-management/Index";
import { Bridge } from "./components/bridge/Index";
import { ProblemSolution } from "./components/problem-solution/Index";
import { BorderDivider } from "./components/borders-divider/Index";
import { LottieAnimation } from "./components/animation/Index";
import { CardSection } from "./components/card-section/CardSections";
import { FoldingCard } from "./components/folding-cards/Index";
import { SliderCard } from "./components/slider-card/Index";
import { CaseStudy } from "./components/case-study/Index";
import { DataTool } from "./components/data-tool/Index";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" xl:px-40 xl:my-6 lg:px-32 lg:my-3 px-10 py-3">
        <Hero />
      </div>
      <TextSlider />
      <TeamManagement />
      <Bridge />
      <ProblemSolution />
      <BorderDivider />
      <LottieAnimation />
      <CardSection />
      <SliderCard />
      <CaseStudy />
      <DataTool />
      <div className="h-[1000px]"></div>
    </>
  );
}
