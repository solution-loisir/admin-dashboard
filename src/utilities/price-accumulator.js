const priceAccumulator = (state, targetProps) => {
  return state.Activities.reduce((acc, current) => {
    acc += current.Price * current[targetProps];
    return acc;
  }, 0);
};

export {
  priceAccumulator
}