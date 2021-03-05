var express = require('express');
var router = express.Router();

const itemsData = require('../database/itemsData');

// List Router
router.get('/:primary/:secondary/:tertiary', function(req, res) {
  console.log(req.params)
  console.log(req.query)
  const { primary, secondary, tertiary } = req.params
  let itemList = itemsData.filter((item) => {
    item.category.primary === primary &&
    item.category.secondary === secondary &&
    item.category.tertiary === tertiary
  })
  itemList = itemList.slice(0, 20);
  res.json(itemList);
});

// List Functions
const filterByQuery = (filter, list) => {
  // let newList = list;
  // const filterObj = {
  //   type: (type) => {
  //     const typeList = type.split(',');
  //     newList = newList.filter(rest => typeList.includes(rest.category.typeEn));
  //   },
  //   price: (price) => {
  //     const priceRange = price.split(',');
  //     newList = newList.filter(rest => rest.price >= priceRange[0] && rest.price <= priceRange[1]);
  //   },
  //   bed: (bed) => {
  //     newList = newList.filter(rest => rest.mainInfo['bed'] >= bed);
  //   },
  //   bedroom: (bedroom) => {
  //     newList = newList.filter(rest => rest.mainInfo['bedroom'] >= bedroom);
  //   },
  //   bathroom: (bathroom) => {
  //     newList = newList.filter(rest => rest.mainInfo['bathroom'] >= bathroom);
  //   }
  // }
  // for (let key in filter) {
  //   filterObj[key](filter[key]);
  // }
  // return newList;
}

// Detail Router
router.get('/detail/:id', function(req, res, next) {
  const itemDetail = itemsData.find((item) => item.id === Number(req.params.id));
  res.json(itemDetail);
});

module.exports = router;