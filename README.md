# JobConnect

JobConnect is a full-stack job portal application built with a modern **React (Vite + TypeScript + Tailwind CSS)** frontend and a powerful **Django + MySQL** backend. It helps connect job seekers and recruiters seamlessly.

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jobconnect.git
cd jobconnect
```

## 📦 Frontend Setup

> The main project folder **is the frontend**.

```bash
# Install frontend dependencies
npm install
# Start the development server
npm run dev
```

Visit the frontend at: [http://localhost:5173](http://localhost:5173)

## 🖥️ Backend Setup (Django)

### Prerequisites

- Python 3.8 or higher
- MySQL
- Virtual Environment

### Steps

```bash
# Go to backend folder
cd backend
# Create virtual environment
python -m venv venv
# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
# Install dependencies
pip install django djangorestframework django-cors-headers mysqlclient python-dotenv pillow
# Make migrations and migrate
python manage.py makemigrations
python manage.py migrate
# Create a superuser
python manage.py createsuperuser
# Run the server
python manage.py runserver
```

Visit the Django admin at: [http://localhost:8000/admin](http://localhost:8000/admin)

## 🔧 Local MySQL Setup (Recommended)

If you haven't yet configured MySQL and Django, refer to [`setup.md`](./setup.md) for a step-by-step guide including:

- MySQL DB & user creation
- Django database connection
- CORS setup
- API integration

## 🗂️ Project Structure

```
jobconnect/
├── backend/              # Django backend
│   ├── jobs/
│   ├── accounts/
│   └── companies/
├── public/               # Vite public assets
├── src/                  # React frontend source code
├── package.json
├── setup.md              # Full local setup instructions
└── README.md
```

## 🌐 URLs

- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:8000`
- **Admin Panel**: `http://localhost:8000/admin`
- **API Base URL**: `http://localhost:8000/api/`

## 🛠 Tech Stack

**Frontend:**

- React (Vite + TypeScript)
- Tailwind CSS
- Radix UI
- React Query
- Axios

**Backend:**

- Django
- Django REST Framework
- MySQL
- Pillow
- dotenv
- django-cors-headers

## 🧠 Next Steps

- Build models for jobs, companies, and user profiles
- Add authentication & permissions
- Connect frontend to API
- Implement features like job posting, search, applications

## 📄 License

MIT License

## 👥 Contributing

Pull requests and feature suggestions are welcome! Let's build this together 🚀
