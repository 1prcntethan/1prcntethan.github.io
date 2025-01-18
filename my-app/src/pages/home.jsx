import "./home.css"
import Navbar from "../components/navbar";
import LineDivider from "../components/line-divider";
import HomepageHero from "../components/homepage-hero";
import { Link } from "react-router-dom";
import { svgIcon } from '../utilites/svg-icons.js';

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
                        <div className="cta-info">A collection of calisthenics skills and links to their tutorials.</div>
                        <div className="cta-info">Guides for beginners and intermediates about various calisthenics topics. </div>
                        <div className="cta-info">A short explanation for common terms, as well as showcasing how the progression chart and skill difficulties work.</div>
                        <div className="cta-info">A visualization of the roadmap for calisthenics skills, as well as the order and difficulty of learning them.</div>
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
                    <div className="block-1-text-title">What exercises will i learn?</div>
                    <br />
                    Calisthenics has five main pillars that most skills will fit into. Each pillar has its most difficult exercises, as well as plenty of progressions to work your way up. Since calisthenics has a low barrier to entry, you can start working towards your dream skill anywhere, anytime! Below are some of the most iconic and sought after skills.
                    <br />
                    <br />
                    <div className="showcase-block">
                        <div className="showcase-block--image">
                            {svgIcon.get("handstand")}
                        </div>
                        <div className="showcase-block--text">
                            <h3>handstand</h3>
                            <p>The handstand is a trademark skill of calisthenics. It requires impressive balance, activation, and determination to achieve. Contrary to popular belief, the handstand is one of the easier exercises compared to other skills.</p>
                        </div>
                    </div>
                    <div className="showcase-block">
                        <div className="showcase-block--text">
                            <h3>front lever</h3>
                            <p>One of the four horsemen of calisthenics, the front lever is an extremely spectacular pull skill. The back does the heavy lifting for this exercise, but it also requires core and straight arm strength.</p>
                        </div>
                        <div className="showcase-block--image">
                            {svgIcon.get("straddle-fl")}
                        </div>
                    </div>
                    <div className="showcase-block">
                        <div className="showcase-block--image">
                            {svgIcon.get("full-pl")}
                        </div>
                        <div className="showcase-block--text">
                            <h3>planche</h3>
                            <p>Another horsemen of calisthenics, the planche is generally considered the most difficult of the four, but also the most impressive. It puts heavy load on the shoulders, scapula and biceps.</p>
                        </div>
                    </div>
                    <div className="showcase-block">
                        <div className="showcase-block--text">
                            <h3>one arm handstand</h3>
                            <p>The one arm handstand is as majestic as it sounds, taking the regular handstand to the next level. The weight of your body is balanced on a singular arm, making this exercise extremely prestigous and difficult to obtain.</p>
                        </div>
                        <div className="showcase-block--image">
                            {svgIcon.get("one-arm-hs")}
                        </div>
                    </div>
                    <div className="showcase-block">
                        <div className="showcase-block--image">
                            ----------------------------------------------------------------
                        </div>
                        <div className="showcase-block--text">
                            <h3>handstand push-up</h3>
                            <p>Of the four horsemen, the handstand push-up is easily the most useful and versatile exercises to exist. Combining balance and strength, the HSPU is aesthetically pleasing, and is commonly used to train shoulder strength for planche.</p>
                        </div>
                    </div>
                    <div className="showcase-block">
                        <div className="showcase-block--text">
                            <h3>muscle-up</h3>
                            <p>The muscle-up is the easiest skill to obtain out of the four horsemen. Combining the strength of a pull-up and a dip, this exercise looks and feels as powerful as it sounds.</p>
                        </div>
                        <div className="showcase-block--image">
                            ------------------------------------------------------------------
                        </div>
                    </div>
                </div>
                <div className="block-1-right">

                </div>
            </div>
        </>
    )
}