import React from 'react';

// Signed-in user context
const UserContext = React.createContext({
  name: "Guest"
});

export default UserContext;
