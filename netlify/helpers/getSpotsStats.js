module.exports = (activities) => {
  let SpotsStats;

  if(typeof activities === "object" && !Array.isArray(activities)) {
    SpotsStats = Object.keys(activities).reduce((object, level) => {
      activities[level].forEach(activity => {
        if(!object.TotalSpots) object.TotalSpots = 0;
        if(!object.TotalSpotsRemaining) object.TotalSpotsRemaining = 0;
        if(!object.TotalSpotsReserved) object.TotalSpotsReserved = 0;
        object.TotalSpots += activity.MaxAttendance;
        object.TotalSpotsRemaining += activity.SpotsRemaining;
        object.TotalSpotsReserved += activity.SpotsReserved;
      });
      
      return object;
    }, {});
  } else if(Array.isArray(activities)) {
    SpotsStats = activities.reduce((object, activity) => {
      if(!object.TotalSpots) object.TotalSpots = 0;
      if(!object.TotalSpotsRemaining) object.TotalSpotsRemaining = 0;
      if(!object.TotalSpotsReserved) object.TotalSpotsReserved = 0;
      object.TotalSpots += activity.MaxAttendance;
      object.TotalSpotsRemaining += activity.SpotsRemaining;
      object.TotalSpotsReserved += activity.SpotsReserved;

      return object;
    }, {});
  }

  return SpotsStats;
}