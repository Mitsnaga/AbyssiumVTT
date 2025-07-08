import type { Weapon } from "./Weapon";

export interface Proiciency {
    weapons: Weapon[];
    armor: string[];
    tools: string[];
    skills: string[];
}

export interface SavingThrows {
    abilities: string[];
}

export interface Spellcasting {
    cantrips: string[];
    spellSlotsPerLevel: Record<number, number>;
}

export interface CharacterClass {
    name: string;
    hitDie: string;
    proficiencies: Proiciency;
    savingThrows: SavingThrows;
    spellcasting?: Spellcasting;
    featuresByLevel: Record<number, string[]>;
}