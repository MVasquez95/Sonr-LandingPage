import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="about-text">
                <h2>{props.title }</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus doloribus, laudantium doloremque expedita veniam odio cumque, ex error laboriosam fugit saepe, culpa facere suscipit necessitatibus! Dolor, repudiandae neque. Vero.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;