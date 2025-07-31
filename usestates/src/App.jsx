import { useState } from "react";
import "./App.css";

function App() {
  //const ile tanımlamalar yapılır ve return içerisinde useState methodlarımız çağırılır.
  const [firstName, setFirstname] = useState("Yağmur");
  const [names, setNames] = useState(["Ali", "Ela", "Enes"]);
  console.log(names);
  const [userInfo, setUserInfo] = useState({
    username: "yaslan",
    password: "1997",
  });
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setFirstname("Rain");
  };

  //useState: Bir state'in değerini set methodunu kullanarak değiştirdiğinde component yeniden render edilir.
  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {show ? (
        <div>
          {userInfo.username} {userInfo.password}
        </div>
      ) : (
        <div>Bilgiler görünülenmedi.</div>
      )}
      <hr />
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <hr />
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>Change</button>
      </div>
      <hr />
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
    </div>
  );
}

export default App;
