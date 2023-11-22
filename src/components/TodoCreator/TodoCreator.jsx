import { useState } from "react";
import Button from "../Button";
import s from "./TodoCreator.module.scss";

function TodoCreator({ setTodo }) {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const Save = (props) => {
        const newTodo = {
            title,
            task: value,
            date: Date.now(),
        };
        setTodo(prev => [ ...prev, newTodo, ])
    }
    const ChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const ChangeValue = (e) => {
        setValue(e.target.value);
    }
    return (
        <div className={s.TodoCreator}>
            <input type="text" placeholder="Заголовок" className={s.input} value={title} onChange={ChangeTitle}></input>
            <input type="text" placeholder="Ваша заметка" className={s.input} value={value} onChange={ChangeValue}></input>
            <Button className={s.button} onClick={Save}>Сохранить</Button>
        </div>
    );
}

export default TodoCreator;