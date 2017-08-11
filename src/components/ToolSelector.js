import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
	const { action, tool } = props;
	return (
		<div>
			<div className="tool_button">
				<button type="button" name="tool" id="brush-select"
					value={BRUSH}
					checked={tool === BRUSH}
					onClick={ (e) => { action(e.target.value) } } >BRUSH</button>
					<label htmlFor="brush-select"></label>
				</div>

				<div className="tool_button">
					<button type="button" name="tool" id="stamp-select"
						value={STAMP}
						checked={tool === STAMP}
						onClick={ (e) => { action(e.target.value) } }>STAMP</button>
						<label htmlFor="stamp-select"></label>
					</div>

					<div className="tool_button">
						<button type="button" name="tool" id="eraser-select"
							value={ERASER}
							checked={tool === ERASER}
							onClick={ (e) => { action(e.target.value) } }>ERASER</button>
							<label htmlFor="eraser-select"></label>
						</div>
					</div>
				);
			}

			ToolSelector.propTypes = {
				tool: PropTypes.string.isRequired,
				action: PropTypes.func.isRequired
			};
