var recipes = {
  flour: 'cup',
  sugar: 'cups'
};
function updateObjectwithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
