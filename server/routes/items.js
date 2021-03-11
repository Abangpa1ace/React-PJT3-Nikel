var express = require('express');
var router = express.Router();

const itemsData = require('../database/itemsData');

// List Router
router.get('/:primary/:secondary', function(req, res) {
  let itemList = filterByParams(itemsData, req.params)
  res.json({
    itemList
  });
});

router.get('/:primary/:secondary/:tertiary', function(req, res) {
  let itemList = filterByParams(itemsData, req.params);
  res.json({
    itemList
  });
});

const filterByParams = (list, params) => {
  const { primary, secondary, tertiary } = params;
  let newList = list.filter((item) => {
    return item.category.primary.code === primary 
      && item.category.secondary.code === secondary;
  })
  if (tertiary) {
    newList = newList.filter((item) => item.category.tertiary.code === tertiary);
  }
  return newList;
}

// const sliceList = (list) => {
//   const offset = 0 * LIMIT;
//   return list.slice(offset, offset + LIMIT);
// }

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


module.exports = router;