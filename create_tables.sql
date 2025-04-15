
-- Create the database (if not already created)
CREATE DATABASE IF NOT EXISTS jobconnect_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Use the database
USE jobconnect_db;

-- Create auth_group table
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

-- Create auth_group_permissions table
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id` (`group_id`),
  KEY `auth_group_permissions_permission_id` (`permission_id`)
);

-- Create auth_permission table
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id` (`content_type_id`)
);

-- Create django_content_type table
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model` (`app_label`,`model`)
);

-- Create django_migrations table
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create django_admin_log table
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id` (`user_id`)
);

-- Create django_session table
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date` (`expire_date`)
);

-- Create accounts_user table (custom user model)
CREATE TABLE IF NOT EXISTS `accounts_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(254) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
);

-- Create accounts_user_groups table
CREATE TABLE IF NOT EXISTS `accounts_user_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_user_groups_user_id_group_id` (`user_id`,`group_id`),
  KEY `accounts_user_groups_user_id` (`user_id`),
  KEY `accounts_user_groups_group_id` (`group_id`)
);

-- Create accounts_user_user_permissions table
CREATE TABLE IF NOT EXISTS `accounts_user_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_user_user_permissions_user_id_permission_id` (`user_id`,`permission_id`),
  KEY `accounts_user_user_permissions_user_id` (`user_id`),
  KEY `accounts_user_user_permissions_permission_id` (`permission_id`)
);

-- Create companies_industry table
CREATE TABLE IF NOT EXISTS `companies_industry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

-- Create companies_company table
CREATE TABLE IF NOT EXISTS `companies_company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `description` longtext NOT NULL,
  `employee_count` varchar(10) NOT NULL,
  `location` varchar(100) NOT NULL,
  `founded_year` int UNSIGNED DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `industry_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `companies_company_industry_id` (`industry_id`)
);

-- Create companies_companyreview table
CREATE TABLE IF NOT EXISTS `companies_companyreview` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` int UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `pros` longtext NOT NULL,
  `cons` longtext NOT NULL,
  `review_date` date NOT NULL,
  `company_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companies_companyreview_company_id` (`company_id`),
  KEY `companies_companyreview_user_id` (`user_id`)
);

-- Create jobs_jobcategory table
CREATE TABLE IF NOT EXISTS `jobs_jobcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

-- Create jobs_skill table
CREATE TABLE IF NOT EXISTS `jobs_skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

-- Create jobs_job table
CREATE TABLE IF NOT EXISTS `jobs_job` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `is_remote` tinyint(1) NOT NULL,
  `description` longtext NOT NULL,
  `requirements` longtext NOT NULL,
  `responsibilities` longtext NOT NULL,
  `job_type` varchar(20) NOT NULL,
  `experience_level` varchar(20) NOT NULL,
  `salary_min` decimal(10,2) DEFAULT NULL,
  `salary_max` decimal(10,2) DEFAULT NULL,
  `application_deadline` date DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_featured` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `category_id` int DEFAULT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_job_category_id` (`category_id`),
  KEY `jobs_job_company_id` (`company_id`)
);

-- Create jobs_job_skills table (many-to-many relationship)
CREATE TABLE IF NOT EXISTS `jobs_job_skills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jobs_job_skills_job_id_skill_id` (`job_id`,`skill_id`),
  KEY `jobs_job_skills_job_id` (`job_id`),
  KEY `jobs_job_skills_skill_id` (`skill_id`)
);

-- Create jobs_jobapplication table
CREATE TABLE IF NOT EXISTS `jobs_jobapplication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resume` varchar(100) NOT NULL,
  `cover_letter` longtext,
  `status` varchar(20) NOT NULL,
  `applied_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `applicant_id` int NOT NULL,
  `job_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jobs_jobapplication_job_id_applicant_id` (`job_id`,`applicant_id`),
  KEY `jobs_jobapplication_applicant_id` (`applicant_id`),
  KEY `jobs_jobapplication_job_id` (`job_id`)
);

-- Create jobs_savedjob table
CREATE TABLE IF NOT EXISTS `jobs_savedjob` (
  `id` int NOT NULL AUTO_INCREMENT,
  `saved_at` datetime(6) NOT NULL,
  `job_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jobs_savedjob_job_id_user_id` (`job_id`,`user_id`),
  KEY `jobs_savedjob_job_id` (`job_id`),
  KEY `jobs_savedjob_user_id` (`user_id`)
);

-- Create accounts_jobseekerprofile table
CREATE TABLE IF NOT EXISTS `accounts_jobseekerprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resume` varchar(100) DEFAULT NULL,
  `skills` longtext,
  `experience_years` int UNSIGNED NOT NULL,
  `education` longtext,
  `bio` longtext,
  `location` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
);

-- Create accounts_employerprofile table
CREATE TABLE IF NOT EXISTS `accounts_employerprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position` varchar(100) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `company_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `accounts_employerprofile_company_id` (`company_id`)
);

-- Add foreign key constraints
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissions_group_id_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_group_permissions_permission_id_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);

ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `accounts_user_groups`
  ADD CONSTRAINT `accounts_user_groups_group_id_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `accounts_user_groups_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `accounts_user_user_permissions`
  ADD CONSTRAINT `accounts_user_user_permissions_permission_id_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `accounts_user_user_permissions_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `companies_company`
  ADD CONSTRAINT `companies_company_industry_id_fk_companies_industry_id` FOREIGN KEY (`industry_id`) REFERENCES `companies_industry` (`id`);

ALTER TABLE `companies_companyreview`
  ADD CONSTRAINT `companies_companyreview_company_id_fk_companies_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies_company` (`id`),
  ADD CONSTRAINT `companies_companyreview_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `jobs_job`
  ADD CONSTRAINT `jobs_job_category_id_fk_jobs_jobcategory_id` FOREIGN KEY (`category_id`) REFERENCES `jobs_jobcategory` (`id`),
  ADD CONSTRAINT `jobs_job_company_id_fk_companies_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies_company` (`id`);

ALTER TABLE `jobs_job_skills`
  ADD CONSTRAINT `jobs_job_skills_job_id_fk_jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `jobs_job` (`id`),
  ADD CONSTRAINT `jobs_job_skills_skill_id_fk_jobs_skill_id` FOREIGN KEY (`skill_id`) REFERENCES `jobs_skill` (`id`);

ALTER TABLE `jobs_jobapplication`
  ADD CONSTRAINT `jobs_jobapplication_applicant_id_fk_accounts_user_id` FOREIGN KEY (`applicant_id`) REFERENCES `accounts_user` (`id`),
  ADD CONSTRAINT `jobs_jobapplication_job_id_fk_jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `jobs_job` (`id`);

ALTER TABLE `jobs_savedjob`
  ADD CONSTRAINT `jobs_savedjob_job_id_fk_jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `jobs_job` (`id`),
  ADD CONSTRAINT `jobs_savedjob_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `accounts_jobseekerprofile`
  ADD CONSTRAINT `accounts_jobseekerprofile_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

ALTER TABLE `accounts_employerprofile`
  ADD CONSTRAINT `accounts_employerprofile_company_id_fk_companies_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies_company` (`id`),
  ADD CONSTRAINT `accounts_employerprofile_user_id_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);
