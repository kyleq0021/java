function Menu(num){
  if (num == 1){
    return "French Fries";
  }
  else if (num == 2){
    return "Chocolate Shake";
  }
  else if (num == 3){
    return "Burger";
  }
  else if (num == 3){
    return "Soda";
  }
  else {
      return "Cup of Water :(";
  }
}
console.log("It's your birthday. Your mom took you out to the fanciest Burger King in your town. There are only four things on the menu. What do you want to eat? You don't know, but after minutes of thinking, you decide on the... " + Menu(Math.floor(Math.random() * 6)))
console.log();
