import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./done.module.css";
function DoneTask({ done, index, deleteItem, moveToTodo }) {
	const checkChanges = (event) => {
		if (event.target.checked) return;
		moveToTodo({ index, text: done.text });
	};
	return (
		<div index={index} className={style.doneContainer}>
			<Checkbox
				checked={done.isCheck}
				color="primary"
				inputProps={{ "aria-label": "secondary checkbox" }}
				onChange={checkChanges}
			/>
			<div className={style.doneText}>{done.text}</div>
			<DeleteIcon
				className={style.doneIcon}
				onClick={() => {
					deleteItem({ index: index, text: done.text });
				}}
			/>
		</div>
	);
}
export default DoneTask;
