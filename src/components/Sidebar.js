import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import ImageStamp from "./ImageStamp";
import Color from "./ColorPicker";
import Reset from "./Reset";
import Save from "./Save";

export default class Sidebar extends Component {


	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">TOOLS</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">BRUSH SIZE</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section section--brush-color">
					<h3 className="section__heading">BRUSH COLOR</h3>
					<Color />
				</section>

				<section className="section section--image-stamp">
					<h3 className="section__heading">IMAGE STAMP</h3>
					<ImageStamp />
				</section>


				<section className="section section--reset-canvas">
					<h3 className="section__heading">RESET</h3>
					<Reset />
				</section>

				<section className="section section--save-canvas">
					<h3 className="section__heading">SAVE</h3>
					<Save />
				</section>

			</div>
		)
	}
}
