import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar } from 'react-icons/fa'

const CoinTile = (props) => {
  return (
    <Link className="coin-tile" to={`/coin/${props.coin.symbol}`}>
      <div className="coin-tile__order text-center">{props.index + 1}</div>
      <div className="coin-tile__name">
        <img src={props.coin.imgUrl} alt="coin logo" />
        {props.coin.name}
        <span className="coin-tile__symbol">{props.coin.symbol}</span>
      </div>
      <div className="coin-tile__price">
        <span>$</span>
        <span>{props.coin.price.toFixed(2)}</span>
      </div>
      <div className="coin-tile__change">{props.coin.changePctDay.toFixed(2)}%</div>
      <div className="coin-tile__cap">{(props.coin.mktCap / 1000000000).toFixed(1)}B</div>
      <div className="coin-tile__favorite"><FaRegStar size="2.2rem" /></div>
    </Link>
  )
}

export default CoinTile