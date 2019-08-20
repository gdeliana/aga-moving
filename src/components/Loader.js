import React from 'react';
import anime from 'animejs';
import {generateId} from '../customFns/helpers';

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.outerCircleID = generateId();
    this.innerCircleID = generateId();
    this.hourArrowID = generateId();
    this.minuteArrowID = generateId();
  }

  componentDidMount() {
    this.circleInner = anime ({
      targets: ['#'+this.innerCircleID],
      rotate: 180,
      duration: 1600,
      loop: true,
      elasticity: 600,
      easing: 'easeOutElastic',
      delay: function(el, index) {
        return index * 80;
      },
    });

    this.circleOuter = anime ({
      targets: ['#'+this.outerCircleID],
      rotate: -180,
      duration: 3000,
      loop: true,
      elasticity: 1500,
      easing: 'easeOutElastic',
      delay: function(el, index) {
        return index * 80;
      },
    });

    this.minuteAnimation = anime ({
      targets: ['#'+this.minuteArrowID],
      rotate: 360,
      duration: 3000,
      loop: true,
      elasticity: 0,
      easing: 'easeOutElastic',
      delay: function(el, index) {
        return index * 80;
      },
    });

    this.HourAnimation = anime ({
      targets: ['#'+this.hourArrowID],
      rotate: 720,
      duration: 3000,
      loop: true,
      elasticity: 0,
      easing: 'easeOutElastic',
      delay: function(el, index) {
        return index * 80;
      },
    });
  }

  componentWillUnmount() {
    this.circleInner.pause();
    this.circleOuter.pause();
    this.HourAnimation.pause();
    this.minuteAnimation.pause();
  }

  render = () => {
    return (
      <div className="loader" style={{
        display : (this.props.visible ? 'flex' : 'none'),
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999999,
        backgroundColor: '#80808042'
      }}>
        <div className="loader-image">
          <svg style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: 'auto',
            left: 0,
            right: 0,
            width: '40%'
          }}
          width="100%"
          height="100%"
          version="1.1"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg">
           <defs>
            <marker id="marker5458" overflow="visible" orient="auto">
             <path transform="matrix(-.2 0 0 -.2 -1.2 0)" d="m0 0 5-5-17.5 5 17.5 5z" fillRule="evenodd" stroke="#000" strokeWidth="1pt"/>
            </marker>
            <marker id="Arrow1Send" overflow="visible" orient="auto">
             <path transform="matrix(-.2 0 0 -.2 -1.2 0)" d="m0 0 5-5-17.5 5 17.5 5z" fillRule="evenodd" stroke="#000" strokeWidth="1pt"/>
            </marker>
           </defs>
           <circle style={{
               transformOrigin: 'center'
             }} id={this.outerCircleID} cx="50%" cy="50%" r="60" opacity=".893" stroke="blue" fill="grey" strokeDasharray="68.76, 68.76000000000000512" strokeWidth="2.865"/>
           <circle style={{
               transformOrigin: 'center'
             }} id={this.innerCircleID} cx="50%" cy="50%" r="40" opacity=".893" stroke="#e20002" fill="rgb(218, 215, 215)" strokeDasharray="68.76, 89.76000000000000512" strokeWidth="2.865"/>
           <path style={{
               transformOrigin: 'center'
             }} id={this.minuteArrowID} d="m75 75v-22.53" markerEnd="url(#marker5458)" stroke="#000" strokeLinecap="square" strokeWidth="3.365"/>
           <path id={this.hourArrowID} d="m75 75h25.885" markerEnd="url(#Arrow1Send)" stroke="#000" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="3.2" strokeWidth="2.265" style={{
              paintOrder: 'normal',
              transformOrigin: 'center'
            }} />
          </svg>

        </div>

      </div>
    )
  }
}

export default Loader;
