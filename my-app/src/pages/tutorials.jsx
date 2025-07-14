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
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { skillLinks } from "../utilites/skillLinks";

const options = [
  { value: "Assisted Push-up", label: "Assisted Push-up" },
  { value: "Dip", label: "Dip" },
  { value: "Elbow Lever", label: "Elbow Lever" },
  { value: "Planche Lean", label: "Planche Lean" },
  { value: "Pseudo Push-up", label: "Pseudo Push-up" },
  { value: "Tuck Planche", label: "Tuck Planche" },
  { value: "Tuck Planche PU", label: "Tuck Planche PU" },
  { value: "Adv. Tuck Planche", label: "Adv. Tuck Planche" },
  { value: "Adv. Tuck Planche PU", label: "Adv. Tuck Planche PU" },
  { value: "90 Degree Hold", label: "90 Degree Hold" },
  { value: "Back Lever", label: "Back Lever" },
  { value: "Super Adv. Tuck Planche", label: "Super Adv. Tuck Planche" },
  { value: "Straddle Planche", label: "Straddle Planche" },
  { value: "Straddle Planche PU", label: "Straddle Planche PU" },
  { value: "Half Lay Planche", label: "Half Lay Planche" },
  { value: "Full Planche", label: "Full Planche" },
  { value: "Full Planche PU", label: "Full Planche PU" },
  { value: "One Arm Planche", label: "One Arm Planche" },
  { value: "Maltese", label: "Maltese" },

  //HORIZONTAL PUSH SKILLS ^^^

  { value: "Pike Push-up", label: "Pike Push-up" },
  { value: "Crow Pose", label: "Crow Pose" },
  { value: "Assisted Handstand", label: "Assisted Handstand" },
  { value: "Handstand", label: "Handstand" },
  { value: "Elevated Pike PU", label: "Elevated Pike PU" },
  { value: "Bent Arm Press to HS", label: "Bent Arm Press to HS" },
  { value: "Straight Arm Press to HS", label: "Straight Arm Press to HS" },
  { value: "Bent Arm Stand", label: "Bent Arm Stand" },
  { value: "Assisted HSPU", label: "Assisted HSPU" },
  { value: "HSPU", label: "HSPU" },
  { value: "Deep HSPU", label: "Deep HSPU" },
  { value: "90 Degree PU", label: "90 Degree PU" },
  { value: "Assisted OAHS", label: "Assisted OAHS" },
  { value: "OAHS", label: "OAHS" },
  { value: "OA Flag", label: "OA Flag" },

  // VERTICAL PUSH SKILLS ^^^

  { value: "Assisted Inverted Row", label: "Assisted Inverted Row" },
  { value: "Inverted Row", label: "Inverted Row" },
  { value: "Tuck Front Lever", label: "Tuck Front Lever" },
  { value: "Tuck Front Lever Row", label: "Tuck Front Lever Row" },
  { value: "Pike Front Lever", label: "Pike Front Lever" },
  { value: "Pike Front Lever Row", label: "Pike Front Lever Row" },
  { value: "Adv. Tuck Front Lever", label: "Adv. Tuck Front Lever" },
  {
    value: "Super Adv. Tuck Front Lever",
    label: "Super Adv. Tuck Front Lever",
  },
  { value: "Adv. Tuck Front Lever Row", label: "Adv. Tuck Front Lever Row" },
  { value: "Straddle Front Lever", label: "Straddle Front Lever" },
  { value: "Straddle Front Lever Row", label: "Straddle Front Lever Row" },
  { value: "Half Lay Front Lever", label: "Half Lay Front Lever" },
  { value: "Full Front Lever", label: "Full Front Lever" },
  { value: "Full FL Row", label: "Full FL Row" },
  { value: "Front Lever Touch", label: "Front Lever Touch" },

  // HORIZONTAL PULL SKILLS^^^

  { value: "Dead Hang", label: "Dead Hang" },
  { value: "Active Hang", label: "Active Hang" },
  { value: "Assisted Pull-up", label: "Assisted Pull-up" },
  { value: "Pull-up", label: "Pull-up" },
  { value: "Scapula Pull-up", label: "Scapula Pull-up" },
  { value: "Chest Pull-up", label: "Chest Pull-up" },
  { value: "Waist Pull-up", label: "Waist Pull-up" },
  { value: "Muscle-up", label: "Muscle-up" },
  { value: "Archer Pull-up", label: "Archer Pull-up" },
  { value: "Assisted OAC", label: "Assisted OAC" },
  { value: "Assisted OAP", label: "Assisted OAP" },
  { value: "OAC/OAP", label: "OAC/OAP" },
  { value: "Weighted Pull-ups", label: "Weighted Pull-ups" },
  { value: "Butterfly", label: "Butterfly" },

  //VERTICAL PULL SKILLS ^^

  { value: "Bodyweight Squat", label: "Bodyweight Squat" },
  { value: "Split Squat", label: "Split Squat" },
  { value: "Assisted Pistol Squat", label: "Assisted Pistol Squat" },
  { value: "Bulgarian Split Squat", label: "Bulgarian Split Squat" },
  { value: "Reverse Nordic Curl", label: "Reverse Nordic Curl" },
  { value: "Nordic Curl", label: "Nordic Curl" },
  { value: "Sissy Squat", label: "Sissy Squat" },
  { value: "Pistol Squat", label: "Pistol Squat" },
  { value: "Shrimp Squat", label: "Shrimp Squat" },
  { value: "Dragon Pistol Squat", label: "Dragon Pistol Squat" },

  //LEG SKILLS ^^^

  { value: "Sit-up", label: "Sit-up" },
  { value: "Hollow Body Hold", label: "Hollow Body Hold" },
  { value: "L-sit Compression", label: "L-sit Compression" },
  { value: "L-sit", label: "L-sit" },
  { value: "Dragon Flag", label: "Dragon Flag" },
  { value: "V-sit", label: "V-sit" },
  { value: "I-sit", label: "I-sit" },
  { value: "Manna", label: "Manna" },
  { value: "Human Flag", label: "Human Flag" },
  { value: "Victorian", label: "Victorian" },
];

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    fontFamily: "Fira Sans",
    margin: "0 auto",
    backgroundColor: "#333333",
    border: "1px solid rgb(128, 128, 128)",
    borderRadius: "8px",
    boxShadow: "none",
    color: "white",
    "&:hover": {
      border: "1px solid rgb(128, 128, 128)", // override hover border
    },
    ...(state.isFocused && {
      borderColor: "#333333",
      boxShadow: "none",
    }),
  }),
  option: (provided, state) => ({
    ...provided,
    border: "1px solid rgb(128, 128, 128)",
    borderRadius: "0px",
    boxShadow: "none",
    backgroundColor: state.isFocused ? "#641b547a" : "#333333",
    color: "white",
    transition: "background-color 0.2s ease",
    fontFamily: "Fira Sans",
    fontWeight: "200",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    fontFamily: "Fira Sans",
    fontWeight: "200",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    fontFamily: "Fira Sans",
    fontWeight: "200",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#333333",
    border: "0px solid #ccc",
    borderRadius: "0px",
    boxShadow: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "#333333",
    padding: 0,
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    fontFamily: "Fira Sans",
    fontWeight: "200",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgb(128, 128, 128)",
    "&:hover": {
      color: "rgb(128, 128, 128)",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "rgb(128, 128, 128)",
  }),
};

