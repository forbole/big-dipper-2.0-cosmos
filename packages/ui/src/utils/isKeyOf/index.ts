function isKeyOf<T>(key: string, obj: T): key is keyof T & string {
  return key in obj;
}

export default isKeyOf;
