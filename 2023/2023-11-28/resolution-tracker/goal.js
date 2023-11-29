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
        this.currentValue += increment;
    }

    getProgress() {
        return this.currentValue/this.targetValue * 100;
    }

    isComplete() {
      return this.getProgress() >= 1
    }
    
}
