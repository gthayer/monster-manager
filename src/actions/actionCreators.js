import monsters from '../data/monsters';
export function update_filters(filters, key, value) {
	return {
		type: 'UPDATE_FILTERS',
		monsters,
		filters,
		key,
		value
	}
}

export function add_to_encounter(monster) {
	return {
		type: 'ADD_TO_ENCOUNTER',
		monster
	}
}

export function update_listing(key, value, i) {
	return {
		type: 'UPDATE_LISTING',
		key,
		value,
		i
	}
}

export function remove_listing(i) {
	return {
		type: 'REMOVE_LISTING',
		i
	}
}