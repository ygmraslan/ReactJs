import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Her zaman çalışır");
  });
  useEffect(() => {
    console.log("İlk render edildiğinde çalır.");
  }, []);
  useEffect(
    () => {
      console.log(
        "İlk render edildiğinde ve FirstName veya LastName state değeri değiştiğinde çalışır."
      );
    },
    [firstName],
    [lastName] //Aynı state içerisinde de tanmlama yapılabilir.
  );
  // useEffect(() => {
  //   console.log(
  //     "İlk render edildiğinde ve LastName state değeri değiştiğinde çalışır."
  //   );
  // }, [lastName]);
  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Yağmur")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Aslan")}>Soyadı Değiştir</button>
      </div>
    </div>
  );
}

export default App;
