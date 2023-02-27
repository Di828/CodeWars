function cakes(recipe, available) {
    let possibleCakesWithIngredient = [];
    
    for (let key of Object.keys(recipe)){
      possibleCakesWithIngredient.push(Math.floor((available[key] || 0) / recipe[key]));
    }
      
    return Math.min(...possibleCakesWithIngredient);
  }