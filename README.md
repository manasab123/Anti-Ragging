# Anti-Ragging Complaint Management System

A secure and efficient web-based platform to **report**, **track**, and **prevent ragging incidents** in colleges. This project aims to empower students with a simple and anonymous way to raise concerns and ensure a safer campus environment.

---

## Features

- Submit ragging complaints anonymously or with identity  
- Admin dashboard to view, update, and resolve complaints  
- Secure authentication and role-based access  
- Real-time status tracking of complaints  
- Email notifications for status updates  
- Modern UI with mobile responsiveness  

---

## Tech Stack

### Frontend
- React.js  
- Bootstrap  
- Toastify  
- Axios  

### Backend
- Spring Boot (Java)  
- MySQL (SQL database)  
- Maven  

### Tools
- Postman (API testing)  
- VS Code (frontend) / IntelliJ (backend)

##  Setup Instructions

###  Backend Setup (Spring Boot)

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/anti-ragging-system.git
   cd anti-ragging-system/backend
   ```

2. Create a MySQL database:
   ```sql
   CREATE DATABASE AntiRagging;
   ```

3. Update your `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/AntiRagging
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```

4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```
   or open then file from intellij and run from main folder "AntiraggingApplication.java"

---

###  Frontend Setup (React)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm start
   ```

---
## Screenshots
Home page
![image](https://github.com/user-attachments/assets/7dcbb4ac-b401-4b55-81a1-84863cc9909a)
![image](https://github.com/user-attachments/assets/e9827c8b-6691-4151-a518-ca3b764a53ea)


Login Page
![image](https://github.com/user-attachments/assets/f69cdba0-cca3-43b4-bde1-bedf8c9db596)
Clone Repository and run the project for more ...


##  Acknowledgements

Thanks to mentors and my teammates


