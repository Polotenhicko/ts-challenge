/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy #object-keys

  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

// искал что-то про of вместо in, но гпт подсказал решение где [number]
type TupleToObject<T extends readonly any[]> = {
  [Prop in T[number]]: Prop;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;

type result = TupleToObject<typeof tupleNumber>;
