var express = require('express');
var router = express.Router();

const itemsData = require('../database/itemsData');
const LIMIT = 20;

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
  
  const { round } = req.query;
  let filterQuery = req.query;
  delete filterQuery.round;
  console.log(round, filterQuery);
  if (filterQuery) {
    itemList = filterByQuery(itemList, filterQuery)
  }
  itemList = sliceByRound(itemList, Number(round))
  res.json({
    itemList,
  });
});

// Semantic URL Handler
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

// Query String Handler
const queryObject = {
  // size: (list, values) => { return list.filter(item => }
  color: (list, values) => { return list.filter(item => values.includes(item.colors.code)) },
  brand: (list, values) => { return list.filter(item => values.includes(item.brand)) },
}

const filterByQuery = (list, query) => {
  query = Object.entries(query).map(e => [e[0], e[1].split(",")]);
  let newList = [...list];
  for (let q of query) {
    newList = queryObject[q[0]](newList, q[1]);
  }
  return newList;
}

// List Slicer by Round
const sliceByRound = (list, round) => {
  const offset = round * LIMIT;
  return list.slice(offset, offset + LIMIT);
}

module.exports = router;