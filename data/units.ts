import type { Unit } from '../types';

export const units: Unit[] = [
  // Generic Units
  { "name": "Carrier", "type": "Carrier", "stats": { "cost": 3, "combat": 9, "move": 1, "capacity": 4 }, "abilities": [], "upgrade": "Carrier II", "expansion": "Base Game" },
  { "name": "Carrier II", "type": "Carrier", "stats": { "cost": 3, "combat": 9, "move": 2, "capacity": 6 }, "abilities": ["SUSTAIN DAMAGE"], "upgrade": null, "expansion": "Base Game" },
  { "name": "Cruiser", "type": "Cruiser", "stats": { "cost": 2, "combat": 7, "move": 2, "capacity": 0 }, "abilities": [], "upgrade": "Cruiser II", "expansion": "Base Game" },
  { "name": "Cruiser II", "type": "Cruiser", "stats": { "cost": 2, "combat": 6, "move": 3, "capacity": 1 }, "abilities": [], "upgrade": null, "expansion": "Base Game" },
  { "name": "Destroyer", "type": "Destroyer", "stats": { "cost": 1, "combat": 9, "move": 2, "capacity": 0 }, "abilities": ["ANTI-FIGHTER BARRAGE 9 (x2)"], "upgrade": "Destroyer II", "expansion": "Base Game" },
  { "name": "Destroyer II", "type": "Destroyer", "stats": { "cost": 1, "combat": 8, "move": 2, "capacity": 0 }, "abilities": ["ANTI-FIGHTER BARRAGE 6 (x3)"], "upgrade": null, "expansion": "Base Game" },
  { "name": "Dreadnought", "type": "Dreadnought", "stats": { "cost": 4, "combat": 5, "move": 1, "capacity": 1 }, "abilities": ["SUSTAIN DAMAGE", "BOMBARDMENT 5"], "upgrade": "Dreadnought II", "expansion": "Base Game" },
  { "name": "Dreadnought II", "type": "Dreadnought", "stats": { "cost": 4, "combat": 5, "move": 2, "capacity": 1 }, "abilities": ["SUSTAIN DAMAGE", "BOMBARDMENT 4"], "upgrade": null, "expansion": "Base Game" },
  { "name": "Fighter", "type": "Fighter", "stats": { "cost": null, "combat": 9, "move": null, "capacity": 0 }, "abilities": [], "upgrade": "Fighter II", "expansion": "Base Game" },
  { "name": "Fighter II", "type": "Fighter", "stats": { "cost": null, "combat": 8, "move": 2, "capacity": 0 }, "abilities": ["This unit may move without being transported. Each fighter in a system that does not have capacity is destroyed at the end of a tactical action."], "upgrade": null, "expansion": "Base Game" },
  { "name": "Infantry", "type": "Infantry", "stats": { "cost": null, "combat": 8, "move": null, "capacity": 0 }, "abilities": [], "upgrade": "Infantry II", "expansion": "Base Game" },
  { "name": "Infantry II", "type": "Infantry", "stats": { "cost": null, "combat": 7, "move": null, "capacity": 0 }, "abilities": [], "upgrade": null, "expansion": "Base Game" },
  { "name": "Mech", "type": "Mech", "stats": { "cost": 2, "combat": 6, "move": null, "capacity": 0 }, "abilities": ["SUSTAIN DAMAGE", "PLANETARY SHIELD"], "upgrade": null, "expansion": "PoK" },
  { "name": "PDS", "type": "PDS", "stats": { "cost": 2, "combat": null, "move": null, "capacity": 0 }, "abilities": ["SPACE CANNON 6", "PLANETARY SHIELD"], "upgrade": "PDS II", "expansion": "Base Game" },
  { "name": "PDS II", "type": "PDS", "stats": { "cost": 2, "combat": null, "move": null, "capacity": 0 }, "abilities": ["SPACE CANNON 5", "PLANETARY SHIELD", "DEEP SPACE CANNON"], "upgrade": null, "expansion": "Base Game" },
  { "name": "Space Dock", "type": "Space Dock", "stats": { "cost": null, "combat": null, "move": null, "capacity": 0 }, "abilities": ["PRODUCTION 5"], "upgrade": "Space Dock II", "expansion": "Base Game" },
  { "name": "Space Dock II", "type": "Space Dock", "stats": { "cost": null, "combat": null, "move": null, "capacity": 0 }, "abilities": ["PRODUCTION 7", "Your ships in this system are protected from ANTI-FIGHTER BARRAGE."], "upgrade": null, "expansion": "Base Game" },
  { "name": "War Sun", "type": "War Sun", "stats": { "cost": 12, "combat": 3, "move": 2, "capacity": 6 }, "abilities": ["SUSTAIN DAMAGE", "BOMBARDMENT 3 (x3)"], "upgrade": null, "expansion": "Base Game" },
  { "name": "Flagship", "type": "Flagship", "stats": { "cost": 8, "combat": 5, "move": 1, "capacity": 3 }, "abilities": ["SUSTAIN DAMAGE", "Faction-specific abilities vary."], "upgrade": null, "expansion": "Base Game" },
  // Faction Flagships
  { "name": "Duha Menaimon (Arborec)", "type": "Flagship", "stats": { "cost": 8, "combat": 7, "move": 1, "capacity": 5 }, "abilities": ["SUSTAIN DAMAGE", "At the end of the status phase, you may place 1 infantry from your reinforcements in this system's space area."], "upgrade": null, "expansion": "PoK" },
  { "name": "Genesis (Sol)", "type": "Flagship", "stats": { "cost": 8, "combat": 5, "move": 1, "capacity": 12 }, "abilities": ["SUSTAIN DAMAGE", "At the start of a space combat in this system, you may produce up to 2 fighters in this system."], "upgrade": null, "expansion": "Base Game" },
  { "name": "Wrath of Kenara (Hacan)", "type": "Flagship", "stats": { "cost": 8, "combat": 7, "move": 1, "capacity": 3 }, "abilities": ["SUSTAIN DAMAGE", "After you roll a die during a space combat in this system, you may spend 1 trade good to apply +1 to the result."], "upgrade": null, "expansion": "Base Game" },
  { "name": "Loncara Ssodu (Xxcha)", "type": "Flagship", "stats": { "cost": 8, "combat": 7, "move": 1, "capacity": 3 }, "abilities": ["SUSTAIN DAMAGE", "SPACE CANNON 5 (x3)."], "upgrade": null, "expansion": "Base Game" }
];
