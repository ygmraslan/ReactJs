import React from "react";

//Fragment: <> / </>kapsayıcı div olarak kullanılır.
function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adı</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="text"></input>
      </div>
      <button>Login</button>
    </div>
  );
}

export default Login;
