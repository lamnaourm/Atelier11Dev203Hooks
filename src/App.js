import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import ListUser from "./components/ListUser";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    getData().then((users) => setUtilisateurs(users));
  }, []);
  return (
    <div>
      {utilisateurs.length === 0 ? (
        <h1>Liste des utilisateurs vide</h1>
      ) : (
        <ListUser users={utilisateurs}/>
      )}
    </div>
  );
}

export default App;
