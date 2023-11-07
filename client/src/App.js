import { Container } from "react-bootstrap";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import RetrieveUser from "./components/RetrieveUser";
import "bootstrap/dist/css/bootstrap.min.css";
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const BackgroundColor = createGlobalStyle `
body{
  background-color: #f2f2f2;
}
`;

const App = () => {
  return (
    <>
      <BackgroundColor light />
      <Container fluid className="mt-4 mt-3">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/create" element={<CreateUser />} />
              <Route path="/:userId" element={<RetrieveUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;