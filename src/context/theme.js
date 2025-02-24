import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    mode : "light",
    toggleMode : () => {}
}
);

export const ThemeContextProvide = ThemeContext.Provider;

export const useTheme = () => {
   return useContext(ThemeContext);
}

