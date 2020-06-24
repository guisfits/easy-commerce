# Shopping Cart

With **Shopping Cart**, **Buyer** can **buy** any **product** on the **product list** via the Buy button on any product. Besides, she can **buy** the product in the **detail product page**. After bought product, she should see these products in the shopping cart and the **summary panel** with basic information such as cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount. And whenever she **buy more products** or **remove some products** out of the cart, then the **summary panel** and **shopping cart** should be **updated**. After all, she can do a **checkout process** to pay money by clicking the Check Out button on the shopping cart page. **SysAdmin** can **see all the shopping cart of any user** so that he can **enable or disable** any invalid shopping cart in CoolStore website.

## Event-Storming

- **Buyer** create the shopping cart with product
  - ShoppingCartWithProductCreated
- **Buyer** get shopping cart with products
  - ShoppingCartWithProductsDisplayed
- **Buyer** update the amount of product in the shopping cart
  - AmountOfProductInShoppingCartUpdated
- **Buyer** delete product in the shopping cart
  - ProductInShoppingCartDeleted
- **Buyer** check out the shopping cart
  - ShoppingCartCheckedOut (**IntegrationEvent**)
- **SysAdmin** get shopping cart of buyers
  - BuyersShoppingCartDisplayed
- **SysAdmin** update enabled/disabled shopping cart of buyer
  - ShoppingCartEnabled
  - ShoppingCartDisabled

## User Stories

- As a **Buyer**, I want to **buy any product on the product catalog page** (add this product into the shopping cart - one product will be added by default).
- As a **Buyer**, I want to **see the product detail and buy this product** if I like (add this product into the shopping cart - one product will be added by default).
- As a **Buyer**, I want to **see the list of products** I just added into the shopping cart, and I would like to **see the summary information panel** for the current shopping cart such as cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount on this page.
- As a **Buyer**, I want to **update the amount of product in the shopping cart**.
  - Whenever updating amount of product happens, then the summary information panel needs to be updated accordingly to changes.
- As a **Buyer**, I want to **delete any product in the shopping cart** which they don't want to buy anymore.
  - Whenever the deleting amount of product happens, then the summary information panel needs to be updated accordingly to changes.
- As a **Buyer**, I want to do **check out my shopping cart**.
  - Whenever the number of products in the shopping cart is zero then this checks out process does not happen.
- While a shopping cart was checked out, the payment process starts.
- As a **SysAdmin**, I want to **see shopping cart of all buyers with information** about cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount.
- As a **SysAdmin**, I want to **enable/disable any shopping cart of any buyer**.

## API

- **POST**: `/shopping-cart`   
  **Buyer** buy any product on the product catalog page -> create the shopping cart with product 

- **GET**: `/shopping-cart/:id/products`   
  **Buyer** see the list of products -> get shopping cart with products 

- **GET**: `/shopping-cart/:id`  
  **Buyer** see the summary information panel (at the client side only)

- **PUT**: `/shopping-cart/:id/products`     
  **Buyer** update the amount of product in the shopping cart 

- **DELETE**: `/shopping-cart/:cartId/products/:productId`     
  **Buyer** delete any product in the shopping cart -> delete product in the shopping cart 

- **PUT**: `/shopping-cart/:cartId`   
  **Buyer** check out my shopping cart -> check out the shopping cart 

- **GET**: `/shopping-cart`    
  **SysAdmin** see shopping cart of all buyers with information -> get shopping cart of buyers 

- **PATCH**: `/shopping-cart/:id/`    
  **SysAdmin** enable/disable any shopping cart of any buyer -> update enabled/disabled shopping cart of buyer 

## Technologies
- Node
- Typescript
- Nest.js
- Jest
- ~~MongoDb~~
- ~~Swagger~~
- ~~Docker~~
- ~~Docker-Compose~~
