# Background 

I often mix up the filtering of arrays because I put in what I want to _filter out_ into the predicate, because that's what filtering should be.

So this library is purely to add a better named extension method that just forwards the parameters to the `this.filter()` so you don't need to worry about mixing it up again.

For further reading on the underlying `.filter()` functionality, see the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

# Install

Using NPM:

`npm install array-where`

Then, it can be imported with:

`import 'array-where'`

# Usage

For flat values:

`[1, 2, 3].where(x => x > 1)`

For objects:

`[{ value: 1 }, { value: 2 }, { value: 3 },].where(item => item.value > 1)`
