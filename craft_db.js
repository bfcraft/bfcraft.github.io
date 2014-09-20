var name_to_id = {
    'Limbo Stone': 122,
    'Demon Claw': 7,
    'Royal Crest': 88,
    'Don Nut': 76,
    'Dragon Ring': 115,
    'Phantom Pike': 65,
    'Abyss Stone': 121,
    'Magical Axe': 37,
    'Numb Light': 73,
    'Sky Staff': 24,
    'Blood Pelt': 46,
    'Demon Lance': 117,
    'Hollow Rock': 93,
    'Bara Nut': 85,
    'Tidal Eye': 130,
    'Red Bone': 32,
    'Blue Bug': 21,
    'Cure Gizmo 2': 112,
    'Growth Light': 64,
    'Angelic Foil': 47,
    'Star Shield': 15,
    'Wise Mask': 109,
    'Spring Stone': 111,
    'Royal Bud': 114,
    'Vampire Spear': 131,
    'Clear Cloak': 108,
    'Thunder Bow': 72,
    'White Cane': 18,
    'Beast Spear': 66,
    'Poison Shiv': 55,
    'Royal Light': 125,
    'Zelnite Ring': 98,
    'Alter Blade': 129,
    'Cure Bracer': 96,
    'Holy Robe': 31,
    'Silver Pelt': 49,
    'Blue Stone': 95,
    'Light Helm': 106,
    'Poison Light': 56,
    'Yomi Feather': 44,
    'Champion Axe': 35,
    'Ares\' Crest': 90,
    'Death Scythe': 53,
    'Yellow Bone': 34,
    'Blue Claw': 3,
    'Venom Knives': 58,
    'Spirit Armor': 27,
    'Curse Shard': 84,
    'Red Bug': 23,
    'Phoenix Eye': 119,
    'Cordelicite': 126,
    'Blue Pelt': 12,
    'Green Bug': 19,
    'Demon Rifle': 60,
    'Death Cannon': 62,
    'Soul Bracer': 102,
    'Hades Claw': 48,
    'Goddess Shield': 52,
    'Tech Gizmo 2': 110,
    'Forge Stone': 113,
    'Memory Stone': 101,
    'Cursed Light': 70,
    'Crypt Fang': 116,
    'Musa Feather': 59,
    'Karma Stone': 103,
    'Prized Stone': 99,
    'Shiny Armor': 33,
    'Goddess Seal': 13,
    'Beast Blade': 4,
    'Theo Feather': 77,
    'Golden Bug': 25,
    'Honor Drop': 26,
    'Mystic Lantern': 133,
    'Skill Bracer': 94,
    'Ogre Lance': 68,
    'Yellow Pelt': 16,
    'Divine Crest': 87,
    'Green Bone': 28,
    'Honor Claw': 8,
    'Undying Flame': 134,
    'Giant Claw': 127,
    'Suzu Nut': 83,
    'Green Fang': 36,
    'Azure Pelt': 89,
    'Sentry Cane': 20,
    'Broken Light': 67,
    'Comet Bug': 120,
    'Venom Shard': 78,
    'Zel Ring': 100,
    'Demon Eye': 118,
    'Golden Fang': 40,
    'Red Pelt': 14,
    'Ill Shard': 81,
    'Red Fang': 38,
    'Beast Armor': 29,
    'Famous Blade': 0,
    'Rhau Feather': 43,
    'Weary Shard': 82,
    'Cursed Sabre': 69,
    'Royal Shield': 50,
    'Giant Pelt': 128,
    'Blood Bone': 132,
    'Holy Blade': 2,
    'Vine Lance': 63,
    'Crown Light': 123,
    'Buru Nut': 80,
    'Honor Pelt': 17,
    'Green Claw': 1,
    'Honor Fang': 91,
    'Green Pelt': 10,
    'Gilded Pearl': 54,
    'Blue Bone': 30,
    'Dragon Blade': 6,
    'Zeus\'s Bow': 74,
    'Moon Bug': 135,
    'Holy Cane': 22,
    'Stupor Shard': 86,
    'Muramasa': 42,
    'Rhoa Feather': 105,
    'Dragon Seal': 11,
    'Cursed Robe': 92,
    'Giant Shield': 9,
    'Red Claw': 5,
    'Cursed Sword': 71,
    'Worn Fang': 107,
    'Red Stone': 97,
    'Monster Robe': 75,
    'Heth Feather': 79,
    'Faint Light': 61,
    'Lynn Feather': 57,
    'Exyl Shield': 51,
    'Wicked Stone': 124,
    'Havoc Axe': 39,
    'Honor Bone': 41,
    'Beast Bracer': 104,
    'Guardian Eye': 45,
}
var id_to_name = [
    'Famous Blade',
    'Green Claw',
    'Holy Blade',
    'Blue Claw',
    'Beast Blade',
    'Red Claw',
    'Dragon Blade',
    'Demon Claw',
    'Honor Claw',
    'Giant Shield',
    'Green Pelt',
    'Dragon Seal',
    'Blue Pelt',
    'Goddess Seal',
    'Red Pelt',
    'Star Shield',
    'Yellow Pelt',
    'Honor Pelt',
    'White Cane',
    'Green Bug',
    'Sentry Cane',
    'Blue Bug',
    'Holy Cane',
    'Red Bug',
    'Sky Staff',
    'Golden Bug',
    'Honor Drop',
    'Spirit Armor',
    'Green Bone',
    'Beast Armor',
    'Blue Bone',
    'Holy Robe',
    'Red Bone',
    'Shiny Armor',
    'Yellow Bone',
    'Champion Axe',
    'Green Fang',
    'Magical Axe',
    'Red Fang',
    'Havoc Axe',
    'Golden Fang',
    'Honor Bone',
    'Muramasa',
    'Rhau Feather',
    'Yomi Feather',
    'Guardian Eye',
    'Blood Pelt',
    'Angelic Foil',
    'Hades Claw',
    'Silver Pelt',
    'Royal Shield',
    'Exyl Shield',
    'Goddess Shield',
    'Death Scythe',
    'Gilded Pearl',
    'Poison Shiv',
    'Poison Light',
    'Lynn Feather',
    'Venom Knives',
    'Musa Feather',
    'Demon Rifle',
    'Faint Light',
    'Death Cannon',
    'Vine Lance',
    'Growth Light',
    'Phantom Pike',
    'Beast Spear',
    'Broken Light',
    'Ogre Lance',
    'Cursed Sabre',
    'Cursed Light',
    'Cursed Sword',
    'Thunder Bow',
    'Numb Light',
    'Zeus\'s Bow',
    'Monster Robe',
    'Don Nut',
    'Theo Feather',
    'Venom Shard',
    'Heth Feather',
    'Buru Nut',
    'Ill Shard',
    'Weary Shard',
    'Suzu Nut',
    'Curse Shard',
    'Bara Nut',
    'Stupor Shard',
    'Divine Crest',
    'Royal Crest',
    'Azure Pelt',
    'Ares\' Crest',
    'Honor Fang',
    'Cursed Robe',
    'Hollow Rock',
    'Skill Bracer',
    'Blue Stone',
    'Cure Bracer',
    'Red Stone',
    'Zelnite Ring',
    'Prized Stone',
    'Zel Ring',
    'Memory Stone',
    'Soul Bracer',
    'Karma Stone',
    'Beast Bracer',
    'Rhoa Feather',
    'Light Helm',
    'Worn Fang',
    'Clear Cloak',
    'Wise Mask',
    'Tech Gizmo 2',
    'Spring Stone',
    'Cure Gizmo 2',
    'Forge Stone',
    'Royal Bud',
    'Dragon Ring',
    'Crypt Fang',
    'Demon Lance',
    'Demon Eye',
    'Phoenix Eye',
    'Comet Bug',
    'Abyss Stone',
    'Limbo Stone',
    'Crown Light',
    'Wicked Stone',
    'Royal Light',
    'Cordelicite',
    'Giant Claw',
    'Giant Pelt',
    'Alter Blade',
    'Tidal Eye',
    'Vampire Spear',
    'Blood Bone',
    'Mystic Lantern',
    'Undying Flame',
    'Moon Bug',
]
var produces = [
    [ 2, 94 ],
    [ 0 ],
    [ 4, 42, 53, 90, 98, 106 ],
    [ 2 ],
    [ 6, 47, 92, 100, 110, 115, 117, 126 ],
    [ 4 ],
    [],
    [ 6 ],
    [ 6, 58, 65, 71, 92, 94, 96, 106, 110, 112, 115, 117, 129, 131 ],
    [ 11 ],
    [ 9 ],
    [ 13, 50, 54, 75, 122 ],
    [ 11, 108 ],
    [ 15, 106, 112, 126 ],
    [ 13, 133 ],
    [],
    [ 15 ],
    [ 15, 62, 68, 74, 98, 100, 102, 104, 108, 125, 129, 133 ],
    [ 20 ],
    [ 18 ],
    [ 22, 87, 96, 122 ],
    [ 20 ],
    [ 24, 119 ],
    [ 22 ],
    [],
    [ 24 ],
    [ 24, 33, 47, 51, 122 ],
    [ 29 ],
    [ 27 ],
    [ 31, 96, 102, 122 ],
    [ 29, 109 ],
    [ 33, 104, 119 ],
    [ 31 ],
    [],
    [ 33 ],
    [ 37, 94 ],
    [ 35 ],
    [ 39, 92, 114 ],
    [ 37 ],
    [],
    [ 39, 104, 114, 115 ],
    [ 39, 75, 98, 100, 102, 106, 109, 114, 123, 126 ],
    [ 47 ],
    [ 42, 50, 109 ],
    [ 42, 50, 53, 54, 108 ],
    [ 42, 50, 75 ],
    [ 42, 50, 87, 90 ],
    [],
    [ 47, 51, 117 ],
    [ 47, 51 ],
    [ 51 ],
    [],
    [ 51 ],
    [ 129 ],
    [ 129 ],
    [ 58 ],
    [ 55, 78, 123 ],
    [ 55, 60, 63, 66, 69, 72 ],
    [],
    [ 58, 62, 65, 68, 71, 74, 114, 115 ],
    [ 62 ],
    [ 60, 125 ],
    [],
    [ 65 ],
    [ 63, 81, 123 ],
    [],
    [ 68 ],
    [ 66, 82, 125 ],
    [],
    [ 71 ],
    [ 69, 84, 123 ],
    [],
    [ 74 ],
    [ 72, 86, 125 ],
    [],
    [],
    [ 56 ],
    [ 56, 64, 67, 70, 73 ],
    [],
    [ 78, 81, 82, 84, 86 ],
    [ 64, 67 ],
    [],
    [],
    [ 70 ],
    [],
    [ 73 ],
    [],
    [ 88, 119 ],
    [ 92 ],
    [ 88 ],
    [],
    [ 90 ],
    [ 131 ],
    [ 92 ],
    [ 98, 110 ],
    [ 94 ],
    [ 102, 112 ],
    [ 96 ],
    [ 100 ],
    [ 98 ],
    [],
    [ 100 ],
    [ 104 ],
    [ 102 ],
    [],
    [ 104, 114 ],
    [],
    [ 106 ],
    [],
    [],
    [],
    [ 110 ],
    [],
    [ 112 ],
    [],
    [],
    [ 115 ],
    [],
    [ 117 ],
    [],
    [ 119 ],
    [ 119 ],
    [],
    [],
    [ 123, 125 ],
    [],
    [],
    [ 126, 131 ],
    [ 126 ],
    [],
    [ 129 ],
    [],
    [ 131 ],
    [],
    [ 133 ],
    [ 133 ],
]
var needs = [
    [[ 1, 5 ]],
    [],
    [[ 0, 1 ], [ 3, 10 ]],
    [],
    [[ 2, 1 ], [ 5, 10 ]],
    [],
    [[ 4, 1 ], [ 7, 10 ], [ 8, 5 ]],
    [],
    [],
    [[ 10, 5 ]],
    [],
    [[ 9, 1 ], [ 12, 10 ]],
    [],
    [[ 11, 1 ], [ 14, 10 ]],
    [],
    [[ 13, 1 ], [ 16, 10 ], [ 17, 5 ]],
    [],
    [],
    [[ 19, 5 ]],
    [],
    [[ 18, 1 ], [ 21, 10 ]],
    [],
    [[ 20, 1 ], [ 23, 10 ]],
    [],
    [[ 22, 1 ], [ 25, 10 ], [ 26, 5 ]],
    [],
    [],
    [[ 28, 5 ]],
    [],
    [[ 27, 1 ], [ 30, 10 ]],
    [],
    [[ 29, 1 ], [ 32, 10 ]],
    [],
    [[ 31, 1 ], [ 34, 10 ], [ 26, 5 ]],
    [],
    [[ 36, 5 ]],
    [],
    [[ 35, 1 ], [ 38, 10 ]],
    [],
    [[ 37, 1 ], [ 40, 10 ], [ 41, 10 ]],
    [],
    [],
    [[ 2, 2 ], [ 43, 5 ], [ 44, 5 ], [ 45, 2 ], [ 46, 2 ]],
    [],
    [],
    [],
    [],
    [[ 42, 2 ], [ 4, 1 ], [ 48, 3 ], [ 49, 3 ], [ 26, 20 ]],
    [],
    [],
    [[ 11, 2 ], [ 43, 5 ], [ 44, 5 ], [ 45, 2 ], [ 46, 2 ]],
    [[ 50, 2 ], [ 52, 1 ], [ 48, 3 ], [ 49, 3 ], [ 26, 20 ]],
    [],
    [[ 2, 2 ], [ 44, 5 ]],
    [[ 11, 2 ], [ 44, 5 ]],
    [[ 56, 2 ], [ 57, 10 ]],
    [[ 76, 20 ], [ 77, 5 ]],
    [],
    [[ 55, 1 ], [ 59, 10 ], [ 8, 5 ]],
    [],
    [[ 61, 2 ], [ 57, 10 ]],
    [],
    [[ 60, 1 ], [ 59, 10 ], [ 17, 5 ]],
    [[ 64, 2 ], [ 57, 10 ]],
    [[ 80, 20 ], [ 77, 5 ]],
    [[ 63, 1 ], [ 59, 10 ], [ 8, 5 ]],
    [[ 67, 2 ], [ 57, 10 ]],
    [[ 80, 20 ], [ 77, 5 ]],
    [[ 66, 1 ], [ 59, 10 ], [ 17, 5 ]],
    [[ 70, 4 ], [ 57, 20 ]],
    [[ 83, 20 ], [ 77, 5 ]],
    [[ 69, 1 ], [ 59, 10 ], [ 8, 5 ]],
    [[ 73, 4 ], [ 57, 20 ]],
    [[ 85, 20 ], [ 77, 5 ]],
    [[ 72, 1 ], [ 59, 10 ], [ 17, 5 ]],
    [[ 11, 1 ], [ 45, 3 ], [ 41, 20 ]],
    [],
    [],
    [[ 56, 2 ], [ 79, 10 ]],
    [],
    [],
    [[ 64, 2 ], [ 79, 10 ]],
    [[ 67, 2 ], [ 79, 10 ]],
    [],
    [[ 70, 2 ], [ 79, 10 ]],
    [],
    [[ 73, 2 ], [ 79, 10 ]],
    [[ 20, 1 ], [ 46, 3 ]],
    [[ 87, 1 ], [ 89, 3 ]],
    [],
    [[ 2, 1 ], [ 46, 3 ], [ 91, 20 ]],
    [],
    [[ 88, 1 ], [ 37, 1 ], [ 4, 1 ], [ 93, 3 ], [ 8, 30 ]],
    [],
    [[ 35, 1 ], [ 0, 1 ], [ 95, 3 ], [ 8, 10 ]],
    [],
    [[ 20, 1 ], [ 29, 1 ], [ 97, 3 ], [ 8, 20 ]],
    [],
    [[ 94, 1 ], [ 2, 1 ], [ 99, 3 ], [ 41, 20 ], [ 17, 20 ]],
    [],
    [[ 98, 1 ], [ 4, 1 ], [ 101, 3 ], [ 41, 20 ], [ 17, 20 ]],
    [],
    [[ 96, 1 ], [ 29, 1 ], [ 103, 3 ], [ 41, 20 ], [ 17, 20 ]],
    [],
    [[ 102, 1 ], [ 31, 1 ], [ 40, 3 ], [ 17, 15 ], [ 105, 3 ]],
    [],
    [[ 13, 1 ], [ 2, 1 ], [ 107, 3 ], [ 41, 30 ], [ 8, 30 ]],
    [],
    [[ 44, 10 ], [ 12, 10 ], [ 17, 20 ]],
    [[ 43, 10 ], [ 30, 10 ], [ 41, 20 ]],
    [[ 94, 1 ], [ 4, 1 ], [ 111, 3 ], [ 8, 20 ]],
    [],
    [[ 96, 1 ], [ 13, 1 ], [ 113, 3 ], [ 8, 20 ]],
    [],
    [[ 37, 1 ], [ 40, 3 ], [ 59, 3 ], [ 41, 15 ], [ 105, 3 ]],
    [[ 4, 1 ], [ 40, 3 ], [ 59, 3 ], [ 8, 15 ], [ 116, 5 ]],
    [],
    [[ 4, 1 ], [ 118, 3 ], [ 48, 3 ], [ 8, 20 ]],
    [],
    [[ 87, 1 ], [ 22, 1 ], [ 31, 1 ], [ 120, 3 ], [ 121, 3 ]],
    [],
    [],
    [[ 11, 1 ], [ 20, 1 ], [ 29, 1 ], [ 26, 20 ]],
    [[ 56, 3 ], [ 64, 3 ], [ 70, 3 ], [ 124, 10 ], [ 41, 15 ]],
    [],
    [[ 61, 3 ], [ 67, 3 ], [ 73, 3 ], [ 124, 10 ], [ 17, 15 ]],
    [[ 4, 2 ], [ 13, 2 ], [ 127, 10 ], [ 128, 10 ], [ 41, 10 ]],
    [],
    [],
    [[ 53, 3 ], [ 54, 3 ], [ 130, 3 ], [ 8, 20 ], [ 17, 20 ]],
    [],
    [[ 92, 1 ], [ 127, 10 ], [ 132, 3 ], [ 8, 20 ]],
    [],
    [[ 134, 1 ], [ 17, 5 ], [ 14, 5 ], [ 135, 5 ]],
    [],
    [],
]