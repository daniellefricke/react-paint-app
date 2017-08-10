import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import ImageStamp from "./ImageStamp";
import Color from "./ColorPicker";
import Reset from "./Reset";

export default class Sidebar extends Component {
		handleColorChange(color) {
			// let color = {this.props.color}
		}

	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section section--brush-color">
					<Color />
				</section>

				<section className="section section--image-stamp">
					<ImageStamp />
				</section>


				<section className="section section--reset-canvas">
					<Reset />
				</section>
			</div>
		)
	}
}
