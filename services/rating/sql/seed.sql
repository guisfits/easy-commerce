BEGIN;

INSERT INTO
  buyers("fullName")
VALUES
  ('Brunce Wayne');

INSERT INTO
  products("name")
VALUES
  ('PS4');

productId integer := (
  select
    id
  from
    products
  where
    "name" = 'PS4'
);

buyerId integer := (
  select
    id
  from
    buyers
  where
    "fullName" = 'Brunce Wayne'
);

INSERT INTO
  ratings("rate", "comment", "productId", "buyerId")
VALUES
  (4, 'best console', productId, buyerId),
  (2, 'xbox one is better', productId, buyerId);

COMMIT;
