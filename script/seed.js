const db = require('../server/db');
const {
  Admin,
  Photo,
  Order,
  Product,
  Workshop,
} = require('../server/db/models');

const admin = {
  name: 'Don Gonzalez',
  email: 'Gonzalez_6007@msn.com',
  password: '123',
};

const products = [
  {
    title: 'Sepia Wrap Bowl',
    specs: '9.75" dia. X 1.75"h',
    description: '',
    price: 15000,
    category: 'vessel',
  },
];

const photos = [
  {
    filePath: '/public/photos/vess1.jpeg',
    productId: 1,
  },
];

const orders = [
  {
    date: Date.now(),
    name: 'Monica Gonzalez',
    email: 'monica@email.com',
    shippingAddress: '111 Fake St',
    billingAddress: '111 Fake St',
    subtotal: 10000,
    shippingFee: 1000,
    status: 'processing',
    productId: 1,
  },
];

const workshop = {
  category: 'glassblowing',
  dates: 'October 10-12, 2018',
  spotsRemaining: 6,
};

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log('db synced!');

    const adminsPromise = await Promise.all([Admin.create(admin)]);

    const [vess1] = await Promise.all(
      products.map(product => Product.create(product))
    );

    const photosPromise = await Promise.all(
      photos.map(photo => Photo.create(photo))
    );

    const [testOrder] = await Promise.all(
      orders.map(order => Order.create(order))
    );

    const workshopPromise = await Promise.all([Workshop.create(workshop)]);

    await vess1.setOrders([testOrder]);

    db.close();

    console.log('Seeding complete!');
  } catch (err) {
    console.error(err);
    db.close();
  }
};

seed();