export function Tutorials() {
  const navigate = useNavigate();

  const incompleteSkills = [
    "90 Degree Hold",
    "Back Lever",
    "Straddle Planche",
    "Straddle Planche PU",
    "Half Lay Planche",
    "Full Planche",
    "Full Planche PU",
    "One Arm Planche",
    "Maltese",
    "Full FL Row",
    "Front Lever Touch",
    "Bent Arm Press to HS",
    "Straight Arm Press to HS",
    "Deep HSPU",
    "90 Degree PU",
    "Assisted OAHS",
    "OAHS",
    "OA Flag",
    "Scapula Pull-up",
    "Archer Pull-up",
    "Clean Muscle-Up",
    "Assisted OAC",
    "Assisted OAP",
    "OAC/OAP",
    "Weighted Pull-ups",
    "Butterfly",
    "Bodyweight Squat",
    "Split Squat",
    "Assisted Pistol Squat",
    "Bulgarian Split Squat",
    "Reverse Nordic Curl",
    "Nordic Curl",
    "Sissy Squat",
    "Pistol Squat",
    "Shrimp Squat",
    "Dragon Pistol Squat",
    "Dragon Flag",
    "L-sit Compression",
    "L-sit",
    "V-sit",
    "I-sit",
    "Manna",
    "Human Flag",
    "Victorian",
  ];

  const handleChange = (selectedOption) => {
    navigate(
      incompleteSkills.includes(selectedOption.value)
        ? "/tutorials/incomplete"
        : skillLinks.get(selectedOption.value)
    );
  };

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
        <Select
          options={options}
          styles={selectStyles}
          onChange={handleChange}
          placeholder="Search a skill..."
          noOptionsMessage={() => "No matching skills found!"}
          classNamePrefix="tutorial-select"
        />
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
