import React, {Component} from 'react';
import StatusBar from '../components/StatusBar.js';
import LockScreen from './LockScreen.js';
export default class App extends Component {

	render() {
		

		return (
			<div className="iphone">
			<div className="screen">
			<StatusBar />
			<LockScreen />
			</div>
			</div>
			);

	}
}