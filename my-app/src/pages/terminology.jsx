import Navbar from "../components/navbar";
import "./terminology.css"
import TermSectionTitle from "../components/terminology-section-title";

export function Terminology() {
    return (
        <>
            <Navbar />
            <div className="intro-block">
                Calisthenics is a relatively niche sport compared to many others, so there may be terms you are not familiar with. To use the site as effectively as possible, skim over the content here, and feel free to come back if necessary!
            </div>
            <TermSectionTitle title="skill shortform" />
        </>
    )
}