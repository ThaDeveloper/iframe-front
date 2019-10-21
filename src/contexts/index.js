import React from "react";

// Signed-in user context
const UserContext = React.createContext({
  loggedIn: false,
  name: "Guest"
});

export default UserContext;
