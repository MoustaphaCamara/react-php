import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
      <h1>React CRUD App - MySQL & PHP API</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/:id/edituser" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
