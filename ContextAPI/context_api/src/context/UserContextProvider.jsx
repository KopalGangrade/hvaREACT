import React from "react";

import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState(null)
  return <UserContext.Provider value={{user,set}}>
    {children}
  </UserContext.Provider>;
};

export default UserContextProvider;
