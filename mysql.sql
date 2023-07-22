DROP DATABASE IF EXISTS party;
CREATE DATABASE party DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE party;

CREATE TABLE courses
(
    id         int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    courseName varchar(64)                    NOT NULL,
    UNIQUE INDEX idx_courseName (courseName)
) ENGINE = INNODB
  CHARSET = UTF8
  COLLATE = UTF8_UNICODE_CI;

CREATE TABLE products
(
    id       int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name     varchar(64)                    NOT NULL,
    quantity int                            NOT NULL,
    course   int                            NOT NULL,
    price    decimal(13, 2)                 NOT NULL,
    FOREIGN KEY (course) REFERENCES courses (id),
    UNIQUE INDEX idx_name (name)
) ENGINE = INNODB
  CHARSET = UTF8
  COLLATE = UTF8_UNICODE_CI;

CREATE TABLE sales
(
    id       int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    saleDate date                           NOT NULL,
    products int                            NOT NULL,
    FOREIGN KEY (products) REFERENCES products (id)
) ENGINE = INNODB
  CHARSET = UTF8
  COLLATE = UTF8_UNICODE_CI;

CREATE TABLE sellers
(
    id       int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name     varchar(64)                    NOT NULL,
    course   int                            NOT NULL,
    username varchar(16)                    NOT NULL,
    password varchar(256)                   NOT NULL,
    UNIQUE INDEX idx_name (name),
    UNIQUE INDEX idx_username (username),
    FOREIGN KEY (course) REFERENCES courses (id)
) ENGINE = INNODB
  CHARSET = UTF8
  COLLATE = UTF8_UNICODE_CI;

INSERT INTO courses(courseName)
VALUES ("TÉCNICO EM INFORMÁTICA"),
       ("TÉCNICO EM ADMINISTRAÇÃO"),
       ("TECNOLOGIA EM GESTÃO DE TURISMO"),
       ("LICENCIATURA EM FÍSICA"),
       ("BACHARELADO EM ENGENHARIA ELÉTRICA"),
       ("BACHARELADO EM SISTEMAS DE INFORMAÇÃO");

/*INSERT INTO sellers(name, course)
    VALUES("PAULO VICTOR SILVA AFFONSO", 1),
          ("MARIA EDUARDA LOUBACK", 1);*/


INSERT INTO products(name, quantity, course, price)
VALUES ("Cachorro-Quente", 300, 1, 5.00),
       ("Caldo verde", 300, 1, 6.00),
       ("Caldo de ervilha", 60, 1, 6.00),
       ("Salsichão", 200, 1, 5.00),
       ("Espetinho de Frango", 100, 1, 6.00),
       ("Torta Salgada", 50, 1, 5.00),
       ("Milho", 50, 1, 3.00),
       ("Pudim", 75, 1, 4.00),
       ("Maçã do amor", 20, 1, 3.00),
       ("Palha Italiana", 40, 1, 3.00),
       ("Canjicão", 100, 1, 5.00),
       ("Pavê", 40, 1, 4.00),
       ("Mousse", 25, 1, 3.00),
       ("Cuscuz", 50, 1, 4.00),
       ("Doce de mamão", 20, 1, 3.00),
       ("Bolo", 60, 1, 4.00),
       ("Espetinho de morango", 20, 1, 8.00),
       ("Copo", 500, 1, 2.00),
       ("Guaravita", 100, 1, 2.00),
       ("Água sem gás", 16, 1, 2.00),
       ("Algodão Doce", 200, 1, 3.00),
       ("Pula-pula", 2471489, 1, 3.00),
       ("Touro Mecânico", 133255, 1, 5.00)
