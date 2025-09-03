import type { ExplorationCard } from '../types';

export const exploration: ExplorationCard[] = [
    // Cultural
    { "name": "Cultural Relic", "type": "Cultural", "text": "You find a relic.", "resolution": "Gain 1 relic. Purge this card.", "expansion": "PoK" },
    { "name": "Distant Sun", "type": "Cultural", "text": "You find a planet that has a cultural trait.", "resolution": "Gain 1 command token. Then, you may explore this planet again.", "expansion": "PoK" },
    { "name": "Forgotten Colony", "type": "Cultural", "text": "You find a colony of your people.", "resolution": "Gain 2 infantry.", "expansion": "PoK" },
    { "name": "Freelancers", "type": "Cultural", "text": "You hire a band of skilled mercenaries.", "resolution": "Gain 1 mech.", "expansion": "PoK" },
    { "name": "Holy Planet", "type": "Cultural", "text": "You find a planet that has a cultural trait.", "resolution": "Attach this card to this planet. This planet's resource and influence values are increased by 1.", "expansion": "PoK" },
    { "name": "Imperial Monument", "type": "Cultural", "text": "You discover a monument to the Lazax.", "resolution": "Gain 1 victory point. Purge this card.", "expansion": "PoK" },
    { "name": "Native Intelligence", "type": "Cultural", "text": "You find a native species willing to share its knowledge.", "resolution": "You may draw 1 action card or gain 1 command token.", "expansion": "PoK" },
    { "name": "Peaceful Annexation", "type": "Cultural", "text": "You find a peaceful civilization.", "resolution": "You may spend 1 influence to place 1 PDS or 1 Space Dock from your reinforcements on this planet.", "expansion": "PoK" },
    { "name": "Rich World", "type": "Cultural", "text": "You find a wealthy civilization.", "resolution": "Ready this planet. Then, gain trade goods equal to its resource value.", "expansion": "PoK" },
    { "name": "Tomb of an Emperor", "type": "Cultural", "text": "You find the tomb of a Lazax emperor.", "resolution": "You may purge this card to gain 1 relic or draw 1 secret objective.", "expansion": "PoK" },
    // Hazardous
    { "name": "Entropic Field", "type": "Hazardous", "text": "You encounter a strange energy field.", "resolution": "You may spend 2 resources to research 1 technology.", "expansion": "PoK" },
    { "name": "Fabrication", "type": "Hazardous", "text": "You discover an automated factory.", "resolution": "You may produce 1 unit on this planet.", "expansion": "PoK" },
    { "name": "Gravity Rift", "type": "Hazardous", "text": "You encounter a gravity rift.", "resolution": "Attach this card to this planet. This planet's influence value is increased by 2.", "expansion": "PoK" },
    { "name": "Hostile Environment", "type": "Hazardous", "text": "You encounter a hostile environment.", "resolution": "Destroy 1 of your infantry on this planet.", "expansion": "PoK" },
    { "name": "Ion Storm", "type": "Hazardous", "text": "You encounter an ion storm.", "resolution": "Attach this card to this planet. Ships cannot be produced at this planet.", "expansion": "PoK" },
    { "name": "Keleres Mine", "type": "Hazardous", "text": "You find a Keleres mine.", "resolution": "You may place 1 PDS on this planet.", "expansion": "PoK" },
    { "name": "Lazax Survivor", "type": "Hazardous", "text": "You find a Lazax survivor.", "resolution": "You may draw 1 action card or gain 1 command token.", "expansion": "PoK" },
    { "name": "Lost Recon Team", "type": "Hazardous", "text": "You find a lost recon team.", "resolution": "Gain 1 infantry and 1 mech.", "expansion": "PoK" },
    { "name": "Radioactive Material", "type": "Hazardous", "text": "You find a deposit of radioactive material.", "resolution": "You may gain 2 commodities.", "expansion": "PoK" },
    { "name": "Volatile Fuel Source", "type": "Hazardous", "text": "You find a volatile fuel source.", "resolution": "You may place 1 destroyer or 1 cruiser from your reinforcements on this planet.", "expansion": "PoK" },
    // Industrial
    { "name": "Abandoned Ship", "type": "Industrial", "text": "You find an abandoned ship.", "resolution": "Gain 1 cruiser.", "expansion": "PoK" },
    { "name": "Biotic Research Facility", "type": "Industrial", "text": "You find a biotic research facility.", "resolution": "You may research 1 technology that has a green prerequisite.", "expansion": "PoK" },
    { "name": "Cybernetic Research Facility", "type": "Industrial", "text": "You find a cybernetic research facility.", "resolution": "You may research 1 technology that has a yellow prerequisite.", "expansion": "PoK" },
    { "name": "Efficient Systems", "type": "Industrial", "text": "You find an efficient system.", "resolution": "Attach this card to this planet. This planet's resource value is increased by 1.", "expansion": "PoK" },
    { "name": "High-Tech Weapons Platform", "type": "Industrial", "text": "You find a high-tech weapons platform.", "resolution": "You may place 1 PDS from your reinforcements on this planet.", "expansion": "PoK" },
    { "name": "Industrial Center", "type": "Industrial", "text": "You find an industrial center.", "resolution": "You may produce up to 3 units on this planet.", "expansion": "PoK" },
    { "name": "Mercenary Outfit", "type": "Industrial", "text": "You find a mercenary outfit.", "resolution": "Gain 2 infantry and 1 mech.", "expansion": "PoK" },
    { "name": "Propulsion Research Facility", "type": "Industrial", "text": "You find a propulsion research facility.", "resolution": "You may research 1 technology that has a blue prerequisite.", "expansion": "PoK" },
    { "name": "Smuggler's Port", "type": "Industrial", "text": "You find a smuggler's port.", "resolution": "You may gain 3 trade goods.", "expansion": "PoK" },
    { "name": "Warfare Research Facility", "type": "Industrial", "text": "You find a warfare research facility.", "resolution": "You may research 1 technology that has a red prerequisite.", "expansion": "PoK" },
    // Frontier
    { "name": "Enigmatic Device", "type": "Frontier", "text": "You find an enigmatic device.", "resolution": "You may purge this card to gain 1 relic or draw 1 secret objective.", "expansion": "PoK" },
    { "name": "Gas Giant", "type": "Frontier", "text": "You find a gas giant.", "resolution": "You may gain 3 commodities or draw 1 action card.", "expansion": "PoK" },
    { "name": "Ion Trail", "type": "Frontier", "text": "You find an ion trail.", "resolution": "You may move 1 of your ships from an adjacent system to this system.", "expansion": "PoK" },
    { "name": "Lazax Armory", "type": "Frontier", "text": "You find a Lazax armory.", "resolution": "You may gain 1 dreadnought or 1 PDS.", "expansion": "PoK" },
    { "name": "Lost Crew", "type": "Frontier", "text": "You find a lost crew.", "resolution": "Gain 2 infantry.", "expansion": "PoK" },
    { "name": "Merchant Station", "type": "Frontier", "text": "You find a merchant station.", "resolution": "You may gain 3 trade goods or 4 commodities.", "expansion": "PoK" },
    { "name": "Mirage", "type": "Frontier", "text": "You find a mirage.", "resolution": "You may place this card in your play area. You may purge this card at the start of your turn to place 1 command token in your reinforcements.", "expansion": "PoK" },
    { "name": "Nebula", "type": "Frontier", "text": "You find a nebula.", "resolution": "You may place 1 fighter from your reinforcements in this system.", "expansion": "PoK" },
    { "name": "Stellar Nursery", "type": "Frontier", "text": "You find a stellar nursery.", "resolution": "You may place 1 cruiser or 1 destroyer from your reinforcements in this system.", "expansion": "PoK" },
    { "name": "Trading Post", "type": "Frontier", "text": "You find a trading post.", "resolution": "You may replenish your commodities.", "expansion": "PoK" }
];
