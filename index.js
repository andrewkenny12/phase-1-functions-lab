function distanceFromHqInBlocks(distance) {
    const headQuarters = 42
    let x = distance - headQuarters;
    if (x < 0){x=x * -1}
    return x;
}

function distanceFromHqInFeet(distance1) {
    const headQuarters = 42
    let x = (distance1 - headQuarters) * 264;
    if (x < 0){x=x * -1}
    return x;
}

function distanceTravelledInFeet(distance2, distance3) {
   
    let x = (distance2 - distance3) * 264;
    if (x < 0){x=x * -1}
    return x;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    const dist = distance - 400; 
  
    if (distance < 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return dist * 0.02; 
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
      return "cannot travel that far"; 
    }
}