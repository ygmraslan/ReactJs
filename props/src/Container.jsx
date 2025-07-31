import React from "react";

//Component içerisinde component çağırma işlemi
function Container({ children }) {
  return (
    <div>
      <div>Container Component</div>
      {children}
    </div>
  );
}

export default Container;
