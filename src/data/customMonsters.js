const customMonsters = [
	{
		"name": "Lizardfolk Shaman",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "lizardfolk",
		"alignment": "neutral",
		"armor_class": 13,
		"hit_points": 27,
		"hit_dice": "5d8 + 5",
		"speed": "30 ft., swim 30 ft.",
		"strength": 15,
		"dexterity": 10,
		"constitution": 13,
		"intelligence": 10,
		"wisdom": 15,
		"charisma": 8,
		"perception": 4,
		"stealth": 4,
		"survival": 6,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 14",
		"languages": "Draconic",
		"challenge_rating": 2,
		"special_abilities": [
		  {
			"name": "Hold Breath",
			"desc": "The lizardfolk can hold its breath for 15 minutes.",
			"attack_bonus": 0
		  },
		  {
			"name": "Spellcasting",
			"desc": "The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC\n\n12, +4 to hit with spell attacks). The lizardfolk has the following druid spells prepared:\n\nCantrips (at will): druidcraft, produceflame, thorn whip\n\n1st level (4 slots): entangle,fog cloud\n\n2nd level (3 slots): heat metal, spike growth\n\n3rd level (2 slots): conjure animals (reptiles only), plant growth",
			"attack_bonus": 0
		  }
		],
		"actions": [
		  {
			"name": "Multiattack",
			"desc": "The lizardfolk makes two attacks: one with its bite and one with its claws.",
			"attack_bonus": 0
		  },
		  {
			"name": "Bite",
			"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is\n\n grappled (escape DC 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. Ifthe lizardfolk reverts to its true form, the grapple ends.",
			"attack_bonus": 4,
			"damage_dice": "1d6",
			"damage_bonus": 2
		  },
		  {
			"name": "Claws (Lizardfolk Form Only)",
			"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
			"attack_bonus": 4,
			"damage_dice": "1d4",
			"damage_bonus": 2
		  },
		  {
			"name": "Change Shape (Recharges after a Short or Long Rest)",
			"desc": "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as \n\n a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
			"attack_bonus": 0
		  }
		]
	},
	{
		"name": "Lizardfolk King or Queen",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "lizardfolk",
		"alignment": "neutral",
		"armor_class": 15,
		"hit_points": 78,
		"hit_dice": "12d8 + 24",
		"speed": "30 ft., swim 30 ft.",
		"strength": 17,
		"dexterity": 12,
		"constitution": 15,
		"intelligence": 11,
		"wisdom": 11,
		"charisma": 5,
		"perception": 4,
		"stealth": 5,
		"survival": 4,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "frightend",
		"senses": "darkvision 60 ft., passive Perception 14",
		"languages": "Abyssal, Draconic",
		"challenge_rating": 4,
		"special_abilities": [
		  {
			"name": "Hold Breath",
			"desc": "The lizardfolk can hold its breath for 15 minutes.",
			"attack_bonus": 0
		  },
		  {
			"name": "Skewer",
			"desc": "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt.",
			"attack_bonus": 0
		  }
		],
		"actions": [
		  {
			"name": "Multiattack",
			"desc": "The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident.",
			"attack_bonus": 0
		  },
		  {
			"name": "Bite",
			"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
			"attack_bonus": 3,
			"damage_dice": "1d6",
			"damage_bonus": 2
		  },
		  {
			"name": "Claws",
			"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing damage.",
			"attack_bonus": 5,
			"damage_dice": "1d4",
			"damage_bonus": 3
		  },
		  {
			"name": "Trident (One hand, ranged)",
			"desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (ld6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack.",
			"attack_bonus": 5,
			"damage_dice": "1d6",
			"damage_bonus": 3
		  },
		  {
			"name": "Trident (Two Hand)",
			"desc": "Melee: +5 to hit, reach 5 ft. One target. Hit: 6 (ld8 + 3) piercing damage.",
			"attack_bonus": 5,
			"damage_dice": "1d8",
			"damage_bonus": 3
		  },
		]
	},
  ];
  
  export default customMonsters;