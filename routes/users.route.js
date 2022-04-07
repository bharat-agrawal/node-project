// const { router, connection } = require("../router");
// console.log(router);
const express = require("express");
const router = express.Router();

// const router = require('../router')
const userservice = require("../services/users.service");
router.get('/',userservice.getAll);
router.get('/:id',userservice.getOne);
router.put('/:id',userservice.updateOne);
router.delete('/:id',userservice.deleteOne);
router.post('/',userservice.createOne)

module.exports = router;

// module.exports = { router, connection };
