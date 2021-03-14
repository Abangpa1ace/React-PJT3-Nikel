var express = require('express');
var router = express.Router();

const itemsData = require('../database/itemsData');

// List Router
router.get('/:primary/:secondary', function(req, res) {
  console.log(req.query);
  let itemList = filterByParams(itemsData, req.params)
  res.json({
    itemList
  });
});

router.get('/:primary/:secondary/:tertiary', function(req, res) {
  let itemList = filterByParams(itemsData, req.params);
  console.log(req.query)
  if (req.query) {
    itemList = filterByQuery(req.query, itemList)
  }
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

const queryObject = {
  // size: (list, values) => { return list.filter(item => }
  color: (list, values) => { return list.filter(item => values.includes(item.colors.code)) },
  brand: (list, values) => { return list.filter(item => values.includes(item.brand)) },
}

// List Functions
const filterByQuery = (query, list) => {
  query = Object.entries(query).map(e => [e[0], e[1].split(",")]);
  console.log(list.length);
  for (let q of query) {
    list = queryObject[q[0]](list, q[1]);
  }
  console.log(list.length);
  return list;
}

// Detail Router


module.exports = router;