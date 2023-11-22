import React from "react";
import Button from "../../components/Button";

import s from "./HomePage.module.scss";
import Header from "../../components/Header";


function HomePage() {
    const onBtnClick = () => console.log(null + "a");
    return (
        <>
            <Header></Header>
            <Button className={s.button} onClick={onBtnClick}>asd1</Button>
            <Button onClick={onBtnClick}>asd2</Button>
        </>
    );
}
export default HomePage;
