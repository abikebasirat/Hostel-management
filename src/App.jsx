import "./App.css";
import AdminReg from "./Componet/AdminPrview/Register/AdminReg";
import { Route, Routes } from "react-router-dom";
import Login from "./Componet/AdminPrview/Register/Login";
import StudentReg from "./Componet/AdminPrview/Register/StudentReg";
import HomeDash from "./Componet/Dashboard/HomeDash";
import Layout from "./assets/Layout";
import StudentDashboard from "./Componet/Dashboard/StudentDashboard";
import Rooms from "./Componet/Dashboard/Rooms";
import EditStasusModal from "./Componet/Dashboard/EditStatusModal";
import AdminPreview from "./Componet/AdminPrview/AdminPreview";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AdminReg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-reg" element={<StudentReg />} />
          <Route
            path="/homeDash"
            element={
              <Layout>
                <HomeDash />
              </Layout>
            }
          />
          <Route path="/studentdash" element={<StudentDashboard />} />
          <Route path="/room" element={<Rooms/>} />
          <Route path="/EditStatusModal" element={<EditStasusModal/>} />
          <Route path="/Admin" element={<AdminPreview/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
