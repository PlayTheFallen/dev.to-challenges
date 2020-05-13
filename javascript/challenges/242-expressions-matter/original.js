/* eslint-disable no-mixed-operators */
export default (a, b, c) => Math.max(
	a + b + c,
	a * b * c,
	a + b * c,
	(a + b) * c,
	a * b + c,
	a * (b + c)
);
