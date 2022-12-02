export const filterByDay = (filter, state) => {
  if(!filter) return state;
  return Object.keys(state).reduce((object, level) => {
    const filteredActivities = state[level].filter(activity => activity.SubCategoryName.toLowerCase() === filter.toLowerCase());
    if(filteredActivities.length) object[level] = filteredActivities; 
    return object;
  }, {});
}