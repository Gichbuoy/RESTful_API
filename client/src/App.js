import { Container } from "react-bootstrap";
import UserList from "./components/UserList";
import ReadUsers from './components/readUsers';
import "bootstrap/dist/css/bootstrap.min.css";
import {createGlobalStyle} from 'styled-components';


const BackgroundColor = createGlobalStyle `
body{
  background-color: #f2f2f2;
}
`;

export default () => {
  return (
    <>
    <BackgroundColor/>
    <Container fluid className="mt-5">
      <UserList/>
    </Container>
    </>
  );
}


