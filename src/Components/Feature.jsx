import React from "react";
import FeatureBox from "./FeatureBox";
import FeatureImage from '../images/feature_1.png';
import FeatureImage1 from '../images/feature_2.png';
import FeatureImage2 from '../images/feature_3.png';


function Feature(props) {
    return (
        <div id="features">
            <div className="a-container" >
                <FeatureBox image={FeatureImage} title='Web Development'/>
                <FeatureBox image={FeatureImage1} title='App Development'/>
                <FeatureBox image={FeatureImage2} title='Cloud'/>
            </div>
        </div>
    )
}

export default Feature;