-- Department jadvali
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Project jadvali
CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    website VARCHAR(255)
);

-- Worker jadvali
CREATE TABLE worker (
    id SERIAL PRIMARY KEY,
    department_id INT NOT NULL,
    name VARCHAR(255),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Project_Worker jadvali
CREATE TABLE project_worker (
    project_id INT NOT NULL,
    worker_id INT NOT NULL,
    PRIMARY KEY (project_id, worker_id),
    CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_worker FOREIGN KEY (worker_id) REFERENCES worker(id) ON DELETE CASCADE ON UPDATE CASCADE
);
