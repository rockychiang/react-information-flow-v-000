import {getRandomColor, getReducedColor} from './randomColorGenerator.js'

export default function newChildColor(e) {
  e.stopPropagation();
  this.setState({
    childColor: getRandomColor()
  })
}
