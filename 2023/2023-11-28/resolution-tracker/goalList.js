import Goal from goal.js

class GoalList {
    constructor() {
        this.goals = [];
    }

    addGoal(title, targetValue, description, unitOfMeasure) {
        const newGoal = new Goal(title, targetValue, description, unitOfMeasure);
        this.goals.push(newGoal);
    }

    removeGoal(index) {
        this.goals.splice(index, 1);
    }

    getGoals() {
        return this.goals;
    }

    logProgress(name, progress) {
        for (goal in this.goals){
         if (goal.name = name){
            goal.currentVale = progress
         }
        }
    }

    isGoalMet() {
        for (goal in goals){
            if(goal.progress != 100){
                return false
            } 
        }
        return true
    }
}