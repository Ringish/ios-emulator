import React, {Component} from 'react';

export default class LockScreen extends Component {
	render() {

		return (
			<section className="lock-screen">
				<div className="date-time">
					<time className="time">
						13:12
					</time>
					<span className="date">Lördag 26 maj</span>
				</div>
			</section>
			);
	}
}