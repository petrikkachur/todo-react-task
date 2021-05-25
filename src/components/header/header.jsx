import { Link } from "react-router-dom";
import style from "./header.module.css";
function Header() {
	return (
		<header className={style.wrapper}>
			<nav className={style.container}>
				<Link to="/add-task" className={style.item}>
					<div className={style.text}>Add tasks</div>
				</Link>
				<Link to="/done-tasks" className={style.item}>
					<div className={style.text}>Done tasks</div>
				</Link>
			</nav>
		</header>
	);
}
export default Header;
