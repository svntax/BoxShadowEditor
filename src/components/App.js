import React from "react";
import "./App.css";

class App extends React.Component {
	
	constructor(props){
		super(props);
		
		//box-shadow properties: h-offset, v-offset, blur, spread, color, "inset" or none
		this.state = {width: 300, height: 300, hOffset: 25, vOffset: 25, blur: 0, spread: 0, color: "gray", inset: false,
			boxStyle: {
				width: "300px",
				height: "300px",
				backgroundColor: "#7fb2f0",
				boxShadow: "25px 25px gray"
			}
		};
	}
	
	widthSliderChanged = (event) => {
		this.setState({width: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	heightSliderChanged = (event) => {
		this.setState({height: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	hOffsetChanged = (event) => {
		this.setState({hOffset: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	vOffsetChanged = (event) => {
		this.setState({vOffset: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	blurChanged = (event) => {
		this.setState({blur: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	spreadChanged = (event) => {
		this.setState({spread: event.target.value});
		this.updateBoxShadow(this.state.inset);
	}
	
	colorChanged = (event) => {
		this.setState({color: String(event.target.value)});
		this.updateBoxShadow(this.state.inset, event.target.value);
	}
	
	insetChanged = (event) => {
		this.setState({inset: event.target.checked});
		this.updateBoxShadow(event.target.checked);
	}
	
	updateBoxShadow = (inset, shadowColor) => {
		let value = this.state.hOffset + "px " + this.state.vOffset + "px " + this.state.blur + "px " + this.state.spread + "px " + (shadowColor ? shadowColor : this.state.color);
		if(inset){
			value += " inset";
		}
		this.setState({
			boxStyle: {
				width: this.state.width + "px",
				height: this.state.height + "px",
				backgroundColor: "#7fb2f0",
				boxShadow: value
			}
		});
	}
	
	render(){
		return (
			<div className="app">
				<div className="main-header">Box Shadow Editor</div>
				
				<div className="ui-controls">
					<div className="ui-controls-header">Controls</div>
					<div className="ui-row">
						<strong>Shadow Color:</strong>
						<input type="color" onChange={this.colorChanged} />
						<strong>Inset:
						<input type="checkbox" onChange={this.insetChanged} />
						</strong>
					</div>
					<div className="ui-row">
						<strong>Width: {this.state.width}</strong>
						<input className="ui-slider" type="range" min="1" max="400" value={this.state.width} onChange={this.widthSliderChanged} />
					</div>
					<div className="ui-row">
						<strong>Height: {this.state.height}</strong>
						<input className="ui-slider" type="range" min="1" max="400" value={this.state.height} onChange={this.heightSliderChanged} />
					</div>
					<div className="ui-row">
						<strong>H-Offset: {this.state.hOffset}</strong>
						<input className="ui-slider" type="range" min="-250" max="250" value={this.state.hOffset} onChange={this.hOffsetChanged} />
					</div>
					<div className="ui-row">
						<strong>V-Offset: {this.state.vOffset}</strong>
						<input className="ui-slider" type="range" min="-250" max="250" value={this.state.vOffset} onChange={this.vOffsetChanged} />
					</div>
					<div className="ui-row">
						<strong>Blur Radius: {this.state.blur}</strong>
						<input className="ui-slider" type="range" min="0" max="50" value={this.state.blur} onChange={this.blurChanged} />
					</div>
					<div className="ui-row">
						<strong>Spread Radius: {this.state.spread}</strong>
						<input className="ui-slider" type="range" min="-100" max="100" value={this.state.spread} onChange={this.spreadChanged} />
					</div>
				</div>
				
				<div style={this.state.boxStyle}></div>
			</div>
		);
	}
	
}

export default App;