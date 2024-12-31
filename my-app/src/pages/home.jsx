import "./home.css"
import Navbar from "../components/navbar";
import LineDivider from "../components/line-divider";
import HomepageHero from "../components/homepage-hero";
import { Link } from "react-router-dom";

export function Homepage() {
    return (
        <>
            <Navbar />
            <HomepageHero />
            <LineDivider />
            <div className="container">
                <div className="block-1-left">

                </div>
                <div className="block-1-text">
                    <div className="block-1-text-title">What exactly is calisthenics?</div>
                    <br />
                    Calisthenics is a term used to describe a large variety of exercises, but the one thing they have in common is that all of them involve creating <strong><i>resistance through body weight</i></strong>. Whether you discovered calisthenics through seeing it at your local park, or saw a video on social media, it’s important you don’t rush the process. Despite how easy influencers make skills like the full planche look, in reality, it can take <strong><i>a couple years</i></strong> to accumulate the strength it takes to achieve that. Additionally, factors like height as weight can provide a significant handicap or advantage to learning certain skills. 
                    <br />
                    <br />
                    If you are starting calisthenics from <strong>ZERO</strong>, expect to be doing basic exercises for at least <strong><i>6-12 months</i></strong>. Depending on your starting fitness level, you may be able to move on to skill progressions faster, but basics are the single most important thing to master when you want to achieve high difficulty skills. The journey to your dream skill may last many years, but by following the right path, <strong><i>no skill is impossible</i></strong>.
                </div>
                <div className="block-1-right">

                </div>
            </div>

            <LineDivider />

            <div className="container">
                <div className="block-1-left">

                </div>
                <div className="block-1-text">
                    <div className="block-1-text-title">benefits</div>
                    <ul>
                        <li>A majority of calisthenics doesn't require equipment, meaning you can train anywhere at anytime.</li>
                        <br />
                        <li>Calisthenics equipment, if you choose to get it, is extremely low-cost and will save a lot of money when compared to a gym membership.</li>
                        <br />
                        <li>Skills in calisthenics are extremely impressive and are a tangible representation of the work and progress you make.</li>
                        <br />
                        <li>Calisthenics is an aesthetic sport, and the satisfaction and pride that comes with mastering a new skill is unmatched.</li>
                        <br />
                        <li>Training calisthenics increases muscle awareness, strength, body coordination and muscle mass.</li>
                        <br />
                        <li>Calisthenics, as with any other physical activity, provides various mental benefits, like improved mood, reduced stress, and increased confidence.</li>
                    </ul>
                    
                </div>
                <div className="block-1-right">

                </div>
            </div>

            <LineDivider />
            
            <div className="container">
                <div className="cta-container">
                    <div className="cta-block">
                        <div className="cta-title-1">tutorials</div>
                        <div className="cta-title-2">training</div>
                        <div className="cta-title-1">terminology</div>
                        <div className="cta-title-2">skill tree</div>
                        <div className="cta-title-1">visualization</div>
                        
                    </div>
                    <div className="cta-block">
                        <div className="cta-info">A collection of calisthenic skills and links to their tutorials.</div>
                        <div className="cta-info">Guides for beginners and intermediates about various calisthenics topics. </div>
                        <div className="cta-info">A short explanation for common terms, as well as showcasing how the progression chart and skill difficulties work.</div>
                        <div className="cta-info">A visualization of the roadmap for calisthenics skill, as well as the order and difficulty of learning them.</div>
                        <div className="cta-info">See how advanced skills are built from the ground up.</div>

                    </div>
                    <div className="cta-block">
                        <Link to = "/tutorials" className="cta-go-1">View Page</Link>
                        <Link to = "/training" className="cta-go-2">View Page</Link>
                        <Link to = "/terminology" className="cta-go-1">View Page</Link>
                        <Link to = "/" className="cta-go-2">View Page</Link>
                        <Link to = "/" className="cta-go-1">View Page</Link>

                    </div>
                </div>
                
            </div>

            <LineDivider />

            <div className="container">
                <div className="block-1-left">

                </div>
                <div className="block-1-text">
                    <div className="block-1-text-title">What exactly is calisthenics?</div>
                    <br />
                    Calisthenics is a term used to describe a large variety of exercises, but the one thing they have in common is that all of them involve creating <strong><i>resistance through body weight</i></strong>. Whether you discovered calisthenics through seeing it at your local park, or saw a video on social media, it’s important you don’t rush the process. Despite how easy influencers make skills like the full planche look, in reality, it can take <strong><i>a couple years</i></strong> to accumulate the strength it takes to achieve that. Additionally, factors like height as weight can provide a significant handicap or advantage to learning certain skills. 
                    <br />
                    <br />
                    If you are starting calisthenics from <strong>ZERO</strong>, expect to be doing basic exercises for at least <strong><i>6-12 months</i></strong>. Depending on your starting fitness level, you may be able to move on to skill progressions faster, but basics are the single most important thing to master when you want to achieve high difficulty skills. The journey to your dream skill may last many years, but by following the right path, <strong><i>no skill is impossible</i></strong>.
                </div>
                <div className="block-1-right">

                </div>
            </div>
        </>
    )
}