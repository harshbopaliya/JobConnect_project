
# JobConnect Local Setup Instructions

This document provides instructions for setting up the JobConnect application locally with Django backend, MySQL database, and React frontend.

## Prerequisites

Make sure you have the following installed on your system:
- Python 3.8 or higher
- Node.js 14.x or higher
- npm or yarn
- MySQL 8.0 or higher

## Backend Setup (Django & MySQL)

### 1. Create a MySQL Database

```bash
# Log into MySQL as root or your admin user
mysql -u root -p

# Create a database for the application
CREATE DATABASE jobconnect_db;

# Create a user for the application (replace 'password' with a secure password)
CREATE USER 'jobconnect_user'@'localhost' IDENTIFIED BY 'password';

# Grant privileges to the user
GRANT ALL PRIVILEGES ON jobconnect_db.* TO 'jobconnect_user'@'localhost';

# Apply changes
FLUSH PRIVILEGES;

# Exit MySQL
EXIT;
```

### 2. Set Up Django Backend

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Django and required packages
pip install django djangorestframework django-cors-headers mysqlclient python-dotenv pillow

# Create a Django project
django-admin startproject backend

# Navigate to the project directory
cd backend

# Create the necessary apps
python manage.py startapp jobs
python manage.py startapp accounts
python manage.py startapp companies

# Configure database in settings.py
# Replace database settings with the following:
'''
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'jobconnect_db',
        'USER': 'jobconnect_user',
        'PASSWORD': 'password',  # Replace with your password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
'''

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the server
python manage.py runserver
```

### 3. Create REST API Endpoints

Configure your Django views, serializers, and URLs to provide the necessary API endpoints for your React frontend.

## Frontend Setup (React with Tailwind CSS)

```bash
# Navigate to your frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Running Both Frontend and Backend

You'll need two terminal windows:

Terminal 1 (Backend):
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
python manage.py runserver
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

Now you can access:
- Django Admin: http://localhost:8000/admin
- Django API: http://localhost:8000/api
- React Frontend: http://localhost:5173 (or whatever port Vite is using)

## Next Steps

1. Create Django models for jobs, companies, user profiles
2. Set up authentication
3. Create views and serializers for your API
4. Connect the React frontend to the Django backend
5. Implement features like job posting, applications, search, etc.

Remember to check the Django and React documentation for detailed information on how to implement specific features.
