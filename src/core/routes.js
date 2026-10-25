// 兩條手術路線的步驟順序
export const ROUTES = {
  classic: ['intro', 'incision', 'capsulorhexis', 'chop', 'phaco', 'cortex', 'iol', 'done'],
  femto: ['intro', 'laser', 'capsuleRemoval', 'phaco', 'cortex', 'iol', 'done'],
};

export function otherRoute(route) {
  return route === 'classic' ? 'femto' : 'classic';
}
