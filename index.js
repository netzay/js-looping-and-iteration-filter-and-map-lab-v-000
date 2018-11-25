
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
  });
}

function exactMatch(drivers, revenue){
  return drivers.filter(function(driver){
    if (driver.revenue === revenue) && (driver.name === name){
      return driver;
    }

  })
}

function exactMatchToList(drivers, revenue){
  return exactMatch(drivers, revenue).map(function(driver){
    return driver.name
  });
  
}