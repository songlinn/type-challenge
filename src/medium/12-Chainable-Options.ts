type Chainable<R extends Record<string, unknown> = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<R & {[P in K]: V}>
  get(): R
}


/* _____________ Test Cases _____________ */
import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}