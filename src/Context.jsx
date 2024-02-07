import { createContext, useEffect, useState } from "react";

export const ContextApi = createContext(null);

const Context = ({ children }) => {
  let [data, setData] = useState(null);
  return (
    <ContextApi.Provider value={{ data, setData }}>
      {children}
    </ContextApi.Provider>
  );
};

export default Context;
