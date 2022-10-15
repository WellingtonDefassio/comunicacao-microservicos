import Order from "../../modules/sales/model/Order.js";

export async function createInitialData() {
  await Order.collection.drop();
  await Order.create({
    products: [
      {
        productId: 1001,
        quantity: 2,
      },
      {
        productId: 1002,
        quantity: 2,
      },
      {
        productId: 1003,
        quantity: 1,
      },
    ],
    user: {
      id: "as8a7s8d741e5",
      name: "User test",
      email: "user@email.com",
    },

    status: "APPROVED",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await Order.create({
    products: [
      {
        productId: 1001,
        quantity: 1,
      },
      {
        productId: 1002,
        quantity: 1,
      },
      {
        productId: 1003,
        quantity: 2,
      },
    ],
    user: {
      id: "as78d7a8w7e98aw7e4",
      name: "User test 2",
      email: "user2@email.com",
    },

    status: "REJECTED",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  let initialData = await Order.find();
  console.info(
    `initial data was created: ${JSON.stringify(initialData, undefined, 4)} `
  );
}
