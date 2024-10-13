const mongoose = require('mongoose');


const budgetSchema = new mongoose.Schema({
    title: {type: String, required: true},
    budget: {type: Number, required: true, min: [0, 'Budget must be a positive number']},
    color: {type: String, required: true, match:[/^#[0-9A-Fa-f]{6}$/, 'Color must be a valid hex code']}
});

const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;