import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
