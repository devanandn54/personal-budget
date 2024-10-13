const express = require("express");
const { getBudgets, addBudget, updateBudget } = require("../Controllers/budgetControllers");
const router = express.Router();


router.get('/budget', getBudgets);

router.post('/addBudget', addBudget);

router.put('/updateBudget/:id', updateBudget);


module.exports = router;