import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ShopItemClass extends Component {
	static propTypes = {
		item: PropTypes.shape(
			{
				brand: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				descriptionFull: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				currency: PropTypes.string.isRequired
			}
		)
	}

	render() {
		const {title, brand, description, descriptionFull, currency, price} = this.props.item;
		return (
			<div class="main-content">
				<h2>{brand}</h2>
				<h1>{title}</h1>
				<h3>{description}</h3>
				<div class="description">
					{descriptionFull}
				</div>
				<div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
				<div class="divider"></div>
				<div class="purchase-info">
					<div class="price">{currency + price.toFixed(2)}</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		)
	}

}
