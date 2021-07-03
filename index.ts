
// We're gonna build an app that mimics a shopping retail platform
// Domains:
// - Customers can add / remove orders
// - Admins:
//  - Manage inventory
//  - Can view daily / monthly / weekly reports
// - Cashiers
//  - Manages the orders of Customers

// We begin with a Customer Data.
type Customer = {
  customerId: string
  firstname: string
  lastname: string
}

// Define a Product
type Product = {
  productId: number
  name: string
}

// Define inventory
type Inventory = {
  products: Product[]
  dateRange: {
    dateRangeFrom: Date
    dateRangeTo: Date
  }
}

// Define order
type Order = {
  orderId: string
  productIds: string[] // string[] is primitive. TODO. refactor later.
  customerId: string
  timestamp: Date
}

// Let's define a proper Id's for every structure, not just strings.

type ProductId = { productId: string }
type CustomerId = { customerId: string }
type OrderId = { orderId: string }


// let's have constructors for Id's,
// why? We can't just have any string / empty string.

const productIdOf = (value: string): ProductId => {

  // this is just our requirements for now.
  if (value.length === 0) {

    // what shall we return here?
    throw new Error('not supported');
  } else {

    return { productId: value }
  }
}

const customerIdOf = (value: string): CustomerId => {

    throw new Error("Not implemented yet.");
}

const orderIdOf = (value: string): OrderId => {

    throw new Error("Not implemented yet.")
}
