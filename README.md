🏥 AlloHealth - Clinic Front Desk Management System

AlloHealth is a full-stack Clinic Front Desk Management System built with the **MERN Stack** (MongoDB, Express, React, Node.js). It provides a role-based platform for clinics to manage doctors, nurses, receptionists, patient queues, and appointments in real-time.

## 📸 Screenshots

### Home  
![Home Screenshot](https://github.com/user-attachments/assets/24cf808e-5a31-4471-8508-cdfb0dff612c)

### Contact  
![Contact Screenshot](https://github.com/user-attachments/assets/cfd8dab1-ddce-441a-8512-1ba9c07861e9)

### Login  
![Login Screenshot](https://github.com/user-attachments/assets/fa59c82d-e3af-45b5-a624-b30810c6346b)

### Dashboard  
![Dashboard Screenshot](https://github.com/user-attachments/assets/32222a94-61eb-4c7f-80cf-52b6ff88bc8c)

### Appointment  
![Appointment Screenshot](https://github.com/user-attachments/assets/513e31de-3d03-4c5a-bc44-73cf797614cf)


🚀 Features

✅ Authentication & Roles
- Secure login and registration using **JWT & Bcrypt**
- User roles: `Admin`, `Doctor`, `Nurse`, `Receptionist`
- Role-based routing and UI rendering

🧑‍⚕️ Doctor & Nurse Management
- Add/update/delete doctors and nurses
- Assign specializations and availability

🧾 Queue Management
- Add patients to a queue with **auto-assigned queue number**
- Track queue status: `Waiting`, `With Doctor`, `Completed`
- View queue by doctor

📅 Appointments
- Book appointments for patients
- Track appointment status
- Update or cancel appointments


📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| **MongoDB** | Database for users, doctors, nurses, queues, appointments |
| **Express.js** | Backend framework |
| **React.js** | Frontend SPA |
| **Node.js** | Server environment |
| **JWT** | Token-based authentication |
| **Tailwind CSS** | Styling |
| **SweetAlert2** | Beautiful alerts & notifications |


📁 Folder Structure


NewAlloHealth/
├── backend/
│   ├── models/            # Mongoose models
│   ├── routes/            # Express API routes
│   ├── controllers/       # Route logic
│   ├── .env               # Environment variables
│   └── server.js          # Express server
├── frontend/
│   ├── components/        # Reusable React components
│   ├── pages/             # Pages like Login, Dashboard, Queue, etc.
│   ├── App.js
│   └── index.js


⚙️ Installation

Step 1: Clone the Repository


bash
git clone https://github.com/harshitamaheshwari123/NewAlloHealth.git

cd NewAlloHealth


Step 2: Backend Setup

bash

cd backend

npm install


Create `.env` in backend directory:


PORT=5000

MONGO_URL=your_mongodb_connection_string

jwtsecret=your_secret_key



Step 3: Frontend Setup

bash

cd ../frontend

npm install


▶️ Running the App


Start Backend

bash

cd backend

npm start

Start Frontend

bash

cd frontend

npm run dev

By default:

* Frontend: [http://localhost:5173/](http://localhost:5173/)
* Backend: [http://localhost:5000/](http://localhost:4451/)


🛠 Future Enhancements
Real-time queue updates with **Socket.IO**
Video call integration for virtual consultation
Email/SMS notifications
Role management via Admin panel
Daily patient analytics & charts


🤝 Contributors
[@harshitamaheshwari123](https://github.com/harshitamaheshwari123)


📃 License

This project is licensed under the MIT License.

