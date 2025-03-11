import React, { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  // Initializing the state with multiple users
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "nandwa",
      password: "123456",
      email: "timothynandwa@gmail.com",
    },
    {
      id: 2,
      username: "Esthy Ambetsa",
      password: "password123",
      email: "esthy.ambetsa@gmail.com",
    }
  ]);

  return (
    <div>
      <h1>Welcome to the App</h1>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}
