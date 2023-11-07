import { Container } from "react-bootstrap";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BackgroundColor = createGlobalStyle `
body{
  background-color: #f2f2f2;
}
`;

export default () => {
  return (
    <>
      <BackgroundColor />
      <Container fluid className="mt-5">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}


