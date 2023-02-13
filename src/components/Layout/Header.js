import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onDisplayCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table of meals"></img>
      </div>
    </>
  );
};

export default Header;
