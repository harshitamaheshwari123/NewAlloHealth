import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import profiePic from "../../assets/human6.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard() {
  const [docount, setdocount] = React.useState(0);
  const [nursecount, setnursecount] = React.useState(0);
  const [patientcount, setpatientcount] = React.useState(0);
  const [querieslef, setquerieslef] = React.useState(0);
  const [depts, setDepts] = React.useState(0);

  useEffect(() => {
    const fetchInfo = async (e) => {
      await axios
        .get("http://localhost:4451/admin/get-count", {})
        .then((res) => {
          setdocount(res.data.doccou);
          setnursecount(res.data.nursecou);
          setpatientcount(res.data.patientcou);
          setquerieslef(res.data.queriescou);
          setDepts(res.data.deptcou);
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "Error Fetching Data!",
          });
        });
    };
    fetchInfo();
  }, []);

  return (
    <section className="h-screen w-screen bg-black text-cyan-400">
      <div className="h-[80%] w-[80%] bg-black shadow-xl p-2 flex">
        <AdminSidebar userName={"Admin"} profiePic={profiePic} />
        <div className="flex-1 p-8 ml-4 bg-black rounded-lg flex flex-col justify-around ">
          <p className="font-semibold text-3xl text-center">Dashboard</p>
          <div className="w-full  h-[80%] items-center flex flex-col gap-4">
            <div className="flex w-full justify-evenly h-[30%]">
              <div className="flex shadow-xl rounded-xl border border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Doctors: {docount}
                </span>
              </div>
              <div className="flex shadow-xl rounded-xl border border-2 border-slate-900  w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Nurses: {nursecount}{" "}
                </span>
              </div>
            </div>
            <div className="flex w-full  justify-evenly h-[30%]">
              <div className="flex shadow-xl rounded-xl border border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Patients: {patientcount}
                </span>
              </div>
              <div className="flex  shadow-xl rounded-xl border border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Query: {querieslef}{" "}
                </span>
              </div>
            </div>
            <div className="flex shadow-xl rounded-xl border border-2 border-slate-900 w-[30%] h-[30%] justify-center items-center">
              <span className="font-semibold text-xl">
                Departments: {depts}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
