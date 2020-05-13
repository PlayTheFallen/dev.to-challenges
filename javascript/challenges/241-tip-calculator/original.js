/**
 * @param {'terrible'|'poor'|'good'|'great'|'excellent'} rating
 */
function getTip(rating) {
	switch (rating) {
		case 'terrible':
			return 0; // 0%
		case 'poor':
			return 5; // 5%
		case 'good':
			return 10; // 10%
		case 'great':
			return 15; // 15%
		case 'excellent':
			return 20; // 20%
		default:
			return null; // N/A
	}
}

/**
 * @param {number} cost
 * @param {Parameters<getTip>[0]} rating
 */
export default function calculateTip(cost, rating) {
	const tip = getTip(rating.toLowerCase());

	if (!tip) {
		return 'Rating Not Recognized';
	}

	return Math.ceil(tip / 100 * cost);
}
