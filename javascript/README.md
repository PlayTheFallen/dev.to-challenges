# dev.to JavaScript Solutions

## Completed Challenges

* [#241 - Tip Calculator](./challenges/241-tip-calculator)

## Structure

* `./challenges/{###}-{challenge-title}/*` 
* `./tests/{###}-{challenge-title}.test.js` 

## Modules used

* xojs/xo (code quality)
* avajs/ava (test cases)

## Environment Scripts

- `test` - runs xo, then ava in verbose mode

## Notes

* Rule `import/extensions` of xo linter has been disabled due to causing conflicts in es import statements.
* Test variable declarations is intended to clarify where the call is going to, rather than explain the outline of a waterfall caller.
* Results that are not known to the existing environment are not shown directly in the code, but are logged in the console when running `yarn test` .
