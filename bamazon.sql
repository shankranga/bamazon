DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(45) NULL,
  department VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, stock)
VALUES ("iPhone Charger", "electronics", "19.99", "25");

INSERT INTO products (product, department, price, stock)
VALUES ("Rolex Day-Date", "accessories", "12000", "5");

INSERT INTO products (product, department, price, stock)
VALUES ("Disney DVD Collection", "electronics", "149.99", "10");

INSERT INTO products (product, department, price, stock)
VALUES ("Men's 3-piece suit", "clothing", "169.99", "10");

INSERT INTO products (product, department, price, stock)
VALUES ("Nintendo Switch", "electronics", "399.99", "10");

INSERT INTO products (product, department, price, stock)
VALUES ("Espresso Machine", "appliances", "159.99", "8");

INSERT INTO products (product, department, price, stock)
VALUES ("Popcorn Machine ", "appliances", "29.99", "20");

INSERT INTO products (product, department, price, stock)
VALUES ("Holographic Charizard", "collectibles", "259.99", "5");

INSERT INTO products (product, department, price, stock)
VALUES ("Dog Leash", "pets", "19.99", "20");

INSERT INTO products (product, department, price, stock)
VALUES ("Dog Bowls", "pets", "29.99", "15");