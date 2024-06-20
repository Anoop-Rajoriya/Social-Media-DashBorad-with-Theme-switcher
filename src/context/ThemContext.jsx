import { createContext, useState } from "react";

export const themContext = createContext(null);

export default function ({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  return (
    <themContext.Provider value={[theme, setTheme]}>
      {children}
    </themContext.Provider>
  );
}
