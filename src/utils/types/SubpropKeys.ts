export type SubpropKeys<T extends {[key: string]: {[key: string]: any}}> = Extract<{
  [K in keyof T]: T[K] extends Record<string, any> ? keyof T[K] : never;
}[keyof T], string>;
