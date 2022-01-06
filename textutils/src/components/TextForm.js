import React, { useState } from "react";

export default function TextForm(props) {
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleClearText = () => {
		let newText = " ";
		setText(newText);
	};
	const handleCapCase = () => {
		let arr = text.split(" ");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		}
		let newText = arr.join(" ");
		setText(newText);
	};
	const [text, setText] = useState("");
	// text = "New Text";
	// setText("New Text");

	return (
		<>
			<div>
				<h2>{props.heading}</h2>
				<div className='mb-3'>
					<textarea
						className='form-control'
						value={text}
						onChange={handleOnChange}
						id='myBox'
						rows='8'
					></textarea>
				</div>
				<button className='btn btn-sm btn-primary ' onClick={handleUpClick}>
					Uppercase
				</button>
				<button className='btn btn-sm btn-info mx-2' onClick={handleLoClick}>
					Lowercase
				</button>
				<button className='btn btn-sm btn-dark mx-2' onClick={handleClearText}>
					Clear Text
				</button>
				<button className='btn btn-sm btn-warning mx-2' onClick={handleCapCase}>
					Capitalize Case
				</button>
			</div>

			<div className='container my-3'>
				<h2>Your Text Summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} minutes to read.</p>
			</div>
			<div className='container'>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
