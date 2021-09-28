SELECT p. p_id, p.cus_id, p.p_name, c1.name1, c2.name2  
FROM product AS p  
LEFT JOIN customer1 AS c1  
ON p.cus_id=c1.cus_id  
LEFT JOIN customer2 AS c2  
ON p.cus_id = c2.cus_id  

product_items
product_locations

SELECT pi.product_item_barcode, pi.product_item_quantity, pl.location_id
FROM product_items as pi 
LEFT JOIN product_locations AS pl
ON pi.product_item_barcode=pl.product_item_barcode
WHERE pi.product_id=350;

alter table product_locations
ADD CONSTRAINT fk_product_item_barcode 
FOREIGN KEY (product_item_barcode) 
REFERENCES product_items(product_item_barcode)


INSERT INTO product_items(product_item_barcode,product_item_quantity,product_id)
VALUES
(26321626,20000,298),
(23384144,20000,298),
(98129353,20000,298),
(24680072,20000,298),
(34743567,20000,298),
(42392318,20000,298),
(46767210,20000,298),
(59259258,20000,298),
(33864320,20000,298),
(23952965,20000,298),
(98247956,20000,298),
(86283437,20000,298),
(74539263,20000,298),
(25132251,20000,298),
(56366966,20000,298),
(16109080,20000,298),
(48260792,20000,298),
(11353946,20000,298),
(87362157,20000,298),
(37795481,20000,298),
(27337273,20000,298),
(52705101,20000,298),
(51854647,20000,298),
(71977415,20000,298),
(69983854,20000,298),
(96119373,20000,298),
(65910613,20000,298);

INSERT INTO product_locations(product_item_barcode,location_id)
VALUES
(26321626,'PRB31'),
(23384144,'PRB31'),
(98129353,'PRB31'),
(24680072,'PRB31'),
(34743567,'PRB31'),
(42392318,'PRB31'),
(46767210,'PRB31'),
(59259258,'PRB31'),
(33864320,'PRB31'),
(23952965,'PRB31'),
(98247956,'PRB31'),
(86283437,'PRB32'),
(74539263,'PRB32'),
(25132251,'PRB32'),
(56366966,'PRB32'),
(16109080,'PRB32'),
(48260792,'PRB32'),
(11353946,'PRB32'),
(87362157,'PRB32'),
(37795481,'PRB32'),
(27337273,'PRB32'),
(52705101,'PRB32'),
(51854647,'PRB32'),
(71977415,'PRB32'),
(69983854,'PRB33'),
(96119373,'PRB33'),
(65910613,'PRB33');