import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import newChildColor from './newChildColor.js'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  newColor = () => {
    const color = getRandomColor()
    this.setState({
      color: color,
      childColor: getReducedColor(color)
    })
  }

  render() {
    const {color, childColor} = this.state
    return (
      <div onClick={this.newColor} className="tier1" style={{backgroundColor: color, color: color}}>
        <Tier2 color={childColor} handleChildClick={newChildColor.bind(this)} />
        <Tier2 color={childColor} handleChildClick={newChildColor.bind(this)} />
      </div>
    )
  }
}
