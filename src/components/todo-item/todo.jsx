import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./todo.module.css";

function Todo({ todo, index, deleteItem, isCompleted }) {
	const checkChanges = (event) => {
		if (!event.target.checked) return;

		isCompleted({ index: index, text: todo.text });
	};
	return (
		<div index={index} className={style.todoContainer}>
			<Checkbox
				checked={todo.isCheck}
				color="primary"
				inputProps={{ "aria-label": "secondary checkbox" }}
				onChange={checkChanges}
			/>
			<div className={style.todoText}>{todo.text}</div>
			<DeleteIcon
				className={style.todoIcon}
				onClick={() => {
					deleteItem(index);
				}}
			/>
		</div>
	);
}
export default Todo;
