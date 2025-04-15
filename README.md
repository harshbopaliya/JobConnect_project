# Job Portal Project

This project is a job portal platform designed to connect job seekers with recruiters, facilitating efficient hiring and job application processes. The backend is built with **Django**, while the frontend is powered by **React**, **Vite**, and **TypeScript**.

## Getting Started

Follow the steps below to set up and run both the frontend and backend of the job portal project.

### Frontend Setup (React + Vite)

1. Navigate to the project directory (which contains both frontend and backend):

   ```bash
   cd <project-directory>
   ```

2. Install the required dependencies for the frontend:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be live and running at `http://localhost:3000`.

### Backend Setup (Django)

1. Navigate to the `backend` folder (assuming the backend is inside a subdirectory):

   ```bash
   cd backend
   ```

2. Install Django and required dependencies:

   ```bash
   pip install django
   ```

3. Create a Django project and a Django app if not already done:

   ```bash
   django-admin startproject jobportal .
   python manage.py startapp jobs
   ```

4. Make migrations and apply them to the database:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser to access the Django admin panel:

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to set up the superuser's username, email, and password.

6. Run the Django development server:
   ```bash
   python manage.py runserver
   ```

The backend will be live and running at `http://localhost:8000`.

### Additional Information

- The frontend uses **React** for building the user interface and **Vite** for fast development.
- The backend uses **Django** as the web framework with a PostgreSQL/MySQL database for storing job-related data.
- You can manage job postings, applications, and user authentication via the Django admin panel, available at `http://localhost:8000/admin`.

### Deployment

For deployment instructions, follow the setup specific to your hosting environment (e.g., deploying on AWS, Heroku, or similar services).

---

### Technologies Used

- **Frontend**:

  - React.js
  - Vite
  - TypeScript
  - Tailwind CSS
  - Radix UI
  - Axios
  - React Query

- **Backend**:
  - Django
  - PostgreSQL/MySQL (for database)
  - Python

---

### Notes

- Make sure to install both the frontend and backend dependencies before running the servers.
- You can switch between the frontend and backend directories based on which part of the project you're working on.
