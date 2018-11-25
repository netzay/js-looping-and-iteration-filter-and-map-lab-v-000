// Code your solution here:
function driversWithRevenueOver(driver, revenue){
   return driver.filter(function(driver){
    return driver['revenue'] > revenue;
  }); 
}

function driverNamesWithRevenueOver(driver, revenue){
  return driver.filter(function(driver){
    if driver['revenue'] > revenue {
      return driver.name;
    }
    }
  }); 
  
}