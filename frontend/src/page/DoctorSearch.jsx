import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorSearch() {
  const [filters, setFilters] = useState({
    name: "",
    specialization: "",
    city: "",
    state: "",
    availability: "",
  });

  const [doctors, setDoctors] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await axios.get(`http://localhost:4451/doctor/search?${query}`);
    setDoctors(res.data);
  };

  useEffect(() => {
    handleSearch(); // Load all initially
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Search Doctors</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <input
          name="name"
          value={filters.name}
          onChange={handleChange}
          placeholder="Doctor Name"
          className="p-2 border rounded"
        />
        <input
          name="specialization"
          value={filters.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="p-2 border rounded"
        />
        <input
          name="city"
          value={filters.city}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border rounded"
        />
        <input
          name="state"
          value={filters.state}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border rounded"
        />
        <select
          name="availability"
          value={filters.availability}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Availability (Day)</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Search
      </button>

      {doctors.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Specialization</th>
                <th className="p-2">City</th>
                <th className="p-2">State</th>
                <th className="p-2">Availability</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc) => (
                <tr key={doc._id} className="border-t">
                  <td className="p-2">{doc.name}</td>
                  <td className="p-2">{doc.specialization}</td>
                  <td className="p-2">{doc.address?.city || "-"}</td>
                  <td className="p-2">{doc.address?.state || "-"}</td>
                  <td className="p-2">{(doc.availability || []).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
