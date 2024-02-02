export default function healthStatusSorter(array) {
  return array.sort((a, b) => (a.health > b.health ? -1 : 1));
}
