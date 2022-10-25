DROP TABLE IF EXISTS company;

DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS job;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS timelog;

DROP TABLE IF EXISTS user;

CREATE TABLE
    IF NOT EXISTS `user` (
        `id` INTEGER NOT NULL auto_increment,
        `username` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `password` VARCHAR(255) NOT NULL,
        `name` VARCHAR(255) NOT NULL,
        `addr1` VARCHAR(255) NOT NULL,
        `phone_number` VARCHAR(255) NOT NULL,
        `tax_id` INTEGER NOT NULL,
        PRIMARY KEY (`id`)
    ) -- CREATE TABLE
    --     user (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         username VARCHAR(30) NOT NULL UNIQUE,
    --         email VARCHAR(30) NOT NULL UNIQUE,
    --         password VARCHAR(50) NOT NULL,
    --         name VARCHAR(50) NOT NULL,
    --         addr1 VARCHAR(50) NOT NULL,
    --         phone_number VARCHAR(50) NOT NULL,
    --         tax_id INTEGER NOT NULL UNIQUE
    --     );
CREATE TABLE
    IF NOT EXISTS `company` (
        `id` INTEGER NOT NULL auto_increment,
        `name` VARCHAR(255) NOT NULL,
        `addr1` VARCHAR(255) NOT NULL,
        `phone_number` VARCHAR(255) NOT NULL,
        `tax_id` INTEGER NOT NULL,
        PRIMARY KEY (`id`)
    ) -- CREATE TABLE
    --     company (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         name VARCHAR(50) NOT NULL UNIQUE,
    --         addr1 VARCHAR(50) NOT NULL,
    --         phone_number VARCHAR(15) NOT NULL,
    --         tax_id INTEGER NOT NULL UNIQUE
    --     );
CREATE TABLE
    IF NOT EXISTS `role` (
        `id` INTEGER NOT NULL auto_increment,
        `company_id` INTEGER NOT NULL,
        `role_name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
    ) -- CREATE TABLE
    --     role (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         company_id INTEGER NOT NULL,
    --         role_name VARCHAR(50) NOT NULL,
    --         FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE
    --     );
CREATE TABLE
    IF NOT EXISTS `job` (
        `id` INTEGER NOT NULL auto_increment,
        `company_id` INTEGER NOT NULL,
        `job` VARCHAR(255) NOT NULL,
        `hourly_rate` DECIMAL(10, 2) NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
    ) -- CREATE TABLE
    --     job (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         company_id INTEGER NOT NULL,
    --         job VARCHAR(50) NOT NULL,
    --         hourly_rate DECIMAL(10, 2) NOT NULL,
    --         FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE
    --     );
CREATE TABLE
    IF NOT EXISTS `employee` (
        `id` INTEGER NOT NULL auto_increment,
        `company_id` INTEGER NOT NULL,
        `role_id` INTEGER NOT NULL,
        `manager_id` INTEGER,
        `user_id` INTEGER NOT NULL,
        `job_id` INTEGER,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
        FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
        FOREIGN KEY (`manager_id`) REFERENCES `employee` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE,
            FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
            FOREIGN KEY (`job_id`) REFERENCES `job` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE
    ) -- CREATE TABLE
    --     employee (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         company_id INTEGER NOT NULL,
    --         role_id INTEGER NOT NULL,
    --         manager_id INTEGER,
    --         user_id INTEGER NOT NULL,
    --         FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE,
    --         FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    --         FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
    --     );
CREATE TABLE
    IF NOT EXISTS `timelog` (
        `id` INTEGER NOT NULL auto_increment,
        `company_id` INTEGER NOT NULL,
        `employee_id` INTEGER NOT NULL,
        `job_id` INTEGER NOT NULL,
        `hours_worked` DECIMAL(10, 2) NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
        FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
        FOREIGN KEY (`job_id`) REFERENCES `job` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
    ) -- CREATE TABLE
    --     timelog (
    --         id INTEGER AUTO_INCREMENT PRIMARY KEY,
    --         company_id INTEGER NOT NULL,
    --         employee_id INTEGER NOT NULL,
    --         job_id INTEGER NOT NULL,
    --         hours_worked INTEGER NOT NULL,
    --         FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE
    --     );