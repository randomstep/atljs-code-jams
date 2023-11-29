//import { Goal } from './goal'
//const Goal = require('./goal'); 

class Goal {
    name
    unitOfMeasure
    targetValue
    currentValue
    description

    constructor(name, unitOfMeasure, targetValue, description) {
      this.name = name;
      this.unitOfMeasure = unitOfMeasure;
      this.targetValue = targetValue;
      this.currentValue = 0;
      this.description = description;
    }
    
    addProgress(increment) {
        //this.currentValue += increment;
    }

    getProgress() {
        return this.currentValue/this.targetValue * 100;
    }

    isComplete() {
      return this.getProgress() >= 1
    }
    
}


test('Adding progress should update the progress value correctly', () => {
    
    // Arrange
    const goal = new Goal(); // Create an instance of the Goal class
    const initialProgress = goal.getProgress(); // Assuming there's a getProgress method
  
    //temp, delete me
    expect(goal.currentValue).toBe(0);
    
    // Act
    goal.addProgress(10); // Add progress
  
    // Assert
    expect(goal.getProgress()).toBe(initialProgress + 10); // Check if progress is updated correctly
  });
  