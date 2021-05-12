import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleClick = () => {
    toggleCycling()
  }
   
  handleKeyDown = (e) => {
    if(e.key === 'a'){
      resize('+')
    } else if(e.key === 's'){
      resize('-')
    } 
  }
  
  render() {
    return (
      <canvas 
        onKeyDown={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
