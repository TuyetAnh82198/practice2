import React from "react";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: "#98076d",
        marginBottom: "0.5rem",
        width: "48rem",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        color: "white",
        fontFamily: "sans-serif",
        marginLeft: "-1rem",
      }}
      onClick={deleteHandler}
    >
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
