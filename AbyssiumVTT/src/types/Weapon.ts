export type WeaponCategory = 'Simple Melee' | 'Simple Ranged' | 'Martial Melee' | 'Martial Ranged';
export type DamageType = 'Bludgeoning' | 'Piercing' | 'Slashing' | 'Fire' | 'Cold' | 'Lightning' | 'Force' | 'None';
export type WeaponProperties = "Ammunition" | "Finesse" | "Heavy" | "Light" | "Loading" | "Reach" | "Thrown" | "Two-Handed" | "Versatile" | "Special";

export interface WeaponProperty {
    name: string;
    description: string;
}

export interface Weapon {
    name: string;
    category: WeaponCategory;
    cost: string;
    damage: {
        dice: string;
        type: DamageType;
    };
    weight: number;
    properties: WeaponProperties[];
    range?: {
        normal: number;
        long: number; 
    };
    versatileDamage?: {
        dice: string;
    }
}
