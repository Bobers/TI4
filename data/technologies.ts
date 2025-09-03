import type { Technology } from '../types';

export const technologies: Technology[] = [
  // Base Game
  { "name": "Antimass Deflectors", "type": "Propulsion", "prereqs": {}, "text": "Your ships can move into asteroid fields.\nWhen other players' units use SPACE CANNON against your units, apply -1 to the result of each die roll.", "expansion": "Base Game" },
  { "name": "Sarween Tools", "type": "Biotic", "prereqs": {}, "text": "When you use the PRODUCTION ability of your units, reduce the combined cost of the produced units by 1.", "expansion": "Base Game" },
  { "name": "Graviton Laser System", "type": "Warfare", "prereqs": {}, "text": "Your PDS units and their SPACE CANNON rolls gain +1.", "expansion": "Base Game" },
  { "name": "Plasma Scoring", "type": "Warfare", "prereqs": {}, "text": "Your units with BOMBARDMENT and SPACE CANNON gain +1 on their combat rolls.", "expansion": "Base Game" },
  { "name": "Neural Motivator", "type": "Biotic", "prereqs": {}, "text": "During the status phase, draw 2 action cards instead of 1.", "expansion": "Base Game" },
  { "name": "Daxcive Animators", "type": "Biotic", "prereqs": { "Biotic": 1 }, "text": "After you win a ground combat, you may place 1 infantry from your reinforcements on that planet.", "expansion": "Base Game" },
  { "name": "Hyper Metabolism", "type": "Biotic", "prereqs": { "Biotic": 2 }, "text": "During the status phase, gain 3 command tokens instead of 2.", "expansion": "Base Game" },
  { "name": "X-89 Bacterial Weapon", "type": "Biotic", "prereqs": { "Biotic": 3 }, "text": "ACTION: Exhaust this card and choose 1 planet. Destroy all infantry on that planet.", "expansion": "Base Game" },
  { "name": "Gravity Drive", "type": "Propulsion", "prereqs": { "Propulsion": 1 }, "text": "After you activate a system, you may apply +1 to the move value of 1 of your ships during this tactical action.", "expansion": "Base Game" },
  { "name": "Fleet Logistics", "type": "Propulsion", "prereqs": { "Propulsion": 2 }, "text": "During each of your turns of the action phase, you may perform 1 additional action, for a total of 2 actions.", "expansion": "Base Game" },
  { "name": "Light-Wave Deflector", "type": "Propulsion", "prereqs": { "Propulsion": 3 }, "text": "Your ships can move through systems that contain other players' ships.", "expansion": "Base Game" },
  { "name": "Magen Defense Grid", "type": "Warfare", "prereqs": { "Warfare": 1 }, "text": "You may use your PDS and their SPACE CANNON abilities in systems that are adjacent to the systems they are in.", "expansion": "Base Game" },
  { "name": "Non-Euclidean Shielding", "type": "Warfare", "prereqs": { "Warfare": 2 }, "text": "Your units with SUSTAIN DAMAGE can use that ability to cancel 2 hits instead of 1.", "expansion": "Base Game" },
  { "name": "War Sun", "type": "Warfare", "prereqs": { "Warfare": 3, "Cybernetic": 1 }, "text": "Unlocks the War Sun unit.", "expansion": "Base Game" },
  // PoK
  { "name": "AI Development Algorithm", "type": "Cybernetic", "prereqs": { "Cybernetic": 2 }, "text": "When you research a technology that is not a unit upgrade technology, you may exhaust this card to ignore 1 prerequisite.", "expansion": "PoK" },
  { "name": "Bio-Stims", "type": "Biotic", "prereqs": { "Biotic": 2 }, "text": "You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty.", "expansion": "PoK" },
  { "name": "Dark Energy Tap", "type": "Propulsion", "prereqs": { "Propulsion": 1 }, "text": "When you perform a tactical action, you do not need to place a command token in the system if it does not contain another player's units.", "expansion": "PoK" },
  { "name": "Predictive Intelligence", "type": "Cybernetic", "prereqs": { "Cybernetic": 3 }, "text": "At the start of your turn, you may look at the top card of the action card deck, agenda deck, or objective deck. Place that card on the top or bottom of that deck.", "expansion": "PoK" },
  { "name": "Psychoarchaeology", "type": "Cybernetic", "prereqs": { "Cybernetic": 1 }, "text": "You may exhaust this card after you explore a planet; draw 1 additional card of that same type (cultural, hazardous, or industrial).", "expansion": "PoK" },
  { "name": "Self Assembly Routines", "type": "Cybernetic", "prereqs": { "Cybernetic": 2 }, "text": "After you produce units, you may place 1 mech from your reinforcements on a planet you control in that system.", "expansion": "PoK" },
  { "name": "Sling Relay", "type": "Propulsion", "prereqs": { "Propulsion": 2 }, "text": "ACTION: Exhaust this card to move 1 of your ships from a system that contains one of your space docks to another system that contains one of your space docks.", "expansion": "PoK" },
  { "name": "Vortex", "type": "Cybernetic", "prereqs": { "Cybernetic": 2 }, "text": "ACTION: Exhaust this card to choose another player. That player must give you 1 promissory note from their hand.", "expansion": "PoK" }
];
