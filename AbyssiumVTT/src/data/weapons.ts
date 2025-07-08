import { type Weapon } from '../types/Weapon';

export const Weapons: Weapon[] = [
  {
    name: "Club",
    category: "Simple Melee",
    cost: "1 sp",
    damage: { dice: "1d4", type: "Bludgeoning" },
    weight: 2,
    properties: ["Light"]
  },
  {
    name: "Dagger",
    category: "Simple Melee",
    cost: "2 gp",
    damage: { dice: "1d4", type: "Piercing" },
    weight: 1,
    properties: ["Finesse", "Light", "Thrown"],
    range: { normal: 20, long: 60 }
  },
  {
    name: "Greatclub",
    category: "Simple Melee",
    cost: "2 sp",
    damage: { dice: "1d8", type: "Bludgeoning" },
    weight: 10,
    properties: []
  },
  {
    name: "Handaxe",
    category: "Simple Melee",
    cost: "5 gp",
    damage: { dice: "1d6", type: "Slashing" },
    weight: 2,
    properties: ["Light", "Thrown"],
    range: { normal: 20, long: 60 }
  },
  {
    name: "Javelin",
    category: "Simple Melee",
    cost: "5 sp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 2,
    properties: ["Thrown"],
    range: { normal: 30, long: 120 }
  },
  {
    name: "Light Hammer",
    category: "Simple Melee",
    cost: "2 gp",
    damage: { dice: "1d4", type: "Bludgeoning" },
    weight: 2,
    properties: ["Light", "Thrown"],
    range: { normal: 20, long: 60 }
  },
  {
    name: "Mace",
    category: "Simple Melee",
    cost: "5 gp",
    damage: { dice: "1d6", type: "Bludgeoning" },
    weight: 4,
    properties: []
  },
  {
    name: "Quarterstaff",
    category: "Simple Melee",
    cost: "2 sp",
    damage: { dice: "1d6", type: "Bludgeoning" },
    weight: 4,
    properties: ["Versatile"],
    versatileDamage: { dice: "1d8" }
  },
  {
    name: "Sickle",
    category: "Simple Melee",
    cost: "1 gp",
    damage: { dice: "1d4", type: "Slashing" },
    weight: 1,
    properties: ["Light"]
  },
  {
    name: "Spear",
    category: "Simple Melee",
    cost: "1 gp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 3,
    properties: ["Thrown", "Versatile"],
    range: { normal: 20, long: 60 },
    versatileDamage: { dice: "1d8" }
  },
  {
    name: "Crossbow, Light",
    category: "Simple Ranged",
    cost: "25 gp",
    damage: { dice: "1d8", type: "Piercing" },
    weight: 5,
    properties: ["Ammunition", "Loading", "Two-Handed"],
    range: { normal: 80, long: 320 }
  },
  {
    name: "Dart",
    category: "Simple Ranged",
    cost: "5 cp",
    damage: { dice: "1d4", type: "Piercing" },
    weight: 0.25,
    properties: ["Finesse", "Thrown"],
    range: { normal: 20, long: 60 }
  },
  {
    name: "Shortbow",
    category: "Simple Ranged",
    cost: "25 gp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 2,
    properties: ["Ammunition", "Two-Handed"],
    range: { normal: 80, long: 320 }
  },
  {
    name: "Sling",
    category: "Simple Ranged",
    cost: "1 sp",
    damage: { dice: "1d4", type: "Bludgeoning" },
    weight: 0.5,
    properties: ["Ammunition"],
    range: { normal: 30, long: 120 }
  },
  {
    name: "Battleaxe",
    category: "Martial Melee",
    cost: "10 gp",
    damage: { dice: "1d8", type: "Slashing" },
    weight: 4,
    properties: ["Versatile"],
    versatileDamage: { dice: "1d10" }
  },
  {
    name: "Flail",
    category: "Martial Melee",
    cost: "10 gp",
    damage: { dice: "1d8", type: "Bludgeoning" },
    weight: 2,
    properties: []
  },
  {
    name: "Glaive",
    category: "Martial Melee",
    cost: "20 gp",
    damage: { dice: "1d10", type: "Slashing" },
    weight: 6,
    properties: ["Heavy", "Reach", "Two-Handed"]
  },
  {
    name: "Greataxe",
    category: "Martial Melee",
    cost: "30 gp",
    damage: { dice: "1d12", type: "Slashing" },
    weight: 7,
    properties: ["Heavy", "Two-Handed"]
  },
  {
    name: "Greatsword",
    category: "Martial Melee",
    cost: "50 gp",
    damage: { dice: "2d6", type: "Slashing" },
    weight: 6,
    properties: ["Heavy", "Two-Handed"]
  },
  {
    name: "Halberd",
    category: "Martial Melee",
    cost: "20 gp",
    damage: { dice: "1d10", type: "Slashing" },
    weight: 6,
    properties: ["Heavy", "Reach", "Two-Handed"]
  },
  {
    name: "Lance",
    category: "Martial Melee",
    cost: "10 gp",
    damage: { dice: "1d12", type: "Piercing" },
    weight: 6,
    properties: ["Reach", "Special"]
  },
  {
    name: "Longsword",
    category: "Martial Melee",
    cost: "15 gp",
    damage: { dice: "1d8", type: "Slashing" },
    weight: 3,
    properties: ["Versatile"],
    versatileDamage: { dice: "1d10" }
  },
  {
    name: "Maul",
    category: "Martial Melee",
    cost: "10 gp",
    damage: { dice: "2d6", type: "Bludgeoning" },
    weight: 10,
    properties: ["Heavy", "Two-Handed"]
  },
  {
    name: "Morningstar",
    category: "Martial Melee",
    cost: "15 gp",
    damage: { dice: "1d8", type: "Piercing" },
    weight: 4,
    properties: []
  },
  {
    name: "Pike",
    category: "Martial Melee",
    cost: "5 gp",
    damage: { dice: "1d10", type: "Piercing" },
    weight: 18,
    properties: ["Heavy", "Reach", "Two-Handed"]
  },
  {
    name: "Rapier",
    category: "Martial Melee",
    cost: "25 gp",
    damage: { dice: "1d8", type: "Piercing" },
    weight: 2,
    properties: ["Finesse"]
  },
  {
    name: "Scimitar",
    category: "Martial Melee",
    cost: "25 gp",
    damage: { dice: "1d6", type: "Slashing" },
    weight: 3,
    properties: ["Finesse", "Light"]
  },
  {
    name: "Shortsword",
    category: "Martial Melee",
    cost: "10 gp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 2,
    properties: ["Finesse", "Light"]
  },
  {
    name: "Trident",
    category: "Martial Melee",
    cost: "5 gp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 4,
    properties: ["Thrown", "Versatile"],
    range: { normal: 20, long: 60 },
    versatileDamage: { dice: "1d8" }
  },
   {
    name: "Warhammer",
    category: "Martial Melee",
    cost: "15 gp",
    damage: { dice: "1d8", type: "Bludgeoning" },
    weight: 2,
    properties: ["Versatile"],
    versatileDamage: { dice: "1d8" }
  },
  {
    name: "Whip",
    category: "Martial Melee",
    cost: "2 gp",
    damage: { dice: "1d4", type: "Slashing" },
    weight: 3,
    properties: ["Finesse", "Reach"]
  },
  {
    name: "Blowgun",
    category: "Martial Ranged",
    cost: "10 gp",
    damage: { dice: "1d1", type: "Piercing" },
    weight: 1,
    properties: ["Ammunition", "Loading"],
    range: { normal: 25, long: 100 }
  },
  {
    name: "Crossbow, Hand",
    category: "Martial Ranged",
    cost: "75 gp",
    damage: { dice: "1d6", type: "Piercing" },
    weight: 3,
    properties: ["Ammunition", "Loading", "Light"],
    range: { normal: 30, long: 120 }
  },
  {
    name: "Crossbow, Heavy",
    category: "Martial Ranged",
    cost: "50 gp",
    damage: { dice: "1d10", type: "Piercing" },
    weight: 18,
    properties: ["Ammunition", "Loading", "Two-Handed"],
    range: { normal: 100, long: 400 }
  },
  {
    name: "Longbow",
    category: "Martial Ranged",
    cost: "50 gp",
    damage: { dice: "1d8", type: "Piercing" },
    weight: 2,
    properties: ["Ammunition", "Two-Handed"],
    range: { normal: 150, long: 600 }
  },
  {
    name: "Net",
    category: "Martial Ranged",
    cost: "1 gp",
    damage: { dice: "0", type: "None" },
    weight: 3,
    properties: ["Special", "Thrown"],
    range: { normal: 5, long: 15 }
  }


]