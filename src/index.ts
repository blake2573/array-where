declare global {
  interface Array<T> {
    where(callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): Array<T>;
  }
}

if (!Array.prototype.where) {
  Array.prototype.where = function<T>(this: T[], callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
    return this.filter(callback, thisArg);
  };
}

export { };
