import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import style from "./addtask.module.css";

function AddTask({ addTodo }) {
	const [value, setValue] = useState("");
	const submiter = (event) => {
		event.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={submiter} className={style.Form}>
			<TextField
				className={style.Input}
				id="outlined-basic"
				label="Input your task"
				variant="outlined"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button
				className={style.Button}
				variant="contained"
				color="primary"
				type="submit"
			>
				ADD
			</Button>
		</form>
	);
}
export default AddTask;
