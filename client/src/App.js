import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GLobalStyle } from "./mainStyles/GlobalStyle";
import { theme } from "./mainStyles/theme";
import Home from "./components/Home/Home";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import AddNews from "./components/News/AddNews/AddNews";
import NewsList from "./components/News/NewsList/NewsList";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GLobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/addnews" element={<AddNews />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
