import srdMonsters from '../data/monsters';
import customMonsters from '../data/customMonsters';

monsters = srdMonsters.concat( customMonsters );

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

export function roll_attack( attack_bonus, damage_dice, damage_bonus ) {
	return {
		type: 'ROLL_ATTACK',
		attack_bonus,
		damage_dice,
		damage_bonus
	}
}

export function run_simulation( party_a, party_b ) {
	return {
		type: 'RUN_SIMULATION',
		party_a,
		party_b
	}
}