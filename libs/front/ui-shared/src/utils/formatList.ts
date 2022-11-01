// export function formatList(items: string[]) {
//   console.log(items);

//   items.map((item: string, index: number) => {
//     if (index === items.length - 1) {
//       return item;
//     }
//     return `${item},`
//     // console.log(item, index);
//   });
//   // console.log([...items, 'française', 'marocaine'].length)
//   // if (index === listLength - 1) {
//   //     return title
//   // }
//   // return `${title},`
// }

export function formatList(item: string, listLength: number, index: number) {
  if (index === listLength - 1) {
    return item;
  }
  return `${item}, `;
}

