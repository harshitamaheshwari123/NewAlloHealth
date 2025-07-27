import { useEffect, useState } from "react";
import axios from "axios";

export default function QueuePage() {
  const [queue, setQueue] = useState([]);
  const [form, setForm] = useState({
    patientName: "",
    phone: "",
    email: "",
    doctor: "",
    reason: "",
  });

  const fetchQueue = async () => {
    const res = await axios.get("http://localhost:4451/queue");
    setQueue(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4451/queue", form);
    setForm({ patientName: "", phone: "", email: "", doctor: "", reason: "" });
    fetchQueue();
  };

  const updateStatus = async (id, status) => {
    await axios.patch(`http://localhost:4451/queue/${id}`, { status });
    fetchQueue();
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Patient Queue</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded mb-8"
      >
        <input
          className="p-2 rounded"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={(e) => setForm({ ...form, patientName: e.target.value })}
          required
        />
        <input
          className="p-2 rounded"
          placeholder="Doctor"
          value={form.doctor}
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
          required
        />
        <input
          className="p-2 rounded"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="col-span-2 p-2 rounded"
          placeholder="Reason"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        />
        <button
          type="submit"
          className="col-span-2 bg-black text-white rounded py-2"
        >
          Add to Queue
        </button>
      </form>

      <table className="w-full table-auto bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queue.map((q) => (
            <tr key={q._id} className="border-t">
              <td className="p-2">{q.queueNumber}</td>
              <td className="p-2">{q.patientName}</td>
              <td className="p-2">{q.doctor}</td>
              <td className="p-2 capitalize">{q.status.replace("-", " ")}</td>
              <td className="p-2 space-x-2">
                {["waiting", "with-doctor", "completed", "cancelled"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(q._id, status)}
                      className={`text-xs px-2 py-1 rounded ${
                        q.status === status
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
