export const obj = {
  level: 2, name: 'мечник', health: 10, attack: 80, defence: 40,
};

export const sortOrder = ['name', 'level'];

export default function orderByProps(object, sortOrderArray) {
  const arr = [];
  for (const prop in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(prop)) {
      arr.push({ key: prop, value: object[prop] });
    }
  }
  // eslint-disable-next-line arrow-body-style
  const filterFirstPart = arr.filter((item) => {
    return sortOrderArray.includes(item.key);
  });
  const sortedFirstPart = [];
  sortOrderArray.forEach((item) => {
    sortedFirstPart.push(filterFirstPart.find((i) => i.key === item));
  });
  const secondPart = [];
  arr.forEach((item) => {
    if (sortOrderArray.includes(item.key)) {
      return;
    }
    secondPart.push(item);
  });

  secondPart.sort((a, b) => {
    if (a.key < b.key) { return -1; }
    return 1;
  });

  const sortedArray = [...sortedFirstPart, ...secondPart];
  return sortedArray;
}
