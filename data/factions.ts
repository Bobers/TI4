import type { Faction } from '../types';

// Data is a combination of base game and PoK
export const factions: Faction[] = [
  {
    "name": "The Arborec",
    "abilities": [{ "name": "Mitosis", "text": "At the start of the status phase, place 1 infantry from your reinforcements on 1 planet you control." }],
    "commodities": 3, "home": 10,
    "leaders": {
        "agents": [{ "name": "Letani Ospha", "text": "When 1 or more of your units use PRODUCTION: You may exhaust this card to reduce the combined cost of the produced units by 1." }],
        "commanders": [{ "name": "Dirzuga", "text": "After 1 or more of your ground forces are destroyed, gain 1 commodity or convert 1 of your commodities to a trade good." }],
        "heroes": [{ "name": "Letani Miasmiala", "text": "ACTION: You may produce any number of units in any number of systems that contain 1 or more of your units that have PRODUCTION. Then, purge this card.", "unlocks": ["Dirzuga"] }]
    },
    "promissory": { "name": "Stymie", "text": "ACTION: Place this card faceup in your play area.\nWhile this card is in your play area, the Arborec player cannot use their Mitosis faction ability.\nIf you activate a system that contains 1 or more of the Arborec player's units, return this card to the Arborec player." },
    "setup": ["Place 1 Space Dock and 1 Infantry on Nestphar."],
    "sheet": "https://imgur.com/vH5zu1F",
    "starting": { "fleet": { "Carrier": 1, "Cruiser": 1, "Fighter": 2, "Infantry": 4, "Space Dock": 1 }, "tech": ["Magen Defense Grid"], "units": {} },
    "units": [
        { "name": "Letani Warrior I", "text": "This unit has PRODUCTION 1. This unit is treated as both a ground force and a structure.", "type": "Infantry" },
        { "name": "Letani Warrior II", "text": "This unit has PRODUCTION 1. This unit is treated as both a ground force and a structure.", "type": "Infantry" },
        { "name": "Duha Menaimon", "text": "This ship's capacity is increased by 3. At the end of the status phase, you may place 1 infantry from your reinforcements in this system's space area.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Barony of Letnev",
    "abilities": [
      { "name": "Munitions Reserves", "text": "At the start of each combat round, you may spend 2 resources to apply +1 to the result of each of your combat rolls during this combat round." },
      { "name": "Armada", "text": "Your fleet pool is increased by 2." }
    ],
    "commodities": 3, "home": 15,
    "leaders": {
        "agents": [{ "name": "Viscount Unlenn", "text": "At the start of a combat round: You may exhaust this card to choose 1 ship in the active system. That ship rolls 1 additional combat die during this combat round." }],
        "commanders": [{ "name": "Rear Admiral Farran", "text": "When you would use your MUNITIONS RESERVES faction ability, you may do so without spending resources." }],
        "heroes": [{ "name": "Darktalon", "text": "ACTION: Choose up to 2 non-home, non-legendary planets. For each chosen planet, you may either ready that planet or gain 1 trade good. Then, purge this card.", "unlocks": [] }]
    },
    "promissory": { "name": "War Funding", "text": "At the end of your turn: You may give the Letnev player 2 trade goods. If you do, you may produce 1 unit in a system that contains one of your space docks. Then, return this card to the Letnev player." },
    "setup": ["Place 1 Space Dock, 1 PDS, and 1 Ground Force on Arc Prime. Place 1 Dreadnought, 1 Carrier, and 1 Ground Force in the space area of the system."],
    "sheet": "https://imgur.com/Kz8j1gW",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Destroyer": 1, "Fighter": 1, "Infantry": 3, "Space Dock": 1 }, "tech": ["Plasma Scoring", "Antimass Deflectors"], "units": {} },
    "units": [
      { "name": "Arc Secundus", "text": "This ship has BOMBARDMENT 5 (x3).", "type": "Dreadnought" },
      { "name": "Nonesteroid", "text": "Other players' ships in this system cannot use SUSTAIN DAMAGE. At the start of a space combat in this system, you may destroy 1 of your fighters or infantry to produce 1 hit and assign it to 1 of your opponent's ships.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Clan of Saar",
    "abilities": [
      { "name": "Scavenge", "text": "After you gain control of a planet, gain 1 trade good." },
      { "name": "Nomadic", "text": "Your space docks can move and retreat as if they were ships. Your space docks can be blockaded." }
    ],
    "commodities": 1, "home": 16,
    "leaders": {
      "agents": [{"name": "G'hom Sek'kus", "text": "After a player activates a system: You may exhaust this card; that player may produce up to 2 units in that system. Apply +1 to the result of 1 die during this production."}],
      "commanders": [{"name": "Rowl, Son of G'hom", "text": "When you would use your SCAVENGE faction ability, you gain 1 additional trade good."}],
      "heroes": [{"name": "The Great Bear", "text": "ACTION: Place 1 of your space docks from your reinforcements in a system that contains one of your ships, or replace one of your PDS with a space dock. Then, you may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Promise of Protection", "text": "When one of your units is destroyed: Place that unit on this card. If there are 3 or more units on this card, you may return this card to the Saar player to place those units in your home system." },
    "setup": ["Place 1 Space Dock, 2 Ground Forces, and 4 Fighters on Lisis II."],
    "sheet": "https://imgur.com/pB33gDq",
    "starting": { "fleet": { "Carrier": 2, "Destroyer": 1, "Fighter": 4, "Infantry": 2, "Space Dock": 1 }, "tech": ["Antimass Deflectors"], "units": {} },
    "units": [
      { "name": "Floating Factory I", "text": "This unit has PRODUCTION 5. This unit can move and retreat as if it were a ship. This unit can be blockaded.", "type": "Space Dock" },
      { "name": "Floating Factory II", "text": "This unit has PRODUCTION 7. This unit can move and retreat as if it were a ship. This unit can be blockaded.", "type": "Space Dock" },
      { "name": "Son of Ragh", "text": "This unit has ANTI-FIGHTER BARRAGE 5 (x3).", "type": "Flagship" }
    ]
  },
  {
    "name": "The Embers of Muaat",
    "abilities": [
      { "name": "Star Forge", "text": "ACTION: Spend 1 command token from your strategy pool to place 1 of your dreadnoughts or war suns in a system that contains one of your war suns." },
      { "name": "Gashlai Physiology", "text": "Your ships can move into supernovas." }
    ],
    "commodities": 4, "home": 8,
    "leaders": {
      "agents": [{"name": "Umbat", "text": "At the start of your turn: You may exhaust this card to place 1 cruiser from your reinforcements in a system that contains 1 or more of your war suns."}],
      "commanders": [{"name": "Magmus", "text": "When you would use your STAR FORGE faction ability, you may do so without spending a command token."}],
      "heroes": [{"name": "Adjudicator Ba'al", "text": "ACTION: Choose 1 non-home system that contains your ships. Destroy all other players' units in that system. Then, place 1 of your war suns from your reinforcements in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Fires of the Gashlai", "text": "ACTION: Spend 5 resources to place 1 of your command tokens in a system that contains a Muaat war sun. Then, return this card to the Muaat player." },
    "setup": ["Place 1 War Sun and 4 Infantry in the space area of the system."],
    "sheet": "https://imgur.com/uRj0SPu",
    "starting": { "fleet": { "War Sun": 1, "Fighter": 2, "Infantry": 4 }, "tech": ["Plasma Scoring"], "units": {} },
    "units": [
      { "name": "Prototype War Sun I", "text": "This unit has SUSTAIN DAMAGE and BOMBARDMENT 3 (x3). This unit is not affected by anomalies.", "type": "War Sun" },
      { "name": "Prototype War Sun II", "text": "This unit has SUSTAIN DAMAGE and BOMBARDMENT 3 (x3). This unit is not affected by anomalies.", "type": "War Sun" },
      { "name": "The Inferno", "text": "This unit has +2 on its combat rolls. This unit is not affected by anomalies.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Emirates of Hacan",
    "abilities": [
      { "name": "Masters of Trade", "text": "You do not have to be neighbors with other players to conduct transactions with them." },
      { "name": "Guild Ships", "text": "At the start of the status phase, you gain 1 trade good for each of your neighbors who has 2 or more of their ships in systems that are adjacent to your systems." }
    ],
    "commodities": 6, "home": 5,
    "leaders": {
      "agents": [{ "name": "Carth of Golden Sands", "text": "After another player activates a system that contains 1 or more of your units: You may exhaust this card; that player gains 2 trade goods and you gain 1 commodity." }],
      "commanders": [{ "name": "Gila the Silvertongue", "text": "You may perform transactions with players who are not your neighbor. When you would replenish commodities, you may do so at any time during your turn." }],
      "heroes": [{ "name": "Harruq Al-Abbas", "text": "ACTION: Choose another player. That player may give you up to 3 of their trade goods. If they do, you must give that player an equal number of your commodities. Then, purge this card.", "unlocks": [] }]
    },
    "promissory": { "name": "Trade Convoys", "text": "When you would replenish commodities: You may spend 1 of the Hacan player's trade goods to replenish your commodities to your commodity value. Then, return this card to the Hacan player." },
    "setup": ["Place 1 space dock on Hercant."],
    "sheet": "https://imgur.com/uG5t4fG",
    "starting": { "fleet": { "Carrier": 1, "Dreadnought": 1, "Cruiser": 1, "Fighter": 2, "Infantry": 4, "Space Dock": 1 }, "tech": ["Antimass Deflectors", "Sarween Tools"], "units": {} },
    "units": [
      { "name": "Wrath of Kenara", "text": "This unit has PRODUCTION 2.", "type": "Dreadnought" },
      { "name": "Pride of the People", "text": "This unit has SUSTAIN DAMAGE. After you roll a die during a space combat in this system, you may spend 1 trade good to apply +1 to the result.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Federation of Sol",
    "abilities": [
      { "name": "Orbital Drop", "text": "ACTION: Spend 1 command token from your strategy pool to place 2 infantry from your reinforcements on 1 planet you control." },
      { "name": "Versatile", "text": "When you would spend a command token, you may spend 1 trade good instead." }
    ],
    "commodities": 4, "home": 1,
    "leaders": {
      "agents": [{"name": "Claire Gibson", "text": "After a player activates a system: You may exhaust this card; that player may place 1 infantry from their reinforcements on a planet they control in that system."}],
      "commanders": [{"name": "Deep Blue", "text": "At the start of a ground combat on a planet you control: You may place 1 infantry from your reinforcements on that planet."}],
      "heroes": [{"name": "Jace, the Eternal", "text": "ACTION: Choose 1 non-home system that contains your ships. You may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Military Support", "text": "At the start of your turn: Place 2 infantry from the Sol player's reinforcements on a planet you control. Then, return this card to the Sol player." },
    "setup": ["Place 2 infantry on Jord."],
    "sheet": "https://imgur.com/c4vr2M8",
    "starting": { "fleet": { "Carrier": 2, "Destroyer": 1, "Fighter": 3, "Infantry": 5, "Space Dock": 1 }, "tech": ["Neural Motivator"], "units": {} },
    "units": [
      { "name": "Advanced Carrier II", "text": "This unit has SUSTAIN DAMAGE and a capacity of 8.", "type": "Carrier" },
      { "name": "Spec Ops II", "text": "This unit has +1 on combat rolls.", "type": "Infantry" },
      { "name": "Genesis", "text": "At the start of a space combat in this system, you may produce up to 2 fighters in this system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Ghosts of Creuss",
    "abilities": [
      { "name": "Slipstream", "text": "Your ships can move through systems that contain other players' ships." },
      { "name": "Quantum Entanglement", "text": "When you would place a unit in a system that contains one of your wormhole tokens, you may place that unit in any other system that contains one of your wormhole tokens."}
    ],
    "commodities": 4, "home": 17,
    "leaders": {
      "agents": [{"name": "Whyss, the Stillness", "text": "When you activate a system that contains a wormhole, you may exhaust this card to allow your ships to move an additional 1 space during this tactical action."}],
      "commanders": [{"name": "Pa'tice, the Seeker", "text": "When you would place a unit in a system that contains one of your wormhole tokens, you may place that unit in any other system that contains one of your wormhole tokens."}],
      "heroes": [{"name": "Riftwalker Meian", "text": "ACTION: Choose 1 of your non-flagship ships in a system that contains a Creuss wormhole; you may replace that ship with your flagship. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Iff Transponders", "text": "When you move ships through a system that contains a Creuss wormhole token, you are not required to have a command token in that system. Then, return this card to the Creuss player." },
    "setup": ["Place 1 Destroyer, 1 Carrier, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Carrier": 1, "Destroyer": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Gravity Drive"], "units": {} },
    "units": [
      { "name": "Icarus Drive", "text": "During movement, this ship may move through systems that contain other players' ships. This ship is not blockaded.", "type": "Flagship" },
      { "name": "Dimensional Splicer", "text": "DEPLOY: After you activate a system that contains a planet you control and either an alpha or beta wormhole, you may deploy this unit on that planet.", "type": "Mech" }
    ],
    "technologies": [
        { "name": "Wormhole Generator", "type": "Propulsion", "prereqs": { "Propulsion": 2 }, "text": "At the start of the status phase, you may place or move 1 of your Creuss wormhole tokens into a system that contains a planet you control or a non-home system that does not contain another player's ships." },
        { "name": "Dimensional Splicer", "type": "Warfare", "prereqs": { "Warfare": 1 }, "text": "After you activate a system that contains 1 or more of your wormhole tokens, you may apply +1 to the move of 1 of your ships during this tactical action." }
    ]
  },
  {
    "name": "The L1Z1X Mindnet",
    "abilities": [
      { "name": "Harrow", "text": "When you would perform a BOMBARDMENT, each of your dreadnoughts and war suns may roll 1 additional die." },
      { "name": "Assimilation", "text": "When you would gain control of a planet, you may replace 1 of your opponent's infantry on that planet with 1 of your own from your reinforcements." }
    ],
    "commodities": 2, "home": 7,
    "leaders": {
      "agents": [{"name": "C-Mor", "text": "At the start of your turn: You may exhaust this card to choose 1 player. That player must give you 1 promissory note from their hand."}],
      "commanders": [{"name": "2RAM", "text": "When you would use your ASSIMILATION faction ability, you may do so an additional time."}],
      "heroes": [{"name": "The Admiral", "text": "ACTION: Choose 1 non-home system. You may move any number of your ships from any systems to the chosen system. Then, you may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Cybernetic Logic", "text": "When you research a technology that is not a unit upgrade technology: You may exhaust this card to ignore 1 prerequisite. Then, return this card to the L1Z1X player." },
    "setup": ["Place 1 Dreadnought, 1 Carrier, 3 Fighters, and 5 Infantry in your home system."],
    "sheet": "https://imgur.com/K3e3g2E",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Fighter": 3, "Infantry": 5, "Space Dock": 1 }, "tech": ["Neural Motivator", "Plasma Scoring"], "units": {} },
    "units": [
      { "name": "Super-Dreadnought I", "text": "This unit has SUSTAIN DAMAGE and BOMBARDMENT 4.", "type": "Dreadnought" },
      { "name": "Super-Dreadnought II", "text": "This unit has SUSTAIN DAMAGE and BOMBARDMENT 4 (x2).", "type": "Dreadnought" },
      { "name": "[0.0.1]", "text": "This ship has +1 on its combat rolls for each other non-fighter ship in the system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Mentak Coalition",
    "abilities": [
      { "name": "Pillage", "text": "After a player in a system that contains your ships gains trade goods, you may gain 1 of their trade goods." },
      { "name": "Ambush", "text": "At the start of a space combat, you may roll 1 die for each of up to 2 of your cruisers or destroyers in the system. For each result equal to or greater than that ship's combat value, your opponent must choose 1 of their ships in the system to be destroyed." }
    ],
    "commodities": 2, "home": 6,
    "leaders": {
      "agents": [{"name": "S'Ula Mentarion", "text": "At the start of a space combat: You may exhaust this card to choose 1 ship in the active system. That ship must be destroyed."}],
      "commanders": [{"name": "IP-Z01", "text": "When you would use your PILLAGE faction ability, you may gain 1 trade good from the supply instead of from that player."}],
      "heroes": [{"name": "The Fourth Moon", "text": "ACTION: Choose 1 player. That player must give you all of their trade goods. Then, you must give that player all of your commodities. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "The Black Market", "text": "When you would spend trade goods: You may spend any number of the Mentak player's trade goods as if they were your own. Then, return this card to the Mentak player." },
    "setup": ["Place 3 Cruisers, 2 Fighters, and 4 Infantry in your home system."],
    "sheet": "https://imgur.com/b59yCj8",
    "starting": { "fleet": { "Cruiser": 3, "Destroyer": 1, "Fighter": 2, "Infantry": 4, "Space Dock": 1 }, "tech": ["Sarween Tools", "Plasma Scoring"], "units": {} },
    "units": [
      { "name": "Ambusher", "text": "This unit has +1 on its combat rolls if it is in a system that does not contain any of your non-fighter ships.", "type": "Cruiser" },
      { "name": "Seventh Fleet", "text": "This ship has SUSTAIN DAMAGE. This ship may move through systems that contain other players' ships.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Naalu Collective",
    "abilities": [
      { "name": "Telepathic", "text": "At the end of the strategy phase, you may place the Naalu '0' token on your strategy card." },
      { "name": "Foresight", "text": "After another player moves ships into a system that contains your ships, you may move your ships from that system to an adjacent system that does not contain another player's ships. You are not required to have a command token in that system." }
    ],
    "commodities": 3, "home": 12,
    "leaders": {
      "agents": [{"name": "Z'eu", "text": "At the start of your turn: You may exhaust this card to choose 1 player. That player may move up to 2 of their fighters from their reinforcements to a system that contains one of their space docks."}],
      "commanders": [{"name": "M'aban", "text": "When you would use your FORESIGHT faction ability, you may move your ships to a system that contains another player's ships if it contains one of your non-fighter ships."}],
      "heroes": [{"name": "The Oracle", "text": "ACTION: Choose 1 player. That player gains 2 command tokens. You may look at that player's hand of action cards and choose 1 of them. Then, that player must discard that card. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Gift of Prescience", "text": "At the end of the strategy phase: You may place the Naalu '0' token on your strategy card. If you do, return this card to the Naalu player." },
    "setup": ["Place 1 Carrier, 1 Cruiser, 1 Destroyer, 3 Fighters, and 4 Infantry in your home system."],
    "sheet": "https://imgur.com/k91lR2o",
    "starting": { "fleet": { "Carrier": 1, "Cruiser": 1, "Destroyer": 1, "Fighter": 3, "Infantry": 4, "Space Dock": 1 }, "tech": ["Neural Motivator", "Sarween Tools"], "units": {} },
    "units": [
      { "name": "Hybrid Crystal Fighter I", "text": "This unit has +1 on its combat rolls.", "type": "Fighter" },
      { "name": "Hybrid Crystal Fighter II", "text": "This unit has +1 on its combat rolls. This unit may move without being transported. Each fighter in a system that does not have capacity is destroyed at the end of a tactical action.", "type": "Fighter" },
      { "name": "Matriarch", "text": "This ship has +1 on its combat rolls for each of your fighters in the system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Nekro Virus",
    "abilities": [
      { "name": "Galactic Threat", "text": "You cannot vote on agendas. You cannot have secret objectives." },
      { "name": "Technological Singularity", "text": "When you would research a technology, you may destroy 1 of your infantry to ignore 1 prerequisite." },
      { "name": "Propagation", "text": "When you would score a public objective, you may do so even if you do not meet its requirements, if you have technology cards with a combined value of at least 7 printed on them." }
    ],
    "commodities": 3, "home": 4,
    "leaders": {
      "agents": [{"name": "Nekro Molder", "text": "When you would gain a technology, you may exhaust this card to gain 1 command token."}],
      "commanders": [{"name": "Nekro Acumen", "text": "When you would use your TECHNOLOGICAL SINGULARITY faction ability, you may do so without destroying an infantry."}],
      "heroes": [{"name": "The Maw", "text": "ACTION: Choose 1 player. That player must give you 1 technology card that they own. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Antivirus", "text": "At the end of your turn: You may purge 1 of your technology cards to gain trade goods equal to its cost. Then, return this card to the Nekro player." },
    "setup": ["Place 1 Dreadnought, 1 Carrier, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/mY7Lgvl",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Daxcive Animators"], "units": {} },
    "units": [
      { "name": "The Alastor", "text": "This ship has +1 on its combat rolls for each technology you own.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Sardakk N'orr",
    "abilities": [
      { "name": "Unrelenting", "text": "Apply +1 to the result of each of your combat rolls." },
      { "name": "Tekklar Legion", "text": "At the start of a ground combat, you may produce 1 hit and assign it to 1 of your opponent's ground forces." }
    ],
    "commodities": 1, "home": 13,
    "leaders": {
      "agents": [{"name": "T'ro", "text": "At the end of your turn: You may exhaust this card to place 1 infantry from your reinforcements on a planet you control."}],
      "commanders": [{"name": "G'sar", "text": "When you would use your TEKKLAR LEGION faction ability, you may do so an additional time."}],
      "heroes": [{"name": "Sh'val", "text": "ACTION: Choose 1 non-home system that contains your units. Destroy all other players' units in that system. Then, land up to 2 of your infantry from your reinforcements on a planet in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Tekklar Legion", "text": "When you would commit units to a planet: You may commit up to 1 unit from the Sardakk N'orr player's reinforcements to that planet. If you do, return this card and the committed unit to the Sardakk N'orr player at the end of the combat." },
    "setup": ["Place 1 Carrier, 1 Cruiser, 2 Fighters, and 5 Infantry in your home system."],
    "sheet": "https://imgur.com/eBwD3V0",
    "starting": { "fleet": { "Carrier": 1, "Cruiser": 1, "Fighter": 2, "Infantry": 5, "Space Dock": 1 }, "tech": [], "units": {} },
    "units": [
      { "name": "Exotrireme I", "text": "This unit has SUSTAIN DAMAGE. This unit is deployed to a space area instead of a planet. During an invasion, this unit may use its BOMBARDMENT ability on planets in adjacent systems.", "type": "Dreadnought" },
      { "name": "Exotrireme II", "text": "This unit has SUSTAIN DAMAGE. This unit is deployed to a space area instead of a planet. During an invasion, this unit may use its BOMBARDMENT ability on planets in adjacent systems.", "type": "Dreadnought" },
      { "name": "C'morran Norr", "text": "This ship applies +1 to the result of each of your other ships' combat rolls in this system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Universities of Jol-Nar",
    "abilities": [
      { "name": "Fragile", "text": "Apply -1 to the result of each of your combat rolls." },
      { "name": "Brilliant", "text": "When you would spend a command token to resolve the secondary ability of a strategy card, you may remove that command token from the board and return it to your reinforcements." },
      { "name": "Analytical", "text": "When you research a technology, you may ignore 1 prerequisite." }
    ],
    "commodities": 4, "home": 2,
    "leaders": {
      "agents": [{"name": "Doctor Sucaban", "text": "After a player researches a technology: You may exhaust this card to gain 4 trade goods."}],
      "commanders": [{"name": "Ta-Zern", "text": "When you would use your BRILLIANT faction ability, you may return the command token to your tactic pool instead of your reinforcements."}],
      "heroes": [{"name": "Rin, the Master's Legacy", "text": "ACTION: You may research up to 3 technologies that are not faction technologies. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Research Agreement", "text": "When you would research a technology: You may exhaust this card to ignore 1 prerequisite. Then, return this card to the Jol-Nar player." },
    "setup": ["Place 1 Dreadnought, 1 Carrier, 2 Fighters, and 2 Infantry in your home system."],
    "sheet": "https://imgur.com/rN5hN8I",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Fighter": 2, "Infantry": 2, "PDS": 2, "Space Dock": 1 }, "tech": ["Neural Motivator", "Sarween Tools", "Plasma Scoring", "Antimass Deflectors"], "units": {} },
    "units": [
      { "name": "J.N.S. Hylarim", "text": "This ship has +1 on its combat rolls for each technology you own.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Winnu",
    "abilities": [
      { "name": "Peace and Prosperity", "text": "When you would place a command token in a system that does not contain your units, you may place that token from your reinforcements instead of from your strategy or tactic pools." },
      { "name": "Reclamation", "text": "After you resolve a tactical action in a system that contains Mecatol Rex, you may place 1 PDS or 1 Space Dock from your reinforcements on Mecatol Rex." },
      { "name": "Blood Ties", "text": "You are the defender in any combat that takes place in a system that contains Mecatol Rex." }
    ],
    "commodities": 3, "home": 9,
    "leaders": {
      "agents": [{"name": "Berekar", "text": "When a player would place a structure on a planet you control, you may exhaust this card to prevent them from doing so."}],
      "commanders": [{"name": "Rickar", "text": "When you would use your RECLAMATION faction ability, you may do so an additional time."}],
      "heroes": [{"name": "Y'sia", "text": "ACTION: Choose 1 non-home system that contains your units. You may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Acquiescence", "text": "When you would score a public objective: You may exhaust this card to score that objective even if you do not meet its requirements. Then, return this card to the Winnu player." },
    "setup": ["Place 1 Cruiser, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/OqD8K6i",
    "starting": { "fleet": { "Cruiser": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Sarween Tools"], "units": {} },
    "units": [
      { "name": "Salai Sai Corla", "text": "This ship can have up to 2 additional unit upgrade technology cards attached to it. This ship applies the abilities of those technology cards to itself.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Xxcha Kingdom",
    "abilities": [
        { "name": "Peace Accords", "text": "After a player activates a system that contains 1 or more of your units, you may spend 1 command token from your strategy pool; the active player cannot move ships into that system." },
        { "name": "Quash", "text": "When an agenda is revealed, you may spend 1 command token from your strategy pool to discard that agenda and reveal the next agenda from the top of the deck. No player may vote on the discarded agenda." }
    ],
    "commodities": 4, "home": 14,
    "leaders": {
        "agents": [{"name": "Ggrucoto Rinn", "text": "When you would cast votes: You may exhaust this card to cast 3 additional votes for an outcome of your choice."}],
        "commanders": [{"name": "Elder Q'dn", "text": "When you would use your PEACE ACCORDS faction ability, you may do so without spending a command token."}],
        "heroes": [{"name": "Xxekir Grom", "text": "ACTION: Choose 1 player. That player gains 1 command token. You may look at that player's hand of action cards and choose 1 of them. Then, that player must discard that card. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Political Favor", "text": "When an agenda is revealed: You may discard this card to force the Xxcha player to use their QUASH faction ability on that agenda without spending a command token. Then, return this card to the Xxcha player." },
    "setup": ["Place 1 space dock on Archon Vail."],
    "sheet": "https://imgur.com/V7a84zF",
    "starting": { "fleet": { "Carrier": 2, "Cruiser": 1, "Fighter": 3, "Infantry": 4, "Space Dock": 1, "PDS": 1 }, "tech": ["Graviton Laser System"], "units": {} },
    "units": [
        { "name": "Loncara Ssodu", "text": "This unit has SPACE CANNON 5 (x3).", "type": "Flagship" },
        { "name": "Indomitus", "text": "This unit has Planetary Shield. This unit is deployed to a space area instead of a planet. This unit can use its SPACE CANNON against ships in adjacent systems.", "type": "PDS" }
    ]
  },
  {
    "name": "The Yin Brotherhood",
    "abilities": [
      { "name": "Indoctrination", "text": "When you would gain control of a planet, you may replace 1 of your opponent's infantry on that planet with 1 of your own from your reinforcements." },
      { "name": "Devotion", "text": "At the start of a space combat, you may destroy 1 of your cruisers or destroyers to produce 1 hit and assign it to 1 of your opponent's ships." }
    ],
    "commodities": 2, "home": 11,
    "leaders": {
      "agents": [{"name": "Brother Milor", "text": "At the end of your turn: You may exhaust this card to place 1 infantry from your reinforcements on a planet you control."}],
      "commanders": [{"name": "Brother Omar", "text": "When you would use your INDOCTRINATION faction ability, you may do so an additional time."}],
      "heroes": [{"name": "The Wanderer", "text": "ACTION: Choose 1 non-home system. You may move any number of your infantry from any systems to planets in the chosen system. Then, you may produce up to 3 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Greyfire Mutagen", "text": "At the start of an invasion: You may replace 1 of your infantry with 1 mech from your reinforcements. Then, return this card to the Yin player." },
    "setup": ["Place 1 Carrier, 1 Destroyer, 2 Fighters, and 4 Infantry in your home system."],
    "sheet": "https://imgur.com/qLgT1oJ",
    "starting": { "fleet": { "Carrier": 1, "Destroyer": 1, "Fighter": 2, "Infantry": 4, "Space Dock": 1 }, "tech": ["Sarween Tools"], "units": {} },
    "units": [
      { "name": "Van Hauge", "text": "This ship has +1 on its combat rolls for each other non-fighter ship in the system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Yssaril Tribes",
    "abilities": [
      { "name": "Stall Tactics", "text": "When you would pass during the action phase, you may discard 1 action card to not pass." },
      { "name": "Scheming", "text": "After you perform an action, you may draw 1 action card." },
      { "name": "Spy", "text": "When you would draw 1 or more action cards, draw 1 additional action card. Then, choose and discard 1 action card from your hand." }
    ],
    "commodities": 3, "home": 3,
    "leaders": {
      "agents": [{"name": "Soo Kle", "text": "When another player would draw 1 or more action cards, you may exhaust this card to allow them to draw 1 additional action card. If you do, draw 1 action card."}],
      "commanders": [{"name": "Greken", "text": "When you would use your SCHEMING faction ability, you may do so an additional time."}],
      "heroes": [{"name": "Y'sia", "text": "ACTION: Look at the top 5 cards of the action card deck. Add 2 of those cards to your hand and discard the rest. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Spy Network", "text": "At the start of your turn: You may look at the top card of the action card, agenda, or objective deck. Place it on the top or bottom of that deck. Then, return this card to the Yssaril player." },
    "setup": ["Place 1 Carrier, 2 Cruisers, 2 Fighters, and 5 Infantry in your home system."],
    "sheet": "https://imgur.com/vH5zu1F",
    "starting": { "fleet": { "Carrier": 1, "Cruiser": 2, "Fighter": 2, "Infantry": 5, "Space Dock": 1 }, "tech": ["Neural Motivator"], "units": {} },
    "units": [
      { "name": "Y'sia Y'ssrila", "text": "This ship has +1 on its combat rolls for each action card you have.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Argent Flight",
    "abilities": [
      { "name": "Zeal", "text": "Your ships can move into systems that contain other players' ships." },
      { "name": "Raid Formation", "text": "When you would move ships, you do not need to move all of your ships of a single type. You may move any number of your ships of a single type." },
      { "name": "Strike Wing", "text": "Your destroyers and cruisers have +1 on their combat rolls." }
    ],
    "commodities": 3, "home": 20,
    "leaders": {
      "agents": [{"name": "Trrakan", "text": "When you would produce units, you may exhaust this card to apply +1 to the result of 1 die during this production."}],
      "commanders": [{"name": "Traggis", "text": "When you would use your STRIKE WING faction ability, your destroyers and cruisers have an additional +1 on their combat rolls."}],
      "heroes": [{"name": "A'iida", "text": "ACTION: Choose 1 non-home system. You may move any number of your ships from any systems to the chosen system. Then, you may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Hawkish Impetus", "text": "When you would activate a system: You may exhaust this card to move up to 2 of the Argent Flight player's destroyers or cruisers from an adjacent system to the active system. Then, return this card to the Argent Flight player." },
    "setup": ["Place 1 Destroyer, 2 Cruisers, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Destroyer": 1, "Cruiser": 2, "Fighter": 2, "Infantry": 3, "Space Dock": 1, "PDS": 1 }, "tech": ["Sarween Tools", "Plasma Scoring"], "units": {} },
    "units": [
      { "name": "Quetzal", "text": "This ship has PRODUCTION 2.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Empyrean",
    "abilities": [
      { "name": "Voidborn", "text": "Your ships can move into and through nebulas." },
      { "name": "Aetherstream", "text": "When you would move ships, you may treat systems that contain your ships as adjacent to each other." }
    ],
    "commodities": 4, "home": 21,
    "leaders": {
      "agents": [{"name": "Acamar", "text": "When a player activates a system that contains your ships, you may exhaust this card to allow that player to move through systems that contain your ships."}],
      "commanders": [{"name": "M'uatt", "text": "When you would use your AETHERSTREAM faction ability, you may treat systems that contain other players' ships as adjacent to each other if you have a ship in that system."}],
      "heroes": [{"name": "Dark-matter Emulator", "text": "ACTION: Choose 1 non-home system. You may place 1 of your cruisers from your reinforcements in that system. Then, you may produce up to 3 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Dark Pact", "text": "At the start of your turn: You may exhaust this card to place 1 cruiser from your reinforcements in a system that contains an Empyrean ship. Then, return this card to the Empyrean player." },
    "setup": ["Place 1 Destroyer, 2 Cruisers, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Destroyer": 1, "Cruiser": 2, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Dark Energy Tap"], "units": {} },
    "units": [
      { "name": "Dynamo", "text": "This ship has +1 on its combat rolls for each wormhole in or adjacent to the active system.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Mahact Gene-Sorcerers",
    "abilities": [
      { "name": "Edict", "text": "When you would cast votes, you may cast up to 2 additional votes. If you do, for each vote you cast, you must spend 1 token from your strategy or tactic pools." },
      { "name": "Genetic Masterpiece", "text": "You can use the abilities of other players' commanders that are in the same system as your ships." }
    ],
    "commodities": 4, "home": 22,
    "leaders": {
      "agents": [{"name": "Il Na", "text": "When you would cast votes, you may exhaust this card to cast 3 additional votes."}],
      "commanders": [{"name": "Il Pa", "text": "When you would use your EDICT faction ability, you may spend influence instead of command tokens."}],
      "heroes": [{"name": "Il Va", "text": "ACTION: Choose 1 player. That player gains 1 command token. You may take 1 of that player's commanders and place it on your leader sheet. You may use that commander's ability as if it were your own. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Bloodpact", "text": "At the start of your turn: You may exhaust this card to gain 1 of the Mahact player's commanders. You may use that commander's ability as if it were your own until the end of your turn. Then, return this card and the commander to the Mahact player." },
    "setup": ["Place 2 Dreadnoughts, 1 Carrier, 2 Fighters, and 2 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Dreadnought": 2, "Carrier": 1, "Fighter": 2, "Infantry": 2, "Space Dock": 1 }, "tech": ["Bio-Stims", "Predictive Intelligence"], "units": {} },
    "units": [
      { "name": "The Orm", "text": "This ship has +1 on its combat rolls for each commander you have.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Naaz-Rokha Alliance",
    "abilities": [
      { "name": "Ancient Knowledge", "text": "When you would explore a planet, you may explore that planet 1 additional time." },
      { "name": "Fabrication", "text": "When you would produce units, you may spend 1 trade good to reduce the combined cost of the produced units by 1." }
    ],
    "commodities": 3, "home": 23,
    "leaders": {
      "agents": [{"name": "Garv", "text": "When you would explore a planet, you may exhaust this card to draw 1 additional exploration card."}],
      "commanders": [{"name": "Dart", "text": "When you would use your ANCIENT KNOWLEDGE faction ability, you may do so an additional time."}],
      "heroes": [{"name": "Hesh", "text": "ACTION: Choose 1 planet type (cultural, hazardous, or industrial). You may explore each planet of that type that you control. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Gift of the N'orr", "text": "When you would explore a planet: You may exhaust this card to draw 1 additional exploration card. Then, return this card to the Naaz-Rokha player." },
    "setup": ["Place 1 Dreadnought, 1 Carrier, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Psychoarchaeology", "AI Development Algorithm"], "units": {} },
    "units": [
      { "name": "The Visz", "text": "This ship has PRODUCTION 1. This ship has +1 on its combat rolls for each relic you have.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Nomad",
    "abilities": [
      { "name": "The Company", "text": "At the end of your turn, you may gain 1 trade good." },
      { "name": "Future Sight", "text": "When you would draw 1 or more action cards, you may look at the top 3 cards of the action card deck. Draw 1 of those cards and place the others on the top or bottom of the deck in any order." }
    ],
    "commodities": 3, "home": 24,
    "leaders": {
      "agents": [{"name": "Artuno the Betrayer", "text": "At the start of your turn: You may exhaust this card to choose 1 player. That player may move up to 2 of their ships from a system that contains your ships to an adjacent system."}],
      "commanders": [{"name": "The Thundarian", "text": "When you would use your THE COMPANY faction ability, you gain 1 additional trade good."}],
      "heroes": [{"name": "The Oracle", "text": "ACTION: Choose 1 player. That player gains 2 command tokens. You may look at that player's hand of action cards and choose 1 of them. Then, that player must discard that card. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "The Cavalry", "text": "At the start of a combat: You may place 1 of the Nomad player's fighters from their reinforcements in the active system. Then, return this card to the Nomad player." },
    "setup": ["Place 1 Dreadnought, 1 Carrier, 1 Destroyer, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Dreadnought": 1, "Carrier": 1, "Destroyer": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Sling Relay"], "units": {} },
    "units": [
      { "name": "Memoria", "text": "This ship has PRODUCTION 2. This ship can move through systems that contain other players' ships.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Titans of Ul",
    "abilities": [
      { "name": "Terracraft", "text": "ACTION: Spend 1 command token from your strategy pool to place 1 PDS from your reinforcements on a planet you control." },
      { "name": "Awaken", "text": "When you would place a PDS on a planet, you may replace that PDS with 1 cruiser from your reinforcements." }
    ],
    "commodities": 3, "home": 25,
    "leaders": {
      "agents": [{"name": "Ula", "text": "When a player would produce units, you may exhaust this card to apply +1 to the result of 1 die during this production."}],
      "commanders": [{"name": "Helio", "text": "When you would use your TERRAFORM faction ability, you may do so without spending a command token."}],
      "heroes": [{"name": "Ouranos", "text": "ACTION: Choose 1 non-home system. You may place 1 of your cruisers from your reinforcements in that system. Then, you may produce up to 3 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Promise of the Past", "text": "When you would place a structure: You may place 1 of the Titans of Ul player's PDS from their reinforcements on a planet you control. Then, return this card to the Titans of Ul player." },
    "setup": ["Place 2 Cruisers, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Cruiser": 2, "Fighter": 2, "Infantry": 3, "Space Dock": 1, "PDS": 1 }, "tech": ["Sarween Tools", "Antimass Deflectors"], "units": {} },
    "units": [
      { "name": "Helios", "text": "This ship has SUSTAIN DAMAGE. This ship has PRODUCTION 1.", "type": "Flagship" }
    ]
  },
  {
    "name": "The Vuil'Raith Cabal",
    "abilities": [
      { "name": "Devour", "text": "When one of your opponent's non-fighter ships is destroyed in a system that contains your ships, place that ship on your faction sheet. You can have a maximum of 3 ships on your faction sheet." },
      { "name": "Reanimate", "text": "ACTION: Spend 1 command token from your strategy pool to place 1 captured ship from your faction sheet in your home system." }
    ],
    "commodities": 2, "home": 26,
    "leaders": {
      "agents": [{"name": "The Seeker", "text": "When you would activate a system, you may exhaust this card to move through systems that contain other players' ships."}],
      "commanders": [{"name": "The Harbinger", "text": "When you would use your DEVOUR faction ability, you can capture an additional ship."}],
      "heroes": [{"name": "The Maw", "text": "ACTION: Choose 1 non-home system. You may move any number of your ships from any systems to the chosen system. Then, you may produce up to 5 units in that system. Then, purge this card.", "unlocks": []}]
    },
    "promissory": { "name": "Vortex", "text": "ACTION: Spend 1 command token from your strategy pool to place 1 captured ship from the Vuil'Raith Cabal player's faction sheet in a system that contains one of your space docks. Then, return this card to the Vuil'Raith Cabal player." },
    "setup": ["Place 2 Dreadnoughts, 1 Carrier, 2 Fighters, and 3 Infantry in your home system."],
    "sheet": "https://imgur.com/gallery/aBS2pSM",
    "starting": { "fleet": { "Dreadnought": 2, "Carrier": 1, "Fighter": 2, "Infantry": 3, "Space Dock": 1 }, "tech": ["Self Assembly Routines"], "units": {} },
    "units": [
      { "name": "The Terror", "text": "This ship has +1 on its combat rolls for each captured ship on your faction sheet.", "type": "Flagship" }
    ]
  }
];