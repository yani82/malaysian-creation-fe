export function sortItemsBy(sortType) {
  return (dispatch) => {
    return dispatch({
      type: "SORT_ITEMS",
      payload: sortType
    });
  };
}
