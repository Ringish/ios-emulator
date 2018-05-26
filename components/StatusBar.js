import React, {Component} from 'react';

export default class StatusBar extends Component {
	render() {

		return (
			<header className="status-bar">
			<i className="fas fa-circle"></i>
			<i className="fas fa-circle"></i>
			<i className="fas fa-circle"></i>
			<i className="fas fa-circle"></i>
			<i className="fas fa-circle"></i>
			<i className="fas fa-wifi"></i>

			<span className="clock">13:12</span>
			<i className="fas fa-battery-full"></i>
			</header>
			);
	}
}