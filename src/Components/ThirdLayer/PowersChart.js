import React, { Component } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

export class PowersCharts extends Component {
  render() {
      
    return (
      <div className='powersChart' >
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={this.props.power}
          duration={2.5}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
              animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <p>{this.props.powerName}</p>
      </div>
    );
  }
}

export default PowersCharts;
