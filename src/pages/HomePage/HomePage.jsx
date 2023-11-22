import React from "react";
import Button from "../../components/Button";

import s from "./HomePage.module.scss";
import Header from "../../components/Header";
import TodoCreator from "../../components/TodoCreator";
import TodoGrid from "../../components/TodoGrid";
import { useState } from "react";


function HomePage() {
    const onBtnClick = () => console.log(null + "a");
    const [todo, setTodo] = useState(
        [
            {
                title: "task1",
                task: "something",
                date: "12.12.12"
            },
            {
                title: "task2",
                task: "something",
                date: "12.12.12"
            },
            {
                title: "task3",
                task: "something",
                date: "12.12.12"
            },
        ]
    );
    return (
        <>
            <Header></Header>
            {/* <Button className={s.button} onClick={onBtnClick}>asd1</Button>
            <Button onClick={onBtnClick}>asd2</Button> */}
            <TodoCreator setTodo={setTodo}></TodoCreator>
            <TodoGrid todoes={todo}></TodoGrid>
        </>
    );
}
export default HomePage;
