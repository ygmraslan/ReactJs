import React from "react";

function Courses({ course }) {
  const { id, title, description, price, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} width={350} height={220} />
        <h4 className="course-title">{title}</h4>
        <h5 className="course-desc">{description}</h5>
        <h3 className="course-price">{price} ₺ </h3>
      </div>
    </div>
  );
}

export default Courses;
