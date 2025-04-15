
-- Create the database
CREATE DATABASE IF NOT EXISTS jobconnect_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Create the user and grant privileges
CREATE USER IF NOT EXISTS 'jobconnect_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON jobconnect_db.* TO 'jobconnect_user'@'localhost';
FLUSH PRIVILEGES;

-- Use the database
USE jobconnect_db;

-- Create initial data for the Industry table
INSERT INTO companies_industry (name, description) VALUES 
('Information Technology', 'Companies involved in software development, IT services, and technology consulting'),
('Healthcare', 'Organizations providing medical services, healthcare products, and related services'),
('Finance', 'Financial institutions, banks, investment firms, and insurance companies'),
('Education', 'Educational institutions, training organizations, and e-learning platforms'),
('Manufacturing', 'Companies involved in the production and assembly of goods'),
('Retail', 'Businesses that sell products directly to consumers'),
('Marketing', 'Agencies and firms providing marketing, advertising, and PR services'),
('Hospitality', 'Hotels, restaurants, travel agencies, and tourism-related businesses'),
('Construction', 'Companies involved in building, infrastructure development, and related services'),
('Media & Entertainment', 'Organizations involved in film, television, music, publishing, and digital content');

-- Create initial data for the JobCategory table
INSERT INTO jobs_jobcategory (name, description) VALUES 
('Software Development', 'Roles focused on designing, coding, testing, and maintaining software applications'),
('Data Science', 'Positions dealing with data analysis, machine learning, and statistical modeling'),
('Design', 'Jobs related to UI/UX design, graphic design, product design, and creative direction'),
('Marketing', 'Roles in digital marketing, content creation, SEO, social media, and brand management'),
('Sales', 'Positions focused on business development, account management, and customer acquisition'),
('Customer Service', 'Jobs centered around customer support, success, and relationship management'),
('Human Resources', 'Roles in recruitment, employee relations, training, and organizational development'),
('Finance & Accounting', 'Positions in financial analysis, accounting, auditing, and financial planning'),
('Administrative', 'Roles providing administrative support, office management, and operational assistance'),
('Executive Leadership', 'C-level positions and senior management roles across various departments');

-- Create initial data for the Skill table
INSERT INTO jobs_skill (name) VALUES 
('Python'), ('JavaScript'), ('Java'), ('C#'), ('React'),
('Angular'), ('Vue.js'), ('Node.js'), ('Django'), ('Flask'),
('SQL'), ('MongoDB'), ('AWS'), ('Azure'), ('Google Cloud'),
('Docker'), ('Kubernetes'), ('Machine Learning'), ('Data Analysis'), ('Big Data'),
('Artificial Intelligence'), ('UX Design'), ('UI Design'), ('Graphic Design'), ('Project Management'),
('Agile Methodology'), ('Scrum'), ('DevOps'), ('SEO'), ('Content Marketing'),
('Social Media Marketing'), ('Sales Strategy'), ('CRM'), ('Customer Support'), ('Technical Writing'),
('HR Management'), ('Recruitment'), ('Training & Development'), ('Financial Analysis'), ('Accounting'),
('Budgeting'), ('Leadership'), ('Communication'), ('Problem Solving'), ('Critical Thinking');
