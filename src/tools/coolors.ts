// https://coolors.co
// 色の組み合わせを探すのに便利

export const getColorsFromCoolors = (url: string) => {
  const slash_index = url.lastIndexOf('/');
  const pallate_str = url.slice(slash_index + 1);
  const arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}
