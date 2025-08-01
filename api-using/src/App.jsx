import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );
    console.log(response.data);
  };

  const deleteById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const getUserByIdPost = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserByIdPost(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    getPost();

    //getAllUsers();
    //getUserById(1);

    // const newUser = {
    //   username: "ali",
    //   password: "26",
    // };
    // createUser(newUser);

    // updateUser("13aa", {
    //   username: "berk",
    //   password: "48",
    // });

    //deleteById("13aa");
  }, []);

  return <div></div>;
}

export default App;
