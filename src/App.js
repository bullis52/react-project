
import './App.css';
import {Header} from "./components/header/header-src-file/header";


import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // withRouter
} from "react-router-dom";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/globalStyles/globalStyles";
import {darkTheme, LightTheme} from "./components/Themes/Themes";



function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')

    }

  return (
      <Router>
            <div className={`wrapper`}>
                <ThemeProvider theme={theme === 'light' ? LightTheme : darkTheme}>
                    <button onClick={themeToggler} className={'btn-theme'}>Switch Theme</button>
                <GlobalStyles/>
              <Header/>
                </ThemeProvider>
            </div>
      </Router>
  );
}


export default App;
