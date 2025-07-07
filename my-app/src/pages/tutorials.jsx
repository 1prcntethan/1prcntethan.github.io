import Navbar from "../components/navbar";
import "./tutorials.css";
import LineDivider from "../components/line-divider";
import TutorialListHP from "../components/hp-tutorial-list";
import TutorialListVP from "../components/vp-tutorial-list";
import TutorialListHPL from "../components/hpl-tutorial-list";
import TutorialListVPL from "../components/vpl-tutorial-list";
import TutorialListL from "../components/legs-tutorial-list";
import Footer from "../components/footer";
import BetaDisclaimer from "../components/betadisclaimer";
import TutorialListCM from "../components/coremisc-tutorial-list";
import Select from 'react-select';
import { Link } from "react-router-dom";



const options = [{value: "assisted push-up", label: "assisted push-up"},
  {value: "dip", label: <Link to="/tutorials/dip">dip</Link>},
  {value: "elbow lever", label: "elbow lever"},
  {value: "planche lean", label: "planche lean"},
  {value: "pseudo push-up", label: "pseudo push-up"},
  {value: "tuck planche", label: "tuck planche"},
  {value: "tuck planche pu", label: "tuck planche pu"},
  {value: "adv. tuck planche", label: "adv. tuck planche"},
  {value: "adv. tuck planche pu", label: "adv. tuck planche pu"},
  {value: "90 degree hold", label: "90 degree hold"},
  {value: "back lever", label: "back lever"},
  {value: "super adv. tuck pl", label: "super adv. tuck pl"},
  {value: "straddle planche", label: "straddle planche"},
  {value: "straddle planche pu", label: "straddle planche pu"},
  {value: "half lay planche", label: "half lay planche"},
  {value: "full planche", label: "full planche"},
  {value: "full planche pu", label: "full planche pu"},
  {value: "one arm planche", label: "one arm planche"},
  {value: "maltese", label: "maltese"},

  //HORIZONTAL PUSH SKILLS ^^^

  {value: "pike push-up", label: "pike push-up"},
  {value: "crow pose", label: "crow pose"},
  {value: "assisted handstand", label: "assisted handstand"},
  {value: "handstand", label: "handstand"},
  {value: "elevated pike pu", label: "elevated pike pu"},
  {value: "bent arm press to hs", label: "bent arm press to hs"},
  {value: "straight arm press to hs", label: "straight arm press to hs"},
  {value: "bent arm stand", label: "bent arm stand"},
  {value: "assisted hspu", label: "assisted hspu"},
  {value: "hspu", label: "hspu"},
  {value: "deep hspu", label: "deep hspu"},
  {value: "90 degree pu", label: "90 degree pu"},
  {value: "assisted oahs", label: "assisted oahs"},
  {value: "oahs", label: "oahs"},
  {value: "oa flag", label: "oa flag"},


  // VERTICAL PUSH SKILLS ^^^

  {value: "assisted inverted row", label: "assisted inverted row"},
  {value: "inverted row", label: "inverted row"},
  {value: "tuck fl", label: "tuck fl"},
  {value: "tuck fl row", label: "tuck fl row"},
  {value: "pike fl", label: "pike fl"},
  {value: "pike fl row", label: "pike fl row"},
  {value: "adv. tuck fl", label: "adv. tuck fl"},
  {value: "super adv. tuck fl", label: "super adv. tuck fl"},
  {value: "adv. tuck fl row", label: "adv. tuck fl row"},
  {value: "straddle fl", label: "straddle fl"},
  {value: "straddle fl row", label: "straddle fl row"},
  {value: "half lay fl", label: "half lay fl"},
  {value: "full front lever", label: "full front lever"},
  {value: "full fl row", label: "full fl row"},
  {value: "front lever touch", label: "front lever touch"},

  // HORIZONTAL PULL SKILLS^^^

  {value: "deadhang", label: "deadhang"},
  {value: "active hang", label: "active hang"},
  {value: "assisted pull-up", label: "assisted pull-up"},
  {value: "pull-up", label: "pull-up"},
  {value: "scapula pull-up", label: "scapula pull-up"},
  {value: "chest pull-up", label: "chest pull-up"},
  {value: "waist pull-up", label: "waist pull-up"},
  {value: "muscle-up", label: "muscle-up"},
  {value: "archer pull-up", label: "archer pull-up"},
  {value: "assisted oac", label: "assisted oac"},
  {value: "assisted oap", label: "assisted oap"},
  {value: "oac/oap", label: "oac/oap"},
  {value: "weighted pull-ups", label: "weighted pull-ups"},
  {value: "butterfly", label: "butterfly"},


  //VERTICAL PULL SKILLS ^^

  {value: "bodyweight squat", label: "bodyweight squat"},
  {value: "split squat", label: "split squat"},
  {value: "assisted pistol squat", label: "assisted pistol squat"},
  {value: "bulgarian split squat", label: "bulgarian split squat"},
  {value: "reverse nordic curl", label: "reverse nordic curl"},
  {value: "nordic curl", label: "nordic curl"},
  {value: "sissy squat", label: "sissy squat"},
  {value: "pistol squat", label: "pistol squat"},
  {value: "shrimp squat", label: "shrimp squat"},
  {value: "dragon pistol squat", label: "dragon pistol squat"},

  //LEG SKILLS ^^^

  {value: "sit-up", label: "sit-up"},
  {value: "hollow body hold", label: "hollow body hold"},
  {value: "dragon flag", label: "dragon flag"},
  {value: "l-sit compression", label: "l-sit compression"},
  {value: "l-sit", label: "l-sit"},
  {value: "v-sit", label: "v-sit"},
  {value: "i-sit", label: "i-sit"},
  {value: "manna", label: "manna"},
  {value: "human flag", label: "human flag"},
  {value: "victorian", label: "victorian"}
];

const selectStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    fontFamily: 'Fira Sans',
    margin: '0 auto',
    backgroundColor: '#333333',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: 'none',
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: 'none',
    backgroundColor: state.isSelected ? 'rgba(71, 0, 80, 0.699)' : '#333333',
    color: 'white',
    fontFamily: 'Fira Sans',
    fontWeight: '200'

  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    fontFamily: 'Fira Sans',
    fontWeight: '200'
  }),
};

export function Tutorials() {
  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="tutorial-header">
        Here is the full list of (almost) all common calisthenics skills. This
        list will split the skills into their respective categories and list
        them in order from easiest to hardest. Progressions and difficulty level
        can be found on the skill’s page or by looking at the skill tree.
      </div>
      <div className="tutorial-selector">
        <Select options={options} styles={selectStyles} />
      </div>
      <LineDivider />
      <br />
      <TutorialListHP />
      <br />
      <LineDivider />
      <br />
      <TutorialListVP />
      <br />
      <LineDivider />
      <br />
      <TutorialListHPL />
      <br />
      <LineDivider />
      <br />
      <TutorialListVPL />
      <br />
      <LineDivider />
      <br />
      <TutorialListL />
      <br />
      <LineDivider />
      <br />
      <TutorialListCM />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
