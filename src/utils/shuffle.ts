export function shuffle<T>(arr: T[]): T[] {
  let rand: number;
  let tmp: T;
  let len = arr.length;
  const ret = arr.slice();
  while (len) {
    rand = Math.floor(Math.random() * len--);
    tmp = ret[len];
    ret[len] = ret[rand];
    ret[rand] = tmp;
  }
  return ret;
}
