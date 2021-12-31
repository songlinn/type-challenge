
type LengthOfString<S extends string, Result extends any[] = []> = 
 S extends `${infer Left}${infer Right}` 
  ? LengthOfString<Right, [...Result, 1]>
   : Result["length"];


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'
type TT = LengthOfString<'rre'>
type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]