export type RecursivePartial<T> = { [key in keyof T]?: RecursivePartial<T[key]> };
