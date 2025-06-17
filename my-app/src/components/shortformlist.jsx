import React from 'react';
import "./shortformlist.css";

export default function ShortFormList() {
    return (
        <>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="pu" text="push-up"/>
                    <SingleTerm title="mu" text="muscle-up"/>
                    <SingleTerm title="pppu" text="pseudo planche push-up"/>
                    <SingleTerm title="hs" text="handstand"/>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="pl" text="planche"/>
                    <SingleTerm title="fl" text="front lever"/>
                    <SingleTerm title="bl" text="back lever"/>
                    <SingleTerm title="hspu" text="handstand pushup"/>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms">
                    <SingleTerm title="oac/oap" text="one arm chinup/pullup"/>
                    <SingleTerm title="oahs" text="one arm handstand"/>
                    <SingleTerm title="oapl" text="one arm planche"/>
                    <SingleTerm title="oafl" text="one arm front lever"/>
                </div>
            </div>
        </>
    )
}


function SingleTerm(term) {
    return (
        <div className="single-term">
            <div className="term-title">
                {term.title}
            </div>
            <div className="term-text">
                shortform for {term.text}
            </div>
        </div>
    )
}
