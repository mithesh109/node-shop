const Cart = require('./cart');
const db = require('../helpers/database');
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    // can handle storing id in constructor or in the save.
    // Max uses handling id in the save method
    // this.id = Math.floor(Math.random()*20000000000);
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl]);
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * from products where id = ?', [id]);
  };
}