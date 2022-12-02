export const getDays = (data) => {
  if(!data) return [];
  return data.Activities.reduce((array, activity) => {
    array.push(activity.SubCategoryName);
    return [...new Set(array)];
  }, []);
}