// Write your code here
import {Component} from 'react'
import './index.css'

const HeadsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossCoinImage: HeadsImg, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HeadsImg
      latestHeadsCount += 1
    } else {
      tossImage = TailsImg
      latestTailsCount += 1
    }
    this.setState({
      tossCoinImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossCoinImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossCoinImage} className="image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total: {totalCount}</p>
            <p className="count-text">Heads: {headsCount}</p>
            <p className="count-text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
