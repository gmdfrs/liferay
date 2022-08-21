import React from 'react';
import ReactDOM from 'react-dom';
//import HelloWorld from "./helloWorld";
// import RuleList from "./RuleList/RuleList";

document.addEventListener('DOMContentLoaded', function(){

	/*const rules = [
		{
			"id": 1,
			"title": "Ohoh ben If you don't have a mobile website, you don't have a website.",
			"description": "In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.",
			"likes": 0,
			"dislikes": 0,
			"tags": ["ui"]
		},
		{
			"id": 2,
			"title": "Leave the code cleaner than you found it.",
			"description": "From Clean Code: always leave the code cleaner than it was before.",
			"likes": 0,
			"dislikes": 0,
			"tags": ["craftsmanship", "clean code"]
		},
		{
			"id": 3,
			"title": "Never say : \"I've done, it works on my machine !\" #itworksonmymachine",
			"likes": 0,
			"dislikes": 0,
			"tags": []
		},
		{
			"id": 4,
			"title": "Always use === in JavaScript!",
			"likes": 0,
			"dislikes": 0,
			"tags": ["javascript"]
		}
	]*/
	ReactDOM.render(
		/*<RuleList rules={rules}/>,*/
		document.getElementById('dev-root')
	);
}, false);
