type NullableKeys<T> = {
  [K in keyof T]: unknown extends T[K] ? never : null extends T[K] ? K : never;
}[keyof T];

export type NullableToOptional<T> = {
  [K in keyof T as Exclude<K, NullableKeys<T>>]: T[K];
} & {
  [K in NullableKeys<T>]?: NonNullable<T[K]>;
};

export type NonEmptyArray<T> = [T, ...T[]];
export type NonEmptyStringArray = NonEmptyArray<string>;

export type Result<T> = { value: T } | { errors: NonEmptyStringArray };

export type ID = string;
