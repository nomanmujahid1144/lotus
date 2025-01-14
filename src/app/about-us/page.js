import { FooterSection } from "../components/about-us/footer/Index";
import { IndexAboutUs } from "../components/about-us/Index";
import { OurJourney } from "../components/about-us/journey/Index";
import { LeaderShipTeam } from "../components/about-us/leadership-team/Index";
import { Partners } from "../components/about-us/partners/Index";


export default function AboutUs() {
    return (
        <>
            <div className="2xl:px-60 xl:px-10 lg:px-9 px-5 bg-gray-light">
                <div className="2xl:py-12 lg:py-10 py-5 h-screen">
                    <IndexAboutUs />
                </div>
                <OurJourney />
            </div>
            <div className="2xl:px-60 xl:px-10 lg:px-9 px-5 bg-white">
                <LeaderShipTeam />
                <Partners />
                <FooterSection />
            </div>
        </>
    )
}