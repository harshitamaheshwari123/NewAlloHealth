import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const statusOptions = [
    "scheduled",
    "inProgress",
    "withDoctor",
    "completed",
    "cancelled",
  ];

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4451/appointment/get-appointments/test@example.com"
      );
      setAppointments(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:4451/appointment/update-status/${id}`, {
        status,
      });
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
    } catch (err) {
      alert("Failed to update status.");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Appointment Status</h2>
      {appointments.map((appt) => (
        <div
          key={appt._id}
          className="border p-4 mb-3 rounded shadow-sm bg-white"
        >
          <p>
            <strong>Patient:</strong> {appt.patient}
          </p>
          <p>
            <strong>Doctor:</strong> {appt.doctor}
          </p>
          <p>
            <strong>Date:</strong> {appt.appointmentDate}
          </p>
          <p>
            <strong>Time:</strong> {appt.time}
          </p>
          <div className="mt-2">
            <label className="mr-2">Status:</label>
            <select
              className="border rounded px-2 py-1"
              value={appt.status}
              onChange={(e) => updateStatus(appt._id, e.target.value)}
            >
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentStatus;
