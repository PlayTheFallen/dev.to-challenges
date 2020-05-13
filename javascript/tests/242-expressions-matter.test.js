import test from 'ava';

import original from '../challenges/242-expressions-matter/original.js';

test('expressionsMatter[original]', t => {
	t.is(original(1, 2, 3), 9);

	t.log(original(5, 1, 3));
	t.log(original(3, 5, 7));
	t.log(original(5, 6, 1));
	t.log(original(1, 6, 1));
	t.log(original(2, 6, 1));
});
