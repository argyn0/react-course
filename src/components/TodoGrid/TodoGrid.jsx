import Todo from "../Todo/Todo";
import s from "./TodoGrid.module.scss";

function TodoGrid({ todoes = [] }) {
    return (
        <div className={s.TodoGrid}>
            {todoes.map((elem) => (
                <Todo title={elem.title} value={elem.task} date={elem.date}/>
            ))}
        </div>
    );
}

export default TodoGrid;