const Budget = require("../models/budgetModel");

exports.getBudgets = async(req, res) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json({message: "Data fetched successfully", myBudget: budgets});
    } catch (error) {
        res.status(500).json({ message: "Error while fetching data", error});
        
    }
};

exports.addBudget = async(req, res) => {
    const { title, budget, color } = req.body;
    const newBudget = new Budget({ title, budget, color });
    
    try {
        const savedBudget = newBudget.save();
        res.status(200).json({message: "Data added successfully"});
    } catch (error) {
        res.status(500).json({message: "Error in adding data", error});        
    }
};

exports.updateBudget = async(req, res) => {
    const { id } = req.params;
    const { title, budget, color } = req.body;
    try {
        const updateBudget = await Budget.findByIdAndUpdate(id, { title, budget, color }, {new: true});
        res.status(200).json({message: "Data updated successfully"});
    } catch (error) {
        res.status(500).json({message: "Error in updating data", error});
        
    }
}