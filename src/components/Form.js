import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/> <br/>
		<input type="text" name="country" placeholder="Country..."/><br/>
		<button>Get Weather</button><br/>
	</form>
);

export default Form;