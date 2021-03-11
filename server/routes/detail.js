var express = require('express');
var router = express.Router();

const itemsData = require('../database/itemsData');

router.get('/:id', function(req, res, next) {
  if (req.params.id) {
    const itemDetail = itemsData.find((item) => item.id === Number(req.params.id));
    res.json({
      item: itemDetail,
    });
  }
});

module.exports = router;