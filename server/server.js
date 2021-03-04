const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./product-model');
const { getProducts, getPages } = require('./get-products-info');
require('dotenv').config();

const PORT = process.env.PORT || '8080';
const app = express();
const db = process.env.DB;

app.use(cors());

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => app.listen(PORT), console.log(`server listening on ${PORT}`))
  .catch((err) => console.log(err));

const searchResult_get = async (req, res) => {
  const { search, length } = req.query;
  const searchResults = await Product.find({
    $or: [{ category: search }, { name: search }],
  }).sort({ createdAt: -1 });
  if (!searchResults.length) return res.status(404).send(false);

  const contentPageLimit = 4;
  const products = getProducts(contentPageLimit, searchResults, length);
  const pages = getPages(contentPageLimit, searchResults);
  res.send({ products, pages });
};

app.get('/products', searchResult_get);
