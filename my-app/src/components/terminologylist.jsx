import React from 'react';
import { Link } from 'react-router-dom';
import "./shortformlist.css";

export default function TerminologyList() {
    return (
        <>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="sets x reps" text="A set is one group of reps. A rep is one repetition of an exercise. For example: 3 x 5 push-ups means doing 5 push-ups, 3 times (3 sets)."/>
                    <SingleTerm title="rest" text="Usually measured in minutes, rest is the time taken between sets to allow the muscles and body to rest/recover."/>
                    <SingleTerm title="volume" text="The total amount of exercise performed in one session. High volume means high total amount of reps/holds. Low volume means low total amount of reps/holds."/>
                    <SingleTerm title="holds" text="Used to refer to static exercises, one hold represents a single attempt of holding a static position."/>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="failure" text="The point where you give out and physically cannot complete another rep or hold for another second."/>
                    <SingleTerm title="reps in reserve (rir)" text="The amount of reps before failure; doing a set with 2 RIR means going until you feel like you can do 2 more reps, but stopping instead."/>
                    <SingleTerm title="static holds/exercise" text="Exercises that involve holding a certain position, like planche or front lever. Also known as an isometric exercise. A majority of skills fall under this catergory."/>
                    <SingleTerm title="dynamic exercise" text="Exercises that involve movement, like pull-ups or planche leans. Freestyle calisthenics falls under this catergory."/>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="progression" text="A harder version/variation of an exercise."/>
                    <SingleTerm title="regression" text="A easier version/variation of an exercise."/>
                    <SingleTerm title="eccentric" text="The part of an exercise involving the target muscle lengthening, muscle length becomes longer."/>
                    <SingleTerm title="concentric" text="The part of an exercise involving the target muscle contracting, muscle length becomes shorter."/>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="range of motion (rom)" text="Refers to the range an exercise goes through, typically for a joint. For example, a full push-up involves a complete range from chest to the floor and back up."/>
                    <SingleTerm title="time under tension (tut)" text="The time during an exercise where the muscle is under tension. This is necessary to provide enough stimulus for muscle growth."/>
                    <SingleTerm title="negatives" text="Controlled, slow descents during an exercise, focusing on the eccentric phase. For example, slowly lowering yourself during a pull-up."/>
                    <SingleTerm title="posterior pelvic tilt (ppt)" text="Posterior pelvic tilt is a pelvic position where the pelvis is tilted backward, flattening the lower back and tucking in your butt. This pelvic position is optimal and most commonly referenced in planche."/>
                </div>
            </div>
        </>
    )
}


function SingleTerm(term) {
    return (
        <div class="single-term">
            <div class="term-title">
                {term.title}
            </div>
            <div class="term-text">
                {term.text}
            </div>
        </div>
    )
}
