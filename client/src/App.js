import UserList from "./components/user/UserList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css"
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetrieveUser />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;