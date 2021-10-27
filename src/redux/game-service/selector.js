export const selectorGetCategories = (store) => {
  return store.gamesRedux.categories;
};

export const selectorGetGames = (store) => {
  return store.gamesRedux.games;
};
