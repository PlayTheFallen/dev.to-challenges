import test from 'ava';

import original from '../challenges/241-tip-calculator/original.js';

test('calculateTip(original)', t => {
	t.assert(original(30, 'poor') === 2);
	t.assert(original(20, 'hi') === 'Rating Not Recognized');
	t.assert(original(107.65, 'great') === 17);

	t.log(original(78, 'good'));
	t.log(original(50, 'poor'));
	t.log(original(125, 'excellent'));
});
