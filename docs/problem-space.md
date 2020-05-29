# Problem Space

The problem space, or domain, is from e-commerce industry. Everything that I suppose here is inspired by the domain model of (coolstore)[https://github.com/vietnam-devs/coolstore-microservices/tree/develop/docs/model-microservices] and my personal experience as a customer.

### Business Contexts

### Product Catalog

With **Product Catalog**, **Buyer** can browse the **products list** with supported filtering and sorting by product name and price functionalities. And she can see the **detail of the product** on the product list page by clicking on it, in the detail page, she can see a name, description, available product in the **inventory**, the inventory store information like stock address and location, a **hot product** flag (if has) and **rating**. **SysAdmin** in the system can **manage the product** and has the ability to **assign this product to the existed inventory**.

### Shopping Cart

With **Shopping Cart**, **Buyer** can **buy** any **product** on the **product list** via the Buy button on any product. Besides, she can **buy** the product in the **detail product page**. After bought product, she should see these products in the shopping cart and the **summary panel** with basic information such as cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount. And whenever she **buy more products** or **remove some products** out of the cart, then the **summary panel** and **shopping cart** should be **updated**. After all, she can do a **checkout process** to pay money by clicking the Check Out button on the shopping cart page. **SysAdmin** can **see all the shopping cart of any user** so that he can **enable or disable** any invalid shopping cart in CoolStore website.

### Payment Process

With **Payment process**, after Buyer clicked checkout button, the system will start to **validate the product** information, **process payment**, and then **send an email** to **Buyer** so that she knows about what is going on.

### Inventory

With **Inventory**, **SysAdmin** can **manage the inventory**.

### Rating

With **Rating**, **Buyer** can **rate any product** that she thinks is good (1 -> 5 stars).

### Access Control

With **Access Control**, **Buyer** or **SysAdmin** can **log on/off the system** and if **Buyer**, she will be brought into the **product catalog page**, and if **SysAdmin**, he will be brought into the **administration page**.





