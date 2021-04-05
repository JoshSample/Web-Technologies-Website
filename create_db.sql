-- drop tables
DROP TABLE registration;
DROP TABLE orders;
DROP TABLE customer;
DROP TABLE product;

-- create tables
CREATE TABLE registration 
    (username       varchar(16),
    password        binary(16),
    email           varchar(50));

CREATE TABLE product
    (item_no        numeric(4),
    item_name       varchar(30),
    price           numeric(9,2),
    inventory       numeric);

CREATE TABLE customer
    (cc_no          numeric(16),
    exp_mo          numeric(2),
    exp_yr          numeric(4),
    name_first      varchar(20),
    name_last       varchar(20),
    email           varchar(20),
    address1        varchar(50),
    address2        varchar(50),
    city            varchar(20),
    state           varchar(2),
    zip             numeric(5),
    country         varchar(20),
    phone           varchar(15),
    fax             varchar(15),
    mail_list       numeric(1));

CREATE TABLE orders
    (quantity       numeric,
    date_sold       date,
    cc_no          numeric(16),
    item_no         numeric(4));

-- create primary keys
ALTER TABLE registration
    ADD CONSTRAINT registration_username_pk PRIMARY KEY(username);

ALTER TABLE product
    ADD CONSTRAINT product_item_no_pk PRIMARY KEY(item_no);

ALTER TABLE customer
    ADD CONSTRAINT customer_cc_no_pk PRIMARY KEY(cc_no);

ALTER TABLE orders
    ADD CONSTRAINT orders_cc_no_item_no_pk PRIMARY KEY(cc_no, item_no);

-- create foreign keys
ALTER TABLE orders
    ADD CONSTRAINT orders_cc_no_fk FOREIGN KEY(cc_no)
    REFERENCES customer(cc_no);

ALTER TABLE orders
    ADD CONSTRAINT orders_item_no_fk FOREIGN KEY(item_no)
    REFERENCES product(item_no);

-- create not null constraints
ALTER TABLE registration
    MODIFY username varchar(16) NOT NULL;

ALTER TABLE registration
    MODIFY password binary(16) NOT NULL;

ALTER TABLE registration
    MODIFY email varchar(50) NOT NULL;

ALTER TABLE product
    MODIFY item_no numeric(4) NOT NULL;

ALTER TABLE product
    MODIFY item_name varchar(30) NOT NULL;

ALTER TABLE product
    MODIFY price numeric(9,2) NOT NULL;

ALTER TABLE product
    MODIFY inventory numeric NOT NULL;

ALTER TABLE customer
    MODIFY cc_no numeric(16) NOT NULL;

ALTER TABLE orders
    MODIFY cc_no numeric(16) NOT NULL;

ALTER TABLE orders
    MODIFY item_no numeric(4) NOT NULL;


-- initial rows for product table
INSERT INTO product
    VALUES(0, 'Moose Boots', 250.00, 5);

INSERT INTO product
    VALUES(1, 'Caribou Skin Boots', 300.00, 5);

INSERT INTO product
    VALUES(2, 'Brown Rabbit Slippers', 150.00, 5);

INSERT INTO product
    VALUES(3, 'Snow Rabbit Slippers', 150.00, 5);

INSERT INTO product
    VALUES(4, 'Earring', 1000.00, 5);

INSERT INTO product
    VALUES(5, 'Necklace', 500.00, 5);

INSERT INTO product
    VALUES(6, 'Hair Clip', 75.00, 5);

INSERT INTO product
    VALUES(7, 'Pendant', 400.00, 5);

INSERT INTO product
    VALUES(8, 'Dog Sled', 1000.00, 5);

INSERT INTO product
    VALUES(9, 'Wood Carving', 500.00, 5);

INSERT INTO product
    VALUES(10, 'Wood Carving', 1500.00, 5);

INSERT INTO product
    VALUES(11, 'Ivory Carvings', 2500.00, 5);