DO $$
DECLARE 
	productId integer;
	buyerId integer;

BEGIN
	
	INSERT INTO buyers("fullName")
	VALUES ('Bruce Wayne');
	
	INSERT INTO products("name")
	VALUES ('PS4');
	
	SELECT id INTO buyerId
	FROM buyers 
	WHERE "fullName" = 'Brunce Wayne';
	
	SELECT id INTO productId
	FROM products 
	WHERE "name" = 'PS4';
	
	INSERT INTO
	  ratings("rate", "comment", "productId", "buyerId")
	VALUES
	  (4, 'best console', productId, buyerId),
	  (2, 'xbox one is better', productId, buyerId);
 
END;
$$;

