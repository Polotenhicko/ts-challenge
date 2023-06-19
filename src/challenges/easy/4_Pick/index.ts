/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/

// подсмотрел синтаксис [prop in] и Key extends keyof Type, от гпт
type MyPick<Type, Key extends keyof Type> = {
  [prop in Key]: Type[prop];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const aboba: MyPick<Todo, 'title' | 'completed'> = {
  title: 'lol',
  completed: true,
};

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
