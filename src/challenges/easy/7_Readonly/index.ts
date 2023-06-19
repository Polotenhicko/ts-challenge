/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys

  ### Question

  Implement the built-in `Readonly<T>` generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > View on GitHub: https://tsch.js.org/7
*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// не сложно, сам
type MyReadonly<ToDo> = {
  readonly [Prop in keyof ToDo]: ToDo[Prop];
};

const lol: MyReadonly<Todo> = {
  title: 'aa',
  description: 'bb',
  completed: true,
  meta: {
    author: 'aaa',
  },
};

console.log(lol.title);
