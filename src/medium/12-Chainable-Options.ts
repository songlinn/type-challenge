type Chainable = {
  option(key: string, value: any): any
  get(): any
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
type TT = typeof result

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}