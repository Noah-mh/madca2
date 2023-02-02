import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const [subscription, setSubscription] = useState([]);

  return (
    <UserContext.Provider
      value={{ user, setUser, data, setData, subscription, setSubscription }}
    >
      {children}
    </UserContext.Provider>
  );
};
