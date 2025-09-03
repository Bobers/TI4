// This file contains the complete rules from Twilight Imperium 4
// Converted from PHP files in tirules-main
// Generated on 2025-09-02T20:18:19.220Z

export interface RuleSection {
    id: string;
    title: string;
    content: string;
}

export const COMPLETE_RULES: RuleSection[] = [
    {
        id: 'abilities',
        title: 'Abilities',
        content: `### Rules Reference

Cards and faction sheets each have abilities that players can resolve to trigger various game effects.

• If information in this Rules Reference contradicts the Learn to Play booklet, the Rules Reference takes precedence.
    
• If a card ability contradicts information in the Rules Reference, the card takes precedence. If both the card and the rules can be followed at the same time, they should be.
    
• Each ability describes when and how a player can resolve it.

• If an ability with a specified duration is resolved, the effect of the ability remains through that duration, even if the component that caused the ability is removed.

• If a card has multiple abilities, each ability is presented as its own paragraph.
    
• If an ability contains the word "Action" a player must use a component action during the action phase to resolve that ability.
    
• If an ability uses the word "cannot", that effect is absolute.

• If two abilities use the word "cannot", a persistent ability takes precedence over a one-time ability and an enabling ability takes precedence over a cancel ability.

• When a player resolves an ability, they must resolve the ability in its entirety. Any parts of the ability preceded by the word "may" are optional, and the player resolving the ability may choose not to resolve those parts.
    
• Abilities on components that remain in play are mandatory unless those abilities use the word "may".
    
• If an ability has multiple effects separated by the word "and", a player must resolve as many of the ability's effects as possible. However, if the player cannot resolve all of its effects, that player is allowed to resolve as many as they can.
    
#### 
• Costs

• Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word "to" or by a semicolon. A player cannot resolve the effect of such an ability if they cannot resolve that ability's cost.
    
• Some examples of an ability's cost include spending resources, spending trade goods, spending command tokens, exhausting cards, purging cards, and activating specific systems.
    
#### 
• Timing

• If the timing of an ability uses the word "before" or "after", the ability's effect occurs immediately before or after the described timing event, respectively.

• For example, if an ability is resolved "after a ship is destroyed", the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.

• If the timing of an ability uses the word "when", the ability's effect occurs at the moment of the described timing event.

• Such an ability typically modifies or replaces the timing event in some way.

• Effects that occur "when" an event happens take priority over effects that occur "after" an event happens.
    
• If an ability uses the word "then", a player must resolve the effect that occurs before the word "then" or they cannot resolve the effect that occurs after the word "then".
    
• Each ability can be resolved once for each occurrence of that ability's timing event. For example, if an ability is resolved "at the start of combat", it can be resolved at the start of each combat.
    
• If there are multiple abilities that players wish to resolve at the same time during the action phase, each player takes a turn resolving an ability in initiative order, beginning with the active player. This process continues until each player has resolved each ability that they wish to resolve during that window.
    
• If there are multiple abilities that players wish to resolve at the same time during the strategy or agenda phases, players take turns resolving abilities starting with the speaker and proceeding clockwise. This process continues until each player has resolved each ability that they wish to resolve during that window.
    
#### 
• Component-specific Rules

• The opening paragraph of each ability found on an action card describes when a player can resolve that card's ability.
    
• The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card's ability.

• Some promissory notes have abilities that trigger as soon as a player receives the card.

• Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.
    
• Each faction has faction abilities presented on its faction sheet. Each faction's flagship has one or more unique abilities. Some abilities provide players with perpetual effects.
    
• Some units have unit abilities. These abilities are named and presented above a unit's attributes on a player's faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:

• Anti-Fighter Barrage
        
• Bombardment
        
• Deploy
        
• Planetary Shield
        
• Production
        
• Space Cannon
        
• Sustain Damage

• If a unit's ability uses the phrase "this system" or "this planet", the ability is referring to the system or planet that contains that unit.

### Notes

• An ability may be triggered during the timing window it was gained, if applicable. For example, if a player receives the Creuss player's Creuss Iff promissory note at the start of their turn, they may use it immediately.

• Note that some triggers check their conditions when they trigger, while some check their conditions when they would resolve.
        
• The Ul player's Awaken ability is an example of an ability that checks its condition when it triggers; activating a system without a sleeper token will not trigger Awaken, even if a sleeper token is later added during the activation step of that tactical action.
        
• The Assault Cannon technology is an example of an ability that checks its condition when it would resolve; a player without three or more non-fighter ships in the system cannot use Assault Cannon, even if they previously had more ships.

• An ability from a single physical object cannot be resolved more than once in one timing window. For example, if a player starts their turn with the Creuss player's Creuss Iff promissory note in their hand (having received it on a previous turn) and uses it, they will not be able to use it a second time this turn, if they receive it again as part of a transaction.

• Each unit on the board is its own separate physical object. For example, two or more of the N'orr player's Exotrireme II in a system may use their ability to destroy themselves and other ships, as the ability is linked to the units on the game board, and not the unit upgrade technology card.

• Multiple action cards with the same name cannot be played during a single timing window to affect the same units or game effect. See the action cards page for more details.
    
• During the action phase, abilities are resolved in the current relative turn order, starting with the active player. For example, if it is currently the Trade (5) player's turn, they will have the option to resolve first, then the Warfare (6) player, then the Technology (7) player, and so on.

• If a player has multiple abilities they wish to resolve, they must be resolved one at a time. Between each ability being resolved, each other player will have the opportunity to resolve one ability.
        
• For example, Alice, the active player, wishes to resolve four abilities during the current timing window. Bob, the next player in order, wishes to resolve one. Cheng, later in the order, wishes to resolve two. The order of resolution would be: Alice &num;1; Bob &num;1; Cheng &num;1; Alice &num;2; Cheng &num;2; Alice &num;3; Alice &num;4.
        
• Once every player has consecutively declined to resolve an ability during a timing window, no more abilities may be resolved during that window.
        
• A player may decline to resolve an ability during a timing window, but later choose to resolve an ability during that same timing window, but only if another player chooses to resolve an ability after the player declined.
        
• Following on from the above example, had Alice declined to resolve "Alice &num;2", she could still resolve "Alice &num;3", as Cheng resolved "Cheng &num;2", breaking the series of consecutive declinations. However, if Alice had instead declined to resolve "Alice &num;3", she would be unable to resolve "Alice &num;4", as then each player would have consecutively declined to resolve an ability.

• The secondary abilities of strategy cards are resolved in clockwise order, after the primary ability.
    
• A player may resolve "at the start of your turn" and "at the end of your turn" abilities on the turn that they pass.
    
• All abilities that occur "when" an event occurs all trigger before any abilities that occur "after" the same event occurs.
    
• All abilities that occur "after" an event occurs all trigger before any abilities that occur "before" the next event occurs.

### Related Topics

• Action Cards
    
• Active Player
    
• Initiative Order
    
• Leaders
    
• Promissory Notes
    
• Relics
    
• Speaker
    
• Strategy Card
    
• Technology`
    },
    {
        id: 'action_cards',
        title: 'Action Cards',
        content: `### Rules Reference

Action cards provide players with various abilities that they can resolve as described on the cards.

• Each player draws one action card during each status phase.
    
• Players can draw action cards by resolving the primary and secondary abilities of the Politics strategy card.
    
• When a player draws an action card, they take the top card from the action card deck and add it to their hand of action cards.
    
• Each player's hand can have a maximum of seven action cards. If a player ever has more than seven action cards, that player must choose seven cards to keep and discard the rest.

• A game effect can increase or decrease the number of cards a player's hand can have.

• A player's action cards remain hidden from other players until those cards are played.
    
• The first paragraph of each action card is presented in bold text and describes the timing of when that card's ability can be resolved.

• If an action card contains the word "Action", a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if they cannot completely resolve its ability.
        
• Multiple action cards with the same name cannot be played during a single timing window to affect the same units or game effect. Canceled cards are not treated as being played.

• To play an action card, a player reads and resolves the card's ability text, making any decisions as prompted by the card. Then, that player discards the card, placing it in the action discard pile.
    
• If an action card is canceled, that card has no effect and is discarded.

### Notes

• Players start the game with zero action cards.
    
• The number of action cards in a player's hand is public information.
    
• A player may choose to reveal any or all of the action cards in their hand, if they so choose.
    
• If the action card deck is depleted, immediately shuffle the discard pile to form a new action card deck.
    
• During the action phase, action cards are dealt out in initiative order.

• If a player has the Neural Motivator technology, they will draw both their action cards before the next player in order draws an action card.
        
• The Yssaril player will draw all of their action cards, and discard for their Scheming ability, before the next player in order draws an action card.

• If a player's action card is cancelled, usually via a Sabotage action card, then if that player has a second copy of that action card, they may play it.
    
• A player cannot target themselves with offensive action cards, such as Lucky Shot.
    
• If an action card targets "any number", "up to", or "each" of a particular type of object, that action card may target zero of those objects. As such, these cards may be played even if they would cause no effect.
    
• If an action card targets a specific number of a particular type of object, that action card cannot be played if those objects do not currently exist. For example, Repeal Law cannot be played if there are no laws in play.
    
• If a player has more than seven action cards, they must discard the excess immediately. They cannot play them to get down to seven, and the Hacan player cannot trade them.
    
• For notes about specific action cards, see the action card component notes page.

### Related Topics

• Abilities
    
• Component Action
    
• Politics
    
• Status Phase`
    },
    {
        id: 'action_phase',
        title: 'Action Phase',
        content: `### Rules Reference

During the action phase, each player takes a turn in initiative order. During a player's turn, they perform a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed.

• During a player's turn, they may perform one of the following three types of actions: a strategic action, a tactical action, or a component action.
    
• If a player cannot perform an action, they must pass.
    
• After a player has passed, they have no further turns and cannot perform additional actions during that action phase.

• During a turn that a player passes, they can resolve transactions and "at the start of your turn" abilities.
        
• A player that has passed can still resolve the secondary ability of other players' strategy cards.
        
• It is possible for a player to perform multiple, consecutive actions during an action phase if all other players have passed during that action phase.

• A player cannot pass until they have performed the strategic action of their strategy card.

• During a three-player or four-player game, a player cannot pass until they have exhausted both of their strategy cards.

• After all players have passed, play proceeds to the status phase.

### Notes

• Players may still play non-component action action cards after they have passed.
    
• Any abilities that occur at the end of an action happen before any abilities that occur at the end of a player's turn.
    
• A player may resolve "at the start of your turn" and "at the end of your turn" abilities on the turn that they pass.
    
• If all other players have passed, a player will continue to resolve "at the start of your turn" and "at the end of your turn" abilities.

### Related Topics

• Active Player
    
• Component Action
    
• Game Round
    
• Initiative Order
    
• Status Phase
    
• Strategic Action
    
• Tactical Action`
    },
    {
        id: 'active_player',
        title: 'Active Player',
        content: `### Rules Reference

The active player is the player taking a turn during the action phase.

• During the action phase, the player who is first in initiative order is the first active player.
    
• After the active player takes a turn, the next player in initiative order becomes the active player.
    
• After the last player in initiative order takes a turn, the player who is first in initiative order becomes the active player again, and turns begin again in initiative order, ignoring any players who have already passed.

### Notes

• During the strategy, status and agenda phases, no player is the active player.
    
• During combat, the active player is the attacker.
    
• The active player will have the first opportunity to resolve abilities during each timing window.
    
• All transactions during the action phase must involve the active player.
    
• If a non-active player produces hits using the Space Cannon Offense ability of one of their units, those hits must be assigned to the active player's units.

### Related Topics

• Abilities
    
• Action Phase
    
• Attacker
    
• Initiative Order
    
• Space Cannon`
    },
    {
        id: 'active_system',
        title: 'Active System',
        content: `### Rules Reference

The active system is the system that is activated during a tactical action.

• When a player performs a tactical action, they activate a system by placing a command token from their tactic pool in that system. That system is the active system.
    
• A player cannot activate a system that already contains one of their command tokens.
    
• A player can activate a system that contains command tokens that match other players' factions.
    
• A system remains the active system for the duration of the tactical action during which it was activated.

### Notes

• A player may only move into a nebula if it is the active system.
    
• No system is the active system during a component or strategic action.

• Effects that trigger when a system is activated will not trigger during a component or strategic action.

• After activating a system during a tactical action, play will proceed to the Movement step.

### Related Topics

• Movement
    
• Nebula
    
• System Tiles
    
• Tactical Action`
    },
    {
        id: 'adjacency',
        title: 'Adjacency',
        content: `### Rules Reference

Two system tiles are adjacent to each other if any of the tiles' sides are touching each other.

• A system that has a wormhole is treated as being adjacent to a system that has a matching wormhole.
    
• A unit or planet is adjacent to all system tiles that are adjacent to the system tile that contains that unit or planet.

• A system is not adjacent to itself.

• A planet is treated as being adjacent to the system that contains that planet.
    
• Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.

### Notes

• A unit is not adjacent to the system it is in.
    
• The Wormhole Nexus and the Creuss home system are only adjacent to tiles via wormholes.

### Related Topics

• Game Board
    
• Hyperlanes
    
• Movement
    
• Neighbors
    
• PDS
    
• System Tiles
    
• Wormhole Nexus
    
• Wormholes`
    },
    {
        id: 'agenda_card',
        title: 'Agenda Card',
        content: `### Rules Reference

Agenda cards represent galactic laws and policies. During each agenda phase, players cast votes for specific outcomes on two agenda cards.

• There are two types of agenda cards: laws and directives.
    
• Laws can permanently change the rules of the game.
    
• When resolving a law, if a "For" outcome received the most votes, or if the law requires an election, the law's ability becomes a permanent part of the game. Players resolve the outcome and place the agenda card either in the common play area or in a player's play area, as dictated by the card.
    
• If a law is in a player's play area as opposed to the common play area, that player owns that law.
    
• If a law is discarded from play, that law's ability is no longer in effect. Place that card on the top of the agenda card discard pile.
    
• If an "Against" outcome of a law received the most votes, players resolve the outcome and discard the agenda.
    
• Directives provide one-time game effects.
    
• When resolving a directive, players resolve the outcome that received the most votes and discard the agenda card.

### Notes

• When resolving the primary ability of the Politics card, the active player cannot show the agenda cards they drew to any other player.
    
• If the outcome of an agenda affects multiple players, it will do so in speaker order.
    
• For notes about specific agenda cards, see the agenda card component notes page.

### Related Topics

• Agenda Phase
    
• Attach
    
• Politics
    
• Speaker
    
• Victory Points`
    },
    {
        id: 'agenda_phase',
        title: 'Agenda Phase',
        content: `### Rules Reference

During the agenda phase, players can cast votes on agendas that can change the rules of the game.

• Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round. To resolve the agenda phase, players perform the following steps:
    
• Step 1 - First Agenda: Players resolve the first agenda by following these steps in order:

• Reveal Agenda: The speaker draws one agenda card from the top of the agenda deck and reads it aloud to all players, including all of its possible outcomes.
        
• Vote: Each player, starting with the player to the left of the speaker and continuing clockwise, can cast votes for an outcome of the current agenda.
        
• Resolve Outcome: Players tally each vote that was cast and resolve the outcome that received the most votes.

• Step 2 - Second Agenda: Players repeat the First Agenda step of this phase for a second agenda.
    
• Step 3 - Ready Planets: Each player readies each of their exhausted planets. Then, a new game round begins starting with the strategy phase.
    
#### 
• Voting

When voting during the agenda phase, a player can cast votes for a specific outcome of an agenda.

• To cast votes, a player exhausts any number of their planets and chooses an outcome. The number of votes cast for that outcome is equal to the combined influence values of the planets that the player exhausts.

• When a player exhausts a planet to cast votes, that player must cast the full amount of votes provided by that planet.

• A player cannot cast votes for multiple outcomes of the same agenda. Each vote a player casts must be for the same outcome.
    
• Some agendas have "For" and "Against" outcomes. When a player casts votes on such an agenda, that player must cast their votes either "For" or "Against".
    
• Some agendas instruct players to elect either a player or a planet. When a player casts votes for such an agenda, that player must cast their vote for an eligible player or planet as described on the agenda.
    
• When electing a player, a player can cast votes for themselves.

• When resolving these agendas, the "elected player" is the player for whom the most votes are cast.

• When electing a planet, a player must cast votes for a planet that is controlled by a player.

• When resolving these agendas, the "elected planet" is the planet that had the most votes cast for it.

• When casting votes, a player must declare aloud the outcome for which their votes are being cast.
    
• Trade goods cannot be spent to cast votes.
    
• A player may choose to abstain by not casting any votes.
    
• Some game effects allow a player to cast additional votes for an outcome. These votes cannot be cast for a different outcome than other votes cast by that player.
    
• If a player cannot vote on an agenda because of a game effect, that player cannot cast votes for that agenda by exhausting planets or through any other game effect.
    
#### 
• Outcomes

• To resolve an outcome, the speaker follows the instructions on the agenda card.
    
• If there is a tie for the outcome that received the most votes, or if no outcome receives any votes, the speaker decides which of the tied outcomes to resolve.

• The speaker's decision is not a vote.

• If an "Elect" or "For" outcome of a law was resolved, that card remains in play and permanently affects the game.
    
• If a directive or an "Against" outcome of a law was resolved, that card is placed in the agenda discard pile.
    
• Some game effects instruct a player to predict an outcome. To predict an outcome, a player declares aloud the outcome they think will receive the most votes. That player must make this prediction after the agenda is revealed but before any votes have been cast.

• A predicted outcome must be a possible outcome of the revealed agenda.
        
• After resolving the outcome of the agenda, any abilities that were dependent upon predicting the outcome are resolved.

### Notes

• A player cannot cast zero votes for an outcome. Casting zero votes is the same as abstaining.
    
• When a player casts votes during the agenda phase, it is not that player's turn for the purpose of game effects.
    
• If an agenda outcome affects multiple players, it does so in speaker order.
    
• Riders are resolved after the agenda is fully resolved, in speaker order.
    
• If a player successfully predicts multiple riders, they resolve one at a time, in the order that player chooses, with each other player having the opportunity to resolve an ability between each.
    
• Each pair of players may resolve one transaction during each agenda.
    
• Only planets ready at the end of the phase. Technologies, leaders, relics, and other cards do not.
    
• For notes about specific agenda cards, see the agenda card component notes page.

### Related Topics

• Agenda Cards
    
• Custodians Token
    
• Game Round
    
• Influence
    
• Speaker
    
• Transactions`
    },
    {
        id: 'anomalies',
        title: 'Anomalies',
        content: `### Rules Reference

An anomaly is a system tile that has unique rules.

• An anomaly is identified by a red border located on the tile's corners.
    
• There are four types of anomalies: asteroid fields, nebulae, supernovas, and gravity rifts.

• Some anomalies contain planets; those systems are still anomalies.

• Each type of anomaly is identified by its art. See rulebook for images.
    
• Abilities can cause a system tile to become an anomaly; that system tile is an anomaly in addition to its other properties.
    
• Abilities can cause a system to be two different anomalies; that system has the properties of both anomalies.

### Notes

• An empty system is not an anomaly.
    
• A system containing a wormhole is not an anomaly.
    
• A system with a Vuil'raith Dimensional Tear is a gravity rift, and thus an anomaly.

### Related Topics

• Asteroid Field
    
• Gravity Rift
    
• Movement
    
• Nebula
    
• Supernova
    
• System Tiles`
    },
    {
        id: 'anti_fighter_barrage',
        title: 'Anti-Fighter Barrage (Unit Ability)',
        content: `### Rules Reference

A unit with the Anti-Fighter Barrage ability may be able to destroy an opponent's fighters at the onset of a space battle. During the Anti-Fighter Barrage step of the first round of space combat, players perform the following steps:

• Step 1: Each player rolls dice for each of their units in the combat that has the Anti-Fighter Barrage ability; this is called an anti-fighter barrage roll. A hit is produced for each die roll that is equal to or greater than the unit's Anti-Fighter Barrage value.

• A unit's Anti-Fighter Barrage ability is presented along with a unit's attributes on faction sheets and unit upgrade technology cards.
        
• The Anti-Fighter Barrage ability is displayed as Anti-Fighter Barrage X (&times;Y). The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled.
        
• Game effects that reroll, modify, or otherwise affect combat rolls do not affect anti-fighter barrage rolls.
        
• This ability can still be used if no fighters are present; hits produced may be used to trigger specific abilities.

• Step 2: Each player must choose and destroy one of their fighters in the active system for each hit their opponent's anti-fighter barrage roll produced.

• If a player has to assign more hits than they have fighters in the active system, the excess hits have no effect.

### Notes

• A non-fighter ship cannot use its Sustain Damage ability to cancel a hit produced by an anti-fighter barrage roll.
    
• Effects such as the Shields Holding action card, which trigger on hits produced during space combat, may be used to cancel a hit produced by an anti-fighter barrage roll.
    
• The "0" side of the d10 represents a result of 10.

### Related Topics

• Abilities
    
• Destroyed
    
• Space Combat`
    },
    {
        id: 'asteroid_field',
        title: 'Asteroid Field',
        content: `### Rules Reference

An asteroid field is an anomaly that affects movement.

• A ship cannot move through or into an asteroid field.

### Notes

• A player with the Antimass Deflectors technology may move their ships through asteroid fields.
    
• A future rule change will place the ship movement restrictions of anomalies upon all units.

### Related Topics

• Anomalies
    
• Movement`
    },
    {
        id: 'attach',
        title: 'Attach',
        content: `### Rules Reference

Some game effects instruct a player to attach a card to a planet card. The attached card modifies that planet card in some way.

• To attach a card to a planet card, a player places the card with the attach effect partially underneath the planet card.
    
• If a player gains or loses control of planet that contains a card with an attach effect, the attached card stays with that planet.

• The attached card maintains its exhausted or readied state.
        
• If a planet card is purged, also purge all cards that are attached to that planet card and remove the corresponding attachment tokens from the game board.

• When a card is attached to a planet card, place the corresponding attachment token on that planet on the game board.

### Notes

• There is no limit on how many attachments a single planet may have.
    
• The Custodians Token is not an attachment.

### Related Topics

• Agenda Card
    
• Control
    
• Exploration
    
• Planets`
    },
    {
        id: 'attacker',
        title: 'Attacker',
        content: `### Rules Reference

During combat, the active player is the attacker.

### Notes

• The attacker's opponent is the defender.
    
• The attacker will have the first opportunity to resolve abilities during each timing window.
    
• When the Mahact player resolves their Benediction hero ability, the player that had their ships moved will be the attacker.

• Resolving abilities will be by initiative order, starting with the Mahact player. As such, the defender may resolve abilities before the attacker, depending on what order those two players are in.

### Related Topics

• Abilities
    
• Active Player
    
• Defender
    
• Ground Combat
    
• Invasion
    
• Opponent
    
• Space Combat`
    },
    {
        id: 'blockaded',
        title: 'Blockaded',
        content: `### Rules Reference

A player's unit with Production is blockaded if it is in a system that does not contain any of their ships and contains other players' ships.

• A player cannot use a blockaded unit to produce ships; that player can still use a blockaded unit to produce ground forces.
    
• When a player blockades another player's space dock, if the blockaded player has captured any of the blockading player's units, those units are returned to the blockading player's reinforcements.

• While a player is blockading another player, the blockaded player cannot capture any of the blockading player's units.

### Notes

• While a player is involved in a space combat in a system, their units in that system are not blockaded, as both players will have ships in the system. Consequently, they may capture their opponent's units.

• If that player has a unit in another system that their opponent is blockading, they will be unable to capture their opponent's units.

• If, at the end of a combat, one player has no ships, but a space dock in the system, and the other player has only fighters, the space dock will be blockaded before the fighters are removed.
    
• When a ship moves, it does not blockade units in systems it moves through.

### Related Topics

• Capture
    
• Producing Units
    
• Production
    
• Ships
    
• Space Dock`
    },
    {
        id: 'bombardment',
        title: 'Bombardment (Unit Ability)',
        content: `### Rules Reference

A unit with the Bombardment ability may be able to destroy another player's ground forces during an invasion. During the Bombardment step, players perform the following steps:

• Step 1 - The active player chooses which planet each of their units that has a Bombardment ability will bombard. Then, that player rolls dice for each of those units; this is called a bombardment roll. A hit is produced for each die roll that is equal to or greater than the unit's Bombardment value.

• A unit's Bombardment ability is presented along with a unit's attributes on faction sheets and unit upgrade technology cards.
        
• The Bombardment ability is displayed as "Bombardment X (&times;Y)". The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all Bombardment abilities have a (Y) value; a bombardment roll for such a unit consists of one die.
        
• Game effects that reroll, modify, or otherwise affect combat rolls do not affect bombardment rolls.
        
• Multiple planets in a system may be bombarded, but a player must declare which planet a unit is bombarding before making a bombardment roll.
        
• The L1Z1X's Harrow ability does not affect the L1Z1X player's own ground forces.
        
• Planets that contain a unit with the Planetary Shield ability cannot be bombarded.

• Step 2 - The player who controls the planet that is being bombarded chooses and destroys one of their ground forces on that planet for each hit result the bombardment roll produced.

• If a player has to assign more hits than that player has ground forces, the excess hits have no effect.

### Notes

• The Bombardment step happens outside of combat. No combat effects may affect a bombardment roll.

• A player cannot score a secret objective that requires them to win a combat or similar by destroying units during the Bombardment step.

• Mechs may use their Sustain Damage ability to cancel a hit produced by a bombardment roll.
    
• Only the active player may bombard. Usually, but not always, only the active player will have ships in the system during an invasion.
    
• For notes about Harrow, see the L1Z1X faction notes page. 
    
• The "0" side of the d10 represents a result of 10.
    
• A single planet must be chosen for each unit with the Bombardment ability; any hits generated by that unit will be assigned to units on that planet. For example, when a war sun rolls for its Bombardment ability, all three dice must be rolled to produce hits against units on a single planet; they can not be split between two or more planets.

• If an ability allows a unit to roll one or more additional dice, such as the Plasma Scoring technology, the additional dice must be rolled against units on the same planet.

• A player may choose not to use the Bombardment abilities of their units during their tactical actions. However, if they choose to use the Bombardment ability, they must use the Bombardment ability of each unit in the active system.

• Say a player had three dreadnoughts in the active system, and owned the Plasma Scoring technology. They would be able to roll their choice of zero, three, or four dice when resolving their Bombardment ability.

### Related Topics

• Abilities
    
• Destroyed
    
• Ground Forces
    
• Invasion
    
• Planetary Shield`
    },
    {
        id: 'capacity',
        title: 'Capacity (Attribute)',
        content: `### Rules Reference

Capacity is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.

• A unit's capacity value indicates the maximum combined number of fighters and ground forces that it can transport.
    
• The combined capacity values of a player's ships in a system determine the number of fighters and ground forces that player can have in that system's space area.
    
• If a player has more fighters and ground forces in the space area of a system than the total capacity of that player's ships in that system, that player must remove the excess units.

• A player can choose which of their excess units to remove.
        
• Ground forces on planets do not count against capacity.
        
• A player's fighters and ground forces do not count against capacity during combat. At the end of combat, any excess units are removed and returned to that player's reinforcements.

• Fighters and ground forces are not assigned to specific ships, except while they are being transported.

### Notes

• If a player moves more fighters and/or ground forces into a system containing another player's ships, capacity limits must be met before proceeding to the Space Cannon Offense substep or the Space Combat step.
    
• If a ship with capacity is destroyed during the Space Cannon Offense step, capacity limits must be met before space combat starts.
    
• Capacity is checked after the winner of a space combat is determined. As such, it is possible to win a space combat with only fighters remaining, before removing those fighters due to lack of capacity.
    
• A ship cannot pick up more units from a planet than it has capacity. However, a ship may pick up any units (including zero) in a system as it transports, even if doing so would cause units to be removed due to capacity limits.

• For example, say a carrier (with capacity four) is in the space area of a system along with four fighters. On the only planet in that system are eight infantry. There are no other units in the system. When the carrier moves out of the system, it obeys the following:
        
• The carrier may transport the four fighters, leaving behind all eight of the infantry in the system.
        
• The carrier may transport four of the eight infantry, leaving behind the four remaining infantry in the system. Now that the system has zero capacity, all four of the fighters will be removed.
        
• The carrier may transport two of the eight infantry and two of the four fighters, leaving behind the six remaining infantry in the system. Now that the system has zero capacity, the two remaining fighters will be removed.
        
• The carrier may transport nothing, leaving behind all eight of the infantry in the system. Now that the system has zero capacity, all four of the fighters will be removed.
        
• The carrier cannot attempt to pick up all eight infantry, even if it immediately removes four of them (and the fighters).

### Related Topics

• Fleet Pool
    
• Movement
    
• Space Combat
    
• Transport`
    },
    {
        id: 'capture',
        title: 'Capture',
        content: `### Rules Reference

Some abilities instruct a player to capture a unit, preventing the unit's original owner from using it.

• If a player captures a non-fighter ship or mech, they place it on their faction sheet. When such a unit is returned, it is placed into the reinforcements of the original owner.
    
• A captured non-fighter ship or mech is returned under the following circumstances:

• If the player who captured the unit agrees to return it as part of a transaction.
        
• If an ability instructs the capturing player to return the unit as part of an ability's cost.
        
• If the player whose unit was captured blockades a space dock of the player who captured the unit.

• If a player captures a fighter or infantry, it is placed in its reinforcements instead of on the capturing player's faction sheet; the capturing player places a fighter or infantry token from the supply on their faction sheet instead.

• Captured fighters and infantry do not belong to any player and are returned only when an ability instructs the capturing player to do so.
        
• Captured fighters and infantry cannot be returned as part of a transaction.
        
• Captured fighters and infantry are not returned as the result of a blockade.

• When a captured fighter or infantry is returned, it is placed in the supply.
    
• While a unit is captured, it cannot be produced or placed by its original owner until it is returned.
    
• If one or more of a player's space docks is being blockaded, that player cannot capture units from the blockading players.

### Notes

• For additional information, see the Vuil'raith faction notes page.
	
• Units are returned as soon as a space dock is blockaded. If this occurs at the end of the Space Combat step of a tactical action, the units will be returned before the Invasion step, in which the space dock could potentially be destroyed.
    
• A captured unit may only be returned to the player that originally owned it, and not to another player.
    
• The Nekro player and the Yssaril player are able to capture units by copying the Vuil'raith player's abilities, but they will be unable to spend the captured units.
    
• If a player is eliminated, any of their units that are captured remain with the player that captured them. When the capturing player would return them, the units are instead returned to the game box.
	
• If a player captures their own units, they cannot be returned to that player's reinforcements, unless instructed to do so by a game effect.

• That player cannot produce or place those units, except by effects that allow that player to use captured units.

• If a player has all of their units of one type on the game board or captured, and so have none in their reinforcements, and would place a unit of that type, they may remove a unit from any system on the game board that does not contain one of their command tokens and place that unit in their reinforcements, before placing that unit on the game board.
    
• A player cannot capture fighter or infantry tokens corresponding to units belonging to a player that is blockading one of their space docks.

### Related Topics

• Blockaded
    
• Fighter Tokens
    
• Infantry Tokens
    
• Transactions`
    },
    {
        id: 'combat',
        title: 'Combat (Attribute)',
        content: `### Rules Reference

Combat is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.

• During combat, if a unit's combat roll produces a result equal to or greater than its combat value, it produces a hit.
    
• If a unit's combat value contains two or more burst icons, instead of rolling a single die, the player rolls one die for each burst icon when making that unit's combat rolls.

### Notes

• The "0" side of the d10 represents a result of 10.

### Related Topics

• Ground Combat
    
• Modifiers
    
• Space Combat
    
• Units`
    },
    {
        id: 'command_sheet',
        title: 'Command Sheet',
        content: `### Rules Reference

Each player has a command sheet that contains a strategy pool, a tactic pool, a fleet pool, a trade good area, and a quick reference.

• The pools on the command sheet are where players place their command tokens. Command tokens in a player's pools are used by that player to perform strategic and tactical actions and to increase the number of ships that player can have in each system.
    
• The trade good area on the command sheet is where a player places their trade good tokens; trade tokens in a player's trade good area can be spent by that player as resources, influence, or to resolve certain game effects that require trade goods.
    
• Players who are familiar with the game can hide the quick reference by placing that portion of the command sheet under their faction sheets.

### Notes

• When a command token is gained, it may be placed in any of the three pools if no specific pool is specified by the gaining effect.

### Related Topics

• Command Tokens
    
• Fleet Pool
    
• Strategic Action
    
• Tactical Action
    
• Trade Goods`
    },
    {
        id: 'command_tokens',
        title: 'Command Tokens',
        content: `### Rules Reference

Command tokens are a currency that players use to perform actions and expand their fleets.

• Each player begins the game with eight tokens on their command sheet: three in their tactic pool, three in their fleet pool, and two in their strategy pool.

• Command tokens in the strategy and tactic pool are placed with the faction symbol faceup.
        
• Command tokens in the fleet pool are placed with the ship silhouette faceup.

• When a player gains a command token, they choose which of their three pools to place it in.
    
• A player is limited by the amount of command tokens in their reinforcements.

• If a player would gain a command token but has none available in their reinforcements, that player cannot gain that command token.
        
• If a game effect would place a player's command token from their reinforcements and none are available, that player must take a token from a pool on their command sheet, unless the token would be placed into a system that already contains one of their command tokens.

• During the action phase, a player can perform a tactical action by spending a command token from their tactic pool; they place the command token in a system.
    
• After a player performs a strategic action during the action phase, each other player can resolve the secondary ability of that strategy card by spending a command token from their strategy pool.

• A player does not spend a command token to resolve the secondary ability of the Leadership strategy card.

• If a game effect would place a player's command token in a system where they already have one, they place the token in their reinforcements instead. Any effects that resolve by placing that token are resolved as normal.

### Notes

### Related Topics

• Command Sheet
    
• Fleet Pool
    
• Leadership
    
• Reinforcements
    
• Strategic Action
    
• Tactical Action`
    },
    {
        id: 'commodities',
        title: 'Commodities',
        content: `### Rules Reference

Commodities represent goods that are plentiful for their own faction and are desired by other factions. A commodity has no inherent game effects, but converts into a trade good if given to or received from another player.

• Commodities and trade goods are represented by opposite sides of the same token.
    
• The commodity value on a player's faction sheet indicates the maximum number of commodities that player can have.
    
• When an effect instructs a player to replenish commodities, that player takes the number of commodity tokens necessary so that the amount of commodities that player has equals the commodity value on their faction sheet. Then, those tokens are placed faceup in the commodity area of that player's faction sheet.
    
• When a player replenishes commodities, that player takes the commodity tokens from the supply.
    
• Players can trade commodities following the rules for transactions. When a player receives a commodity from another player, the player who received that token converts it into a trade good by placing it in the trade good area of their command sheet with the trade good side faceup.

• That token is no longer a commodity token; it is a trade good token.
        
• A player can trade commodity tokens before resolving a game effect that allows them to replenish commodities.
        
• If a game effect instructs a player to convert a number of their own commodities to trade goods, those trade goods are not treated as being gained for the purpose of triggering other abilities.

• Any game effect that instructs a player to give a commodity to another player causes that commodity to be converted into a trade good.
    
• A player cannot spend commodities unless otherwise specified; a player can only trade them during a transaction.
    
• Commodity tokens come in values of one and three. A player can swap between these tokens as necessary.

### Notes

• A player starts the game with zero commodities.
    
• If a player has their maximum number of commodities, and is instructed to replenish their commodities, they will take no commodities. However, they will still trigger any "when [this] player replenishes commodities" effects, most notably the Trade Agreement promissory note.

### Related Topics

• Deals
    
• Trade
    
• Trade Goods
    
• Transactions`
    },
    {
        id: 'component_action',
        title: 'Component Action',
        content: `### Rules Reference

A component action is a type of action that a player can perform during their turn of an action phase.

• Component actions can be found on various game components, including action cards, technology cards, leaders, exploration cards, relics, promissory notes, and faction sheets. Each component action is indicated by an "Action" header.
    
• To perform a component action, a player reads the action's text and follows the instructions as described.
    
• A component action cannot be performed if its ability cannot be completely resolved.
    
• If a component action is canceled, it does not use that player's action.

### Notes

• Action cards without the "Action" header are not used to perform component actions.

### Related Topics

• Abilities
    
• Action Cards
    
• Action Phase
    
• Exploration
    
• Leaders
    
• Promissory Notes
    
• Relics
    
• Technology`
    },
    {
        id: 'component_limitations',
        title: 'Component Limitations',
        content: `### Rules Reference

If a component type is depleted during the game, players obey the following rules:

• Dice: Dice are limitless. If a player needs to roll more dice than the game provides, that player should roll as many as possible, record the results, and then reroll dice as necessary.
    
• Tokens: Tokens are limited to those included in the game, except for the following:

• Control Tokens
        
• Fighter Tokens
        
• Trade Good Tokens
        
• Infantry Tokens

• If any of the above tokens are depleted, players can use a suitable substitute, such as a coin or bead.
    
• Units: Units are limited to those included in the game, except for fighters and ground forces.

• When a player would place a unit, if there are none of that type left in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. A player can remove any number of their units in this way; however, any units that are removed must be placed immediately. Abilities cannot force a player to remove and place a unit in this manner.
        
• When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece. These tokens must be accompanied by at least one plastic piece of the same type; players can swap infantry and fighter tokens for plastic pieces at any time.

• Cards: When a deck is depleted, players shuffle the deck's discard pile and place it facedown to create a new deck.

### Notes

• As each player only has ten plastic fighter figures and twelve plastic infantry figures, a player cannot have fighters in more than ten systems, and cannot have infantry on more than twelve planets or being carried in more than twelve space areas, or any combination thereof.
    
• Players may also swap infantry and fighter plastic pieces for tokens at any time.
    
• Players may swap between three value tokens and one value tokens as desired.
    
• A player may only resolve a deploy ability to place a unit that is in their reinforcements. A player cannot remove a unit from the board to use its deploy ability.
    
• Each faction has sixteen command and seventeen control tokens included in the game.
    
• When a discard pile is shuffled to form a new deck, any cards that have been purged are not included.
    
• If a player removes a unit in order to place it, because they have none of that unit type in their reinforcements, that unit is placed undamaged.
    
• If a player is instructed to "replace" one unit with another, and they have none of the replacement unit type in their reinforcements, they may remove a unit of that type from any system that does not contain one of their command tokens and place that unit instead.

### Related Topics

• Fighter Tokens
    
• Infantry Tokens
    
• Producing Units
    
• Units`
    },
    {
        id: 'construction',
        title: 'Construction (Strategy Card)',
        content: `### Rules Reference

The Construction strategy card allows players to construct structures on planets they control. This card's initiative value is "4".

• During the action phase, if the active player has the Construction strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Construction strategy card, the active player may place either one PDS or one space dock on a planet they control. Then, that player may place an additional PDS on a planet they control.

• The structures can be placed on the same planet or different planets.
        
• The structures can be placed in any systems, regardless of whether the player has a command token in the system or not.

• After the active player resolves the primary ability of the Construction strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool and place that command token in any system. If that player already has a command token in that system, the spent token is returned to their reinforcements instead. Then, that player places either one PDS or one space dock on a planet they control in that system.
    
• When a player places either a PDS or space dock using the Construction strategy card, they take that PDS or space dock from their reinforcements.

• If a player does not have the unit in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. Then, that player must place the unit on the game board as instructed by the effect that is placing the unit.

### Notes

• A player may have a maximum of one space dock on each planet.
    
• A player may have a maximum of two PDS units on each planet.
    
• Structures cannot be placed on the planet with the Demilitarized Zone exploration card attached.

### Related Topics

• Initiative Order
    
• PDS
    
• Space Dock
    
• Strategic Action
    
• Strategy Card
    
• Structures`
    },
    {
        id: 'control',
        title: 'Control',
        content: `### Rules Reference

Each player begins the game with control of each planet in their home system. During the game, players can gain control of additional planets.

• When a player gains control of a planet, they take the planet card that corresponds to that planet and place it in their play area; that card is exhausted.

• If a player is the first player to control a planet, they take the planet card from the planet card deck.
        
• If another player controls the planet, they take that planet's card from the other player's play area.
        
• When a player gains control of a planet that is not already controlled by another player, they explore that planet.

• A player cannot gain control of a planet that they already control.
    
• While a player controls a planet, that planet's card remains in their play area until they lose control of that planet.
    
• A player can control a planet that they do not have any units on; that player places a control token on that planet to mark that they control it.
    
• A player loses control of a planet if they no longer have units on it and another player has units on it.

• The player that placed units on the planet gains control of that planet.
        
• During the Invasion step of a tactical action, control is determined during the Establish Control step instead.

• A player can lose control of a planet through some game effects.
    
• If a player loses control of a planet that contains their control token, they remove their control token from the planet.

### Notes

• Control tokens are not component limited; a player may control an unlimited number of planets.

### Related Topics

• Attach
    
• Exhausted
    
• Invasion
    
• Planets`
    },
    {
        id: 'cost',
        title: 'Cost (Attribute)',
        content: `### Rules Reference

Cost is an attribute of some units that is presented on faction sheets and unit upgrade technology cards. A unit's cost determines the number of resources a player must spend to produce that unit.

• To produce a unit, a player must spend a number of resources equal to or greater than the cost of the unit they are producing.
    
• If the cost is accompanied by two icons - typically for fighters and ground forces - a player produces two of that unit for that cost.
    
• If a unit does not have a cost, it cannot be produced.

• Structures do not have costs and are usually placed by resolving the Construction strategy card.

### Notes

• Whenever a unit is produced, its cost must be paid, unless the effect that is producing the unit explicitly says otherwise.
    
• A player does not have to pay a unit's cost to resolve that unit's Deploy ability. However, the Deploy ability itself may have a cost that must be paid.

### Related Topics

• Modifiers
    
• Producing Units
    
• Resources`
    },
    {
        id: 'custodians_token',
        title: 'Custodians Token',
        content: `### Rules Reference

The custodians token begins each game on Mecatol Rex. The token represents the caretakers that safeguard the seat of the empire until such time as the galactic council can be reconvened.

• Units can move into the system that contains Mecatol Rex following normal rules; however, players cannot commit ground forces to land on Mecatol Rex until the custodians token is removed from the planet.
    
• Before the Commit Ground Forces step of an invasion, the active player can remove the custodians token from Mecatol Rex by spending six influence. Then, that player must commit at least one ground force to land on the planet.

• If a player cannot commit ground forces to land on Mecatol Rex, they cannot remove the custodians token.

• When a player removes the custodians token from Mecatol Rex, they take the token from the game board and place it in their play area. Then, they gain one victory point.
    
• After a player removes the custodians token from Mecatol Rex, the agenda phase is added to all subsequent game rounds, including the game round during which the custodians token was removed from Mecatol Rex.

### Notes

• The custodians token is not an attachment.

### Related Topics

• Agenda Phase
    
• Control
    
• Influence
    
• Invasion
    
• Mecatol Rex
    
• Victory Points`
    },
    {
        id: 'deals',
        title: 'Deals',
        content: `### Rules Reference

A deal is an agreement between two players that may or may not include a transaction that involves physical components.

• Players can make deals with each other at any time, even if they are not neighbors. However, deals that include a transaction must follow the rules for transactions, including that the players be neighbors.
    
• Deals are binding or non-binding according to the conditions of the deal.
    
• If the terms of a deal can be resolved immediately, it is a binding deal. When a deal is binding, a player must adhere to the terms of the agreement and whatever transactions, if any, were agreed upon.

• The results of playing an action card, including the act of successfully resolving a card, are not instantaneous and cannot be guaranteed. They cannot be part of a binding deal.

• If the terms of a deal cannot be resolved immediately, it is a non-binding deal. When a deal is non-binding, a player does not have to adhere to any part of the agreement.

### Notes

• In general, only the terms of the deal that a player can immediately perform, even without the deal taking place, are binding. For example:

• If a player has four resources available during the Production step of a tactical action, another player may give them four trade goods on the condition that they produce a dreadnought during this Production step. As the active player could produce a dreadnought with the resources, this deal is binding.
        
• If instead the active player has zero resources available, the same deal would be non-binding.

• The following are further examples of non-binding deals:

• Making a deal to use a promissory note in a specific way, before the promissory note has been transacted.
        
• Making a deal to not make use of a unit's Space Cannon ability during a tactical action, before ships have been moved.
        
• Making a deal to trade commodities in exchange for the active player to replenish another player's commodities during the resolution of the primary ability of the Trade strategic action.
        
• Making a deal for a player to vote on an agenda in a certain way, when it is not yet that player's opportunity to vote.
        
• Any deal that will resolve after dice are rolled.

### Related Topics

• Promissory Notes
    
• Trade Goods
    
• Transactions`
    },
    {
        id: 'defender',
        title: 'Defender',
        content: `### Rules Reference

During either a space or ground combat, the player who is not the active player is the defender.

### Notes

• When the Mahact player resolves their Benediction hero ability, the player that had their ships already in the system will be the defender.

• Resolving abilities will be by initiative order, starting with the Mahact player. As such, the defender may resolve abilities before the attacker, depending on what order those two players are in.

### Related Topics

• Attacker
    
• Ground Combat
    
• Invasion
    
• Nebula
    
• Opponent
    
• Space Combat`
    },
    {
        id: 'deploy',
        title: 'Deploy',
        content: `### Rules Reference

Some units have deploy abilities. Deploy abilities are indicated by the Deploy header and provide the means to place specific units on the game board without producing them as normal.

• A player can use a unit's Deploy ability when the ability's conditions are met to place that unit on the game board.

• A player does not have to spend resources to deploy a unit unless otherwise specified.

• A player can only resolve a Deploy ability to place a unit that is in their reinforcements.

• If there are no units that have a Deploy ability in a player's reinforcements, the Deploy ability cannot be used.

• A unit's Deploy ability can be resolved only once per timing window.

### Notes

### Related Topics

• Abilities
    
• Mechs
    
• Reinforcements`
    },
    {
        id: 'destroyed',
        title: 'Destroyed',
        content: `### Rules Reference

Various game effects can cause a unit to be destroyed. When a player's unit is destroyed, it is removed from the game board and returned to their reinforcements.

• When a player assigns hits that were produced against their units, that player chooses a number of their units to be destroyed equal to the number of hits produced against those units.
    
• If a player's unit is removed from the board by a game effect, it is not treated as being destroyed; effects that trigger when a unit is destroyed are not triggered.

### Notes

### Related Topics

• Anti-Fighter Barrage
    
• Bombardment
    
• Ground Combat
    
• Space Cannon
    
• Space Combat
    
• Sustain Damage`
    },
    {
        id: 'diplomacy',
        title: 'Diplomacy (Strategy Card)',
        content: `### Rules Reference

The Diplomacy strategy card can be used to preemptively prevent other players from activating a specific system. It can also be used to ready planets. This card's initiative value is "2".

• During the action phase, if the active player has the Diplomacy strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Diplomacy strategy card, the active player chooses a system that contains a planet they control other than the Mecatol Rex system; each other player places one command token from their reinforcements in that system. Then, the active player readies any two of their exhausted planets.

• If a player has no command tokens in their reinforcements, that player places one command token of their choice from their command sheet.
        
• If a player already has a command token in the chosen system, they do not place a command token there.

• After the active player resolves the primary ability of the Diplomacy strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to ready up to two exhausted planets they control.

### Notes

• If the player with Diplomacy controls no planets, or controls only Mecatol Rex, they may still perform a strategic action. However, other players will no place a command token in any system.
    
• If the player with Diplomacy controls fewer than two exhausted planets, they may still perform a strategic action. They will ready as many planets as possible.

### Related Topics

• Active System
    
• Command Tokens
    
• Initiative Order
    
• Planets
    
• Readied
    
• Strategic Action
    
• Strategy Card`
    },
    {
        id: 'elimination',
        title: 'Elimination',
        content: `### Rules Reference

A player who is eliminated is no longer part of the game.

• A player is eliminated when they meet all of the following three conditions:

• The player has no ground forces on the game board.
        
• The player has no unit that has Production.
        
• The player does not control any planets.

• When a player becomes eliminated, all of the units, command tokens, control tokens, promissory notes, technologies, command sheets, and the faction sheet that matches that player's faction or color are returned to the game box, including those in their reinforcements.
    
• When a player becomes eliminated, all agenda cards they own are discarded.
    
• When a player becomes eliminated, each promissory note they have that matches another player's faction or color is returned to that player.

• Promissory notes that match the eliminated player are returned to the game box, even if another player has them.

• When a player becomes eliminated, each action card in their hand is discarded.
    
• When a player becomes eliminated, their strategy cards are returned to the common play area whether those cards have been exhausted or not.
    
• When a player becomes eliminated, their secret objectives are shuffled back into the secret objective deck whether those secret objectives have been completed or not.
    
• If the speaker becomes eliminated, the speaker token passes to the player to the speaker's left.
    
• If a game that started with five or more players becomes a game with four or fewer players due to elimination, the players continue to select only one strategy card during the strategy phase.
    
• When players are eliminated, faction-specific components interact with the game as follows:

• If a player becomes eliminated and the Nekro Virus' assimilator "X" or assimilator "Y" token is placed on one of their faction technologies, that technology remains in play.
        
• If the Ghost of Creuss player becomes eliminated, their wormhole tokens remain on the game board for the remainder of the game.
        
• If the Naalu player becomes eliminated while another player has the Naalu player's "0" token, that token remains with its current player until the end of the status phase, and then it is removed from play.
        
• If the Titans of Ul player becomes eliminated while their hero or promissory note is attached to a planet, those attachments and attachment tokens remain in play for the remainder of the game.
        
• If the Mahact Gene-Sorcerers become eliminated while they have another player's command tokens on their faction sheet, those command tokens are returned to their respective players' reinforcements.
        
• If the Mahact Gene-Sorcerers have an eliminated player's command token on their faction sheet, that command token remains in play, as does the eliminated player's commander, if it is unlocked.

• If a player becomes eliminated, any units they have captured are returned to the reinforcements of their original owners.

### Notes

• While the Arborec flagship may produce units, it does not have the Production ability. Having it on the game board will not prevent the Arborec player from being eliminated. This applies to all similar effects in the game.
    
• An eliminated player's home system remains a home system for game effects.

• This includes effects that specify "another player's home system".

• If an eliminated player had any relic fragments, they are discarded to their respective exploration discard piles. If an eliminated player had any relics, they are purged.
    
• If a player is eliminated, any of their units that are captured remain with the player that captured them. When the capturing player would return them, the units are instead returned to the game box.

### Related Topics

• Control
    
• Ground Forces
    
• Production`
    },
    {
        id: 'exhausted',
        title: 'Exhausted',
        content: `### Rules Reference

Some cards can be exhausted. A player cannot resolve abilities or spend the resources or influence of an exhausted card.

• To exhaust a card, a player flips the card facedown.
    
• During the Ready Cards step of the status phase, each player readies all of their exhausted cards by flipping those cards faceup.
    
• A player exhausts their planet cards to spend either the resources or influence on that card.
    
• Abilities, including some found on technology cards, may instruct a player to exhaust a card to resolve those abilities. If a card is already exhausted, it cannot be exhausted again.

• Passive abilities on an exhausted card are still in effect while that card is exhausted.

• After a player performs a strategic action, they exhaust the strategy card that corresponds to that action.

### Notes

• Planets will also ready at the end of each agenda phase. Leaders, relics and technologies will not.
    
• If a game effect instructs a player to exhaust a planet, the exhausted planet must be controlled by that player, unless the game effect specifies otherwise.

### Related Topics

• Influence
    
• Leaders
    
• Planets
    
• Relics
    
• Resources
    
• Strategy Card
    
• Status Phase
    
• Technology`
    },
    {
        id: 'exploration',
        title: 'Exploration',
        content: `### Rules Reference

Planets and some space areas can be explored, yielding varying results determined by the cards drawn from the exploration decks.

• When a player takes control of a planet that is not already controlled by another player, they explore that planet.
    
• When a player explores a planet, they draw and resolve a card from the exploration deck that corresponds to that planet's trait.

• There are three planetary exploration decks, each of which corresponds to a planet trait: cultural, hazardous, and industrial.
        
• Planets that do not have traits, such as Mecatol Rex and planets in home systems, cannot be explored.
        
• If a planet has multiple traits, the player exploring the planet chooses which of the corresponding exploration decks to draw from.
        
• If a player gains control of multiple planets or resolves multiple explore effects at the same time, they choose the order in which they resolve those explorations, completely resolving each exploration card before resolving the next.

• Certain abilities may allow a planet to be explored multiple times.
    
• Players can explore space areas that contain frontier tokens if they own the Dark Energy Tap technology or if another game effect allows them to.

• Frontier tokens are placed in systems during setup and by specific abilities.

• When a player explores a frontier token, they draw and resolve a card from the frontier exploration deck.
    
• After a frontier token is explored, it is discarded and returned to the supply.
    
• To resolve an exploration card, a player reads the card, makes any necessary decisions, and resolves its ability. If the card was not a relic fragment or an attachment, it is discarded into its respective discard pile.

• If there are no cards in an exploration deck, its discard pile is shuffled to form a new exploration deck.

• If a player resolves an exploration card that has an "attach" header, they attach that card to the planet card of the planet being explored.
    
• If a player resolves an exploration card that has "relic fragment" in the title, they place that card faceup in their play area.

• Players can resolve the ability of relic fragments that are in their play area. Resolving these abilities allows players to draw cards from the relic deck.
        
• Relic fragments can be exchanged as part of transactions.

### Notes

• An exploration cards that purges itself is not discarded into its respective discard pile.
    
• Enigmatic Device and Ion Storm are placed into play, not into the frontier discard pile.
    
• If a player is to gain multiple planets in a system, they choose the order in which they gain them, and explore each planet as they gain it before gaining the next.
    
• A player may perform transactions after revealing an exploration card and before resolving it.
    
• Before resolving an exploration card, it is revealed to all players.
    
• For notes about specific exploration cards, see the exploration cards notes page.

### Related Topics

• Attach
    
• Control
    
• Frontier Tokens
    
• Invasion
    
• Planets
    
• Purge
    
• Relics
    
• Transactions`
    },
    {
        id: 'fighter_tokens',
        title: 'Fighter Tokens',
        content: `### Rules Reference

A fighter token functions as a plastic fighter unit for all game purposes.

• When producing a fighter unit, a player can use a fighter token from the supply instead of a plastic piece.
    
• Players can replace their plastic fighters with tokens at any time.
    
• If a player ever has a fighter token in a system that does not contain one of their plastic fighters, that player must replace it with a plastic fighter from their reinforcements.

• If the player cannot replace the token, the unit is destroyed.

• Fighter tokens come in values of one and three. A player can swap between these tokens as necessary.

### Notes

• As each player only has ten plastic fighter figures, a player cannot have fighters in more than ten systems.
    
• Players may also swap fighter tokens for plastic pieces at any time.
    
• Fighter tokens are not component limited.
    
• A future rule change will have any unaccompanied fighter tokens removed, instead of destroyed.

### Related Topics

• Component Limitations
    
• Infantry Tokens
    
• Producing Units`
    },
    {
        id: 'fleet_pool',
        title: 'Fleet Pool',
        content: `### Rules Reference

The fleet pool is an area of a player's command sheet.

• The number of command tokens in a player's fleet pool indicates the maximum number of non-fighter ships that a player can have in a system.

• Units that are on planets or that count against a player's capacity do not count against that player's fleet pool.
        
• Units that are being transported through systems do not count against a player's fleet pool in those systems.

• Players place command tokens in their fleet pools with the ship silhouette faceup.
    
• If at any time the number of a player's non-fighter ships in a system exceeds the number of tokens in that player's fleet pool, they choose and remove excess ships in that system, returning those units to their reinforcements.
    
• Players do not spend command tokens from this pool unless a game effect specifically allows it.

### Notes

• Fighters and ground forces do not count towards capacity during combat. As such, any number of Fighter II may be in a system during combat, regardless of capacity and fleet pool. This will usually only be caused by effects that place units in a system during combat. When combat ends however, units will need to be removed to meet capacity and fleet pool requirements.
    
• Ships may be moved into, produced in or placed in a system even if doing so would exceed the fleet pool limit. However, some of those ships must immediately be removed to satisfy the limit.

• If some of those ships are fighters II, they may instead count towards that player's capacity in that system. If capacity is exceeded, fighters or ground forces must be removed to meet the limit.

• During movement, a ship may move through a system regardless of how many ships are in that system relative to the fleet pool limit.

### Related Topics

• Capacity
    
• Command Sheet
    
• Command Tokens
    
• Ships
    
• System Tiles`
    },
    {
        id: 'frontier_tokens',
        title: 'Frontier Tokens',
        content: `### Rules Reference

Frontier tokens can be explored for a variety of game effects.

• Frontier tokens are placed on the game board during setup. One frontier token is placed in each system that does not contain any planets.

• Frontier tokens are not placed on hyperlane tiles.
        
• A system cannot have more than one frontier token.
        
• Frontier tokens are placed in anomalies that do not have planets.
        
• A frontier token is placed in the Creuss gate system.

### Notes

• Players may explore space areas that contain frontier tokens if they own the Dark Energy Tap technology or if another game effect allows them to.

### Related Topics

• Exploration`
    },
    {
        id: 'game_board',
        title: 'Game Board',
        content: `### Rules Reference

The game board consists of all system tiles in play.

• The game board consists of all system tiles that were placed during setup, even if the sides of those tiles do not touch any other system tiles, such as the Ghosts of Creuss' home system.
    
• A system tile is on the edge of the game board if any of its sides are not touching another system tile.

• The Ghosts of Creuss home system and the wormhole nexus are on the edge of the game board.

### Notes

• If the edge of a system tile is touching a hyperlane tile, that edge does not cause that system tile to be on the edge of the game board.

• When using the five- and seven-player hyperlane setups, the system tile in the center of the ring of hyperlanes is not on the edge of the game board.
        
• When using the seven- and eight-player alternate setups, only the system tiles designated as "Ring 3" and home systems are on the edge of the game board, along with the Creuss home system and the wormhole nexus.

### Related Topics

• Adjacency
    
• Hyperlanes
    
• System Tiles`
    },
    {
        id: 'game_round',
        title: 'Game Round',
        content: `### Rules Reference

A game round consists of the following four phases:

• Strategy Phase
    
• Action Phase
    
• Status Phase
    
• Agenda Phase

• Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round.
    
• Player turns occur during the action phase.
    
• Abilities that last until the end of a player's turn do not persist for the duration of a game round or into the other phases of that game round. Those effects end at the end of that player's turn, before the next player's turn begins.

### Notes

• During the strategy, status and agenda phases, players to not take turns for the purpose of game effects.
    
• A game has a maximum of nine game rounds.

### Related Topics

• Action Phase
    
• Agenda Phase
    
• Custodians Token
    
• Status Phase
    
• Strategy Phase`
    },
    {
        id: 'gravity_rift',
        title: 'Gravity Rift',
        content: `### Rules Reference

A gravity rift is an anomaly that affects movement.

• A ship that will move out of or through a gravity rift at any time during its movement, applies +1 to its move value.

• This can allow a ship to reach the active system from farther away than it normally could.

• For each ship that would move out of or through a gravity rift, one die is rolled immediately before it exits the gravity rift system; on a result of 1-3, that ship is removed from the board.

• Dice are not rolled for units that are being transported by ships that have capacity.
        
• Units that are being transported are removed from the board if the ship transporting them is removed from the board.
        
• Units that are removed are returned to the player's reinforcements.

• A gravity rift can affect the same ship multiple times during a single movement.
    
• A system that contains multiple gravity rifts is treated as a single gravity rift.

### Notes

• Moving into a gravity rift, usually when it is the active system, will not provide the +1, nor will the ships have to roll for removal.
    
• A ship removed by a gravity rift is not destroyed.
    
• All ship movement must be declared before any of them roll for gravity rift removal. A player may not choose additional ships to move after seeing the result of this roll.
    
• A ship that is removed by a gravity rift will not count toward the fleet limit in the destination system.
    
• Retreating from a gravity rift will result in the following:

• The retreating player must declare which, if any, fighters and ground forces they are moving, and which ships will be transporting them. If they have the Fighter II technology, then for each fighter, they must choose if that fighter is moving itself or being transported.
        
• Each non-fighter ship and each Fighter II moving itself will have to roll for removal. Transported units are also removed if the ship transporting them is removed.
        
• The +1 will have no effect, as retreats are restricted to adjacent systems.
        
• If all ships are lost to the rift, the retreating player will not place a command token in the destination system.

• If a ship moves through or out of multiple gravity rifts, and/or the same gravity rift multiple times, each instance will provide a +1 to movement, and requires a separate roll for removal.
    
• If a ship with capacity would transport another unit after moving out of or through a gravity rift, but is removed, that unit remains where it is.
    
• A system containing a Vuil'raith Dimensional Tear is a gravity rift, and thus an anomaly.
    
• A future rule change will place the ship movement restrictions of anomalies upon all units.

### Related Topics

• Anomalies
    
• Movement
    
• Transport`
    },
    {
        id: 'ground_combat',
        title: 'Ground Combat',
        content: `### Rules Reference

During the Ground Combat step of an invasion, if the active player has ground forces on a planet that contains another player's ground forces, those players resolve a ground combat on that planet. To resolve a ground combat, players perform the following steps:

• Step 1 - Roll Dice: Each player rolls one die for each ground force they have on the planet; this is a combat roll. If a unit's combat roll produces a result that is equal to or greater than that unit's combat value, that roll produces a hit.

• If a unit's combat value contains two or more burst icons, the player rolls one die for each burst icon instead.

• Step 2 - Assign Hits: Each player in the combat must choose one of their own ground forces on the planet to be destroyed for each hit result their opponent produced.

• When a unit is destroyed, the player who controls that unit removes it from the board and places it in their reinforcements.

• After assigning hits, if both players still have ground forces on the planet, players resolve a new combat round starting with the Roll Dice step.
    
• Ground combat ends when only one player (or neither player) has ground forces on the planet.

• During the first round of a combat, "start of combat" and "start of combat round" effects occur during the same timing window.
        
• During the last round of a combat, "end of combat" and "end of combat round" effects occur during the same timing window.
        
• After a combat ends, the player with one or more ground forces remaining on the planet is the winner of the combat; the other player is the loser of the combat.
        
• If neither player has a ground force remaining, there is no winner; the combat ends in a draw.

### Notes

• The "start of combat" and "start of combat round" windows occur before the Roll Dice step.
    
• The "end of combat" and "end of combat round" windows occur after the Assign Hits step.
    
• If ground combat is to happen on multiple planets during a single invasion step, they will be resolved planet by planet, after the Space Cannon Defense step has been resolved on all planets and before the Establish Control step is resolved on any planet. The active player chooses the order combats are fought in.
    
• A player may score up to one secret objective per ground combat. If there is combat on multiple planets, a player may score a secret objective in each.
    
• A player may use the Sustain Damage ability of a unit involved in a combat, usually a mech, to cancel a hit produced by their opponent.
    
• No player may retreat from a ground combat.
    
• The "0" side of the d10 represents a result of 10.

### Related Topics

• Attacker
    
• Combat
    
• Defender
    
• Destroyed
    
• Ground Forces
    
• Invasion
    
• Modifiers
    
• Opponent
    
• Planets
    
• Rerolls
    
• Sustain Damage`
    },
    {
        id: 'ground_forces',
        title: 'Ground Forces',
        content: `### Rules Reference

A ground force is a type of unit. All infantry and mech units in the game are ground forces. Some races have unique infantry units.

• Ground forces are always on planets, in a space area with ships that have capacity values, or being transported by those ships.
    
• Ground forces being transported by a ship are placed in a system's space area along with the ship that is transporting them.
    
• There is no limit to the number of ground forces a player can have on a planet.

### Notes

### Related Topics

• Capacity
    
• Control
    
• Ground Combat
    
• Infantry Tokens
    
• Mechs
    
• Transport
    
• Units`
    },
    {
        id: 'hyperlanes',
        title: 'Hyperlanes',
        content: `### Rules Reference

Hyperlanes are tiles that are used in some game board setups to create adjacency of system tiles that are not touching each other.

• Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.
    
• Hyperlane tiles are not systems. They cannot have units on them and they cannot be targets for effects or abilities.

### Notes

• If the edge of a system tile is touching a hyperlane tile, that edge does not cause that system tile to be on the edge of the game board.

• When using the five- and seven-player hyperlane setups, the system tile in the center of the ring of hyperlanes is not on the edge of the game board.
        
• When using the seven- and eight-player alternate setups, only the system tiles designated as "Ring 3" and home systems are on the edge of the game board, along with the Creuss home system and the wormhole nexus.

• "Adjacent for all purposes" includes:

• Deep Space Cannon.
        
• Movement.
        
• Neighbors.
        
• Any other game effect that specifies adjacent systems.

• Hyperlanes on the same tile that converge at a point on the tile edge are not connected. For example, with the "Five-Player Galaxy Setup (With Hyperlanes)" in the Prophecy of Kings Map Appendix, the hyperlanes on tile 87A do not connect tiles 39 and 63, and the hyperlanes on tile 88A do not connect tiles 41 and 80.

### Related Topics

• Adjacency
    
• Game Board
    
• Movement
    
• Neighbors
    
• Space Cannon
    
• System Tiles`
    },
    {
        id: 'imperial',
        title: 'Imperial (Strategy Card)',
        content: `### Rules Reference

The Imperial strategy card allows players to score victory points and draw secret objectives. This card's initiative value is "8".

• During the action phase, if the active player has the Imperial strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Imperial strategy card, the active player can score one public objective of their choice if they meet that objective's requirements as described on its card. Then, if the active player controls Mecatol Rex, they gain one victory point; if they do not control Mecatol Rex, they can draw one secret objective card.
    
• After the active player resolves the primary ability of the Imperial strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to draw one secret objective card.
    
• If a player has more than three secret objective cards after drawing a secret objective, they must choose one of their unscored secret objectives and return it to the secret objective deck. This number includes the secret objective cards in the player's hand and the cards that player has already scored. Then, they shuffle the secret objective deck.

### Notes

• A player must control every planet in their home system to score a public objective using the first primary ability of Imperial.
    
• A player who controls Mecatol Rex does not need to control every planet in their home system to gain a victory point from the second primary ability of Imperial.
    
• A player who controls Mecatol Rex while resolving the primary ability of Imperial must gain a victory point; they cannot instead draw a secret objective.
    
• A player who needs to discard a secret objective must do so and reshuffle the deck before the next player may draw from the deck.

### Related Topics

• Initiative Order
    
• Mecatol Rex
    
• Objective Cards
    
• Strategic Action
    
• Strategy Card
    
• Victory Points`
    },
    {
        id: 'infantry_tokens',
        title: 'Infantry Tokens',
        content: `### Rules Reference

An infantry token functions as a plastic infantry unit for all game purposes.

• When producing an infantry unit, a player can use an infantry token from the supply instead of a plastic piece.
    
• Players can replace their plastic infantry with tokens at any time.
    
• If a player ever has an infantry token on a planet that does not contain one of their plastic infantry or in the space area of a system that does not contain one of their plastic infantry, that player must replace it with one of their plastic infantry from their reinforcements.

• If the player cannot replace the token, the unit is destroyed.

• Infantry tokens come in values of one and three. A player can swap between these tokens as necessary.

### Notes

• As each player only has twelve plastic infantry figures, a player cannot have infantry on more than twelve planets or being transported in more than twelve space areas, or any combination thereof.
    
• Players may also swap infantry tokens for plastic pieces at any time.
    
• Infantry tokens are not component limited.
    
• A player may remove a plastic infantry figure from a planet or space area, along with any accompanying infantry tokens, if doing so allows them to swap it into the active system and allows them to commit ground forces to and fight ground combats on multiple planets during the Invasion step of the tactical action in that system when they could otherwise not do so.
    
• A future rule change will have any unaccompanied infantry tokens removed, instead of destroyed.

### Related Topics

• Component Limitations
    
• Fighter Tokens
    
• Producing Units`
    },
    {
        id: 'influence',
        title: 'Influence',
        content: `### Rules Reference

Influence represents a planet's political power. Players spend influence to gain command tokens using the Leadership strategy card, and the influence values of planets are used to cast votes during the agenda phase.

• A planet's influence is the rightmost value (surrounded by a blue border) found on the planet's system tile and planet card.
    
• A player can spend a planet's influence by exhausting that planet's card.
    
• A player can spend a trade good as if it were one influence.

• Players cannot spend trade goods to cast votes during the agenda phase.

### Notes

### Related Topics

• Agenda Phase
    
• Custodians Token
    
• Exhausted
    
• Leadership
    
• Planets`
    },
    {
        id: 'initiative_order',
        title: 'Initiative Order',
        content: `### Rules Reference

Initiative order is the order in which players resolve steps of the action and status phases.

• Initiative order is determined by the initiative numbers on strategy cards.

• A player who has the Naalu "0" token has the initiative number "0".

• Initiative order begins with the player who has the lowest-numbered strategy card and proceeds to the player who has the strategy card that is next in numerical order.

• Only strategy cards that were chosen during the strategy phase are used when determining initiative order; strategy cards not chosen during the strategy phase are ignored.

• When playing with three or four players, a player's initiative is determined only by their lowest-numbered strategy card.

### Notes

• If there are multiple abilities that players wish to resolve at the same time during the action phase, initiative order will determine the order they are resolved in. See the abilities page for more details.
    
• The initiative order of all strategy cards is:

• Leadership
        
• Diplomacy
        
• Politics
        
• Construction
        
• Trade
        
• Warfare
        
• Technology (S.C.)
        
• Imperial

### Related Topics

• Abilities
    
• Action Phase
    
• Active Player
    
• Strategy Card
    
• Status Phase`
    },
    {
        id: 'invasion',
        title: 'Invasion',
        content: `### Rules Reference

Invasion is a step of the tactical action during which the active player can land ground forces on planets to gain control of those planets.

To resolve an invasion, players perform the following steps:

• Step 1 - Bombardment: The active player may use the Bombardment ability of any of their units in the active system.
    
• Step 2 - Commit Ground Forces: If the active player has ground forces in the space area of the active system, that player may commit any number of those ground forces to land on any of the planets in that system.

• To commit a ground force to a planet, the active player places that ground force unit on that planet.
        
• The planet may contain another player's ground forces.
        
• If the active player does not wish to commit ground forces, that player proceeds to the Production step of the tactical action.

• Step 3 - Space Cannon Defense: If the active player commits any ground forces to a planet that contains units that have the Space Cannon ability, those Space Cannon abilities can be used against the committed ground forces.

• If the active player committed ground forces to more than one planet that contained units with a Space Cannon ability, the active player chooses the order in which those Space Cannon abilities are resolved.

• Step 4 - Ground Combat: If the active player has ground forces on a planet in the active system that contains another player's ground forces, those players resolve a ground combat on that planet.

• If players must resolve a combat on more than one planet, the active player chooses the order in which those combats are resolved.

• Step 5 - Establish Control: The active player gains control of each planet they committed ground forces to if that planet still contains at least one of their ground forces.

• When a player gains control of a planet, any structures on the planet that belong to other players are immediately destroyed.
        
• When a player gains control of a planet, they gain the planet card that matches that planet and exhaust that card.
        
• A player cannot gain control of a planet they already control.
        
• If there was a combat, and all units belonging to both players were destroyed, the player who was the defender retains control of the planet and places one of their control tokens on the planet.

### Notes

• Units are considered to be on the planet for game effects from the Commit Ground Forces step onward.
    
• If a player gains control of an uncontrolled planet during the Establish Control step, they explore it.
    
• If a player gains control of a legendary planet, they gain the legendary planet ability card in addition to the planet card. The ability card will not be exhausted if it was readied.
    
• If Mecatol Rex has the custodians token on it, a player must remove it before they may commit ground forces to it.

### Related Topics

• Active Player
    
• Bombardment
    
• Combat
    
• Control
    
• Custodians Token
    
• Exploration
    
• Ground Combat
    
• Ground Forces
    
• Planets
    
• Space Cannon`
    },
    {
        id: 'leader_sheet',
        title: 'Leader Sheet',
        content: `### Rules Reference

Each player has a leader sheet that contains slots for their faction's three leader cards as well as their faction's mech unit card. 

• The leader slots of the leader sheet are where players place their three leader cards during setup. Each slot displays the name of the type of leader that is placed in that slot (agent, commander, and hero) as well as a symbol in the upper-right that helps players quickly determine which side of those leaders begins the game faceup.

• The sides of the leader cards that display one (agent), two (commander), or three (hero) hash marks, respectively, begin the game faceup.

• The mech slot of the leader sheet is where players place their mech unit cards during setup.
    
• Players who are familiar with the game can hide the quick reference by placing that portion of the leader sheet under their faction sheets.

### Notes

### Related Topics

• Leaders
    
• Mechs`
    },
    {
        id: 'leaders',
        title: 'Leaders',
        content: `### Rules Reference

Each player has several faction-specific leader cards that represent characters with unique abilities.

• Each faction has three leaders; one agent, one commander, and one hero.

• The Nomad's The Company faction ability grants them two additional agents, for a total of five leaders.

• A player's leaders are placed on their leader sheet during setup.

• Each leader card is placed on the slot that matches its type. The leader cards are placed so that the hash mark symbols in the upper right are faceup and match the slot that the card is placed on.
        
• The two additional Nomad agents are placed in the Nomad player's play area readied side up.

#### 
• Agents

• An agent does not need to be unlocked and begins the game in a readied state. They can be exhausted by resolving their abilities, and they ready during the Ready Cards step of the status phase.
    
#### 
• Commanders

• A commander must be unlocked to use its abilities. A player unlocks their commander if they fulfill the conditions listed after the "Unlock" header.

• Each faction's commander has a unique "Unlock" condition.
        
• After a player fulfills the unlock condition of their commander, they flip it over to its unlocked side.
        
• A commander's unlock conditions cannot be met while an ability or game effect is being resolved. That is, pending abilities or partially resolved game effects must be completed before checking if conditions are met.
        
• A commander cannot flip to its locked side after it is unlocked, even if its owner no longer meets the unlock conditions.

• A commander cannot be exhausted.
    
• The Alliance promissory note allows a player to share their commander's ability with another player.

• A commander's owner can still use their commander's ability, even if another player has their Alliance promissory note.

#### 
• Heroes

• A hero needs to be unlocked to use their abilities. A player unlocks their hero if they fulfill the conditions listed after the "Unlock" header.

• The "Unlock" condition for each hero is to have three scored objectives; these can be any combination of secret objectives and public objectives.
        
• Victory points do not count toward unlocking heroes.
        
• After a player fulfills the unlock condition of their hero, they flip it to its unlocked side.
        
• A hero cannot flip to its locked side after it is unlocked.

• A hero cannot be exhausted.
    
• A hero is purged after its abilities are resolved.

• The Titans of Ul's hero is not purged; it is attached to the planet Elysium instead.

### Notes

• A commander's ability cannot be applied to the instance of the effect that unlocked it.
    
• A commander may be unlocked between two abilities that occur in the same timing window.
    
• For notes about a leader of a specific faction, see that faction's page.

### Related Topics

• Abilities
    
• Component Action
    
• Exhausted
    
• Leader Sheet
    
• Purge
    
• Readied`
    },
    {
        id: 'leadership',
        title: 'Leadership (Strategy Card)',
        content: `### Rules Reference

The Leadership strategy card allows players to gain command tokens. This card's initiative value is "1".

• During the action phase, if the active player has the Leadership strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Leadership strategy card, the active player gains three command tokens. Then, that player can spend any amount of their influence to gain one command token for every three influence they spend.
    
• After the active player resolves the primary ability of the Leadership strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend any amount of influence to gain one command token for every three influence they spend.
    
• When a player gains command tokens, that player places each token on their command sheet in the pool of their choice.

### Notes

• The secondary ability of Leadership does not require a player to spend a strategy token.
    
• A player may spend one or two more influence than the amount necessary for the tokens they gain; however, this influence is wasted.

### Related Topics

• Command Sheet
    
• Command Tokens
    
• Influence
    
• Initiative Order
    
• Strategic Action
    
• Strategy Card`
    },
    {
        id: 'legendary_planets',
        title: 'Legendary Planets',
        content: `### Rules Reference

Legendary planets grant the player that controls them unique, planet-specific abilities.

• A legendary planet is indicated by the legendary planet icon.
    
• When a player gains control of a legendary planet, they also place its legendary planet ability card in their play area.

• If a player gains control of a legendary planet ability card from the deck, it is readied.
        
• If a player gains control of an exhausted legendary planet ability card, it remains exhausted.

• Players can use the abilities on the legendary planet ability cards in their play area.
    
• If a legendary planet's planet card is purged, its corresponding legendary planet ability card is also purged.

### Notes

• If a player wishes to resolve the Imperial Arms Vault ability of Hope's End, but they have no mechs left in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.
    
• If an effect instructs a player to "end your turn", that player may still resolve any "at the end of your turn" abilities, including those of legendary planets.
    
• A player may resolve multiple legendary planet abilities at the end of a single turn.
    
• Legendary planet ability cards exhaust and ready independently from their respective planet card.
    
• An ability that readies a plannet cannot be used to ready a legendary planet ability card.
    
• A legendary planet ability card will ready in the status phase.
    
• Mecatol Rex is not a legendary planet.
    
• For the system that contains Malice, see the wormhole nexus.

### Related Topics

• Control
    
• Exhausted
    
• Planets`
    },
    {
        id: 'mecatol_rex',
        title: 'Mecatol Rex',
        content: `### Rules Reference

Mecatol Rex is the planet placed in the center of the game board during setup.

• During setup, the custodians token is placed on Mecatol Rex. This token prevents a player from committing ground forces to land on the planet unless they spend six influence to remove the token.

### Notes

• Mecatol Rex is not a legendary planet.

### Related Topics

• Custodians Token
    
• Imperial
    
• Planets`
    },
    {
        id: 'mechs',
        title: 'Mechs',
        content: `### Rules Reference

Mechs are unique, faction-specific heavy ground forces.

• Mechs are a type of ground force and can be transported and participate in ground combat.
    
• Each player begins with their mech unit card in play on their leader sheet and can produce mechs for the cost presented on the card.
    
• Some mechs have Deploy abilities which allow a player to place them on the game board without producing them normally.
    
• Mech unit cards are not technologies.

### Notes

• Effects that refer to "ground forces" apply to mechs. Effects that refer to "infantry" do not.
    
• For notes about a mech of a specific faction, see that faction's page.

### Related Topics

• Deploy
    
• Ground Forces
    
• Leader Sheet
    
• Units`
    },
    {
        id: 'modifiers',
        title: 'Modifiers',
        content: `### Rules Reference

A modifier is a number that is applied by an ability to increase or decrease the attribute values of a unit or the results of a die roll.

• A modifier is always preceded by the word "apply" followed by a numerical value.
    
• A modifier value preceded by a "+" is added to the attribute or result being modified; a modifier value preceded by a "&minus;" is subtracted from the attribute or result being modified.

### Notes

• "Combat roll" modifiers do not modify anti-fighter barrage, bombardment or space cannon rolls.
    
• When an effect moves a unit to an adjacent system, modifying that unit's move value will have no effect.

### Related Topics

• Abilities
    
• Anti-Fighter Barrage
    
• Bombardment
    
• Combat
    
• Cost
    
• Move
    
• Space Cannon`
    },
    {
        id: 'move',
        title: 'Move (Attribute)',
        content: `### Rules Reference

Move is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.

• A unit's move value indicates the distance from its current system that it can move during the Movement step of a tactical action.

### Notes

• When an effect moves a unit to an adjacent system, modifying that unit's move value will have no effect.

### Related Topics

• Modifiers
    
• Movement
    
• Ships
    
• Tactical Action
    
• Units`
    },
    {
        id: 'movement',
        title: 'Movement',
        content: `### Rules Reference

A player can move their ships by resolving a tactical action during the action phase. Additionally, some abilities can move a unit outside of the tactical action.

#### 
• Tactical Action Movement

• A ship's move value is presented along with its other attributes on faction sheets and unit upgrade technology cards. This value indicates the distance from its current system that a ship can move.
    
To resolve movement, players perform the following steps:

• Step 1 - Move Ships: A player can move any number of their eligible ships into the active system, obeying the following rules:

• The ship must end its movement in the active system.
        
• The ship cannot move through a system that contains ships that are controlled by another player.
        
• The ship cannot move if it started its movement in another system that contains one of its faction's command tokens.
        
• The ship can move through systems that contain its own faction's command tokens.
        
• The ship can move out of the active system and back into it if its move value is high enough.
        
• The ship must move along a path of adjacent systems, and the number of systems the ship enters cannot exceed its move value.

• When a ship with a capacity value moves or is moved, it may transport ground forces and fighters.
    
• The active player declares which of their ships are moving before any ships move. Those ships arrive in the active system simultaneously.
    
• Step 2 - Space Cannon Offense: After the Move Ships step, players can use the Space Cannon abilities of their units in the active system.
    
#### 
• Ability Movement

• If an ability moves a unit outside of the Movement step of a tactical action, players follow the rules specified by that ability; neither a unit's move value nor the rules specified above apply.

### Notes

• When an effect moves a unit to an adjacent system, modifying that unit's move value will have no effect.
    
• An ability may move a player's ship out of a system containing one of the player's faction's commend tokens. However, the transport rules prevent a player's units from being transported from systems containing one of that player's command tokens, other than the active system. An ability that moves a player's ship must also explicitly allow it to transport units from non-active systems containing that player's faction's command token for it to be able to do so.

• During a retreat, units may be transported from the active system.

• A ship that can both move and be transported (i.e. Fighter II) cannot do both by "meeting" a ship with capacity partway through a tactical action movement, as all movement is simultaneous.
    
• Ships only move "into" the destination system. A ship may move "through" other systems.
    
• Fighters alone will block other player's ships from moving through that system, whether they are accompanied by a Space Dock or they are Fighters II.

### Related Topics

• Active System
    
• Adjacency
    
• Anomalies
    
• Capacity
    
• Hyperlanes
    
• Move
    
• Ships
    
• Space Cannon
    
• Tactical Action
    
• Transport
    
• Wormholes`
    },
    {
        id: 'nebula',
        title: 'Nebula',
        content: `### Rules Reference

A nebula is an anomaly that affects movement and combat.

• A ship can only move into a nebula if it is the active system.

• A ship cannot move through a nebula. That is, a ship cannot move into and out of a nebula during the same movement.

• A ship that begins the Movement step of a tactical action in a nebula treats its move value as "1" for the duration of that step.

• Other abilities and effects can increase this number.

• If a space combat occurs in a nebula, the defender applies +1 to each combat roll of their ships during that combat.

### Notes

• A player cannot retreat (or similar) into a nebula, since it would not be the active system.
    
• The +1 modifier for the defender does not modify anti-fighter barrage, bombardment or space cannon rolls.
    
• The +1 modifier for the defender has no effect during ground combat.
    
• A future rule change will place the ship movement restrictions of anomalies upon all units.
    
• A future rule change will allow ships to move into a nebula when it is not the active system.

### Related Topics

• Active System
    
• Anomalies
    
• Combat
    
• Defender
    
• Move`
    },
    {
        id: 'neighbors',
        title: 'Neighbors',
        content: `### Rules Reference

Two players are neighbors if they both have a unit or control a planet in the same system. They are also neighbors if they both have a unit or control a planet in systems that are adjacent to each other.

• Players can resolve transactions with their neighbors.
    
• Players are neighbors if the adjacency of systems is granted by a wormhole.
    
• Players are neighbors with the Ghosts of Creuss if the Ghosts of Creuss' "Quantum Entanglement" faction ability is causing adjacency from the perspective of the Ghosts of Creuss player.

### Notes

• A player may make a deal with any player, however, these deals may only include a transaction if the two players are neighbors.
    
• A player may resolve one transaction with each other player per each agenda during the agenda phase, however, the agenda phase does not make all players neighbors.

### Related Topics

• Adjacency
    
• Transactions`
    },
    {
        id: 'objective_cards',
        title: 'Objective Cards',
        content: `### Rules Reference

Players can score objectives to gain victory points.

• There are two types of objective cards: public objectives and secret objectives.

• Each public objective has a "I" or "II" on the back of its card; all other objectives are secret objectives.

• Each objective card indicates a number of victory points that a player gains by scoring that objective.
    
• Each objective card indicates the phase during which a player can score that objective - the status, action, or agenda phases.
    
• Each objective card describes the requirement a player must fulfill to score that objective.
    
• If a player fulfills the requirement described on an objective card, they can score that objective following the timing indicated on the card, either during the action phase or the status phase.

• When a player scores an objective during the status phase, they must fulfill the requirement on the card during the Score Objectives step of the status phase to score that objective.
        
• When a player scores an objective during the action phase, they can do so at any time during that phase.
        
• When a player scores an objective during the agenda phase, they can do so at any time during that phase.

• A player can score a maximum of one public objective and one secret objective during each status phase.
    
• A player can score any number of objectives during the agenda phase or during a turn of the action phase; however, they can only score one objective during or after each combat.

• A player can score an objective during both the space combat and the ground combat during the same tactical action.

• A player can score each objective only once during the game.
    
• If an objective requires a player to destroy one or more units, those units can be destroyed by producing hits against them, playing action cards, using technology, or any number of other abilities that use the "destroy" terminology.

• Forcing a player to remove a unit from the board by reducing the number of command tokens in their fleet pool is not treated as destroying a unit.

• Players can score some objectives by spending resources, influence, or tokens, as described by the objective card. To score such an objective, a player must pay the specified cost at the time indicated on the card.
    
#### 
• Public Objectives

A public objective is an objective that is revealed to all players.

• When scoring a public objective, the player places one of their control tokens on that objective's card. Then, that player advances their control token on the victory point track a number of spaces equal to the number of victory points gained.
    
• Each game contains five stage I and five stage II public objective cards that the speaker places facedown near the victory point track during setup.

• The speaker reveals two of the stage I objective cards during setup. All other objective cards remain facedown.

• During each status phase, the speaker reveals a facedown public objective card.

• The speaker does not reveal stage II objective cards until all stage I objective cards are revealed.

• If the speaker must reveal a facedown public objective card but all public objective cards are already revealed, the game ends immediately.

• The player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner.

• A player cannot score public objectives if that player does not control each planet in their home system.
    
#### 
• Secret Objectives

A secret objective is an objective that is controlled by one player and is hidden from all other players until it is scored.

• When scoring a secret objective, a player reveals the objective by placing it faceup in their play area. Then, they place one of their control tokens on that objective's card and advances their control token on the victory point track a number of spaces equal to the number of victory points gained.
    
• A player can only score their own secret objectives; a player cannot score secret objectives revealed by other players.
    
• Each player begins the game with one secret objective.
    
• Each player can have up to three total scored and unscored secret objectives.

• If a player draws a secret objective and has more than three, that player must choose one of their unscored secret objectives and return it to the deck. Then, that player shuffles the secret objective deck.

• A player can gain secret objectives by resolving either the primary or secondary ability of the Imperial strategy card.

### Notes

• A status phase objective must have its condition met during the status phase; any activity during the action phase is irrelevant.
    
• Any number of players may score a given public objective during the status phase. Players are not blocked from scoring an objective if another player earlier in initiative order scores it first, unless the earlier player achieved victory and ended the game by doing so.
    
• The number of secret objective cards in a player's hand is public information.
    
• A player may choose to reveal any or all of the secret objective cards in their hand, if they so choose.
    
• If multiple ground combats happen on separate planets as part of a single invasion during one action, one secret objective may be scored during each.
    
• The Bombardment and Space Cannon steps happen outside of combat; any number of secret objectives may be scored during those steps, and do not prevent another secret objective being scored during combat that turn.

• The Anti-Fighter Barrage step, however, is a step during combat.

• A player may score an action phase secret objective when they are not the active player.
    
• A player with three scored secret objectives may draw a fourth. However, they must immediately shuffle it into the secret objective deck.
    
• For notes about specific objective cards, see the objective card component notes page.

### Related Topics

• Action Phase
    
• Agenda Phase
    
• Imperial
    
• Status Phase
    
• Victory Points`
    },
    {
        id: 'opponent',
        title: 'Opponent',
        content: `### Rules Reference

During combat, a player's opponent is the other player that either has ships in the system at the start of the space combat or has ground forces on the planet at the start of a ground combat.

• Players who do not have units on either side of a combat are not opponents. Those players cannot use abilities or have abilities used against them that are used against an opponent.

### Notes

### Related Topics

• Attacker
    
• Defender
    
• Ground Combat
    
• Space Combat`
    },
    {
        id: 'pds',
        title: 'PDS',
        content: `### Rules Reference

A PDS (planetary defense system) is a structure that allows a player to defend their territory against invading forces.

• Each PDS has the Space Cannon ability.
    
• The primary way by which players acquire PDS units is by resolving either the primary or secondary ability of the Construction strategy card.
    
• A PDS unit is placed on a planet. Each planet can have a maximum of two PDS units.
    
• If a player's PDS is ever on a planet that does not contain any of their own ground forces and contains a unit that belongs to another player, that PDS is destroyed.

### Notes

• A PDS is both a structure and a unit.
    
• Each PDS also has the Planetary Shield ability.

### Related Topics

• Construction
    
• Planetary Shield
    
• Structures
    
• Space Cannon
    
• Units`
    },
    {
        id: 'planetary_shield',
        title: 'Planetary Shield (Unit Ability)',
        content: `### Rules Reference

Units cannot use the Bombardment ability against a planet that contains a unit that has the Planetary Shield ability.

• The Planetary Shield ability does not prevent a planet from being affected by the X-89 Bacterial Weapon technology.
    
• The Planetary Shield ability prevents an L1Z1X player from using their Harrow faction ability.
    
• If a war sun is in a system with any number of other players' units that have the Planetary Shield ability, those units are treated as if they do not have that ability.

• Units treated as if they do not have a Planetary Shield ability cannot use the Magen Defense Grid technology.
        
• A war sun can use its Bombardment ability against planets that contain units that have the Planetary Shield ability.

### Notes

• A unit with the Planetary Shield ability on a planet does not stop of the use of a unit's Bombardment ability on other planets in the same system.
    
• If the Planetary Shield ability prevents the use of the  the use of a Bombardment ability, then the abilities of the X-89 Bacterial Weapon &Omega; or X-89 Bacterial Weapon &Omega;&Omega; technologies cannot be used.
    
• If a war sun causes a unit to be treated as if it does not have a Planetary Shield ability, that unit may still use the ability of the Magen Defense Grid &Omega; or Magen Defense Grid &Omega;&Omega; technologies.
    
• If a war sun causes a unit to be treated as if it does not have a Planetary Shield ability, all units in that system with a Bombardment ability may use it against the planet that unit is on.

### Related Topics

• Abilities
    
• Bombardment
    
• Invasion
    
• PDS`
    },
    {
        id: 'planets',
        title: 'Planets',
        content: `### Rules Reference

Planets provide players with resources and influence. Planets are on system tiles and each has a name, a resource value, and an influence value. Some planets also have traits.

• A planet's resources are indicated by the value on its planet card and system tile that is surrounded by a yellow triangular border.
    
• A planet's influence is indicated by the value on its planet card and system tile that is surrounded by a blue hexagonal border.
    
• A planet's trait has no inherent effects, but some game effects refer to a planet's trait. There are three traits: cultural, hazardous, and industrial.
    
• Some planets have a technology specialty, which allows those planets to be exhausted to satisfy a prerequisite when researching technology.
    
• Some planets are legendary planets, as indicated by the legendary planet icon. When a player gains control of a legendary planet, they also gain control of its legendary planet ability card.
    
#### 
• Planet Card

Each planet has a corresponding planet card that displays its name, resource value, influence value, and trait, if it has one. If a player controls a planet, they keep that planet's card in their play area.

• A planet card has both a readied and exhausted state. When a planet is readied, it is placed faceup. When a planet is exhausted, it is placed facedown.
    
• A player can spend a readied planet's resources or influence.
    
• A player cannot spend an exhausted planet's resources or influence.

### Notes

• Mecatol Rex and planets in home systems do not have traits.
    
• Planets with traits can be explored.
    
• A planet cannot be spent for both its influence and resources during a single exhaustion.
    
• If a planet is exhausted for its technology specialty, it does not provide influence or resources.
    
• A player may only exhaust their own planets, unless a game effect specifies otherwise.

### Related Topics

• Control
    
• Exploration
    
• Exhausted
    
• Influence
    
• Invasion
    
• Legendary Planets
    
• Mecatol Rex
    
• Readied
    
• Resources
    
• System Tiles
    
• Technology`
    },
    {
        id: 'politics',
        title: 'Politics (Strategy Card)',
        content: `### Rules Reference

The Politics strategy card allows players to draw action cards. Additionally, the active player chooses a new speaker and looks at cards in the agenda deck. This card's initiative value is "3".

• During the action phase, if the active player has the Politics strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Politics strategy card, the active player resolves the following effects in order:

• The active player chooses any player that does not have the speaker token. The active player may choose themselves as long as they do not have the speaker token. The chosen player places the speaker token in their play area; they are now the speaker.
        
• The active player draws two action cards.
        
• The active player secretly looks at the top two cards of the agenda deck. Then, that player places each card on either the top or the bottom of the deck. If they place both cards on either the top or bottom, they can place them in any order.

• After the active player resolves the primary ability of the Politics strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to draw two action cards.

### Notes

• If there are few cards remaining in the action card deck, they will be dealt out in clockwise order from the active player. After those players have discarded down to their seven card hand limit, if necessary, the discard pile will be shuffled to form a new deck. The remaining players (including the player who received the last action card from the previous deck, if applicable) will then be dealt their action cards.
    
• When resolving the primary ability of the Politics card, the active player cannot show the agenda cards they drew to any other player.

### Related Topics

• Action Cards
    
• Agenda Card
    
• Initiative Order
    
• Speaker
    
• Strategic Action
    
• Strategy Card`
    },
    {
        id: 'producing_units',
        title: 'Producing Units',
        content: `### Rules Reference

The primary way that a player produces new units is by resolving the Production abilities of existing units during a tactical action. However, other game effects also allow players to produce units.

• Each unit that a player can produce has a cost value presented on its faction sheet or technology card. To produce a unit, a player must spend a number of resources equal to or greater than the cost value of the unit they are producing.

• Spent resources must come from planets or trade goods that are controlled by the player who is producing the units.
        
• Any resources spent in excess of a unit's cost are lost.
        
• If a player is producing multiple units at a time, that player can add the cost of each unit they are producing to create a total cost before they spend any resources.

• If the cost is accompanied by two icons - typically for fighters and infantry - a player produces two of that unit for that cost.

• Each of the two units counts toward the total number of units a player can produce.
        
• A player can choose to produce only one unit; however, they must still pay the entire cost.

• When a player produces a unit through the use of their units' Production abilities during a tactical action, that player follows the rules of the Production ability to determine where in the active system the units can be placed.
    
• When a player produces a unit through an ability outside of the tactical action, that ability will state how many units that player can produce and where that player can place those units.

• A player cannot produce a unit on a planet they do not control.
        
• If an ability allows a player to produce a unit in a system, they may produce that unit in the space area or on a planet they control in that system.

• A player is limited by the number of units in their reinforcements.

• If a player cannot produce a unit because it is not in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. Then, that player can produce that unit. A player can remove any number of their units in this way; however, any units that are removed must be produced immediately.
        
• When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece.

• A player cannot produce ships in a system that contains other players' ships.

• Ground forces can still be produced.

### Notes

• Whenever a unit is produced, its cost must be paid, unless the effect that is producing the unit explicitly says otherwise.
    
• A player cannot produce one fighter and one infantry for one resource.
    
• If an effect allows a player to produce a unit of a specific type, then factional variations do not prevent that player from producing that type of unit.
    
• If a player removes a unit in order to place it, because they have none of that unit type in their reinforcements, that unit is placed undamaged.

### Related Topics

• Blockaded
    
• Component Limitations
    
• Cost
    
• Fighter Tokens
    
• Infantry Tokens
    
• Production
    
• Resources
    
• Space Dock
    
• Tactical Action
    
• Units
    
• Warfare`
    },
    {
        id: 'production',
        title: 'Production (Unit Ability)',
        content: `### Rules Reference

During the Production step of a tactical action, the active player can resolve the Production ability of each of their units that are in the active system to produce units

• A unit's Production ability, which is presented on a faction sheet or unit upgrade technology card, is always followed by a value. This value is the maximum number of units that this unit can produce.

• If the active player has multiple units in the active system that have the Production ability, that player can produce a number of units up to the combined total of their units' production values in that system.
        
• When producing fighters or infantry, each individual unit counts toward the producing unit's production limit.
        
• A player can choose to produce one fighter or infantry instead of two, but must still pay the entire cost.
        
• Production value from Arborec space docks cannot be used to produce infantry, even if the Arborec player controls other units that have Production in the same system.

• When a player produces ships by using Production that player must place them in the active system.
    
• When a player produces ground forces, that player must place those units on planets that contain a unit that used its Production ability.
    
• If a player uses the Production ability of a unit in a space area of a system to produce ground forces, those ground forces may either be placed on a planet the player controls in that system or in the space area of that system.

### Notes

• A unit's Production value is the maximum number of units that may be produced by that unit, regardless of cost. For example, a space dock with "Production 6" could produce six dreadnoughts or six fighters.
    
• Placement of produced units is not limited by a unit's Production value, only by the location of the producing units.

• For example, say a player is performing a tactical action on tile 75. They have one Space Dock I each on Abaddon and Ashtroth, but not on Loki. They combine their production to place seven infantry. They could place all seven on Abaddon, all seven on Ashtroth, or split them. They cannot place any on Loki.

• If an effect allows a player to produce a ship of a specific type, then factional variations do not prevent that player from producing that type of ship.

### Related Topics

• Abilities
    
• Blockaded
    
• Producing Units
    
• Resources
    
• Space Dock
    
• Units
    
• Warfare`
    },
    {
        id: 'promissory_notes',
        title: 'Promissory Notes',
        content: `### Rules Reference

Each player begins the game with one unique and five generic promissory note cards that can be given to other players.

• Each promissory note contains timing text and ability text. A player can resolve any of their promissory note cards by following the text on the card.

• Promissory notes are not mandatory unless otherwise specified.

• A player cannot play their color's or faction's promissory notes. Since the cards are only valuable to other players, promissory notes can be traded as powerful negotiation tools.
    
• Promissory notes that are returned to a player are returned after their abilities have been completely resolved.
    
• If a promissory note is returned to a player, that player may give it to other players again as part of a future transaction.

• An unrevealed promissory note is not subject to effects in its ability text that return the card if certain conditions are met.

• When resolving a transaction, a player can trade a maximum of one promissory note from their hand to another player, even if that card originally belonged to another player.

• Promissory notes in the play area cannot be traded.

• Players should keep their hands of promissory notes hidden.
    
• If a player is eliminated, all of the promissory notes that match their color or faction are returned to the game box, including those that are in play or owned by other players.

• Other players' promissory notes are returned to those players.

### Notes

• The number of promissory notes in a player's hand is public information.
    
• When two players make a trade for a promissory note, the specific promissory note that was traded may be hidden from other players.

• However, it is public information that a promissory note was traded.
        
• The Alliance and Support for the Throne promissory notes must be played immediately when received. As such, trading either of these notes cannot be kept hidden.

• A player may choose to reveal any or all of the promissory notes in their hand, if they so choose.
    
• For notes about specific generic promissory notes, see the promissory notes notes page.
    
• For notes about a promissory note of a specific faction, see that faction's notes page.

### Related Topics

• Abilities
    
• Component Action
    
• Elimination
    
• Transactions`
    },
    {
        id: 'purge',
        title: 'Purge',
        content: `### Rules Reference

Purge is a cost that permanently removes a component from the game. If an ability requires that its component is purged, that component can only be used once per game.

• If an ability instructs a player to purge a component, that component is removed from the game and returned to the box.
    
• Purged components cannot be used or otherwise returned to the game by any means.
    
• When a player is instructed to purge a component, that component is purged even if its ability was only partially resolved.

### Notes

### Related Topics

• Abilities
    
• Exploration
    
• Leaders
    
• Relics`
    },
    {
        id: 'readied',
        title: 'Readied',
        content: `### Rules Reference

Cards have a readied state, which indicates that a player can exhaust or resolve the abilities on those cards.

• A card that is readied is placed faceup in a player's play area; a card that is exhausted is placed facedown in a player's area.
    
• A player can exhaust a readied planet card to spend resources or influence from that card's planet.
    
• A player can exhaust certain readied technology cards to resolve those cards' abilities.

• Such a technology will specifically instruct a player to exhaust the card as part of the ability's cost.

• If a card is exhausted, a player cannot resolve that card's abilities or spend resources or influence on that card until it is readied.
    
• During a Ready Cards step, each player readies all of their exhausted cards by flipping them faceup.
    
• When a player performs a strategic action, they exhaust their chosen strategy card.

• That card is later readied during the status phase.

### Notes

• Passive abilities on an exhausted card are still in effect while that card is exhausted.
    
• Planets will also ready at the end of each agenda phase. Leaders, relics and technologies will not.
    
• If a game effect instructs a player to ready a planet, the readied planet must be controlled by that player, unless the game effect specifies otherwise.

### Related Topics

• Abilities
    
• Diplomacy
    
• Exhausted
    
• Leaders
    
• Planets
    
• Relics
    
• Status Phase
    
• Technology`
    },
    {
        id: 'reinforcements',
        title: 'Reinforcements',
        content: `### Rules Reference

A player's reinforcements is that player's personal supply of units and command tokens that are not on the game board or otherwise in use.

• The components in a player's reinforcements are limited.

### Notes

• If a player wishes to place a unit, but there are none of that type left in their reinforcements, they may remove a unit of that type from any system that does not contain one of their command tokens and place that instead.
    
• Command tokens on a player's command sheet are not in that player's reinforcements.
    
• Captured units are not in any player's reinforcements.

### Related Topics

• Command Tokens
    
• Component Limitations
    
• Deploy
    
• Units`
    },
    {
        id: 'relics',
        title: 'Relics',
        content: `### Rules Reference

Relics are powerful artifacts with unique abilities.

• Players can use the abilities of hazardous, cultural, and industrial relic fragments in their play area to draw cards from the relic deck.

• Relic fragments can be found when exploring planets and frontier tokens, and can be exchanged with other players as part of transactions.

• When a player is instructed to gain a relic, they draw the top card of the relic deck and place it faceup in their play area.

• If there are no cards in the relic deck, they do not gain a relic.

• A player can use the abilities of relics that are in their play area.
    
• Relics cannot be traded.

### Notes

• If the relic deck is empty, a player may still purge three relic fragments as an action.
    
• If an eliminated player had any relic fragments, they are discarded to their respective exploration discard piles. If an eliminated player had any relics, they are purged.
    
• For notes about specific relics, see the relic notes page.

### Related Topics

• Abilities
    
• Component Action
    
• Exhausted
    
• Exploration
    
• Purge
    
• Readied`
    },
    {
        id: 'rerolls',
        title: 'Rerolls',
        content: `### Rules Reference

Some game effects instruct a player to reroll dice.

• When a die is rerolled, its new result is used instead of its previous result.
    
• The same ability cannot be used to reroll the same die multiple times, but multiple abilities can be used to reroll a single die.
    
• Die rerolls must occur after rolling the dice, before other abilities are resolved.

### Notes

• Effects that reroll "combat rolls" do not reroll anti-fighter barrage, bombardment or space cannon rolls.

### Related Topics

• Abilities
    
• Anti-Fighter Barrage
    
• Bombardment
    
• Combat
    
• Space Cannon`
    },
    {
        id: 'resources',
        title: 'Resources',
        content: `### Rules Reference

Resources represent a planet's material value and industry. Many game effects, such as producing units, require players to spend resources.

• A planet's resources are the leftmost value that is surrounded by a yellow border on the planet's system tile and planet card.
    
• A player spends a planet's resources by exhausting its card.
    
• A player can spend a trade good as if it were one resource.

### Notes

### Related Topics

• Cost
    
• Exhausted
    
• Planets
    
• Producing Units
    
• Production
    
• Trade Goods`
    },
    {
        id: 'ships',
        title: 'Ships',
        content: `### Rules Reference

A ship is a unit type consisting of carriers, cruisers, dreadnoughts, destroyers, fighters, and war suns. Each race also has a unique flagship.

• Ships are always placed in space.
    
• A player can have a number of ships in a system equal to or less than the number of command tokens in that player's fleet pool.

• Fighters do not count toward the fleet pool limit, and instead count against a player's capacity.

• Ships can have any number of the following attributes: cost, combat, move, and capacity. These attributes are shown on faction sheets and unit upgrade technology cards.

### Notes

• A Fighter II may count towards either the fleet pool limit or a player's capacity.

### Related Topics

• Capacity
    
• Combat
    
• Cost
    
• Fleet Pool
    
• Move
    
• Movement
    
• Space Combat
    
• Units`
    },
    {
        id: 'space_cannon',
        title: 'Space Cannon (Unit Ability)',
        content: `### Rules Reference

A unit that has the Space Cannon ability can use it during two different steps of a player's tactical action: after the Move Ships substep (Space Cannon Offense) and during an invasion (Space Cannon Defense).

• A player is not required to be the active player to use their Space Cannon ability of their units.
    
#### 
• Space Cannon Offense

During a tactical action, after the Move Ships substep of the Movement step, beginning with the active player and proceeding clockwise, each player may use the Space Cannon ability of each of their units in the active system by performing the following steps:

• Step 1 - Roll  Dice: The player rolls dice for each of their units in the active system that has the Space Cannon ability; this is a space cannon roll. One hit is produced for each result that is equal to or greater than the unit's Space Cannon value.

• A unit's Space Cannon ability is presented along with a unit's attributes on faction sheets and unit upgrade technology cards.
        
• Space Cannon is displayed as "Space Cannon X (&times;Y)." The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all Space Cannon abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.
        
• If a player has a PDS unit upgrade technology, they can use the Space Cannon ability of their PDS units that are in systems that are adjacent to the active system. The hits are still assigned to units in the active system.
        
• Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.

• This ability can be used even if no ships were moved during the Move Ships step.
    
• Step 2 - Assign  Hits: The player whose units have been targeted by Space Cannon must choose and destroy one of their ships in the active system for each hit result produced against their units.

• Players other than the active player must target the active player's units.
        
• If the active player is using the Space Cannon ability of their units, they choose a player who has ships in the active system. That player must choose and destroy one of their ships in the active system for each hit the space cannon roll produced.

#### 
• Space Cannon Defense

During the invasion step of a tactical action, after ground forces have been committed to land on planets, players other than the active player can resolve the Space Cannon ability of their units on those planets by performing the following steps:

• Step 1 - Roll Dice: Each player may use the Space Cannon ability of each of their units on the invaded planet by rolling a specific number of dice for each of those units; this is called a space cannon roll. A hit is produced for each die roll that is equal to or greater than the unit's Space Cannon value.

• If a unit has a Space Cannon ability, it is present on its faction sheet and technology cards.
        
• Space Cannon is displayed as "Space Cannon X (&times;Y)." The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all Space Cannon abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.
        
• Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.
        
• Game effects that allow the use of Space Cannon abilities against ships in adjacent systems have no effect during Space Cannon Defense.

• Step 2 - Assign Hits: The active player must choose and destroy one of their ground forces on the planet for each hit the space cannon roll produced.

• Hits can only be assigned to units that are on the same planet as the units using the Space Cannon ability.

### Notes

• "Deep Space Cannon" is not a term with meaning within the rules. It is, however, used within the notes on this website as a shorthand for Space Cannon abilities that can be used against ships in an adjacent system.
    
• The Space Cannon Offense step happens before combat. Any secret objectives that require winning a combat or similar cannot be scored if all of one player's ships in a system are destroyed during this step.
    
• If a player chooses to use the Space Cannon ability of their units, they must do so for all of their eligible units with the Space Cannon ability. This includes units in adjacent systems, if applicable.

• A player that chooses to use the Space Cannon ability of their units may choose whether or not they use the ability of the Plasma Scoring technology, if they own it, and any similar abilities, independent of one another.

• A player may use the Sustain Damage ability of a ship in the active system to cancel a hit produced during the Space Cannon Offense step.
    
• A player may use the Sustain Damage ability of a mech committed to a planet to cancel a hit produced during the Space Cannon Defense step by a unit on that planet.
    
• If multiple players are resolving the Space Cannon ability of their units against the active player, the active player must resolve capacity limits after assigning one player's hits and before the next player makes their space cannon roll. 
    
• A player cannot assign hits produced by a space cannon roll to their own units.
    
• The "0" side of the d10 represents a result of 10.

### Related Topics

• Abilities
    
• Active Player
    
• Active System
    
• Adjacency
    
• Destroyed
    
• Invasion
    
• Movement
    
• PDS
    
• Sustain Damage`
    },
    {
        id: 'space_combat',
        title: 'Space Combat',
        content: `### Rules Reference

After resolving the Space Cannon Offense step of a tactical action, if two players have ships in the active system, those players must resolve a space combat.

• If the active player is the only player with ships in the system, they skip the Space Combat step of the tactical action and proceeds to the Invasion step.
    
• If an ability occurs "before combat", it occurs immediately before the Anti-Fighter Barrage step.

• During the first round of a combat, "start of combat" and "start of combat round" effects occur during the same timing window.
        
• During the last round of a combat, "end of combat" and "end of combat round" effects occur during the same timing window.

To resolve a space combat, players perform the following steps:

• Step 1 - Anti-Fighter Barrage: If this is the first round of a space combat, the players may simultaneously use the Anti-Fighter Barrage ability of any of their units in the active system.

• If one or both players no longer have ships in the active system after resolving this step, the space combat ends immediately.
        
• Players cannot resolve Anti-Fighter Barrage abilities during any rounds of space combat other than the first round.
        
• This step still occurs if no fighters are present.

• Step 2 - Announce Retreats: Each player may announce a retreat, beginning with the defender.

• A retreat will not occur immediately; the units retreat during the Retreat step.
        
• If the defender announces a retreat, the attacker cannot announce a retreat during that combat round.
        
• A player cannot announce a retreat if there is not at least one eligible system to retreat to.

• Step 3 - Roll Dice: Each player rolls one die for each ship they have in the active system; this is called a combat roll. If a unit's combat roll produces a result that is equal to or greater than that unit's combat value, that result produces a hit.

• If a unit's combat value contains two or more burst icons, the player rolls one die for each burst icon instead.
        
• If a player has ships that have different combat values in the active system, that player rolls these dice separately.
        
• First, that player should roll all dice for units with a combat value of "1". Then, that player should roll all dice for units with combat value of "2", and then "3", continuing in numerical order until that player has rolled dice for each of their ships.
        
• The player counts each hit their combat rolls produce. The total number of hits produced will destroy units during the Assign Hits step.
        
• If a player has an ability that rerolls a die or affects a die after it is rolled, that player must resolve such an ability immediately after rolling all of their dice.
        
• The attacker makes all of their combat rolls during this step before the defender. This procedure is important for abilities that allow a player to reroll an opponent's die.

• Step 4 - Assign Hits: Each player in the combat must choose and destroy one of their own ships in the active system for each hit their opponent produced.

• Before assigning hits, players may use their units' Sustain Damage abilities to cancel hits.
        
• When a unit is destroyed, the player who controls that unit removes it from the board and places it in their reinforcements.

• Step 5 - Retreat: If a player announced a retreat during step 2, and there is still an eligible system for their units to retreat to, they must retreat.

• If a player announced a retreat during the Announce Retreats step, but their opponent has no ships remaining in the system, the combat immediately ends and the retreat does not occur.
        
• To retreat, a player takes all of their ships with a move value in the combat and moves them to a single system that is adjacent to the active system. That player's fighters and ground forces in the space area of the active system that are unable to move or be transported are removed.
        
• The system that a player's units retreat to must contain one or more of that player's units, a planet they control, or both. Additionally, the system cannot contain ships controlled by another player.
        
• If any of a player's units successfully retreat and are moved into an adjacent system, that player must place a command token from their reinforcements in the system to which their units retreated. If that system already contains one of their command tokens, that player does not place an additional token there. If the player has no command tokens in their reinforcements, that player must use one from their command sheet instead.

• After the Retreat step, if both players still have ships in the active system, those players resolve another round of space combat beginning with the Announce Retreats step.
    
• Space combat ends when only one player - or neither player - has a ship in the space area of the active system.

• During the last round of a combat, "end of combat" and "end of combat round" effects occur during the same timing window.

• After a combat ends, the player with one or more ships remaining in the system is the winner of the combat; the other player is the loser of the combat. If neither player has a ship remaining, the combat ends in a draw and there is no winner.

• If the winner of the combat has fighters or ground forces in the space area of the active system and those units exceed the capacity of that player's ships in that system, that player must choose and remove any excess units.

### Notes

• A player's fighters and ground forces do not count against capacity during combat. At the end of combat, any excess units are removed and returned to that player's reinforcements.
    
• A player may retreat into an asteroid field only if that player owns the Antimass Deflectors technology.
    
• A player may retreat into a supernova only if that player owns the Magmus Reactor Muaat factional technology.
    
• A player cannot retreat into a nebula.

• The Empyrean player may retreat into a nebula.
        
• The Shared Research law will not allow a player to retreat into a nebula.

• A player may attempt to retreat from a combat in a gravity rift, but will still be affected by it. See the gravity rift page for more details.
    
• If a player only has fighters I in the combat when they retreat, those will be removed from the board, and they will not place a command token in an adjacent system.
    
• The Nav Suite action card will not allow a player to ignore an anomaly while retreating.
    
• The Dark Energy Tap technology allows a player to retreat into a system that does not contain their ships or a planet they control.
    
• Modifying the move value of a ship will have no effect when retreating. Retreats are limited to adjacent systems.
    
• While retreating, a player cannot transport more fighters and/or ground forces than they have capacity in the retreating ships.
    
• Capacity is checked after the winner of a space combat is determined. As such, it is possible to win a space combat with only fighters remaining, before removing those fighters due to lack of capacity.
    
• The "0" side of the d10 represents a result of 10.

### Related Topics

• Anti-Fighter Barrage
    
• Attacker
    
• Capacity
    
• Defender
    
• Destroyed
    
• Fleet Pool
    
• Opponent
    
• Sustain Damage
    
• Tactical Action`
    },
    {
        id: 'space_dock',
        title: 'Space Dock',
        content: `### Rules Reference

A space dock is a structure that allows players to produce units.

• Each space dock has a Production ability that indicates the number of units it can produce.
    
• The primary way in which players acquire space docks is by resolving either the primary or secondary abilities of the Construction strategy card.
    
• Space docks are placed on planets. Each planet can have a maximum of one space dock.
    
• If a player's space dock is ever on a planet that does not contain any of their ground forces and contains a unit that belongs to another player, that space dock is destroyed.

• The Clan of Saar's Floating Factory faction-specific space dock is destroyed when it is blockaded; that is to say, when it is in a system with another player's ships and none of the Clan of Saar's ships.

### Notes

• A Space Dock is both a structure and a unit.
	
• Fighters transported during movement remain assigned to the transporting ship until movement is complete. They cannot be counted towards a space dock's allocation until after movement is complete.

• If a player moves one of their units with capacity into a system, transporting fighters, they cannot pick up ground forces from a planet in that system with that ship by transferring those fighters to a space dock in that system to free up capacity.

### Related Topics

• Blockaded
    
• Construction
    
• Producing Units
    
• Production
    
• Structures
    
• Warfare`
    },
    {
        id: 'speaker',
        title: 'Speaker',
        content: `### Rules Reference

The speaker is the player who has the speaker token.

• During the strategy phase, the speaker is the first player to choose a strategy card.
    
• During the agenda phase, the speaker reveals the top agenda card from the agenda deck before each vote. The speaker is always the last player to vote and decides which outcome to resolve if the outcomes are tied.
    
• During setup, the speaker prepares the objectives.
    
• During the status phase, the speaker reveals a public objective.
    
• A random player gains the speaker token during setup before the game begins.
    
• During the action phase, if a player resolves the primary ability on the Politics strategy card, that player chooses any player other than the current speaker to gain the speaker token.
    
• If the speaker is eliminated from the game, the speaker token is passed to the player to the speaker's left.

### Notes

• During the strategy and agenda phases, the speaker will have the first opportunity to resolve abilities during each timing window.

### Related Topics

• Abilities
    
• Agenda Card
    
• Agenda Phase
    
• Objective Cards
    
• Politics
    
• Strategy Phase`
    },
    {
        id: 'status_phase',
        title: 'Status Phase',
        content: `### Rules Reference

During the status phase, players score objectives and prepare for the next game round. To resolve the status phase, players perform the following steps:

• Step 1 - Score Objectives: Following initiative order, each player may score up to one public objective and one secret objective that can be fulfilled during the status phase. To score an objective, a player must fulfill the requirements on the card; if that player does, they gain a number of victory points indicated on the card.
    
• Step 2 - Reveal Public Objective: The speaker reveals an unrevealed public objective card by flipping that card faceup.

• The speaker cannot reveal "Stage II" objectives until all "Stage I" objectives are revealed.
        
• The game ends if there are no unrevealed public objectives at the start of this step.

• Step 3 - Draw Action Cards: Following initiative order, each player draws one action card.
    
• Step 4 - Remove Command Tokens: Each player removes all of their command tokens from the game board. Each player returns each removed token to their reinforcements.
    
• Step 5 - Gain and Redistribute Command Tokens: Each player gains two command tokens. A player takes each gained token from their reinforcements. Then, each player can redistribute each command token on their command sheet, including the two they just gained, among their strategy, tactic, and fleet pools.

• Players should remember to check the number of their ships in each system after reducing the size of their fleet pools.
        
• This step can usually be resolved simultaneously, but if there is a timing conflict, it is resolved in initiative order.

• Step 6 - Ready Cards: Each player readies all of their exhausted cards, including strategy cards.
    
• Step 7 - Repair Units: Each player repairs all of their damaged units by turning those units upright.
    
• Step 8 - Return Strategy Cards: Each player returns their strategy card to the common play area. Then, if a player has removed the custodians token from Mecatol Rex, the game round continues to the agenda phase. Otherwise, a new game round begins with the strategy phase.

### Notes

• A player cannot score public objectives if that player does not control each planet in their home system.
    
• If there are few cards remaining in the action card deck, they will be dealt out first to the players lowest in initiative order. After those players have discarded down to their seven card hand limit, if necessary, the discard pile will be shuffled to form a new deck. The remaining players (including the player who received the last action card from the previous deck, if applicable) will then be dealt their action cards.
    
• All damaged units will be repaired, even if a game effect has caused those units to no longer have the Sustain Damage ability. 

### Related Topics

• Action Cards
    
• Agenda Phase
    
• Custodians Token
    
• Command Tokens
    
• Game Round
    
• Initiative Order
    
• Objective Cards
    
• Readied
    
• Strategy Card
    
• Sustain Damage
    
• Victory Points`
    },
    {
        id: 'strategic_action',
        title: 'Strategic Action',
        content: `### Rules Reference

During the action phase, the active player may perform a strategic action to resolve the primary ability on their strategy card.

• After the active player resolves the primary ability on their strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may resolve that strategy card's secondary ability.

• Players do not have to resolve the secondary abilities of the active player's strategy card.

• After each player has had an opportunity to resolve a strategy card's secondary ability, the active player exhausts their strategy card so that it is facedown - this indicates that they cannot use this card again this round and is a reminder that they can now pass during one of their later turns.

• During three- and four-player games, a player must resolve the strategic action on each of their chosen strategy cards before they can pass.

• When a player is resolving either the primary or secondary abilities from a strategy card, that player resolves each of the ability's effects from top to bottom.

### Notes

### Related Topics

• Action Phase
    
• Strategy Card`
    },
    {
        id: 'strategy_card',
        title: 'Strategy Card',
        content: `### Rules Reference

Strategy cards determine initiative order and provide each player with a powerful ability that they can use one time during the action phase.

• During the strategy phase, each player chooses a strategy card from the common play area and places it in their play area faceup.
    
• Each strategy card has a readied and an exhausted side.

• The readied side contains the strategy card's name, initiative number, and abilities.
        
• The exhausted side contains the strategy card's initiative number.

• A player can only resolve the primary ability of their own strategy cards.
    
• A player can only resolve the secondary ability of strategy cards that were chosen by other players.
    
• There are eight strategy cards, each of which has a name and an initiative number.
    
• The initiative number on a player's strategy card determines the initiative order for the action phase and status phase.
    
• A strategy card has both a primary ability and a secondary ability. These abilities are resolved during a strategic action.
    
• Each strategy card exists in either the common play area or a player's play area.

• Strategy cards in the common play area are available for players to choose during the strategy phase.
        
• A strategy card in a player's play area belongs to that player until it is returned to the common play area during the status phase.

### Notes

• During three- and four-player games, each player will choose two strategy cards during the strategy phase.

• Players will use the lower of the two initiative numbers on their strategy cards to determine the initiative order.

### Related Topics

• Construction
    
• Diplomacy
    
• Imperial
    
• Initiative Order
    
• Leadership
    
• Politics
    
• Strategic Action
    
• Strategy Phase
    
• Technology (S.C.)
    
• Trade
    
• Warfare`
    },
    {
        id: 'strategy_phase',
        title: 'Strategy Phase',
        content: `### Rules Reference

During the strategy phase, each player chooses a strategy card to use during the round.

To resolve the strategy phase, players perform the following steps:

• Step 1: Starting with the speaker and proceeding clockwise, each player chooses one strategy card from the common play area and places it faceup in their play area.

• If there are one or more trade good tokens on a strategy card when a player chooses it, that player gains those trade goods.
        
• A player cannot choose a strategy card that another player has already chosen during the current strategy phase.
        
• When playing with three or four players, each player will choose a second strategy card. After the last player has received their first strategy card, each player chooses a second strategy card, starting with the speaker and proceeding clockwise.

• Step 2: The speaker places one trade good token from the supply on each strategy card that was not chosen.

• During a four- or eight-player game, all strategy cards will be chosen, and therefore no trade good tokens will be placed on strategy cards.

Then, players proceed to the action phase.

### Notes

• If a player chooses a strategy card, but later loses it, they will keep any trade goods that were on the strategy card.

### Related Topics

• Action Phase
    
• Game Round
    
• Speaker
    
• Strategy Card
    
• Trade Goods`
    },
    {
        id: 'structures',
        title: 'Structures',
        content: `### Rules Reference

A structure is a type of unit. PDS units and space docks are structures.

• Structures are always placed on planets.

• The Clan of Saar's "Floating Factory" faction-specific space dock is placed in a system's space area.

• Structures are primarily placed on planets using the Construction strategy card.
    
• Structures cannot move or be transported.
    
• A player can have a maximum of one space dock on each planet.
    
• A player can have a maximum of two PDS units on each planet.
    
• A player cannot place a structure on a planet if it would exceed the maximum number of allowed structures of that type on that planet.

### Notes

### Related Topics

• Construction
    
• Space Dock
    
• PDS
    
• Units`
    },
    {
        id: 'supernova',
        title: 'Supernova',
        content: `### Rules Reference

A supernova is an anomaly that affects movement.

• A ship cannot move through or into a supernova.

### Notes

• If a ship finds itself in a supernova by some uncommon game effect, it may remain there and move out without harm.
    
• A future rule change will place the ship movement restrictions of anomalies upon all units.

### Related Topics

• Anomalies
    
• Movement`
    },
    {
        id: 'sustain_damage',
        title: 'Sustain Damage',
        content: `### Rules Reference

Some units have the Sustain Damage ability. Immediately before a player assigns hits to their units, that player can use the Sustain Damage ability of any of their units in the active system.

• For each Sustain Damage ability that a player uses, one hit produced by another player's units is canceled. Then, each unit using this ability is placed on its side to indicate that it is damaged.
    
• A damaged unit does not have reduced capabilities and is functionally the same as an undamaged unit, except that it cannot use the Sustain Damage ability.
    
• A damaged unit cannot use the Sustain Damage ability until it is repaired during the status phase or by another game effect.
    
• A unit can use its Sustain Damage ability any time a hit is produced against it. This includes hits produced during combat and from unit abilities such as the Space Cannon ability.

• A unit can only use the Sustain Damage ability if it is eligible to be hit. For example, a player cannot use a dreadnought's Sustain Damage ability to cancel a hit from Anti-Fighter Barrage.

• The Sustain Damage ability cannot be used to cancel an effect that directly destroys a unit.
    
• The Barony of Letnev's Non-Euclidean Shielding faction technology allows the Letnev player's units with the Sustain Damage ability to cancel up to two hits instead of one.

### Notes

### Related Topics

• Abilities
    
• Anti-Fighter Barrage
    
• Bombardment
    
• Destroyed
    
• Ground Combat
    
• Space Combat
    
• Status Phase`
    },
    {
        id: 'system_tiles',
        title: 'System Tiles',
        content: `### Rules Reference

A system tile represents an area of the galaxy. Players place system tiles during setup to create the game board.

• The back of each system tile is colored green, blue, or red.
    
• System tiles with a green-colored back are home systems and faction-specific tiles. Each home system is unique to one of the game's factions.
    
• System tiles with a blue-colored back each contain one or more planets.
    
• System tiles with a red-colored back are anomalies or are systems that do not contain planets.
    
• Planets are located in systems. Ground forces and structures are usually placed on planets.
    
• Any area on a system tile that is not a planet is space. Ships are usually placed in the space area.
    
• Double-sided tiles that have lines crossing from one edge to another are hyperlane tiles. Hyperlane tiles are not systems.

### Notes

### Related Topics

• Active System
    
• Adjacency
    
• Anomalies
    
• Game Board
    
• Hyperlanes
    
• Planets
    
• Wormholes`
    },
    {
        id: 'tactical_action',
        title: 'Tactical Action',
        content: `### Rules Reference

The tactical action is the primary method by which players produce units, move ships, and extend their dominion within the galaxy. To perform a tactical action, the active player performs the following steps:

• Step 1 - Activation: The active player must activate a system that does not contain one of their command tokens.

• To activate a system, the active player places a command token from their tactic pool in that system. That system is the active system.
        
• Other players' command tokens do not prevent a player from activating a system.

• Step 2 - Movement: The active player may move any number of ships that have a sufficient move value from any number of systems that do not contain one of their command tokens into the active system, following the rules for movement.

• Ships that have capacity values can transport ground forces and fighters when moving.
        
• The player may choose to not move any ships.
        
• After the Move Ships step, all players can use the Space Cannon abilities of their units in the active system.

• Step 3 - Space Combat: If two players have ships in the active system, those players must resolve a space combat.

• If the active player is the only player with ships in the system, they skip this step.

• Step 4 - Invasion: The active player may use their Bombardment abilities, commit units to land on planets, and resolve ground combat against other players' units.
    
• Step 5 - Production: The active player may resolve each of their unit's Production abilities in the active system.

• The active player may do this even if they did not move units or land ground forces during this tactical action.

### Notes

• Each of these five steps happen during every tactical action, unless explicitly skipped; the active player does not have to choose between fighting a combat or producing units, for example.
    
• Any abilities that occur at the end of an action happen before any abilities that occur at the end of a player's turn.

### Related Topics

• Action Phase
    
• Active System
    
• Command Sheet
    
• Command Tokens
    
• Invasion
    
• Movement
    
• Producing Units
    
• Production
    
• Space Combat`
    },
    {
        id: 'technology',
        title: 'Technology',
        content: `### Rules Reference

Technology cards allow players to upgrade units and acquire powerful abilities.

• Each player places any technology they have gained faceup near their faction sheet. For the duration of the game, they own any technology cards they gain and can use the abilities on those cards.
    
• A player does not own any technology card that is in their technology deck.
    
• A player can gain a technology card from their technology deck by researching technology.

• Both the primary and secondary abilities of the Technology strategy card allow a player to research a technology.

• Any technology card that a player has not gained remains in their technology deck. A player can look through their technology deck at any time.
    
• If an ability instructs a player to gain a technology, they do not research it; they take it from their technology deck and place it in their play area, ignoring prerequisites.
    
• Some technologies are unit upgrades. Unit upgrades share a name with a unit that is printed on a player's faction sheet.

• Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.

• Each technology that is not a unit upgrade has a colored symbol displayed in the lower-right corner of the card and on its card back that indicates that technology's color.

• A technology's color has no inherent game effect; however, each technology a player owns can satisfy a prerequisite of a matching color when researching other technology.
        
• Unit upgrades do not have a color and do not satisfy prerequisites.
        
• There are four colors of technologies. See your rulebook for images.

• Most technology cards have a column of colored symbols displayed in the lower-left corner of the card. Each symbol in this column is a prerequisite.

• A technology card's prerequisites indicate the number and color of technologies a player must own to research that technology card.

#### 
• Researching Technology

A player can research technology by resolving either the primary or secondary ability of the Technology strategy card during the action phase. Other game effects may also instruct a player to research technology.

• To research technology, a player gains that technology card from their technology deck and places it in their play area near their faction sheet.

• Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.

• A player cannot research a faction technology that does not match their faction.
    
• When researching technology, a player must satisfy each of a technology's prerequisites to research it. To satisfy a technology's prerequisites, that player must own one technology of the matching color for each prerequisite symbol on the technology card they wish to research.

• Prerequisites symbols are displayed as symbols on the lower-left corner of the card.
        
• Unit upgrade technologies do not have a color and do not satisfy prerequisites.
        
• Players may use certain abilities or technology specialties to ignore some prerequisites.

#### 
• Technology Specialties

A technology specialty is a technology symbol found on some planets.

• When researching technology, a player can exhaust a planet they control that has a technology specialty to ignore one prerequisite symbol of the matching type on the technology card they are researching.
    
• If the planet card is already exhausted, it cannot be used to ignore a prerequisite.
    
#### 
• Valefar Assimilator

The Nekro Virus faction can use its faction abilities in combination with its two Valefar Assimilator faction technologies to gain faction technologies that have been researched by other players, including unit upgrades.

• Basic units printed on faction sheets are not technologies and are not eligible targets for Valefar Assimilator.
    
• If a player becomes eliminated while one of their technologies has a Valefar Assimilator token on it, the Nekro Virus player places that technology in their play area; it is not removed from the game.
    
• If a Valefar Assimilator token is removed from the Saar Floating Factory unit upgrade, each of the Nekro Virus' space docks must be placed on an eligible planet they control in that space dock's system, or the space dock is returned to their reinforcements.
    
• If a Valefar Assimilator token is removed from a war sun unit upgrade and the Nekro Virus player does not have the standard war sun unit upgrade, each of the Nekro Virus player's war suns are returned to their reinforcements.
    
• The Nekro Virus player may upgrade their units with units of the same type (e.g., "dreadnought" or "infantry") even if those unit's names do not match. If the Nekro Virus gains a unit upgrade technology of the same unit type as a unit upgrade technology they already have, the previous upgrade is removed, and they must use the same Valefar Assimilator token that was used to copy the previous upgrade.
    
• When a Valefar Assimilator token is on a technology, that technology's color and type count toward objectives.

### Notes

• If a player is instructed to research a technology by any game effect, that player must meet the prerequisites for the technology they research.
    
• If a player is instructed to gain a technology, that player does not have to meet the prerequisites, although most game effects that do this will specify what technologies may be gained by that effect.
    
• If a player is playing a faction with a faction-specific unit upgrade, they cannot research the generic upgrade for that unit type.
    
• For notes about specific generic technologies, see the technology notes page.
    
• For notes about specific generic unit upgrades, see the unit notes page.
    
• For notes about a technologies of a specific faction, see that faction's notes page.

### Related Topics

• Abilities
    
• Component Action
    
• Exhausted
    
• Readied
    
• Technology (S.C.)
    
• Unit Upgrades`
    },
    {
        id: 'technology_sc',
        title: 'Technology (Strategy Card)',
        content: `### Rules Reference

The Technology strategy card allows players to research new technology. This card's initiative value is "7".

• During the action phase, if the active player has the Technology strategy card, they can perform a strategic action to resolve that card's primary ability.
    
• To resolve the primary ability on the Technology strategy card, the active player can research one technology of their choice. Then, they may research one additional technology of their choice by spending six resources.
    
• After the active player resolves the primary ability of the Technology strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may research one technology of their choice by spending one command token from their strategy pool and four resources.

### Notes

### Related Topics

• Command Tokens
    
• Initiative Order
    
• Resources
    
• Strategic Action
    
• Strategy Card
    
• Technology`
    },
    {
        id: 'trade',
        title: 'Trade (Strategy Card)',
        content: `### Rules Reference

The Trade strategy card allows players to gain trade goods and replenish commodities. This card's initiative value is "5".

• During the action phase, if the active player has the Trade strategy card, they can perform a strategic action to resolve that card's primary ability. To resolve the primary ability on the Trade strategy card, the active player resolves the following effects in order:
    
• Step 1: The active player gains 3 trade goods.
    
• Step 2: The active player replenishes their commodities by taking the number of commodity tokens necessary to have an amount equal to the commodity value on their faction sheet. Then, they place those tokens in the commodity area of their faction sheet.

• A player cannot have more commodities than the commodity value printed on their faction sheet.

• Step 3: The active player chooses any number of other players. Those players use the secondary ability of this card without spending a command token.

• The chosen players must resolve the secondary ability of this card without spending a command token after the active player finishes resolving the primary ability.
        
• The chosen players can only use the secondary ability once, and they cannot use it by spending command tokens.

• After the active player resolves the primary ability of the Trade strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to replenish their commodities.

### Notes

• Say, for example, Alice is the active player, and is performing a strategic action with the Trade strategy card. To her left is Bob. To his left is Cheng, then Diego, then Esther, then Fahd. The full order of steps is:

• Alice gains three trade goods.
        
• Alice replenishes her commodities.
        
• Alice chooses players for the secondary.
        
• Bob may/must replenish his commodities by performing the secondary ability.
        
• Cheng may/must replenish her commodities by performing the secondary ability.
        
• Diego may/must replenish his commodities by performing the secondary ability.
        
• Esther may/must replenish her commodities by performing the secondary ability.
        
• Fahd may/must replenish his commodities by performing the secondary ability.

A deal made during a given step is non-binding if any part of it is to resolve during a later step. As such, if Alice makes a deal to chose a player with the primary ability in exchange for commodities from that player after they perform the secondary, then such a deal will be non-binding.

• If a player has their maximum number of commodities, and is instructed to replenish their commodities, they will take no commodities. However, they will still trigger any "when [this] player replenishes commodities" effects, most notably the Trade Agreement promissory note.

### Related Topics

• Command Tokens
    
• Commodities
    
• Initiative Order
    
• Strategic Action
    
• Strategy Card
    
• Trade Goods`
    },
    {
        id: 'trade_goods',
        title: 'Trade Goods',
        content: `### Rules Reference

A trade good represents a player's buying and trading power beyond their planet's raw resources.

• Trade goods and commodities are represented by opposite sides of the same token.
    
• When a player gains a trade good, they take a trade good token from the supply and place it on the trade good area on their command sheet, making sure the trade good side is faceup.
    
• A player can spend trade goods at any time during the game.
    
• A player can spend a trade good in one of the following ways:

• In place of spending one resource.
        
• In place of spending one influence. However, trade goods cannot be spent to cast votes during the agenda phase.
        
• To resolve an effect that specifically requires that a trade good be spent.

• A player can exchange their trade goods with other players during a transaction.
    
• When a player receives a commodity token from another player, the player who received that token places it in their trade good area with the trade good side of the token faceup.

• That token is no longer a commodity token; it is a trade good token.

• Trade good tokens come in values of one and three. A player can swap between these tokens as necessary.

### Notes

### Related Topics

• Command Sheet
    
• Commodities
    
• Deals
    
• Influence
    
• Resources
    
• Trade
    
• Transactions`
    },
    {
        id: 'transactions',
        title: 'Transactions',
        content: `### Rules Reference

A transaction is a way for a player to exchange commodities, trade goods, promissory notes, and relic fragments.

• During the active player's turn, they may resolve up to one transaction with each of their neighbors.

• A player can resolve a transaction at any time during their turn, even during a combat.

• To resolve a transaction, a player gives any number of trade goods and commodities and up to one promissory note to a neighbor in exchange for any number of trade goods, commodities, and relic fragments, and up to one promissory note.
    
• Players can exchange commodities, trade goods, promissory notes, and relic fragments, but cannot exchange other types of cards or tokens.

• The Emirates of Hacan can also exchange action cards with other players as part of their transactions.

• A transaction does not have to be even. A player may exchange components of unequal value or give components without receiving something in return.

• The players agree on the terms of the transaction before exchanging any components. After the components are traded, the transaction cannot be undone.

• Players can resolve a transaction as part of a deal.
    
• While resolving each agenda during the agenda phase, a player may perform one transaction with each other player.

• Players do not need to be neighbors to perform these transactions.

### Notes

• Relic fragments may be traded. Relics themselves cannot be.
    
• Captured units may be returned to the player that originally owned them as part of a transaction.
    
• If a player becomes neighbors with another player on their turn, they may then perform a transaction with that player.

• If a player stops being neighbors with another player that they have performed a transaction with this turn, but then become neighbors with that player again later that same turn, they cannot perform a second transaction with that player.
        
• A player may perform a transaction during combat with their opponent, even if they are neighbors only in the active system.

• If a player may perform multiple actions on their turn, they may still only resolve one transaction with each of their neighbors.
    
• If an agenda is discarded and replaced with another, players who resolved a transaction during the discarded agenda may resolve another transaction during the replacement agenda.

### Related Topics

• Active Player
    
• Agenda Phase
    
• Capture
    
• Commodities
    
• Exploration
    
• Deals
    
• Neighbors
    
• Promissory Notes
    
• Trade Goods`
    },
    {
        id: 'transport',
        title: 'Transport',
        content: `### Rules Reference

When a ship moves, it may transport any combination of fighters and ground forces, but the number of units it transports cannot exceed that ship's capacity value.

• The ship can pick up and transport fighters and ground forces when it moves. During a tactical action, it can pick up and transport units from the active system, the system it started its movement in, and each system it moves through.

• These transported units remain with the transporting ship until it is finished moving.
        
• Units being transported by a ship that is removed from the board by a gravity rift are also removed from the board.

• Any fighters and ground forces that a ship transports must move with the ship and remain in the space area of a system.
    
• Fighters and ground forces cannot be picked up from a system that contains one of their faction's command tokens other than the active system.
    
• A player can land ground forces on a planet in a system during the Invasion step of a tactical action.

### Notes

• A ship that can both move and be transported (i.e. Fighter II) cannot do both by "meeting" a ship with capacity partway through a tactical action movement, as all movement is simultaneous.
    
• A ship may transport as it retreats or is otherwise moved out of the active system, as the units it transports will be picked up from the active system.
    
• A ship may pick up ground forces from a planet in the active system, usually to invade a different planet in the same system.
    
• A ship cannot pick up more units from a planet than it has capacity. However, a ship may pick up any units (including none) in a system as it transports, even if doing so would cause units to be removed due to capacity limits.

• For example, say a carrier (with capacity 4) is in the space area of a system along with four fighters. On the only planet in that system are eight infantry. There are no other units in the system. When the carrier moves out of the system, it obeys the following:
        
• The carrier may transport the four fighters, leaving behind all eight of the infantry in the system.
        
• The carrier may transport four of the eight infantry, leaving behind the four remaining infantry in the system. Now that the system has zero capacity, all four of the fighters will be removed.
        
• The carrier may transport two of the eight infantry and two of the four fighters, leaving behind the six remaining infantry in the system. Now that the system has zero capacity, the two remaining fighters will be removed.
        
• The carrier may transport nothing, leaving behind all eight of the infantry in the system. Now that the system has zero capacity, all four of the fighters will be removed.
        
• The carrier cannot attempt to pick up all eight infantry, even if it immediately removes four of them (and the fighters).

• A future rule change will allow a player's ships to transport units from systems that contain that player's command token when those ships move outside of a tactical action.

### Related Topics

• Capacity
    
• Ground Forces
    
• Movement`
    },
    {
        id: 'unit_upgrades',
        title: 'Unit Upgrades',
        content: `### Rules Reference

A unit upgrade is a type of technology card.

• Unit upgrades share a name with a unit that is printed on a player's faction sheet, but have a higher roman numeral. For example, a player's "Carrier I" unit is upgraded by the unit upgrade technology "Carrier II".

• The Nekro Virus player may upgrade their units with units of the same type (e.g., "dreadnought" or "infantry") even if those unit's names do not match. If the Nekro Virus gains a unit upgrade technology of the same unit type as a unit upgrade technology they already have, the previous upgrade is removed, and they must use the same Valefar Assimilator token that was used to copy the previous upgrade.

• Players place unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.
    
• The white arrows next to an attribute on a faction sheet indicate that the attribute will improve when the unit is upgraded.
    
• After a player gains a unit upgrade card, each of that player's units that correspond to that upgrade card is treated as having the attributes and abilities printed on that upgrade card. Any previous attributes of that unit, such as the one printed on that player's faction sheet, are ignored.
    
• A mech unit card is not a technology.

### Notes

• If a player is playing a faction with a faction-specific unit upgrade, they cannot research or otherwise gain the generic upgrade for that unit type.
    
• For notes about specific generic unit upgrades, see the unit component notes page.
    
• For notes about a unit upgrade technology of a specific faction, see that faction's notes.

### Related Topics

• Technology
    
• Units`
    },
    {
        id: 'units',
        title: 'Units',
        content: `### Rules Reference

A unit is represented by a plastic figure.

• There are three types of units: ships, ground forces, and structures.
    
• Each color of plastic comes with the following units:

• 3 Space Docks
        
• 6 PDS units
        
• 8 Destroyers
        
• 8 Cruisers
        
• 2 War Suns
        
• 12 Infantry
        
• 10 Fighters
        
• 4 Carriers
        
• 5 Dreadnoughts
        
• 1 Flagship
        
• 4 Mechs

• Units exist either on the game board or in a player's reinforcements.

### Notes

• If an effect allows a player produce a ship of a specific type, then factional variations do not prevent that player from producing that type of ship.
    
• Units are component limited.

• Fighters and infantry are semi-limited, via the use of tokens.

### Related Topics

• Component Limitations
    
• Fighter Tokens
    
• Ground Forces
    
• Infantry Tokens
    
• Producing Units
    
• Production
    
• Reinforcements
    
• Ships
    
• Structures
    
• Unit Upgrades`
    },
    {
        id: 'victory_points',
        title: 'Victory Points',
        content: `### Rules Reference

The first player to gain 10 victory points wins the game.

• Players gain victory points in a variety of ways. A common way that a player can gain victory points is by scoring objectives.
    
• Each player uses the victory point track to indicate the number of victory points they have gained.

• If the players are using the 14-space side of the victory point track, the game ends and a player wins when they have 14 victory points instead of 10.

• Each player places one of their control tokens on space "0" of the victory point track during setup.
    
• When a player gains a victory point, they advance their control token a number of spaces along the victory point track equal to the number of victory points gained.

• A player's control token must always be on the space of the victory point track that shows a number that matches the number of victory points that player has gained during the game. A player cannot have more than 10 victory points.

• If an ability refers to the player with the "most" or "fewest" victory points, and more than one player is tied in that respect, the effect applies to all of the tied players.
    
• If a player gains a victory point from a law, and that law is discarded, that player does not lose that victory point.
    
• The game ends immediately when one player has 10 victory points. If multiple players would simultaneously gain their 10th victory point, the player who is earliest in initiative order among those players is the winner; if this occurs when players do not have strategy cards, the player who is nearest the speaker (including the speaker) in clockwise order is the winner.
    
• If the game ends because the speaker cannot reveal an objective card, the player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner.

### Notes

### Related Topics

• Agenda Card
    
• Imperial
    
• Objective Cards
    
• Relics`
    },
    {
        id: 'warfare',
        title: 'Warfare (Strategy Card)',
        content: `### Rules Reference

The Warfare strategy card allows a player to remove a command token from the board and redistribute their command tokens between their tactic, fleet, and strategy pools. This card's initiative value is "6". During the action phase, if the active player has the Warfare strategy card, they can perform a strategic action to resolve that card's primary ability.

To resolve the primary ability on the Warfare strategy card, the active player performs the following steps:

• Step 1: The active player removes any one of their command tokens from the game board. Then, that player gains that command token by placing it in a pool of their choice on their command sheet.
    
• Step 2: The active player can redistribute their command tokens.
    
• After the active player resolves the primary ability of the Warfare strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to resolve the Production ability of one space dock in their home system.

• The command token is not placed in their home system.

### Notes

• If the player with Warfare has no command tokens on the game board, they may still perform a strategic action. However, they will not gain a command token.

### Related Topics

• Action Phase
    
• Command Sheet
    
• Command Tokens
    
• Initiative Order
    
• Producing Units
    
• Production
    
• Space Dock
    
• Strategic Action
    
• Strategy Card`
    },
    {
        id: 'wormhole_nexus',
        title: 'Wormhole Nexus',
        content: `### Rules Reference

The wormhole nexus is a system tile where several wormholes converge.

• The wormhole nexus begins the game in play with its inactive side up.

• The inactive side of the wormhole nexus contains a gamma wormhole. The active side of the wormhole nexus contains an alpha, beta, and gamma wormhole.
        
• The wormhole nexus is treated as part of the game board.
        
• The wormhole nexus is on the edge of the game board.

• After a player moves or places a unit into the wormhole nexus, or gains control of the planet Mallice, that player flips the wormhole nexus to its active side.

• When a ship moves into the wormhole nexus, the nexus becomes active at the end of the Movement step.

### Notes

• The wormhole nexus will flip if a unit exists in the system while inactive, even if that unit did not move through a gamma wormhole.
    
• As the wormhole nexus becomes active at the end of the Movement step, only units with the Deep Space Cannon ability in systems containing a gamma wormhole will be able to produce hits during the Space Cannon Offense step during that action.
    
• If the Creuss player moves their Hil Colish flagship into the inactive wormhole nexus, the wormhole nexus will not flip before they move any other ships. Any other ships they wish to move into the wormhole nexus must do so via either a delta wormhole or a gamma wormhole, unless the Creuss player is utilizing the ability of their agent, Emissary Taivra.
    
• Any units and tokens on the inactive side are transferred to the active side when the wormhole nexus flips.
    
• A ship in the wormhole will single-handedly qualify for the Become the Gatekeeper objective.

### Related Topics

• Movement
    
• System Tiles
    
• Wormholes`
    },
    {
        id: 'wormholes',
        title: 'Wormholes',
        content: `### Rules Reference

Some systems contain wormholes. Systems that contain identical wormholes are adjacent.

• There are two basic types of wormholes: alpha and beta.
    
• If a player has a PDS unit upgrade technology, they can use the Space Cannon abilities of their PDS units through wormholes.
    
• Players can be neighbors and perform transactions through wormholes.
    
• There are two advanced types of wormhole: delta and gamma. These wormholes follow all other wormhole rules.

• The delta wormholes are present on the Creuss Gate system tile and the Ghosts of Creuss home system tile.
        
• The gamma wormholes are present on the wormhole nexus and can be discovered during exploration.

### Notes

• A system with a wormhole is not an anomaly.
    
• If a system contains multiple wormholes of the same type, those are treated as separate wormholes.
    
• A system cannot be adjacent to itself, even if it has multiple wormholes in it.
    
• A player chooses the path of adjacent systems each ship moves through during movement. If two systems on that path are adjacent because of a wormhole, that ship moves through that wormhole.

• If the two systems are adjacent because of a wormhole and because of a shared edge or another reason, the player may choose whether or not the ship moves through the wormhole.
        
• If the two systems are adjacent because of two types of wormholes, the player chooses which type of wormhole the ship moves through.
        
• A player may move a ship back and forth through a wormhole between two systems any number of times, if its movement value is high enough.

• For additional information on how the Creuss interact with wormholes, see their faction notes page.

### Related Topics

• Adjacency
    
• Movement
    
• Neighbors
    
• System Tiles
    
• Wormhole Nexus`
    }
];

// Component data from C_ files
export interface ComponentData {
    id: string;
    type: string;
    title: string;
    content: string;
}

export const COMPONENT_DATA: ComponentData[] = [
    {
        id: 'action_cards',
        type: 'action_cards',
        title: 'Action Cards',
        content: `### Ancient Burial Sites

• Ancient Burial Sites is played before the first agenda is revealed.
    
• A player with zero cultural planets may be chosen.

### Archaeological Expedition

• A player must control at least one planet with a trait to play and resolve Archaeological Expedition.

### Assassinate Representative

• The chosen player may still play rider cards or use other abilities.

### Blitz

• If the L1Z1X player plays Blitz, they may use the gained Bombardment ability of each of their non-fighter ships in the system when resolving their Harrow faction ability during that invasion.

### Bribery

• Bribery may be played after the speaker has abstained, or would vote if they are unable to.
    
• A player may spend zero trade goods when they play Bribery.
    
• A player must have cast votes for an outcome to play Bribery, and the additional votes must be cast for the same outcome.

• If the Argent player is speaker, only they can play Bribery, and must do so immediately after they cast votes.

• The speaker may play Distinguished Councilor after another player plays Bribery.
    
• Bribery is played before any effects that change the outcome of an agenda.

### Bunker

• The modifier will apply to bombardment rolls for each planet in the active system.
    
• The modifier will apply to bombardment rolls made for the L1Z1X player's Harrow faction ability during that invasion.

### Confounding Legal Text

• Any predictions made on the outcome of the agenda resolve based on the newly elected player.
    
• Confounding Legal Text is played after any effects that allow a player to cast additional votes.
    
• Confounding Legal Text is played before Deadly Plot is played, before revealing the hidden agenda for the Covert Legislation agenda, and before the Drive the Debate objective may be scored.
    
• Confounding Legal Text may be played after Confusing Legal Text is played.

### Confusing Legal Text

• Any predictions made on the outcome of the agenda resolve based on the newly elected player.
    
• Confusing Legal Text is played after any effects that allow a player to cast additional votes.
    
• Confusing Legal Text is played before Deadly Plot is played, before revealing the hidden agenda for the Covert Legislation agenda, and before the Drive the Debate objective may be scored.
    
• Confusing Legal Text may be played after Confounding Legal Text is played.

### Construction Rider

• After playing a Construction Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Construction Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Construction Rider.
    
• If a player wishes to place a space dock, but there are none left in their reinforcements, they may remove a space dock from any system that does not contain one of their command tokens and place that instead.
    
• The Saar player may play a Construction Rider, and may place a space dock in a system containing a planet they control if successful.
    
• If a player successfully resolves a Construction Rider while they own the Minister of Industry law, they use the Production ability of their units in the system where they place their space dock. They may exhaust planets for resources, but those planets cannot be used to cast votes for the remainder of the agenda phase.

### Counterstroke

### Coup D'etat

• The active player may still use any "at the end of your turn" abilities.

### Courageous to the End

• Any combat roll modifiers will not apply to the dice roll for Courageous to the End.
    
• Effects that cancel hits, such as Sustain Damage, cannot be used to prevent ships from being destroyed.

### Cripple Defenses

• The chosen planet may have zero PDS on it.

### Deadly Plot

• Any prediction made for a rider or similar ability is incorrect, and will not resolve.
    
• A player cannot make the prediction that Deadly Plot will be played when they predict the outcome of an agenda.
    
• Deadly Plot is played after any effects that allow a player to cast additional votes, and after any effects that change the outcome of an agenda.
    
• Deadly Plot is played before revealing the hidden agenda for the Covert Legislation agenda, and before the Drive the Debate objective may be scored.
    
• If a player predicts multiple outcomes, they may play Deadly Plot regardless of which outcome would be resolved.

• If the Xxcha player uses their commander, Elder Qanoj, to vote for one outcome, when they have predicted another, they may play Deadly Plot regardless of which outcome would be resolved.

### Decoy Operation

• If a mech is damaged when it is removed, it will remain damaged when it is placed.

### Diplomacy Rider

• The Mecatol Rex system may be chosen.
    
• After playing a Diplomacy Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Diplomacy Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Diplomacy Rider.

### Diplomatic Pressure

• The target player chooses which promissory note they give.
    
• A player cannot play a second Diplomatic Pressure targeting the same player during the same agenda.

• A player may play a second Diplomatic Pressure targeting a different player during the same agenda.
        
• Another player may play a second Diplomatic Pressure targeting the same player during the same agenda.
        
• A player may play a second Diplomatic Pressure targeting the same player during a later agenda.

### Direct Hit

• If multiple ships use their Sustain Damage ability, a Direct Hit may be played for each.
    
• A Direct Hit may be used whenever hits produced by a player's units or abilities are cancelled by a unit using its Sustain Damage ability.
    
• When a player uses the Sustain Damage ability of one of their units, they do not have to decide if another of their units in the same combat will use its Sustain Damage ability until after their opponent has used or declined to use a Direct Hit.
    
• When Direct Hit is used outside of combat, if used on a ship with capacity, then fighters and/or ground forces must immediately be removed from the space area to meet the capacity limit.

• For example, say a player has a dreadnought, a destroyer and a fighter in a system with no other units during the Space Cannon Defense step. During the Roll Dice step, two hits are produced against that player. They cancel one with the dreadnought's Sustain Damage ability, but a Direct Hit is played to destroy it. The fighter in that system is immediately removed. The player must then assign the other produced hit to their destroyer.

• A mech cannot be destroyed by Direct Hit, unless a game effect causes the mech to be considered a ship. 

### Disable

• If the Ul player is targeted, their Hel-Titans will still participate in the ground combat during the current invasion.
    
• If Disable results in no units on a planet having the Planetary Shield ability, then the ability of the Magen Defense Grid technology cannot be used during ground combat on that planet during that invasion.

• Disable has no effect on the Magen Defense Grid &Omega; or Magen Defense Grid &Omega;&Omega; technologies.

• Disable does not affect the Space Cannon Offense step, and is not played until the start of the Invasion step.

### Distinguished Councilor

• A player must have cast votes for an outcome to play Distinguished Councilor, and the additional votes must be cast for the same outcome.
    
• A player may only play Distinguished Councilor after their normal vote, not after they cast additional votes at another point.
    
• The speaker may play Distinguished Councilor after another player plays Bribery.
    
• Distinguished Councilor is played before any effects that change the outcome of an agenda.

### Divert Funding

• A player must have at least one non-unit upgrade, non-faction technology to play and resolve Divert Funding.
    
• A player must still meet the prerequisites for the technology they research.

• The returned technology does not count towards meeting the prerequisites.

• The researched technology may be a unit upgrade technology, and it may be a faction technology.
    
• The researched technology cannot be the returned technology.
    
• Other players must decide whether to play Sabotage, or otherwise cancel the action card, before the player playing Divert Funding announces which technology they are researching.
    
• If a player later gains the technology they returned, they gain it readied.
    
• If the player returns the Antimass Deflectors technology, their units may remain in and move out of any asteroid fields they are currently in, but cannot move additional units into or through.

### Economic Initiative

• A player with zero cultural planets may play Economic Initiative.

### Emergency Repairs

• A player may play Emergency Repairs at the start of the first round of combat to repair ships damaged in a previous combat, or during the Space Cannon Offense step of the current action.

### Experimental Battlestation

• The selected space dock will use the Space Cannon ability during the Space Cannon Offense step of the current tactical action.
    
• Hits may only be assigned to the active player's ships.
    
• Experimental Battlestation cannot be played if no ships are moved into the active system, even if the active player already has ships in that system.

• If ships are moved into the active system, ships that were already in that system may be assigned any hits produced.
        
• If a ship is moved out of the active system and then back in, Experimental Battlestation may be played.
        
• If all moving ships are lost to a gravity rift, and none arrive in the active system, Experimental Battlestation cannot be played.

• Experimental Battlestation cannot be played if ships are moved outside of the Move Ships step, such as during a retreat, or while resolving the Mahact player's Benediction hero ability.
    
• The hits produced by the Experimental Battlestation space cannon rolls may be cancelled with Maneuvering Jets.

### Exploration Probe

• A player must have an exploration token in or adjacent to a system containing one or more of their ships to play and resolve Exploration Probe.

### Fighter Conscription

• Only one fighter will be placed in a system containing both a space dock and a ship with capacity.
    
• A player may place a fighter in a system that is at its capacity limit. If they do so, they must then remove a fighter or ground force from the space area of that system.

### Fighter Prototype

### Fire Team

• Any modifiers on the original combat roll will apply to the reroll.

### Flank Speed

• A second Flank Speed cannot be played to give +2 to the move value of each ship.
    
• Cancelling Flank Speed will not cancel the system activation.

### Focused Research

• A player cannot play Focused Research if they have less than four trade goods.
    
• A player must still meet the prerequisites for the technology they research.
    
• Other players must decide whether to play Sabotage, or otherwise cancel the action card, before the player playing Focused Research announces which technology they are researching.

### Forward Supply Base

### Frontline Deployment

• A player must control at least one planet to play and resolve Frontline Deployment.
    
• All three infantry must be placed on a single planet.

### Ghost Ship

• A player may place the destroyer in the Creuss gate (tile 17), the wormhole nexus, or any system with a printed wormhole or wormhole token.

• Placing the destroyer in the inactive wormhole nexus will cause it to flip to its active side.

• The destroyer cannot be placed in the home system of an eliminated player.
    
• There must be an eligible system to place the destroyer in for a player to play and resolve Ghost Ship.
    
• If a player wishes to place a destroyer, but there are none left in their reinforcements, they may remove a destroyer from any system that does not contain one of their command tokens and place that instead.

### Ghost Squad

• Ghost Squad is played after the active player has assigned which planet each of their ground forces are being committed to. They cannot modify this after Ghost Squad has been played.
    
• Ghost Squad may be played whenever ground forces are committed, such as from the Yin player's Quantum Dissemination Ω hero ability.

• Ghost Squad cannot be played in response to abilities that place ground forces on a planet without committing them, such as the Colonial Redistribution agenda.

• The Ul player cannot use Ghost Squad to move a Hel-Titan.
    
• A player may move zero ground forces with Ghost Squad.

### Hack Election

• The speaker will still vote last.
    
• The Argent player will still vote before all other players.

### Harness Energy

• If a player has their maximum number of commodities, they may still play Harness Energy. If they do, they will still trigger any "when [this] player replenishes commodities" effects, most notably the Trade Agreement promissory note.

### Imperial Rider

• After playing an Imperial Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Imperial Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play an Imperial Rider.

### Impersonation

• A player cannot play Impersonation if they have less than three influence available.
    
• A player with three secret objectives may draw a fourth, and then shuffle one of their unscored secret objectives into the secret objective deck.

• If a player has scored three secret objectives, they may use Impersonation to draw a secret objective, then immediately shuffle it into the secret objective deck.

### In The Silence Of Space

• Only the ships in the chosen system may move through systems that contain other players' ships. Ships in other systems may still move to the active system if they are able to do so without moving through systems that contain other players' ships.

### Industrial Initiative

• A player with zero industrial planets may play Industrial Initiative.

### Infiltrate

• If the L1Z1X player plays Infiltrate before they resolve their Assimilate ability, or vice versa, they will replace zero PDS and space docks with zero PDS and space docks when they resolve the latter ability.
    
• If a player wishes to place a structure, but there are none of that type left in their reinforcements, they may remove a structure of that type from any system that does not contain one of their command tokens and place that instead. That player may make the choice for each structure.

• The Ul player will place each of their Hel Titan PDS undamaged.

### Insider Information

### Insubordination

• Insubordination cannot target a player with zero command tokens in their tactic pool.

### Intercept

• During the next round of combat, the targeted player may declare another retreat.
    
• Intercept cannot be played to prevent Skilled Retreat or the Naalu player's Foresight faction ability.

### Leadership Rider

• After playing a Leadership Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Leadership Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Leadership Rider.

### Lost Star Chart

• If the Enforced Travel Ban law is in play, Lost Star Chart will allow a player to move through wormholes during this action.

• A player may move from a system containing an alpha wormhole to a system containing an alpha wormhole, and similarly for beta wormholes.

• If the active system contains a beta wormhole, a player that has a unit with the Deep Space Cannon ability in an alpha wormhole may produce hits against ships in the active system during the Space Cannon Offense step of the tactical action, and vice versa.
    
• A player may retreat from a system containing an alpha wormhole into a system containing a beta wormhole, and vice versa, during this action.
    
• If a player has units or controls planets in a system with an alpha wormhole, and another player has units or controls planets in a system with a beta wormhole, then those two players are neighbors during this action.

• The Mentak player may use their Pillage ability against a player in this manner.

• A player moving a ship between two systems, both with alpha wormholes or both with beta wormholes, does not have to move through the wormhole, as the systems are adjacent. In particular, if one of those systems has the Ion Storm token, that player chooses if the Ion Storm token will flip.

### Lucky Shot

• A player cannot use Lucky Shot against their own units.
    
• Effects that cancel hits, such as Sustain Damage, cannot be used to prevent ships from being destroyed.

### Maneuvering Jets

• Maneuvering Jets cannot be used to cancel hits during combat.
    
• Maneuvering Jets may cancel hits produced during either the Space Cannon Offense or the Space Cannon Defense step.
    
• A player cannot play a second Maneuvering Jets to cancel a second hit produced by the same Space Cannon roll.

• During the Space Cannon Offense step, each player makes their Space Cannon roll independent of each other player, in clockwise order. As such, a player may use one Maneuvering Jets after each other player makes a space cannon roll.
        
• During the Space Cannon Defense step, the units on each planet make their Space Cannon roll independent of the units on each other planet. The active player chooses the order. As such, a player may use one Maneuvering Jets for each planet they are committing ground forces to.

• Maneuvering Jets may cancel hits produced due to the Experimental Battlestation action card.

### Manipulate Investments

• If a player still has a strategy card because of Political Stability, trade goods may be placed on that strategy card. However, those trade goods will remain on that strategy card until it is chosen from the common area.

• If a player takes the strategy card with trade goods on it from the player who played Political Stability, using the ability of the Imperial Arbiter law or similar, they will not gain the trade goods, which will remain on the strategy card.

### Master Plan

• Effects that trigger at the start or end of a player's turn will not trigger between each of those player's actions.
    
• If a player's turn is ended by a game effect, they cannot use Master Plan to perform an additional action.
    
• A player cannot use Master Plan to pass on the same turn they performed an action.
    
• If a player's second action would be to use a component action to play an action card, and that card is cancelled, they are not required to perform an alternate second action on that turn.

### Mining Initiative

• A player must control at least one planet to play and resolve Mining Initiative.
    
• Mining Initiative does not exhaust the chosen planet.

### Morale Boost

• The +1 will apply to any rerolls during the combat round.
    
• A second Morale Boost cannot be played during a combat round to give +2 to the combat rolls of a player's units.
    
• Morale Boost has no effect on anti-fighter barrage rolls.

### Nav Suite

• Wormholes are not anomalies.
    
• An anomaly will retain its regular effect if a player retreats.
    
• A player may move ships through or into an asteroid field without the Antimass Deflectors technology. After moving into, those ships may remain there and move out during a later action without harm.
    
• A player may move ships through or out of a gravity rift without rolling for removal. Those ships will not get +1 to their move value.
    
• A player may move ships through a nebula. Ships moving out of a nebula retain their normal move value.
    
• A player may move ships through or into a supernova. After moving into, those ships may remain there and move out during a later action without harm.
    
• Other players cannot ignore the effect of anomalies during this tactical action.

• The Naalu player will still be affected by anomalies if they use their Foresight faction ability.

### Parley

• If a player commits ground forces to multiple planets, Parley will affect ground forces on only one planet.
    
• The returned ground forces cannot be committed to another planet during the same tactical action.

### Plagiarize

• A player cannot play Plagiarize if they have less than five influence available.
    
• A player does not need to meet the prerequisites of the technology they gain from Plagiarize.
    
• The active player must announce which technology they are gaining before other players decide whether to play a Sabotage, or otherwise cancel the action card.
    
• If a faction has a faction-specific unit upgrade as one of their faction technologies, they cannot use Plagiarize to gain that unit upgrade.

• If a player's neighbor owns a faction-specific unit upgrade, it cannot be chosen in order to gain the generic version of that unit upgrade by using Plagiarize.

### Plague

• A planet with zero infantry on it may be targeted by Plague.

### Political Stability

• During the upcoming agenda phase, all abilities stay resolved in speaker order, not initiative order.
    
• The strategy cards are readied when Political Stability is played.
    
• The "Return Strategy Cards" step is the last step of the status phase. All other steps must be completed by all players before Political Stability may be played. This includes scoring and revealing objectives, drawing action cards (and discarding down to hand limit, if necessary), and gaining and redistributing command tokens.

• If a player draws Political Stability during the status phase, they may play it during the same phase.

### Politics Rider

• After playing a Politics Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Politics Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Politics Rider.

### Public Disgrace

• If the originally chosen strategy card has trade goods on it, those will not be taken if Public Disgrace is played.
    
• Public Disgrace may only be played during the regular choosing of a strategy card during the strategy phase. It cannot be played when other effects cause a player to take a strategy card, such as the Imperial Arbiter agenda.

### Rally

### Reactor Meltdown

• A player cannot destroy their own space dock with Reactor Meltdown.
    
• At least one space dock belonging to another player must exist on the game board in a non-home system for a player to play and resolve Reactor Meltdown.
    
• If a player owns a space dock in another player's home system, that space dock cannot be targeted by Reactor Meltdown.

• A space dock in an eliminated player's home system cannot be targeted.

### Refit Troops

• A player must have at least one infantry on the game board to play and resolve Refit Troops.
    
• If a player has no mechs left in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.

### Reflective Shielding

• If Reflective Shielding is played after a ship uses its Sustain Damage ability during an Assign Hits step, then the hits produced by Reflective Shielding are added to any other hits produced in the immediately proceeding Roll Dice step.

• A unit that used its Sustain Damage ability to cancel some of those other hits, and been repaired, cannot use its Sustain Damage ability again to cancel the hits produced by Reflective Shielding.

• If Reflective Shielding is played after a ship uses its Sustain Damage ability at any other time during combat (for example, when the Creuss player uses their Dimensional Splicer faction technology ability), the hits are assigned immediately.

### Reparations

• Reparations may be played by a player with no exhausted planets, or when they lose control of a planet to a player with no readied planets.

• Reparations cannot be played by a player with no exhausted planets when they lose control of a planet to a player with no readied planets.

### Repeal Law

• There must be at least one law in play for a player to play and resolve Repeal Law.

### Reveal Prototype

• A player must still meet the prerequisites for the technology they research.
    
• A player cannot play Reveal Prototype if they have less than four resources available.
    
• A player cannot play Reveal Prototype if they already own the unit upgrade technology for each unit they have in the combat.
    
• Other players must decide whether to play Sabotage, or otherwise cancel the action card, before the player playing Reveal Prototype announces which technology they are researching.

### Reverse Engineer

• Reverse Engineer may be played if the action card is discarded after being played or cancelled, if it is discarded due to hand size limits, or if it is discarded for another game effect.
    
• It is public knowlege which action cards a player takes using Reverse Engineer.

### Rise of a Messiah

• A player that controls zero planets may play Rise of a Messiah.

### Rout

• A player cannot announce a retreat if there is not at least one eligible system to retreat to.
    
• A player cannot announce a retreat from the space combat initiated by the Mahact player's Benediction hero ability.

### Sabotage

• If a player has a second copy of an action card, they may play it if the first was cancelled by Sabotage.
    
• If an action card is cancelled by Sabotage, no costs are paid.
    
• A player playing an action card announces the following before Sabotage may be played:

• Any targeted planets, system, units, players, cards, outcomes, and/or other such objects.
        
• The value of any variable cost to be paid.

• Any dice are rolled and any cards are drawn only after all other players has declined to play Sabotage.
    
• If an action card instructs a player to research a technology, that player need not announce what technology they are researching until all other players has declined to play Sabotage.
    
• If an action card is played that will have an effect later, such as a rider, that card may only be cancelled by Sabotage when it is originally played.
    
• If the action card that was cancelled by Sabotage was to be used to perform a component action, the active player must perform a different action, or pass.

• If the component action was to be the second action the active player was to perform on their turn, through an effect such as the Fleet Logistics technology, the active player may end their turn without performing a second action and without passing.

### Salvage

• The active player may perform transactions after Salvage is played and before it resolves.

### Sanction

• After playing a Sanction, a player may use additional abilities, including playing rider cards.

• Any riders may be played to predict the same or a different outcome.

• The effect of a successful Sanction will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Sanction.

### Scramble Frequency

### Scuttle

• A player must have at least one non-fighter ship on the game board to play and resolve Scuttle.

### Seize Artifact

• A player must have at least one neighbor with at least one relic fragment to play and resolve Seize Artifact.

### Shields Holding

• Shields Holding cannot be used to cancel hits produced by Space Cannon abilities.
    
• Shields Holding cannot be used to prevent an effect that directly destroys a unit.
    
• Shields Holding cannot be used during ground combat.
    
• Shields Holding may be used to cancel hits produced by any ability during space combat.

• Shields Holding may be used to cancel hits produced by an anti-fighter barrage roll.

• A player cannot play a second Shields Holding to cancel a second pair of hits produced by the same dice roll or other source.

### Signal Jamming

• The Mecatol Rex system may be chosen.
    
• A command token cannot be placed in an eliminated player's home system.

### Skilled Retreat

• Using Skilled Retreat is not a retreat. As such, it cannot be cancelled with the Intercept action card.
    
• A player may use Skilled Retreat to move into a system that does not contain their ships, as long as it does not contain another player's ships.
    
• A player cannot use Skilled Retreat to move into a nebula.
    
• Fighters are moved without being transported. Ground forces may be transported.
    
• After moving, capacity and fleet pool limits apply in the destination system.
    
• If the destination system already contains a player's command token, no command token is placed.
    
• If a player has no command tokens in their reinforcements, they must take one from any pool of their command sheet and place that instead.

### Solar Flare

• The active player may still use the Space Cannon ability of their units.
    
• During the Space Cannon Defense step of an invasion during the same tactical action, other players may use the Space Cannon ability of their units.
    
• Another player cannot play Experimental Battlestation during this tactical action.

### Spy

• Spy cannot target a player with zero action cards in their hand.
    
• If the targeted player has Reverse Engineer in their hand, they must first give a random action card to the player who played Spy. Only if the card they gave was not Reverse Engineer may then then play it to take Spy into their hand from the discard pile.

### Summit

### Tactical Bombardment

• A player must have at least one unit with the Bombardment ability to play and resolve Tactical Bombardment.
    
• A player may select a system that contains zero readied planets controlled by other players.

### Technology Rider

• After playing a Technology Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Technology Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Technology Rider.
    
• A player must still meet the prerequisites for the technology they research.

• A player may exhaust a planet with a technology specialty to ignore a prerequisite on a technology as normal. This planet will ready at the end of the agenda phase.
        
• A player may exhaust the AI Development Algorithm technology to ignore a prerequisite on a unit upgrade technology as normal. AI Development Algorithm will not ready at the end of the agenda phase.

### Trade Rider

• After playing a Trade Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Trade Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Trade Rider.

### Unexpected Action

• Unexpected Action cannot be played by a player with zero command tokens on the game board.

### Unstable Planet

• A player may select an exhausted planet, and they may select a planet with fewer than three infantry on it (including zero).
    
• If the selected planet has three or fewer infantry on it, all infantry will be destroyed. Otherwise, three infantry will be destroyed.

### Upgrade

• The cruiser must be in the system when it is activated for Upgrade to be played. Upgrade cannot be played if the cruiser is moved into the active system later in the turn.
    
• A player must have at least one cruiser in the active system to play and resolve Upgrade.
    
• If a player wishes to place a dreadnought, but there are none left in their reinforcements, they may remove a dreadnought from any system that does not contain one of their command tokens and place that instead. This dreadnought will be placed undamaged.

### Uprising

• Uprising cannot be played if all planets owned by each other player is exhausted.
    
• Uprising cannot target an exhausted planet.

### Veto

• Veto, the Xxcha Quash faction ability, the Xxcha Political Favor promissory note, and the Political Secret promissory note are all played in the same timing window, before the rider timing window.

• If Veto is used after any Political Secret promissory notes have been played, those are immediately returned and will have no effect on the replacement agenda.

• Each agenda is considered separate for the purpose of limiting each pair of players to one transaction per agenda.
    
• A second Veto may be used on the replacement agenda.

### War Effort

• If a player wishes to place a cruiser, but there are none left in their reinforcements, they may remove a cruiser from any system that does not contain one of their command tokens and place that instead. This cruiser will be placed undamaged.

### War Machine

• A second War Machine cannot be played during use of production to give +8 to the total production value and/or to reduce the combined cost of the produced units by 2.
    
• War Machine may only be used by effects that cause a unit to use its Production ability. It cannot be used for other effects that produce units.

### Warfare Rider

• After playing a Warfare Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Warfare Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Warfare Rider.
    
• If a player wishes to place a dreadnought, but there are none in their reinforcements, they may remove a dreadnought from any system that does not contain one of their command tokens and place that instead. This dreadnought will be placed undamaged.

### Waylay

• A ship with the Sustain Damage ability may cancel a hit produced by an anti-fighter barrage roll if Waylay causes that ship to be eligible to be hit.`
    },
    {
        id: 'agendas',
        type: 'agendas',
        title: 'Agendas',
        content: `### Anti-Intellectual Revolution

• When Anti-Intellectual Revolution is a law in play, a player that directly gains a technology will be unaffected.

• The Nekro player is never affected by the Anti-Intellectual Revolution law.

• The Nekro player's Valefar Assimilator technologies count for the "Against" effect, whether their tokens are on another player's faction technology or not.
    
• A player with no non-fighter ships on the game board may still research technology when Anti-Intellectual Revolution is a law in play.
    
• A player may only exhaust planets they control for the "Against" effect of Anti-Intellectual Revolution.

### Archived Secret

• A player with three scored secret objectives may draw a fourth. However, they must immediately shuffle it into the secret objective deck.
	
• If a player draws the Drive the Debate secret objective while resolving Archived Secret, they cannot score it immediately.

### Armed Forces Standardization

### Arms Reduction

### Articles of War

### Checks and Balances

• If there are any trade goods on a chosen strategy card while Checks and Balances is a law in play, the player who chose the strategy card gains them, not the player who receives that card.
    
• The Public Disgrace action card may be played after a player has chosen a strategy card and announced which player will be receiving it. The player must choose a different strategy card, and then choose the same or a different player to receive it.

### Clandestine Operations

• If the "For" effect of Clandestine Operations is resolved, the removed tokens may be from any pool or pools on a player's command sheet.

### Classified Document Leaks

• If Classified Document Leaks is revealed when only one secret objective is in play, players may only vote for that secret objective or abstain. If no votes are cast, the speaker must decide for that secret objective to be elected.

• Players may still play riders if only one secret objective has been scored.

• The player that originally owned the secret objective elected by Classified Document Leaks cannot score it again after it becomes a public objective.
    
• The elected secret objective no longer counts towards the original player's limit of three secret objectives.
    
• If Classified Document Leaks is discarded, the elected secret objective is not returned to the original player, and it is no longer scorable as a public objective. It remains in play, not discarded.
    
• A player can score a maximum of one objective of any type during or after each combat. A player cannot score the elected objective and one of their own secret objectives from the same combat.
    
• The elected objective becomes a public objective and stops being a secret objective.

• If Classified Document Leaks is elected by Miscount Disclosed, the objective that was originally elected will remain a public objective during the vote. It therefore cannot be re-elected.
        
• If there are no other secret objectives eligable to be elected by the Miscount Disclosed revote, Classified Document Leaks will be discarded, and another agenda will be revealed and voted on.

### Colonial Redistribution

• If the player that originally controlled the elected planet has the fewest victory points, they may choose themselves to place an infantry on that planet.
    
• If the elected planet has the Demilitarized Zone exploration card attached, no infantry will be placed on it. Control of the planet will remain with the original player.

### Committee Formation

• Committee Formation is resolved after any riders have been played, if the owner so chooses. Riders will resolve if the predicted outcome matches the player elected by the effect of Committee Formation.

• The owner of Committee Formation may play riders before they resolve Committee Formation.

• The Confusing Legal Text and Confounding Legal Text action cards may be played after Committee Formation has been discarded to change who the elected player is, which will negate the effects of Committee Formation.

• The Deadly Plot action card may be played after Committee Formation has been discarded to discard the agenda without resolving it, but only if that player predicted a different outcome from some other game effect.

### Compensated Disarmament

• All trade goods are gained together.
    
• Each destroyed infantry will provide one trade good and each destroyed mech will provide one trade good.
    
• A planet with zero units on it is eligible to be elected.
    
• Structures are unaffected by Compensated Disarmament.

• The Titans of Ul's Hel-Titans are also ground forces and are thus affected by Compensated Disarmament.

### Conventions of War

• When Conventions of War is a law in play a player may still use the Tactical Bombardment action card, the X-89 Bacterial Weapon technology or the Stellar Converter relic on a cultural planet.

### Core Mining

• A planet with zero infantry on it may be elected.

### Covert Legislation

• If the Speaker draws Classified Document Leaks, Judicial Abolishment, Miscount Disclosed or New Constitution, when that agenda would be discarded if revealed, both the hidden agenda and Covert Legislation are discarded.
    
• Any effects that take place when or after an agenda is revealed instead take place when or after the speaker has drawn and announced the possible outcomes for the hidden agenda.
    
• If an effect, such as the Veto action card, would discard Covert Legislation, both it and the hidden agenda are discarded.
    
• The hidden agenda is only revealed as it is resolved. All abilities that may be played after voting, such as the Bribery, Confounding Legal Text, Confusing Legal Text or Deadly Plot action cards, must be played before the agenda is revealed.
    
• The speaker may still vote on Covert Legislation.

### The Crown of Emphidia

• If The Crown of Emphidia law is discarded, no player loses a victory point.
    
• If the player that gains The Crown of Emphidia controls no planets in their home system, they cannot lose it.

### The Crown of Thalnos

### Demilitarized Zone

### Economic Equality

• If the "For" outcome of Economic Equality is resolved, the Mentak player may resolve their Pillage faction ability against each of their neighbors.

### Enforced Travel Ban

• The effect of the Enforced Travel Ban law does not affect the Creuss player.
    
• Enforced Travel Ban only prevents movement using the normal adjacency provided by wormholes. Other effects that create adjacency, such as the Wormhole Reconstruction agenda or the Lost Star Chart action card, may be used to allow movement between systems containing wormholes.
    
• When the Enforced Travel Ban law is in play, units cannot move through wormholes, even by effects that move ships outside of the Movement step of a tactical action, such as while retreating.
    
• When the Enforced Travel Ban law is in play, hits may still be produced against ships in the active system by units with the Deep Space Cannon ability in systems that are adjacent via a wormhole during the Space Cannon Offense step of a tactical action.
    
• Players may still be neighbors via systems that are adjacent via wormholes.
    
• The "Against" effect of Enforced Travel Ban will affect PDS in or adjacent to systems containing an alpha, beta, delta or gamma wormhole.

### Executive Sanctions

• The effect of the Executive Sanctions law does not affect the Yssaril player.

### Fleet Regulations

• The effect of the Fleet Regulations law does not prevent the Letnev player from using their Armada faction ability. They may have up to six non-fighter ships in a system if they have four command tokens in their fleet pool.
    
• The Mahact player may only have up to four command tokens in their fleet pool when the Fleet Regulations law is in play, regardless of which faction the command tokens belong to.

### Galactic Crisis Pact

• Players resolve the secondary ability of the elected strategy card in speaker order.
    
• The secondary ability is resolved immediately, during the agenda phase.
    
• Players must pay the influence or resource costs to resolve the abilities of the Leadership, Warfare or Technology strategy cards if they are elected. Any planets used to pay these costs will ready at the end of the agenda phase.
    
• If the Technology strategy card is elected, a player may exhaust a planet with a technology specialty to ignore a prerequisite on a technology as normal. This planet will ready at the end of the agenda phase.

• A player may exhaust the AI Development Algorithm technology to ignore a prerequisite on a unit upgrade technology as normal. AI Development Algorithm will not ready at the end of the agenda phase.

• If a player has a strategy card in their play area due to the effect of the Political Stability action card, that strategy card is eligible to be elected.

### Holy Planet of Ixth

• If the Holy Planet of Ixth law is discarded, no player loses a victory point.

### Homeland Defense Act

• If the  Homeland Defense Act law is discarded, players might have to remove PDS so that they have no more than two on each planet.

### Imperial Arbiter

• If either strategy card had trade goods on it at the start of the strategy phase, those trade goods remain with the player that originally chose the strategy card.
    
• In a three- or four-player game, the owner of Imperial Arbiter chooses which strategy cards are swapped.

### Incentive Program

### Ixthian Artifact

• A player must still meet the prerequisites for the technology they research.

• A player may use the first technology they research to meet the prerequisites of the second technology they research.
        
• A player may exhaust a planet with a technology specialty to ignore a prerequisite on a technology as normal. This planet will ready at the end of the agenda phase.
        
• A player may exhaust the AI Development Algorithm technology to ignore a prerequisite on a unit upgrade technology as normal. AI Development Algorithm will not ready at the end of the agenda phase.

• A player with three or fewer units in a system adjacent to the Mecatol Rex system destroys all of their units in that system. Otherwise, a player chooses which three units are destroyed.
    
• All units are destroyed simultaneously.
    
• To cast votes against or to play a rider on Ixthian Artifact is to commit heresy.

### Judicial Abolishment

• If Judicial Abolishment is revealed when only one law is in play, players may only vote for that law or abstain. If no votes are cast, the speaker must decide for that law to be elected.

• Players may still play riders if only one law is in play.

### Minister of Antiquities

### Minister of Commerce

• Minister of Commerce triggers when its owner has their commodities replenished by any game effect.

• Gaining a fixed number of commodities does not trigger Minister of Commerce, even if doing so would result in its owner having commodities equal to their commodity value.

• All trade goods are gained together.

### Minister of Exploration

• If the owner of Minister of Exploration gains control of multiple planets during one invasion, the trade goods are gained one at a time.

### Minister of Industry

• All units in that system may use their Production ability, not just the placed space dock.
    
• The produced units must be paid for.
    
• A space dock cannot be placed on a planet already containing a space dock.

• If a player has no space docks in their reinforcements when they may place a space dock on they game board, they may first remove a space dock from a system that does not contain their command token. However, they cannot then place the space dock on the same planet that they removed it from.

• An ability that puts a space dock on the game board by "replacing", rather than "placing", such as the Infiltrate action card, will trigger Minister of Industry.

### Minister of Peace

• Once a player resolves the ability of Minister of Peace, the active player cannot use any "after you activate a system" abilities.

• Other players, including the Minister of Peace player, cannot use any "after another player activates a system that&hellip;" abilities.

• The active player may still use any "at the end of your turn" abilities when their turn is ended by Minister of Peace.
    
• The player that owns Minister of Peace does not have to have any of their units in the active system to resolve Minister of Peace, so long as any non-active player owns at least one unit in the active system.

### Minister of Policy

• The owner of Minister of Policy will draw action cards during the Draw Action Cards step of the status phase, and again at the end of the status phase.

• If the Yssaril player owns Minister of Policy, they will use their Scheming ability for both the Draw Action Cards step and for Minister of Policy. However, they do not draw all the cards together; they must fully resolve Scheming by discarding an action card for the Draw Action Cards step before drawing any action cards for Minister of Policy.

• Neural Motivator does not apply when the owner of Minister of Policy draws action cards from its effect.

### Minister of Sciences

### Minister of War

• Effects that trigger at the start or end of a player's turn will not trigger between each of those player's action.

### Miscount Disclosed

• If Miscount Disclosed is revealed when only one law is in play, players may only vote for that law or abstain. If no votes are cast, the speaker must decide for that law to be elected.

• Players may still play riders if only one law is in play.

• The elected law remains in play, and remains elected to the same object if applicable, while it is being voted on.

• If Articles of War is elected by Miscount Disclosed, the Hacan player's transactions during the revote cannot involve any planets containing their Pride of Kenara mechs, and the Empyrean player cannot cancel action cards played during the revote with their Watcher mechs.
        
• If Classified Document Leaks is elected by Miscount Disclosed, the objective that was originally elected will remain a public objective during the vote. It therefore cannot be re-elected.
        
• If Committee Formation is elected by Miscount Disclosed, the owner may use its ability. The elected player will receive Committee Formation from the discard pile.
        
• If Homeland Defense Act is elected by Miscount Disclosed, and the "For" effect is resolved again, players will not have to remove any PDS from the board.
        
• If Political Censure is elected by Miscount Disclosed, the current owner cannot play action cards, including Confounding Legal Text, if another player is elected. If another player is elected, that player may play the Confusing Legal Text action card.
        
• If Wormhole Reconstruction is elected by Miscount Disclosed, the Mentak player will remain neighbors with players through wormholes, allowing them to use their Pillage faction ability on those players. The Empyrean player's Watcher mechs will remain adjacent to other players' units through wormholes, allowing them to cancel action cards played with the mech's ability.
        
• If Representative Government is elected by Miscount Disclosed, each player will cast only one vote during the revote.
        
• If the elected law is attached to a planet, and is increasing its influence value, the player that controls that planet may still cast votes using the increased influence.

• Once the law is elected, any riders on Miscount Disclosed will resolve. Following that, the elected law is then treated as being revealed.

• If Classified Document Leaks is elected by Miscount Disclosed, and there are no other secret objectives eligable to be elected by the Miscount Disclosed revote, Classified Document Leaks will be discarded and replaced.
        
• When the elected law is treated as revealed, the Veto action card, the Xxcha Quash faction ability, or the Xxcha Political Favor promissory note may be played. If so, the law will be discarded and replaced.
        
• The Political Secret promissory note may also be played when the elected law is treated as revealed.
        
• After the elected law is treated as revealed, riders may be played to predict the outcome of the elected law.

• After all players have voted for Miscount Disclosed, the Deadly Plot action card may be played. If so, the elected law is not voted on and remains in play.
    
• After all players have voted for the elected law, the Deadly Plot action card may be played. If so, the elected law is discarded.
    
• Players who resolved a transaction while voting on and resolving Miscount Disclosed may resolve an additional transaction voting on and resolving the elected law.
    
• If Holy Planet of Ixth, Shard of the Throne or The Crown of Emphidia is elected by Miscount Disclosed, the owner will not lose a victory point.

### Mutiny

• If the "For" outcome of Mutiny is resolved, players gain victory points in speaker order.

### New Constitution

• If a player controls planets in another player's home system, those planets are not exhausted by the "For" outcome of New Constitution.

### Nexus Sovereignty

• The effect of the Nexus Sovereignty law does not affect the Creuss player.
    
• When the Nexus Sovereignty law is in play, units cannot move through the alpha and beta wormholes in the wormhole nexus, even by effects that move ships outside of the movement step of a tactical action, such as while retreating.
    
• When the Nexus Sovereignty law is in play, hits may still be produced against ships in the active system by units with the Deep Space Cannon ability in systems that are adjacent via a wormhole during the Space Cannon Offense step of a tactical action.
    
• Players may still be neighbors via systems that are adjacent via wormholes.

### Political Censure

• When a player is elected for Political Censure, they may play the Confusing Legal Text or Deadly Plot action cards before it resolves.

### Prophecy of Ixth

• Other effects that produce units without a unit using its Production ability will not cause Prophecy of Ixth to be discarded.

### Public Execution

### Publicize Weapon Schematics

• If the Publicize Weapon Schematics law is in play, and a player is the first to gain the war sun unit upgrade technology, from then on, prerequisites for the war sun unit upgrade technology will be ignored.
    
• If the Muaat does not own their Prototype War Sun II faction unit upgrade technology, they do not own a war sun technology.

• If the Publicize Weapon Schematics law is in play, the Muaat player will not cause prerequisites for the War Sun unit upgrade technology to be ignored if they do not own their Prototype War Sun II faction unit upgrade technology.
        
• If the "Against" outcome of Publicize Weapon Schematics is resolved, the Muaat player will not discard their action cards if they do not own their Prototype War Sun II faction unit upgrade technology.

• The Muaat player's Prototype War Sun will lose its Sustain Damage ability, regardless of if the Muaat player owns their Prototype War Sun II faction unit upgrade technology.

### Rearmament Agreement

• A player that controls no planets in their home system will not place a mech if the "For" outcome of Rearmament Agreement is resolved.
    
• If a player wishes to place a mech, but there are none in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.
    
• A player that has no mechs on the game board is unaffected by the "Against" effect of Rearmament Agreement.

### Regulated Conscription

### Representative Government

### Research Grant Reallocation

• A player may gain any technology, regardless of the number of command tokens in their fleet pool.

• If a player must remove more command tokens than they have in their fleet pool, they remove all their command tokens from their fleet pool instead.

• The number and colors of technologies a player owns will have no effect on the number of command tokens they remove.

• A player cannot exhaust a planet with a technology specialty to reduce the number of commend tokens they remove.

### Research Team: Biotic

• The agenda card, not the planet, is exhausted to ignore the prerequisite.

### Research Team: Cybernetic

• The agenda card, not the planet, is exhausted to ignore the prerequisite.

### Research Team: Propulsion

• The agenda card, not the planet, is exhausted to ignore the prerequisite.

### Research Team: Warfare

• The agenda card, not the planet, is exhausted to ignore the prerequisite.

### Search Warrant

• A player with three scored secret objectives may draw a fourth. However, they must immediately shuffle it into the secret objective deck.
    
• If the elected player has three secret objective cards, and they would draw another, the drawn secret objective card is revealed before that player chooses which card to discard. This applies both when the elected player initially draws the secret objective cards from the effect of Search Warrant when they are elected, and if they later draw secret objective cards from another effect.
	
• If a player draws the Drive the Debate secret objective while resolving Search Warrant, they cannot score it immediately.

### Seed of an Empire

• If multiple players have the most or fewest victory points, they gain victory points in speaker order.

### Senate Sanctuary

### Shard of the Throne

• If the Shard of the Throne law is discarded, no player loses a victory point.

### Shared Research

• If the Shared Research law is in play, a player still cannot move into a nebula unless it is the active system.
    
• If the Shared Research law is in play, a ship that begins the Movement step of a tactical action in a nebula still treats its move value as one for the duration of that step.

### Swords to Plowshares

• Mechs are ignored by the "For" effect of Swords to Plowshares.

### Terraforming Initiative

### Unconventional Measures

### Wormhole Reconstruction

• While Wormhole Reconstruction is in play, Enforced Travel Ban will have no effect.
    
• The "Against" effect of Wormhole Reconstruction will cause each player to place command tokens in each system that contains an alpha, beta, delta or gamma wormhole and one or more of that player's ships.

### Wormhole Research

• A player with ships in a delta or gamma wormhole may research a technology from the "For" effect. Those ships will not be destroyed.

• If a system contains both a delta and gamma wormhole and an alpha or beta wormhole, such as the active wormhole nexus, then ships in that system will be destroyed.

• A player must still meet the prerequisites for the technology they research.

• A player may exhaust a planet with a technology specialty to ignore a prerequisite on a technology as normal. This planet will ready at the end of the agenda phase.
        
• A player may exhaust the AI Development Algorithm technology to ignore a prerequisite on a unit upgrade technology as normal. AI Development Algorithm will not ready at the end of the agenda phase.

• Ground forces in the space area of a system containing an alpha or beta wormhole will be removed due to lack of capacity after the ships in that system are destroyed; those ground forces will not trigger any "destroyed" effects. Fighters will be destroyed, and will trigger any "destroyed" effects.
    
• If Anti-Intellectual Revolution is in play as a law, players who research a technology will destroy a ship due to Anti-Intellectual Revolution before they destroy ships in systems containing alpha or beta wormholes. As such, they may choose a ship in a system containing an alpha or beta wormhole to destroy for Anti-Intellectual Revolution

• If the Vuil'raith player has their flagship, The Terror Between, in a system containing an alpha or beta wormhole, and they choose to destroy it for Anti-Intellectual Revolution, then they will not capture the other ships in that system that are destroyed by Wormhole Research.
        
• If the Vuil'raith player has their flagship, The Terror Between, in a system containing an alpha or beta wormhole, and they choose to destroy another ship with capacity, they must resolve capacity before Wormhole Research destroys any ships. Any fighters they remove due to capacity will not be captured when ships are destroyed for Wormhole Research.

• The Saar player's Floating Factories will not be destroyed by Wormhole Research.`
    },
    {
        id: 'events',
        type: 'events',
        title: 'Events',
        content: `### Age of Commerce

• Players must still be neighbors on the game board for the purpose of resolving game effects that depend on players being neighbors.

• For example, the Mentak player must still be neighbors with another player on the game board to resolve their Pillage faction ability against that player.

• The Hacan player's Guild Ships faction ability and Trade Convoys promissory note provide no benefit while playing with the Age of Commerce event. However, Trade Convoys may still be played as a component action.
    
• If the Empyrean player receives commodities from a player with their Dark Pact promissory note in their play area equal to that player's printed commodity value, then both players will gain one trade good. This need not be all of the giving player's current commodities.

• If the giving player owns the Dynamis Core relic, they must give two commodities above their faction's printed commodity value to trigger the effect of Dark Pact.

• When a player's Trade Agreement promissory note is played, they give only the number of commodities that they just gained due to replenishing commodities.
    
• A player may share any number of technologies in a single transaction.

### Age of Exploration

• If there are no more blue-backed or red-backed tiles available, a player does not place any tile if they roll the corresponding dice result.
    
• The Dark Energy Tap technology retains all its printed abilities when it is exhausted.

### Minor Factions

• During setup, if a player places a minor faction system with two planets, that player chooses which planet gets two neutral infantry and which planet gets one.
    
• During setup, if a player is dealt the Creuss reference card, they place the Creuss Gate (tile 17) in the equidistant, and place the Creuss home system (tile 51) in the common play area.
    
• During setup, if a player is dealt the Keleres reference card, then they select a home system at random from amongst the Argent, Mentak and Xxcha, excluding any that have already been placed.

• Should another player have the reference card for that faction, then they take that home system, and the player with the Keleres reference card places a different home system at random.
        
• The pool of player factions and minor factions cannot contain all four of the Argent, Keleres, Mentak and Xxcha.
        
• When a player controls each planet in this system, they take the Keleres alliance card, granting them the ability of Suffi An, the Keleres commander. They are not granted the ability of the Argent, Mentak or Xxcha commanders.

• If Mahact exists as a minor faction, the player that controls Ixth gains access to the ability of Il Na Viroset, the Mahact commander.
    
• Commander abilities of minor factions do not need to be unlocked; they are available as soon as a player takes the corresponding alliance card.
    
• When a player gains control of a minor faction planet, if it is not controlled by another player, they explore it. They choose which planet trait they explore it as.
    
• A player only loses a minor faction's alliance card if a single other player controls each planet in that minor faction's system.

• A player will retain a minor faction's alliance card even if they control no planets in that minor faction's system, should two or more other players each control planets in that system.

• The planets in a minor faction's system are not home planets, nor is the system a home system.

• The minor faction systems cannot be used to score objectives such as Conquer the Weak or Darken the Skies, but may be used to score objectives such as Expand Borders.
        
• The minor faction systems may be targeted by action cards such as Reactor Meltdown, Signal Jamming or Uprising.
        
• The minor faction systems may be elected for agendas such as Colonial Redistribution. They will be unaffected by agendas such as New Constitution or Shared Research.
        
• The minor faction systems may be targeted with the Stellar Converter relic or with the Muaat player's Nova Seed hero ability. These will not cause a player to lose an alliance card.

• All neutral infantry have a combat value of 8, and otherwise have no special abilities, regardless of which minor faction they belong to.
    
• Minor factions are not players.

• Planets with neutral infantry cannot be targeted with action cards such as Plague or Uprising.
        
• Planets with neutral infantry cannot be elected by "elect planet" agendas, and are unaffected by agendas such as Swords to Plowshares.
        
• Planets with neutral infantry cannot be used to score objectives such as Make an Example of their World or Stake Your Claim.

### Total War

• Commodities on planets are not treated as commodities for any game effect, other than those that appear on the Total War event card.

• The Mentak player cannot use their Pillage faction ability to target the commodities on planets.
        
• The Salvage action card cannot be used to target the commodities on planets.

• If a player gains control of a planet in another player's home system, without controlling at least one planet in their own home system, then any commodities on the planet they gained control of remain on that planet.

• The commodities on the planet in the other player's home system cannot be discarded to gain a victory point.
        
• If that player still controls that planet in another player's home system when they regain control of a planet in their own home system, they then move the commodities from the planet in the other player's home system to the planet in their own home system.`
    },
    {
        id: 'exploration_cards',
        type: 'exploration_cards',
        title: 'Exploration Cards',
        content: `### Abandoned Warehouses

• A player cannot have more commodities than their commodity value.

### Biotic Research Facility

### Core Mine

### Cultural Relic Fragment

• If the relic deck is empty, a player may still purge three Cultural Relic Fragments as an action.
    
• If an eliminated player had any Cultural Relic Fragments, they are discarded to the cultural planet exploration discard pile.

### Cybernetic Research Facility

### Dead World

• If the relic deck is empty, Dead World will be discarded with no effect.

### Demilitarized Zone

• After the active player has returned ground forces on the planet to the space area, if they do not have enough capacity in the space area for the returned ground forces, including zero capacity, they will have to remove fighters and/or ground forces to meet capacity limits.

### Derelict Vessel

• A player with three scored secret objectives may draw a fourth. However, they must immediately shuffle it into the secret objective deck.

### Dyson Sphere

### Enigmatic Device

• A player cannot play Enigmatic Device as a component action if they have less than six resources available.

### Entropic Field

### Expedition

### Freelancers

• A planet may be exhausted to spend its influence or resources, but not both.
    
• If a player is to gain multiple planets in a system, they choose the order in which they gain them, and explore each planet as they gain it before gaining the next. As such, a player cannot place ground forces produced by Freelancers on a planet in the active system that they are yet to gain and explore.
    
• If a player wishes to place a unit, but there are none of that type left in their reinforcements, they may remove a unit of that type from any system that does not contain one of their command tokens and place that instead. This unit will be placed undamaged.

### Functioning Base

• A player cannot have more commodities than their commodity value.

### Gamma Relay

### Gamma Wormhole

### Hazardous Relic Fragment

• If the relic deck is empty, a player may still purge three Hazardous Relic Fragments as an action.
    
• If an eliminated player had any Hazardous Relic Fragments, they are discarded to the hazardous planet exploration discard pile.

### Industrial Relic Fragment

• If the relic deck is empty, a player may still purge three Industrial Relic Fragments as an action.
    
• If an eliminated player had any Industrial Relic Fragments, they are discarded to the industrial planet exploration discard pile.

### Ion Storm

• The active player chooses which side of the Ion Storm token is initially face up.
    
• All ship movement is simultaneous. If the Ion Storm token system is the active system, and the token is currently on the alpha side, a player cannot move a ship from a system with an alpha wormhole, flip the token, then move a ship from a system with the beta wormhole (then flip the token again).

• The Creuss player may do this by moving their Hil Colish flagship before or after their other ships.

• If the Ion Storm token is in a system containing a wormhole of the same type, a player chooses which wormhole they use when moving through a wormhole of that type. The Ion Storm token only flips if it was the chosen wormhole.

• As a system is never adjacent to itself, a ship cannot move out through one wormhole and in through the other while remaining in the system. The ship must pass through another system with a wormhole to use both wormholes.

• If ships are moved through the Ion Storm token wormhole outside of the Move Ship or Retreat substeps of a tactical action, such as by the effect of the Skilled Retreat action card, the Ion Storm token is not flipped.

### Keleres Ship

### Lazax Survivors

### Local Fabricators

• A player cannot have more commodities than their commodity value.
    
• If a player wishes to place a mech, but there are none left in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.

### Lost Crew

### Major Entropic Field

### Mercenary Outfit

### Merchant Station

### Mining World

### Minor Entropic Field

### Mirage

### Paradise World

### Propulsion Research Facility

### Rich World

### Tomb of Emphidia

### Unknown Relic Fragment

• A player cannot purge three Unknown Relic Fragments to gain a relic. At least one cultural, hazardous or industrial relic fragment must be purged.
    
• If an eliminated player had any Unknown Relic Fragments, they are discarded to the frontier exploration discard pile.

### Volatile Fuel Source

### Warfare Research Facility`
    },
    {
        id: 'objectives',
        type: 'objectives',
        title: 'Objectives',
        content: `### Achieve Supremacy

• The flagship or war sun may be in the home system of an eliminated player.

### Adapt New Strategies

• A Valefar Assimilator technology will count if it is currently copying another player's faction technology.

### Amass Wealth

• The influence, resources and trade goods must be spent during the status phase. Any that were spent during the action phase will have no effect.
    
• A planet may be exhausted to spend either its resource or influence value, but not both.
    
• Trade goods may be spent as influence or resources when scoring Amass Wealth.

### Become a Legend

• The number of units in the system is irrelevant, if there is at least one.
    
• A ship, ground force, or structure will all qualify for Become a Legend.

• If one player has a ground force or structure on a planet in a qualifying system, and another player has a ship in the same system, both players may count the system towards the requirements of Become a Legend.
        
• A player may have ships in the system containing a legendary planet or Mecatol Rex without controlling the planet for that system to count towards the requirements of Become a Legend.

• If Mirage is placed in an anomaly, or the Nano-Forge relic is attached to a planet in an anomaly, that system will only count as one system towards the requirements of Become a Legend.
    
• Any system containing a Vuil'raith player's Dimensional Tear is a gravity rift, and thus, an anomaly.

• If a Vuil'raith player's Dimensional Tear is in a system containing another anomaly, a legendary planet, or Mecatol Rex, that system will only count as one system towards the requirements of Become a Legend.

### Become a Martyr

• The lost planet may be in any player's home system. It does not have to be a planet in the home system of the player scoring Become a Martyr.

• The lost planet may be in the home system of an eliminated player.

• If the lost planet is the last planet a player controls, that player will be eliminated before they score Become a Martyr, if they meet the other requirements for elimination.
    
• If the player with the Shard of the Throne relic loses their home system, they will lose the Shard of the Throne card and the associated victory point before they may score Become a Martyr.
    
• The attacker will have the opportunity to score a secret objective before the defender has the opportunity to score Become a Martyr.

### Become the Gatekeeper

• A player with a ship in the wormhole nexus, or in any other system with both an alpha and beta wormhole, qualifies for Become the Gatekeeper.
    
• Any ground forces or structures are irrelevant.

### Betray a Friend

• The following promissory notes qualify for scoring Betray a Friend:

• Alliance.
        
• Support for the Throne.
        
• Stymie (Arborec).
        
• Trade Convoys (Hacan).
        
• Dark Pact (Empyrean).
        
• Blood Pact (Empyrean).
        
• Promise of Protection (Mentak).
        
• Gift of Prescience (Naalu).
        
• Antivirus (Nekro).
        
• Terraform (Ul).

• The defender cannot score Betray a Friend.

### Brave the Void

• Any system containing a Vuil'raith player's Dimensional Tear is a gravity rift, and thus, an anomaly.
    
• A wormhole is not an anomaly.

### Build Defenses

### Centralize Galactic Trade

• The trade goods must be spent during the status phase. Any trade goods that were spent during the action phase will have no effect.

### Command an Armada

### Conquer the Weak

• The planet may be in the home system of an eliminated player.

### Construct Massive Cities

### Control the Borderlands

• The number of units in the system is irrelevant, if there is at least one.
    
• A ship, ground force, or structure will all qualify for Control the Borderlands.

• If one player has a ground force or structure on a planet in a qualifying system, and another player has a ship in the same system, both players may count the system towards the requirements of Control the Borderlands.

• The units may be in another player's home system.
    
• The Creuss Gate is not a home system.
    
• The Wormhole Nexus and the Creuss home system are both on the edge of the game board.
    
• If the edge of a system tile is touching a hyperlane tile, that edge does not cause that system tile to be on the edge of the game board.

• When using the five- and seven-player hyperlane setups, the system tile in the center of the ring of hyperlanes is not on the edge of the game board.
        
• When using the seven- and eight-player alternate setups, only the system tiles designated as "Ring 3", and home systems are on the edge of the game board, along with the Creuss home system and the wormhole nexus.

### Control the Region

• Any ground forces or structures are irrelevant.

### Corner the Market

### Cut Supply Lines

### Darken the Skies

• Darken the Skies may be scored by winning a combat in an eliminated player's home system.

### Defy Space and Time

• The number of units in the system is irrelevant, if there is at least one.
    
• A ship, ground force, or structure will all qualify for Defy Space and Time.

• If one player has a ground force or structure on Mallice, and another player has a ship in the wormhole nexus, both players may score Defy Space and Time, if it is elected by the Classified Document Leaks agenda.

### Demonstrate Your Power

• A player need not win the combat to score Demonstrate Your Power; they are able to score it if their opponent plays the Skilled Retreat action card.
    
• A player involved in a combat due to the Mahact player's Benediction hero ability may score Demonstrate Your Power after that combat.
    
• Units that are temporarily ships for the duration of a space combat, such as those made so by the Nekro player's flagship, The Alastor, or the Naaz-Rokha player's Z-Grav Eidolon mechs, may count towards scoring Demonstrate Your Power.
    
• The Mentak player may use the Sleeper Cell ability of their hero, during the last round of combat to place ships before scoring Demonstrate Your Power. However, fleet pool limits are also checked before scoring.

• The Mentak player cannot use the ability of their Salvage Operations technology until after the window in which to score Demonstrate Your Power.

### Destroy Heretical Works

• A player will not gain a relic when scoring Destroy Heretical Works.
    
• The relic fragments may be the same or different types.

### Destroy Their Greatest Ship

• If a player destroys their own flagship or war sun during combat, such as via the effect of The Crown of Thalnos relic, their opponent cannot score Destroy their Greatest Ship.
    
• Destroy their Greatest Ship is scored as soon as the war sun or flagship is destroyed; it does not require waiting until the end of the combat.

• A player does not have to win a combat to score Destroy their Greatest Ship.

• A player may score Destroy their Greatest Ship outside of a combat.

### Develop Weaponry

• A Valefar Assimilator technology will count if it is currently copying another player's faction unit upgrade technology.
    
• If the Nekro player owns both a generic unit upgrade technology and a faction unit upgrade technology of the same type, only the faction unit upgrade technology will count for Develop Weaponry.

### Dictate Policy

• Dictate Policy is scored after the third law resolves. As such, the Deadly Plot action card will prevent any player from scoring Dictate Policy.
    
• Dictate Policy is scored before any rider action cards are resolved.
    
• If there are three laws in play at the start of the agenda phase, a player may score Dictate Policy immediately.
    
• If the Political Data Nexus Xxcha hero ability puts a third law in play during the action phase, Dictate Policy cannot be scored until the agenda phase.

### Discover Lost Outposts

• The number of attachments a planet has is irrelevant, if it has at least one.

### Diversify Research

### Drive the Debate

• Any "For"/"Against" agenda cannot count for Drive the Debate, even if the outcome affects only a single player.
    
• Drive the Debate is scored immediately before the agenda resolves. The Confounding Legal Text and Confusing Legal Text action cards will allow only the newly elected player to score Drive the Debate, and the Deadly Plot action card will prevent any player from scoring Drive the Debate.
    
• Scoring Drive the Debate immediately before the Colonial Redistribution agenda is resolved may change which player(s) can be chosen to place the infantry on the elected planet.
	
• If a player draws Drive the Debate while resolving the Archived Secret or Search Warrant agendas, they cannot score it immediately.

### Engineer a Marvel

### Erect a Monument

• The resources must be spent during the status phase. Any resources that were spent during the action phase will have no effect.
    
• Trade goods may be spent as resources when scoring Erect a Monument.

### Establish a Perimeter

### Establish Hegemony

• With the right attachments, the requirements of Establish Hegemony may be met with a single planet.

### Expand Borders

• The planets cannot be in any player's home system, including those of eliminated players.

### Explore Deep Space

• The number of units in the system is irrelevant, if there is at least one.
    
• A system that contains a planet destroyed by the Stellar Converter relic, and no other planets, is considered to contain no planets.

### Fight with Precision

• Scoring Fight with Precision will count as that player's single secret objective scoring for that combat.
    
• Fight with Precision is scored immediately in the Anti-Fighter Barrage step of combat.

• A player does not have to win a combat to score Fight with Precision.

• If a player's last fighter in a system is destroyed, but an ability allows that player to then place fighters into that system, Fight with Precision may still be scored.

### Fight with Precision &Omega;

• Scoring Fight with Precision &Omega; will count as that player's single secret objective scoring for that combat.
    
• Fight with Precision is scored immediately in the Anti-Fighter Barrage step of combat.

• A player does not have to win a combat to score Fight with Precision.

• If a player's last fighter in a system is destroyed, but an ability allows that player to then place fighters into that system, Fight with Precision &Omega; may still be scored.
    
• Any effect that destroys fighters during the Anti-Fighter Barrage step may be used to score Fight with Precision &Omega;, not just hits produced by an anti-fighter barrage roll.

• For example, say a player plays the Courageous to the End action card when one of their fighters are destroyed during the Anti-Fighter Barrage step. If the dice roll causes their opponent to destroy their ships, and they choose their last fighter, that would allow the player to score Fight with Precision &Omega;.

### Forge an Alliance

### Form a Spy Network

• The action cards must be discarded during the status phase. Any action cards that were discarded during the action phase will have no effect.

### Form Galactic Brain Trust

### Foster Cohesion

• The Hacan player's Guild Ships faction ability and Trade Convoys promissory note does not make a player neighbors with all other players.
    
• If a player has units or controls a planet in a system containing an alpha wormhole, and the Creuss player has units or controls a planet in a system containing a beta wormhole, or vice versa, those two players are neighbors.

### Found a Golden Age

• The resources must be spent during the status phase. Any resources that were spent during the action phase will have no effect.
    
• Trade goods may be spent as resources when scoring Found a Golden Age.

### Found Research Outposts

### Fuel the War Machine

### Galvanize the People

• The command tokens must be spent during the status phase. Any command tokens that were spent during the action phase will have no effect.
    
• Any effect that triggers when a command token is spent will be triggered six times. For example, if the Muaat player has unlocked their commander, Magmus, they will gain six trade goods, one at a time, when scoring Galvanize the People.

### Gather a Mighty Fleet

### Hoard Raw Materials

• With the right attachments, the requirements of Hoard Raw Materials may be met with a single planet.

### Hold Vast Reserves

• The influence, resources and trade goods must be spent during the status phase. Any that were spent during the action phase will have no effect.
    
• A planet may be exhausted to spend either its resource or influence value, but not both.
    
• Trade goods may be spent as influence or resources when scoring Hold Vast Reserves.

### Improve Infrastructure

• The number of structures on the planet is irrelevant, if there is at least one.
    
• The structures may be on planets in another player's home system.
    
• The Saar player's Floating Factories cannot be used to score Improve Infrastructure.

### Intimidate Council

• Any ships in the Mecatol Rex system are irrelevant.
    
• Any ground forces or structures are irrelevant.

### Lead From the Front

• The command tokens must be spent during the status phase. Any command tokens that were spent during the action phase will have no effect.
    
• Any effect that triggers when a command token is spent will be triggered three times. For example, if the Muaat player has unlocked their commander, Magmus, they will gain three trade goods, one at a time when scoring Lead From the Front.

### Learn the Secrets of the Cosmos

• The three systems may be mutually adjacent to one system, or separate systems.
    
• Having ships in an anomaly is irrelevant, unless that system is also adjacent to another anomaly.
    
• Any ground forces or structures are irrelevant.
    
• Any system containing a Vuil'raith player's Dimensional Tear is a gravity rift, and thus, an anomaly.

### Make an Example of Their World

• If the last ground force is destroyed using the X-89 Bacterial Weapon &Omega; technology, Make an Example of Their World cannot be scored.
    
• Scoring Make an Example of Their World will not prevent that player from scoring a secret objective in any ground combats during this tactical action.
    
• If a player's last ground force on a planet is destroyed, but an ability allows that player to then place ground forces onto that planet, Make an Example of Their World may still be scored.
    
• The L1Z1X player may score Make an Example of Their World by using their Harrow faction ability. If they do they cannot score another objective during that ground combat.

### Make an Example of Their World &Omega;

• If the last ground force is destroyed using the X-89 Bacterial Weapon &Omega; technology, Make an Example of Their World &Omega; may be scored.
    
• Scoring Make an Example of Their World &Omega; will not prevent that player from scoring a secret objective in any ground combats during this tactical action.
    
• If a player's last ground force on a planet is destroyed, but an ability allows that player to then place ground forces onto that planet, Make an Example of Their World &Omega; may still be scored.
    
• The L1Z1X player cannot score Make an Example of Their World &Omega; by using their Harrow faction ability.

### Make History

• The number of units in the system is irrelevant, if there is at least one.
    
• A ship, ground force, or structure will all qualify for Make History.

• If one player has a ground force or structure on a planet in a qualifying system, and another player has a ship in the same system, both players may count the system towards the requirements of Make History.
        
• A player may have ships in the system containing a legendary planet or Mecatol Rex without controlling the planet for that system to count towards the requirements of Make History.

• If Mirage is placed in an anomaly, or the Nano-Forge relic is attached to a planet in an anomaly, that system will only count as one system towards the requirements of Make History.
    
• Any system containing a Vuil'raith player's Dimensional Tear is a gravity rift, and thus, an anomaly.

• If a Vuil'raith player's Dimensional Tear is in a system containing another anomaly, a legendary planet, or Mecatol Rex, that system will only count as one system towards the requirements of Make History.

### Manipulate Galactic Law

• The influence must be spent during the status phase. Any influence that was spent during the action phase will have no effect.
    
• Trade goods may be spent as influence when scoring Manipulate Galactic Law.

### Master the Laws of Physics

### Master the Sciences

### Mechanize the Military

• Given that each player only has four mechs, to score Mechanize the Military, a player will have to have all of them on the game board, and on separate planets.

### Mine Rare Minerals

### Monopolize Production

### Negotiate Trade Routes

• The trade goods must be spent during the status phase. Any trade goods that were spent during the action phase will have no effect.

### Occupy the Fringe

• The Saar player's Floating Factories are never on a planet.

### Occupy the Seat of the Empire

### Patrol Vast Territories

• The number of units in the system is irrelevant, if there is at least one.
    
• A system that contains a planet destroyed by the Stellar Converter relic, and no other planets, is considered to contain no planets.

### Populate the Outer Rim

• The number of units in the system is irrelevant, if there is at least one.
    
• A ship, ground force, or structure will all qualify for Populate the Outer Rim.

• If one player has a ground force or structure on a planet in a qualifying system, and another player has a ship in the same system, both players may count the system towards the requirements of Populate the Outer Rim.

• The units may be in another player's home system.
    
• The Creuss Gate is not a home system.
    
• The Wormhole Nexus and the Creuss home system are both on the edge of the game board.
    
• If the edge of a system tile is touching a hyperlane tile, that edge does not cause that system tile to be on the edge of the game board.

• When using the five- and seven-player hyperlane setups, the system tile in the center of the ring of hyperlanes is not on the edge of the game board.
        
• When using the seven- and eight-player alternate setups, only the system tiles designated as "Ring 3" and home systems are on the edge of the game board, along with the Creuss home system and the wormhole nexus.

### Produce en Masse

• The number of units in the system is irrelevant, if there is at least one.

### Protect the Border

• The number of structures on the planet is irrelevant, if there is at least one.
    
• The structures may be on planets in another player's home system.
    
• The Saar player's Floating Factories cannot be used to score Protect the Border.

### Prove Endurance

• Prove Endurance is scored when the player passes during the action phase. They may then score another secret objective in the status phase immediately following.

### Push Boundaries

• If a player has units or controls a planet in a system containing an alpha wormhole, and the Creuss player has units or controls a planet in a system containing a beta wormhole, or vice versa, those two players are neighbors.

### Raise a Fleet

### Reclaim Ancient Monuments

• The number of attachments a planet has is irrelevant, if it has at least one.

### Revolutionize Warfare

• A Valefar Assimilator technology will count if it is currently copying another player's faction unit upgrade technology.
    
• If the Nekro player owns both a generic unit upgrade technology and a faction unit upgrade technology of the same type, only the faction unit upgrade technology will count for Revolutionize Warfare.

### Rule Distant Lands

• A player will qualify for Rule Distant Lands if they can select two home systems other than their own, and they control a planet in or adjacent to each of those systems.
    
• The planets may meet the criteria by being adjacent to an eliminated player's home system.
    
• If a player controls a single planet in a home system that is adjacent to another home system via the use of wormholes, that planet alone will not qualify them for Rule Distant Lands.

### Seize an Icon

### Spark a Rebellion

• A player that currently outright has the most victory points cannot score Spark a Rebellion.
    
• If multiple players are tied for the most victory points, Spark a Rebellion may be scored by winning a combat against any of them.

• Spark a Rebellion may be scored by winning a combat against a player with zero victory points if all players have zero victory points.

### Stake Your Claim

### Strengthen Bonds

• The following promissory notes qualify for scoring Strengthen Bonds:

• Alliance.
        
• Support for the Throne.
        
• Stymie (Arborec).
        
• Trade Convoys (Hacan).
        
• Dark Pact (Empyrean).
        
• Blood Pact (Empyrean).
        
• Promise of Protection (Mentak).
        
• Gift of Prescience (Naalu).
        
• Antivirus (Nekro).
        
• Terraform (Ul).

### Subdue the Galaxy

• The planets cannot be in any player's home system, including those of eliminated players.

### Sway the Council

• The influence must be spent during the status phase. Any influence that was spent during the action phase will have no effect.
    
• Trade goods may be spent as influence when scoring Sway the Council.

### Threaten Enemies

• Any ships in another players home system are irrelevant.
    
• The ships may be adjacent to the home system of an eliminated player.
    
• Any ground forces or structures are irrelevant.

### Turn Their Fleets to Dust

• If the last ship is destroyed using a Direct Hit action card, Turn Their Fleets to Dust cannot be scored.
    
• If a player still has fighters in a system after assigning all hits produced during the Space Cannon Offense step, but is forced to remove all of them to meet capacity limits, Turn Their Fleets to Dust cannot be scored.
    
• If a player's last ship in a system is destroyed, but an ability allows that player to then place ships into that system, Turn Their Fleets to Dust may still be scored.
    
• Scoring Turn Their Fleets to Dust will not prevent that player from scoring a secret objective in the Space Combat step during this tactical action.

### Turn Their Fleets to Dust &Omega;

• If the last ship is destroyed using a Direct Hit action card, Turn Their Fleets to Dust &Omega; may be scored.
    
• If a player still has fighters in a system after assigning all hits produced during the Space Cannon Offense step, Turn Their Fleets to Dust &Omega; may be scored.
    
• If a player's last ship in a system is destroyed, but an ability allows that player to then place ships into that system, Turn Their Fleets to Dust &Omega; may still be scored.
    
• Scoring Turn Their Fleets to Dust &Omega; will not prevent that player from scoring a secret objective in the Space Combat step during this tactical action.
    
• If a system contains only fighters, then Turn Their Fleets to Dust &Omega; cannot be scored by destroying them.
    
• Any effect that destroys non-fighter ships during the Space Cannon Offense step may be used to score Turn Their Fleets to Dust &Omega;, not just hits produced by a space cannon roll.

• For example, say the Yin player has their flagship, the Van Hauge, destroyed during the Space Cannon Offense step. They may score Turn Their Fleets to Dust &Omega; if the effect of their flagship destroys all non-fighter ships owned by another player in the active system.

### Unify the Colonies

### Unveil Flagship

• If a player's flagship is destroyed during combat, but a later effect places it into the same combat, that player cannot score Unveil Flagship.`
    },
    {
        id: 'promissory_notes',
        type: 'promissory_notes',
        title: 'Promissory Notes',
        content: `For notes about a promissory notes of a specific faction, see that faction's notes page.

### Alliance

• An Alliance must be played by the receiving player as soon as it is received. It cannot be kept secret.

• If the active player receives an Alliance, they cannot then attempt to trade it with another player. It must be played immediately.

• Alliance is returned when the system is activated, even if the active player will perform no hostile acts towards the other player this turn.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the other player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Alliance to be returned.
    
• Activating a system containing only a player's structures will still cause their Alliance to be returned.
    
• For notes about a commander of a specific faction, see that faction's notes page.

### Ceasefire

• The active player may still use the Space Cannon ability of any units during the Space Cannon Offense step of the tactical action.
    
• If a player has units in the active system from before the tactical action in which their Ceasefire is played, those units will remain in the active system.
    
• If the active player already has units with capacity in the active system, they may transport ground forces on planets in that system into the space area of that system. Those units may then be committed to invade a planet during this tactical action.
    
• If a system containing only a player's ground forces or structures is activated, that player may still play the active player's Ceasefire.
    
• Ceasefire does not prevent a player from producing or placing units in the active system.

### Political Secret

• A player may still use abilities from their faction technology, leaders, or mechs after their Political Secret has been played.

• If a player has had their Political Secret played, other players may still use that player's other promissory notes.

• If an agenda is discarded, each Political Secret that has been played is returned. The affected players may vote on the next agenda as normal.
    
• The effect of Political Secret does not stop a player from using their passive faction ability, only the abilities that player may choose to use.

### Support For The Throne

• A Support For The Throne must be played by the receiving player as soon as it is received. It cannot be kept secret.

• If the active player receives a Support For The Throne, they cannot then attempt to trade it with another player. It must be played immediately.

• Support For The Throne is returned when the system is activated, even if the active player will perform no hostile acts towards the other player this turn.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the other player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Support For The Throne to be returned.
    
• Activating a system containing only a player's structures will still cause their Support For The Throne to be returned.
    
• If two players trade their Support For The Throne to one another simultaneously, the active player will be the first to gain a victory point.

• During the agenda phase, the first player in speaker order will be the first to gain a victory point.

### Trade Agreement

• If a player has their maximum number of commodities, and is instructed to replenish their commodities, they will take no commodities. However, that player's Trade Agreement may be played.
    
• A player does not have to be neighbors with the player that plays their Trade Agreement to give them their commodities.
    
• Trade Agreement cannot be played when a player gains commodities, only when they replenish commodities.`
    },
    {
        id: 'relics',
        type: 'relics',
        title: 'Relics',
        content: `### Book of Latvinia

• If a player owns all technologies without prerequisites when they draw the Book of Latvinia, they will not research any technologies.

• If a player owns all-but-one technologies without prerequisites when they draw the Book of Latvinia, they will research only that one technology.

• A player cannot gain a technology with a prerequisite by ignoring the prerequisite, such as by exhausting a planet with a technology specialty.
    
• If the Nekro player draws the Book of Latvinia, they will gain six command tokens and zero technologies, even if they own all technologies without prerequisites.
    
• When a player uses the component action of the Book of Latvinia, it is purged, regardless of which outcome is resolved.
    
• If a player uses the component action of the Book of Latvinia when they control planets with each type of technology specialty, they mandatorily gain a victory point; they cannot choose instead to gain the speaker token.

### Circlet of the Void

• The player that owns Circlet of the Void may move through or into supernovae and/or asteroid fields.
    
• The player that owns Circlet of the Void may move through nebulae, and their ships in nebulae do not have their movement values reduced.
    
• The player that owns Circlet of the Void still applies the movement bonus to their ships that will move through gravity rifts.
    
• The player that owns Circlet of the Void will still ignore anomaly movement effects and not roll for gravity rifts if Circlet of the Void is exhausted.

### The Codex

• The action card discard is shuffled to form a new action card deck as soon as the action card deck has zero cards in it.
    
• It is public knowledge which action cards a player takes using The Codex.

### The Crown of Emphidia

### The Crown of Thalnos

• A player may only reroll combat rolls with The Crown of Thalnos. They cannot reroll anti-fighter barrage rolls and similar.
    
• If a unit rolls multiple combat dice, it will not be destroyed if it produces at least one hit from its original roll, and that dice is not rerolled, even if it produces no hits from its reroll.

• For each unit that rolls multiple combat dice, the player with The Crown of Thalnos should roll those unit's dice separately from any other combat dice.

• A reroll caused by any other effect will not cause a unit to be destroyed.
    
• Units destroyed by The Crown of Thalnos are destroyed at the end of the Roll Dice step, before the Assign Hits step.
    
• A unit with the Sustain Damage ability cannot use it to avoid being destroyed when it fails to produce a hit with the reroll from The Crown of Thalnos.

### Dominus Orb

### Dynamis Core

• If a player uses the purge ability of Dynamis Core, they will need to return commodities if they now exceed their original commodity value.

### JR-XS455-O

• JR-XS455-O is an agent. All rules that apply to agents (and leaders) apply to JR-XS455-O.

• JR-XS455-O may be refreshed by the Nomad player's Temporal Command Suite technology.
        
• The ability of JR-XS455-O may be duplicated by the Yssaril player's agent, Ssruu, if the Yssaril player themselves do not own JR-XS455-O.

### Maw of Worlds

• The player does not have to meet the prerequisites of the technologies they acquire using Maw of Worlds.

### Nano-Forge

• The attached planet will not have a corresponding legendary planet ability card. However, it will be legendary for effects such as scoring the Make History and similar objectives, transferring the Shard of the Throne relic, and the Winnu player's commander, Rickar Rickani. The attached planet will also no longer be non-legendary for effects such as the Stellar Converter relic.

### Neuraloop

• A player may use Neuraloop to purge Neuraloop itself, resolving its ability.
    
• A player may use Neuraloop to purge Nano-Forge, even if it is attached to a planet, if they control that planet. That planet loses the increase to its resources and influence values, and is no longer legendary.
    
• If a player uses Neuraloop to purge another relic that has a purge ability, that purge ability is not resolved.
    
• If a player uses Neuraloop to purge the Circlet of the Void, that player's units may remain in and move out of any supernovae and/or asteroid fields they are currently in, but cannot move additional units into or through.
    
• If a player uses Neuraloop to purge the Dynamis Core, and they have more commodities than their faction's printed commodity value, they return any extras to the supply.
    
• If a player uses Neuraloop to purge The Obsidian, that player must discard one unscored secret objective if they have a total of four scored or unscored secret objectives. There is no effect if they have four scored secret objectives.
    
• If a player uses Neuraloop to purge the Shard of the Throne, that player loses a victory point.
    
• If a player uses Neuraloop to purge another relic, then that player may use Neuraloop again to replace the new objective with yet another objective.
    
• If a player uses Neuraloop to reveal a secret objective as a public objective, that objective does not count towards the limit of three scored or unscored secret objectives for any player that scores it.
    
• A player can score a maximum of one objective of any type during or after each combat. A player cannot score the secret objective revealed by Neuraloop and one of their own secret objectives from the same combat.
    
• A secret objective revealed by Neuraloop becomes a public objective and stops being a secret objective.
    
• The discarded objective is shuffled into its respective deck after the replacement objective is revealed.

• This happens before the player with Neuraloop chooses if they wish to purge another relic to replace the new objective. As such, it is possible for the player to reveal the original objective after purging two or more relics.

### The Obsidian

### The Prophet's Tears

• A player cannot use the ability of The Prophet's Tears when they directly gain a technology.
    
• The Nekro player may use the ability of The Prophet's Tears to draw an action card when they would have researched a technology.

### Scepter of Emelpar

• If a player has no command tokens in their reinforcements, they must use a command token from their command sheet instead when they use the ability of the Scepter of Emelpar.
    
• The Scepter of Emelpar may be used whenever a command token would be spent from a player's strategy pool. This includes when spending to perform the secondary ability of a strategy card, for faction abilities, and when scoring objectives.
    
• If the Muaat player uses the ability of the Scepter of Emelpar, they will not gain a trade good from the ability of their commander, Magmus.

### Shard of the Throne

• When the player that owns the Shard of the Throne loses control of a legendary planet or a planet in their home system, they immediately give it to the player who gained control of that planet. No abilities may be resolved before this.
    
• If the player that gains Shard of the Throne controls no legendary planets or planets in their home system, they cannot lose it.

### Stellar Converter

• The chosen planet must be in a system adjacent to the unit with bombardment; the planet and unit cannot both be in the same system.
    
• A system that contains a planet destroyed by Stellar Converter, and no other planets, is considered to contain no planets.
    
• A player cannot target a planet they control with Stellar Converter.`
    },
    {
        id: 'technology',
        type: 'technology',
        title: 'Technology',
        content: `For notes about specific generic unit upgrade technologies, see the unit component notes page.

For notes about technologies of a specific faction, see that faction's notes page.

### Antimass Deflectors

• The &minus;1 applies to space cannon rolls during both the Space Cannon Offense and Space Cannon Defense steps.

### Dark Energy Tap

• A ship may be moved into the system containing the frontier token during the same action that it is explored.
    
• Exploring the frontier token happens at the end of the tactical action. Notably, this is after the Space Cannon Offense and/or Space Combat steps.
    
• Exploring the frontier token is mandatory if the player has a ship in the active system at the end of the tactical action.
    
• When a player gains Dark Energy Tap, they do not immediately explore any frontier tokens in systems containing their ships. They must activate those systems to explore those tokens.

• If a player moves or places a ship into a system outside of a tactical action, they cannot explore a frontier token in that system.

• The Saar player cannot explore a frontier token with a Floating Factory. However, if they produce a ship during the Production step, they will be able to use that ship to explore the token.
    
• A player cannot use Dark Energy Tap to retreat into a system that contains another player's units, including ground forces and structures on planets.

### Gravity Drive

### Sling Relay

• The produced unit must be paid for.
    
• Sling Relay cannot be used without producing a unit.

### Fleet Logistics

• Effects that trigger at the start or end of a player's turn will not trigger between each of those player's actions.
    
• A player may use the ability of Fleet Logistics the same turn they gain it.
    
• If a player's turn is ended by a game effect, they cannot use Fleet Logistics to perform an additional action.
    
• A player cannot use Fleet Logistics to pass on the same turn they performed an action.
    
• If a player's second action would be to use a component action to play an action card, and that card is cancelled, they are not required to perform an alternate second action on that turn.

### Light/Wave Deflector

### Neural Motivator

• Neural Motivator does not apply when a player draws action cards from either of the abilities of the Politics action card, or any other effect outside of the status phase.
    
• Neural Motivator only applies to the Draw Action Card step of the status phase. It does not apply when a player draws action cards due to the effect of the Minister of Policy law or similar effects.

### Psychoarchaeology

• When researching a technology, each planet with a technology speciality can only be used to ignore a single prerequisite.
    
• Exhausting planets to gain trade goods can be done at any time during action phase, except when another ability is being resolved. For example, if a player has one of their planets with a technology specialty targeted with the Uprising action card, they cannot use Psychoarchaeology in response to gain a trade good.
    
• If multiple planets are exhausted, the trade goods are gained one at a time.

### Dacxive Animators

### Bio-Stims

### Hyper Metabolism

### X-89 Bacterial Weapon

### X-89 Bacterial Weapon &Omega;

• X-89 Bacterial Weapon &Omega; may be used against each planet in a system, if the conditions are met.
    
• X-89 Bacterial Weapon &Omega; will trigger only after all bombardment hits have been assigned. 
    
• The L1Z1X may use X-89 Bacterial Weapon &Omega; after they use their Harrow faction ability.

### X-89 Bacterial Weapon &Omega;&Omega;

• A player with X-89 Bacterial Weapon &Omega;&Omega; must mandatorily double the number of hits they produce.
    
• Effects that cancel hits will only cancel hits based on the doubled number of hits.
    
• Ground forces that are participating in space combat as though they were ships do not double the hits they produce.

• Ships that are participating in ground combat as though they were ground forces double the hits they produce.

• A player with X-89 Bacterial Weapon &Omega;&Omega; must mandatorily exhaust each planet they make a bombardment roll against, even if they produce no hits.
    
• A war sun must target the same planet with all three of its bombardment dice.

• If a unit may roll additional bombardment dice, such as by the Plasma Scoring technology, that additional dice must target the same planet.

• A player may roll for bombardment against a planet that contains no ground forces.

### Plasma Scoring

• Only one additional dice is rolled for each bombardment or space cannon roll, regardless of how many units are using that ability.

• During an invasion in a system with multiple planets, only one unit will add a dice to its bombardment roll.
        
• During an invasion, if ground forces have been committed to multiple planets, Plasma Scoring will add an additional dice to the space cannon rolls for each planet during the Space Cannon Defense step.

### AI Development Algorithm

• When exhausted, a prerequisite will be ignored, and AI Development Algorithm will still count towards meeting a warfare technology (red) prerequisite.

• For example, AI Development Algorithm alone may be used to research the Destroyer II unit upgrade.

### Magen Defense Grid

• Magen Defense Grid cannot be used if all of a player's units in combat that had the Planetary Shield ability have lost it.

### Magen Defense Grid &Omega;

• The player with Magen Defense Grid &Omega; chooses which ground force the hit is assigned to.
    
• The chosen ground force may cancel the hit by using its Sustain Damage ability, if present. A different ground force with the Sustain Damage ability cannot do so.
    
• If the last of a player's ground forces in a ground combat are destroyed by the effect of Magen Defense Grid &Omega;, that player loses the combat immediately. They will be unable to use any "start of combat" abilities.

### Magen Defense Grid &Omega;&Omega;

• The player with Magen Defense Grid &Omega;&Omega; chooses which ground force the hit is assigned to.
    
• The chosen ground force may cancel the hit by using its Sustain Damage ability, if present. A different ground force with the Sustain Damage ability cannot do so.
    
• If the last of a player's ground forces in a ground combat are destroyed by the effect of Magen Defense Grid &Omega;&Omega;, that player loses the combat immediately. They will be unable to use any "start of combat" abilities.
    
• Magen Defense Grid &Omega;&Omega; will place infantry regardless of who activates the system.
    
• If a player has multiple structures in the system, one infantry is placed with each.
    
• The infantry must be placed on the same planet as the structure.

• If the Saar player owns Magen Defense Grid &Omega;&Omega;, and a system containing a Floating Factory is activated, then the infantry will be placed in the space area.

### Self-Assembly Routines

• If multiple mechs are destroyed, the trade goods are gained one at a time.
    
• A mech cannot be placed in a space area with Self-Assembly Routines, and so cannot be placed in a system that does not contain a planet.
    
• If a player wishes to place a mech, but there are none left in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.
    
• A player will still gain the trade good for a destroyed mech if Self-Assembly Routines is exhausted.

### Duranium Armor

• A player must mandatorily repair a unit with Duranium Armor during each round of combat, if possible.
    
• Duranium Armor is used even if a player's opponent produced no hits during a round of combat.
    
• If a player starts a combat with a damaged unit, they use Duranium Armor in the first round of combat.

• A player may use Duranium Armor to repair a unit damaged by Space Cannon or Bombardment hits that occurred immediately before the combat.

• If a unit is damaged during combat without using its Sustain Damage ability, it may be repaired by Duranium Armor during the same combat round.
    
• Only units participating in the combat may be chosen to be repaired.

### Assault Cannon

• A player with Assault Cannon must mandatorily resolve its ability if they meet the requirement.
    
• If a player loses ships before they can resolve the Assault Cannon ability, they will be unable to resolve it if they no longer have three or more non-fighter ships.

• This will most commonly happen when both players in a combat have Assault Cannon, and the defender has exactly three non-fighter ships.
        
• Examples of other abilities that may remove units at the start of a space combat include the Creuss player's Dimensional Splicer faction technology ability, the Mentak player's Ambush faction ability, the Yin player's Impulse Core faction technology ability, as well as abilities such as the Courageous to the End action card or the Reflective Shielding action card that may trigger off of any of the previous abilities.

• A player may use an ability to add ships at the start of combat. If this brings the number of non-fighter ships to three or more, the player may then use the ability of Assault Cannon.

• Each other player may use one ability after that player has gained ships, and before that player has the opportunity to use the Assault Cannon ability. This may prevent that player from using the ability, as above.
        
• Examples of abilities that may add units at the start of space combat include a combination of the Mentak player's Sleeper Cell hero ability and their Ambush faction ability, the ability of the Nekro player's flagship, The Alastor, and the Naaz-Rokha player' Eidolon mech ability.

• Effects that cancel hits, such as Sustain Damage, cannot be used to prevent ships from being destroyed.

### Sarween Tools

• If units are produced without any unit using its Production ability, Sarween Tools will not provide a reduction to the cost.

### Scanlink Drone Network

• The units must be on the planet before the Movement step of the tactical action.

### Graviton Laser System

• If multiple players are resolving the Space Cannon ability of their units against the active player, the active player must resolve capacity limits after assigning one player's hits and before the next player makes their space cannon roll. 

### Predictive Intelligence

• Neither ability of Predictive Intelligence may be used if it is exhausted.
    
• If a player removes any tokens from their fleet pool, they will need to meet their new fleet pool limits before any other effects may resolve.

### Transit Diodes

• When resolving the ability of Transit Diodes, that player may remove ground forces from a system containing their command token.
    
• The ground forces may be removed from on a planet or from in a space area.
    
• The ground forces may be removed from different systems.
    
• The ground forces may be placed on different planets.
    
• If a mech is damaged when it is removed, it will remain damaged when it is placed.

### Integrated Economy

• The produced units must be paid for.
    
• There is no limit on the number of units produced, so long as the combined cost does not exceed the planet's resource value.
    
• Two fighters or two infantry have a combined cost of one resource.
    
• A player may produce ships with Integrated Economy, unless another player has ships in the space area of that planet's system.`
    },
    {
        id: 'units',
        type: 'units',
        title: 'Units',
        content: `For notes about specific faction unit upgrade technology, see that faction's notes page.

### War Sun

• A player without the war sun unit upgrade technology cannot produce, place or have a war sun on the board for any reason.

• The Muaat player may do so without owning their Prototype War Sun II faction unit upgrade technology.

• If a war sun's ability results in no units on a planet having the Planetary Shield ability, then the ability of the Magen Defense Grid technology cannot be used during ground combat on that planet.

• A war sun has no effect on the Magen Defense Grid &Omega; or Magen Defense Grid &Omega;&Omega; technologies.

### Flagship

• For notes about the flagship of a specific faction, see that faction's notes page.

### Dreadnought

### Carrier

### Cruiser

### Destroyer

### Fighter

• Fighters and ground forces do not count towards capacity during combat. As such, any number of Fighter II may be in a system during combat, regardless of capacity and fleet pool. This will usually only be caused by effects that place units in a system during combat. When combat ends however, units will need to be removed to meet capacity and fleet pool requirements.
    
• A ship cannot move through a system that contains Fighter II that are controlled by another player during the Movement step of a tactical action.
    
• Ships may be moved into, produced in or placed in a system even if doing so would exceed the fleet pool limit. However, some of those ships must immediately be removed to satisfy the limit. If some of those ships are fighters II, they may instead count towards that player's capacity in that system. If capacity is exceeded, fighters or ground forces must be removed to meet the limit.

### Mech

• See the mechs page of the Rules Reference.
    
• For notes about the mechs of a specific faction, see that faction's notes page.

### Infantry

• If a player controls no planets in their home system, at the start of their turn, any Infantry II that have been placed on that player's Infantry II unit upgrade technology card are returned to that player's reinforcements.
    
• A player need not use one of their twelve plastic infantry units to represent the infantry on their Infantry II unit upgrade card that will be placed in their home system at the start of their next turn, and may use cardboard infantry tokens to represent any and all of these infantry.

### PDS

• See the PDS page of the Rules Reference.

### Space Dock

• See the space dock page of the Rules Reference.`
    }
];

// Faction data from F_ files
export interface FactionRuleData {
    id: string;
    name: string;
    content: string;
}

export const FACTION_RULES: FactionRuleData[] = [
    {
        id: 'arborec',
        name: 'The Arborec',
        content: `### Mitosis

• If the Arborec player produces one or more units with a space dock, and produces any infantry with their Letani Warriors, the produced infantry may be placed on the same planet as the space dock, regardless of if that planet contains any Letani Warriors.
    
• The Arborec player may produce Letani Behemoth with their space docks.
    
• Placing the infantry during the status phase is mandatory (unless the Arborec player controls no planets).

### Stymie (Promissory Note)

• Stymie has no effect while it is in a player's hand.
    
• Stymie is returned when the system is activated, even if the active player will perform no hostile acts towards the Arborec player this turn.
    
• Activating a system containing only the Arborec player's structures will still cause Stymie to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Arborec player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Stymie to be returned.

### Stymie &Omega; (Promissory Note)

• If a player has no command tokens in their reinforcements, that player places one command token of their choice from their command sheet.
    
• Stymie cannot place a command token in the home system of an eliminated player.

### Bioplasmosis (Technology)

• Any number of infantry may move, but all movement is done simultaneously, and no infantry may move beyond an adjacent system. For example, consider a series of systems A-B-C. Only systems connected by a "-" are adjacent. In this case:

• An infantry cannot move from A to B, then B to C.
        
• An infantry may move from A to B, while another infantry moves from B to C.
        
• An infantry may move from A to B, while another infantry moves from C to B.
        
• An infantry may move from B to A, while another infantry moves from B to C.
        
• An infantry may move from A to B, while another infantry moves from B to A. This will have no meaningful effect.

• Bioplasmosis cannot move Letani Behemoth.

### Letani Warrior (Unit)

• The Arborec player cannot use the secondary ability of the Warfare strategy card to use the Production ability of a Letani Warrior.
    
• When multiple units use their Production ability, the Production value is pooled. As such, if the Arborec player has two Letani Warrior I in a system, they may produce two infantry for one resource, rather than two.
    
• If Letani Warriors are on different planets, any produced ground forces may be split between those planets, regardless of the production value of the Letani Warriors on that planet.

### Duha Menaimon (Flagship)

• The produced units must be paid for.
    
• The Duha Menaimon does not have Production. As such, the Sarween Tools technology and similar such effects do not apply to the Duha Menaimon.
    
• The Duha Menaimon must be in the system when it is activated for its effect to trigger. It will not trigger if it is moved into the active system later in the turn.

### Letani Ospha (Agent)

• The replaced ship is not destroyed. The replacing ship is not produced.

• The Sarween Tools technology and similar effects will not allow a more expensive ship to be placed.

• If the player wishes to place a ship, but there are none of that type left in their reinforcements, they may remove a ship of that type from any system that does not contain one of their command tokens and place that instead. This ship will be placed undamaged.
    
• A fighter may be placed with Letani Ospha.

### Dirzuga Rophal (Commander)

• The produced unit must be paid for.
    
• The unit is produced before ships move. A ship may be produced if no other player currently has ships in that system.
    
• No unit is using its Production ability. The Sarween Tools technology and similar effects will not apply.
    
• If a ground force is produced, it may be placed on any planet the Arborec player controls in that system, regardless of what units, if any, the Arborec player has on that planet. The produced ground force may also be placed in the space area of that system.
    
• If the Arborec player wishes to place a unit, but there are none of that type left in their reinforcements, they may remove a unit of that type from any system that does not contain one of their command tokens and place that instead. This unit will be placed undamaged.

### Letani Miasmiala — Ultrasonic Emitter (Hero)

• The produced units must all be paid for.
    
• A ship may be produced in the system only if no other player currently has ships in that system.
    
• No unit is using its Production ability. The Sarween Tools technology and similar effects will not apply.
    
• If a ground force is produced in a system, it may be placed on any planet the Arborec player controls in that system, regardless of what units, if any, the Arborec player has on that planet. The produced ground force may also be placed in the space area of that system.

### Letani Behemoth (Mech)

• The Arborec player may produce Letani Behemoth with their space docks.
    
• The Arborec player cannot use the secondary ability of the Warfare strategy card to use the Production ability of a Letani Behemoth.`
    },
    {
        id: 'argent',
        name: 'The Argent Flight',
        content: `### Zeal

• Additional votes must be cast for the same outcome as the other votes the Argent player cast.

• If the Argent player abstains or otherwise casts zero votes, they cannot cast additional votes.

• The Argent player always votes first, even if they are the speaker.
    
• Other players vote in their regular order after the Argent player votes; clockwise starting with the player to the left of the speaker (skipping over the Argent player as necessary).

### Raid Formation

• The Anti-Fighter Barrage step happens during each space combat, even if no fighters are present in the system.
    
• Raid Formation occurs when hits are produced, not after hits are assigned. As such, cancelling any hits will not prevent an opponent's ships from becoming damaged.

• If any of the anti-fighter barrage dice are rerolled, the number of ships that become damaged will depend only on the rerolled values.

• The Argent player may choose a damaged ship. This will have no effect.
    
• The chosen ship becomes damaged, it does not use its Sustain Damage ability. As such, effects that trigger when a ship uses its Sustain Damage ability, such as the Direct Hit or Reflective Shielding action cards, cannot be played.

• The chosen ship may be repaired by the Duranium Armor technology later in the same round of combat.
        
• If the Letnev player owns their Non-Euclidean Shielding faction technology, this will not reduce the number of ships that the Argent player chooses.
        
• The ships cannot be repaired by the effect of the Empyrean player's flagship, the Dynamo.

• If the Argent player plays the Waylay action card, hits in excess of their opponent's fighters will first cause chosen ships to become damaged, then those same hits must still be assigned.

• For example, say the opponent has three fighters and three dreadnoughts, undamaged. The Argent player plays Waylay, and rolls five hits. This allows them to cause two of the dreadnoughts to become damaged. The opponent then has to assign all five hits. The final dreadnought may use its Sustain Damage ability to cancel one of those hits.

• If the Argent player is in combat with the Nekro player, and the Nekro player has their mechs participating in the space combat via the effects of The Alastor, those mechs may become damaged by the effect of Raid Formation.

### Strike Wing Ambuscade (Promissory Note)

### Aerie Hololattice (Technology)

• The planet with "Production 1" is considered to be on itself for the purposes of producing ground forces.
    
• A player with the Light/Wave Deflector technology cannot move their ships through systems containing the Argent player's structures, if the Argent player owns Aerie Hololattice.

### Strike Wing Alpha (Unit)

• When a Strike Wing Alpha II rolls a 9 or 10 for their anti-fighter barrage ability, infantry are destroyed at the end of the Roll Dice step. This occurs before any ship may use its Sustain Damage ability at the start of the Assign Hits step.
    
• Effects that cancel hits, such as the Shields Holding action card, cannot prevent the infantry from being destroyed. If an effect rerolls any anti-fighter barrage dice, the new result will determine how many infantry are destroyed.
    
• If the last of a player's ground forces are destroyed by the ability of a Strike Wing Alpha II, and that player meets the other conditions for elimination, that player is immediately eliminated. All of their units are removed from the board, and the Argent player wins the combat.

### Quetzecoatl (Flagship)

• A player may still use the Space Cannon ability of their units against the Argent player's ground forces during the Space Cannon Defense step of an invasion in this system.

### Trilossa Aun Mirik (Agent)

### Trrakan Aun Zulok (Commander)

• Ships that gain Bombardment due to the Blitz action card will contribute to the unlock condition.

• The Experimental Battlestation action card will not contribute.

• "Combat" is a unit attribute, not a unit ability.

### Mirik Aun Sissiri — Helix Protocol (Hero)

• Fighters may be moved without being transported.
    
• Ships in systems with one of the Argent player's command tokens may move.
    
• Ships may transport units only if their origin system does not contain one of the Argent player's command tokens.

• A future rule change will allow a player's ships to transport units from systems that contain that player's command token when those ships move outside of a tactical action.

• Ships move directly to their destination system. They may only transport units from their origin system.
    
• Ships moving out of a gravity rift must roll for removal.
    
• Ships cannot move into a nebula or supernova, even if it contains one of the Argent player's command tokens.

• Ships may travel into an asteroid field only if the Argent player has the Antimass Deflectors technology.

• Helix Protocol may be used to move ships into the wormhole nexus. If the nexus is inactive, this will cause it to activate.

### Aerie Sentinel (Mech)

• An Aerie Sentinel cannot be transported by a ship without a capacity value.`
    },
    {
        id: 'creuss',
        name: 'The Ghosts of Creuss',
        content: `### Quantum Entanglement

• The effect of the Enforced Travel Ban law does not affect the Creuss player.
    
• If the Creuss player has units or controls planets in a system with an alpha wormhole, and another player has units or controls planets in a system with a beta wormhole, or vice versa, then the Creuss player and that player are neighbors.

• The Mentak player may use their Pillage ability against the Creuss player in this manner.

• If Mecatol Rex contains an alpha wormhole, then the "For" effect of the Ixthian Artifact agenda will not affect the Creuss player's units in a system with a beta wormhole (and no alpha wormhole), and vice versa.
    
• The Creuss player's Quantum Entanglement ability applies to their units with the Deep Space Cannon ability. Other players cannot use Quantum Entanglement to produce hits from a unit with the Deep Space Cannon ability against the Creuss player's units.

### Slipstream

• Slipstream does not apply to the Creuss Gate or to the Hil Colish, or to gamma wormholes.

### Creuss Gate

• A frontier token is placed in the Creuss Gate system during setup.
    
• Both the Creuss Gate and the Creuss home system (in standard game board setups) are on the edge of the board.

### Creuss IFF (Promissory Note)

• A player may receive the Creuss IFF in a transaction during their turn. If received at the start of that player's turn, that player may play it immediately.

• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive the Creuss IFF more than once per turn.
        
• If the active player received the Creuss IFF on a previous turn, they may play it and immediately perform a transaction with the Creuss player to regain it. However, the Creuss IFF cannot be played twice in one timing window. The active player cannot play the Creuss IFF again until their next turn.

• Any deal between the Creuss player and another player regarding where the wormhole tokens will be placed, if made before the Creuss IFF is exchanged, is non-binding.
    
• The Creuss IFF may be played even if the Creuss player has not researched Wormhole Generator.
    
• The Creuss IFF cannot place wormhole tokens in the home system of an eliminated player.

### Dimensional Splicer (Technology)

• Any wormhole may trigger Dimensional Splicer, including the one produced by the ability of the Hil Colish
    
• One hit will be produced even if the system contains multiple wormholes.
    
• The Creuss player chooses which ship the hit is assigned to.
    
• The Shields Holding action card may be used to cancel the hit.
    
• The chosen ship may cancel the hit by using its Sustain Damage ability, if present. A different ship with the Sustain Damage ability cannot do so.

• If the chosen ship does so, the Direct Hit and/or Reflective Shielding action cards may be used.

### Wormhole Generator (Technology)

• This ability is mandatory for the Creuss player in every status phase after it has been researched.

• The Creuss player may move a wormhole token from the system it is in into the same system.

• Wormhole Generator cannot place wormhole tokens in the home system of an eliminated player.

### Wormhole Generator &Omega; (Technology)

• The Creuss player may move a wormhole token from the system it is in into the same system.
    
• Wormhole Generator cannot place wormhole tokens in the home system of an eliminated player.

### Hil Colish (Flagship)

• If the Hil Colish moves first, then the Creuss player uses the new position of the Hil Colish when determining if the active system may be reached by their other ships.
    
• If the Hil Colish moves last, then it may move itself into (or through, if its move value is increased) the Creuss Gate or Creuss home system. Before it does so, the Creuss player's other ships may move through the wormhole created by the Hil Colish.

• The delta wormhole moves with the Hil Colish; it cannot move back to its origin system using its own delta wormhole.

• The Creuss player must declare all ships that will moving before they move the Hil Colish or their other ships. They then declare the path that the first ship(s) to move will travel along, and move those ship(s). They then declare the path that the other ship(s) to move will travel along, and move those ships. Any ships that were declared to move must, if it is possible to do so.

• If the Hil Colish is moved first, and is removed due to the effect of a gravity rift, other ships that were declared to move that can reach the destination system must do so, even if the path is through the gravity rift. Ships that cannot reach the active system do not move.
		
• The Creuss player cannot wait to see the result of their other ships' gravity rift rolls before deciding to move the Hil Colish; they must declare if the Hil Colish is moving at the same time they declare which other ships are moving.

• If the Hil Colish moves before or after other ships, it does not generate a second Space Cannon Offense step.
    
• A unit with the Deep Space Cannon ability may produce hits in systems adjacent to that unit via the delta wormhole in the Hil Colish's system. Most commonly, this will allow the Creuss player to target units in the Hil Colish's system from the space cannon rolls of units in their home system.
    
• If an effect allows another player to move through a system that contains the Creuss player's ships (such as the Light/Wave Deflector technology), that player may move through the delta wormhole in the Hil Colish's system.
    
• During space combat involving the Hil Colish, either player may retreat to another system containing a delta wormhole, if that system meets the other requirements for retreating.

• If the Hil Colish is destroyed between the Announce Retreats step and the Retreat step, then the retreating player must retreat to a different eligible system. If no such system exists, then their retreat is cancelled.

• When the Hil Colish retreats, it may retreat before or after the Creuss player's other ships, but cannot retreat in such a way that would prevent the other ships from retreating to the same system.

### Emissary Taivra (Agent)

• The Creuss player may use this ability to access the inactive wormhole nexus without a gamma wormhole. Moving ships into the wormhole nexus this way will cause it to flip.
    
• A delta wormhole in the system (such as from the Hil Colish) does not prevent this ability from being usable.
    
• If this ability is used, the active system will be adjacent to systems with delta wormholes.
    
• If a ship moves from the system containing the Ion Storm, it will not flip, unless the active player may move ships through the Ion Storm wormhole and chooses to do so.
    
• The system must have a non-delta wormhole in it at the moment of activation. If a wormhole is placed in a system with no other wormholes using the ability of an Icarus Drive, then Emissary Taivra cannot be used during the same activation.

• If a wormhole is placed at the start of a player's turn in the system using the Creuss IFF, then Emissary Taivra may be used for the activation immediately following.

### Sai Seravus (Commander)

• The fighters are placed one at a time, until either one has been placed for each ship with capacity that moved through a wormhole, or the capacity of the system is reached.

• The Creuss player cannot remove a ground force to create capacity for a fighter.
        
• The Creuss cannot place additional fighters once they have fighters and infantry in the space area equal to their capacity in that system, even if they have unused fleet pool and the fighter II unit upgrade technology.
        
• If the Creuss player has a space dock in the active system, they may consider some of the fighters they place as held by the space dock, in order to continue placing fighters.

• This ability may be used whenever the Creuss player's ships move, not just during the movement step of a tactical action.

• If the Creuss player retreats from a combat, then they will have no capacity in the active system, and so cannot place any fighters there.
        
• If the Mahact player uses their Benediction hero ability to move the Creuss player's ships, then the Creuss player may use this ability.

• A ship may move out of a system and back into the same system during tactical action movement, if its move value is high enough. If the Creuss player does this with a ship with capacity, and moves in this manner via a wormhole, they may place a fighter, if possible.
    
• When the Creuss player moves a ship through a wormhole, ending in a system that contains an alpha or beta wormhole and unlocks Sai Seravus, they cannot apply its ability to that movement.

• If the Creuss player moves the Hil Colish separately from other ships during the same Move Ships step, Sai Seravus cannot unlock until all movement is completed.

### Riftwalker Meian — Singularity Reactor (Hero)

• Any units and tokens on either system are moved with their system.

### Icarus Drive (Mech)

• The Icarus Drive does not have to be in the activated system.
    
• The wormhole token is placed in the system the Icarus Drive was in.`
    },
    {
        id: 'empyrean',
        name: 'The Empyrean',
        content: `### Voidborn

• This effect also applies outside the Movement step.
    
• The Empyrean player treats nebulae as nebulae and as anomalies for all other game purposes.

• When the Empyrean player is the defender during a space combat in a nebula, they will receive the +1 to their combat rolls.

### Aetherpassage

• The Empyrean player does not decide to use this ability until after the other player has activated a system. Any deal made to use this ability before the system has been activated is non-binding.

### Dark Whispers

### Blood Pact (Promissory Note)

• Both players must cast at least one vote to trigger the additional votes.

• If either player cannot vote on an agenda, then the additional votes will not trigger for that agenda.

• Blood Pact has no effect while it is in a player's hand.
    
• Blood Pact is returned when the system is activated, even if the active player will perform no hostile acts towards the Empyrean player this turn.
    
• Activating a system containing only the Empyrean player's structures will still cause Blood Pact to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Empyrean player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Blood Pact to be returned.

### Dark Pact (Promissory Note)

• A player cannot have more commodities than their commodity value.
    
• If the Empyrean player plays a player's Trade Agreement promissory note, this will count for that player giving the Empyrean player all their commodities.
    
• The trade goods gained from Dark Pact are gained simultaneously with the commodities transacted between the two players. As a pair of players is limited to one transaction per turn (which must involve the active player) or per agenda, the two players cannot then perform a transaction for these trade goods on the same turn.
    
• As the trade goods from Dark Pact are gained simultaneously with any commodities and/or trade goods transacted, the Mentak player may only use their Pillage ability on each player once per Dark Pact transaction.
    
• Dark Pact has no effect while it is in a player's hand.
    
• Dark Pact is returned when the system is activated, even if the active player will perform no hostile acts towards the Empyrean player this turn.
    
• Activating a system containing only the Empyrean player's structures will still cause Dark Pact to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Empyrean player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Dark Pact to be returned.

### Aetherstream (Technology)

• The Empyrean player does not decide to use this ability until after the other player has activated a system. Any deal made to use this ability before the system has been activated is non-binding.
    
• A system is not adjacent to itself. If a system with an anomaly is activated, Aetherstream will not give any ships +1 to their move value, unless that system is adjacent to another anomaly.

### Voidwatch (Technology)

• The active player chooses which promissory note they give the Empyrean player.

### Dynamo (Flagship)

• A unit may only use its Sustain Damage ability once in each Assign Hits step, even if it is repaired.
    
• A unit that becomes damaged without using its Sustain Damage ability will not trigger this effect.
    
• A player may play a Direct Hit action card during the same timing window as this ability. If they do so, the ship is destroyed.
    
• Each unit using its Sustain Damage ability creates a separate timing window. As such, any excess influence used to repair a ship is wasted, and cannot be used to repair a different ship.

• As an example, The Dark may be exhausted to repair only one ship, not two.

### Acamar (Agent)

• Exhausting Acamar is a cost. Acamar cannot be used if it is exhausted.
    
• A system that contains a planet destroyed by the Stellar Converter relic, and no other planets, is considered to contain no planets.

### Xuange (Commander)

• While the agenda phase and the Hacan player's Trade Convoys promissory note allow a player to resolve transactions with all other players, they do not make that player neighbors with all other players.
    
• Any movement of ships can trigger this ability, not just movement during the Move Ships step of a tactical action.
    
• If the Empyrean player becomes neighbors with all players when the final player moves ships into a system containing one of the Empyrean player's command tokens, Xuange will unlock, but the Empyrean player will not be able to resolve its ability from that movement.
    
• If the Empyrean player moves a ship into a system containing one of the Saar player's Floating Factories, and no other ships, that Floating Factory will by blockaded and destroyed before the Empyrean player can unlock Xuange. If the Empyrean and Saar players are not neighbors in any other way, then Xuange will not unlock.

### Conservator Procyon — Multiverse Shift (Hero)

• The Empyrean player chooses the order of exploration.
    
• A system that contains a planet destroyed by the Stellar Converter relic, and no other planets, is considered to contain no planets. Multiverse Shift will place a frontier token in such a system.

### Watcher (Mech)

• This effect may cancel a Sabotage action card.
    
• The Watcher must be adjacent to the other player's units during the timing window when the action card is played in order to cancel it.

• In particular, if an action card is played "when/after you activate a system" or similar, then the Watcher must be adjacent before any ships move during that tactical action.

• If a player has a second copy of an action card, they may play it if the first was cancelled by a Watcher.
    
• If an action card is cancelled by a Watcher, no costs are paid.
    
• A player playing an action card announces the following before a Watcher may be triggered:

• Any targeted planets, system, units, players, cards, outcomes, and/or other such objects.
        
• The value of any variable cost to be paid.

• Any dice are rolled and any cards are drawn only after the Empyrean player has declined to remove a Watcher.
    
• If an action card instructs a player to research a technology, that player need not announce what technology they are researching until the Empyrean player has declined to remove a Watcher.
    
• If an action card is played that will have an effect later, such as a rider, that card may only be cancelled by a Watcher when it is originally played.
    
• If the action card that was cancelled by a Watcher was to be used to perform a component action, the active player must perform a different action, or pass.

• If the component action was to be the second action the active player was to perform on their turn, through an effect such as the Fleet Logistics technology, the active player may end their turn without performing a second action and without passing.`
    },
    {
        id: 'hacan',
        name: 'The Emirates of Hacan',
        content: `### Masters of Trade

• If the Hacan player has the Muaat player's Alliance promissory note, they will not gain a trade good from it when they use their Masters of Trade ability.

### Guild Ships

• This ability does not make the Hacan player neighbors with all other players.
    
• Either player may initiate negotiations for a transaction.
    
• The Hacan player is still limited to one transaction with every other player per turn.

### Arbiters

• Any number of action cards may be traded.
    
• A player may receive action cards even if doing so would put them over the seven action card hand limit. They must immediately discard down to seven action cards in this case.
    
• If the Hacan player has more than seven action cards, they must immediately discard down to seven action cards. They cannot trade away the excess.
    
• If the Hacan player has their Political Secret played during an agenda, they may still trade action cards, as Arbiters is a passive ability.

### Trade Convoys (Promissory Note)

• This ability does not make the player neighbors with all other players.
    
• Either player may initiate negotiations for a transaction.
    
• The player with Trade Convoys in play is still limited to one transaction with every other player per turn.
    
• Trade Convoys has no effect while it is in a player's hand.
    
• Trade Convoys is returned when the system is activated, even if the active player will perform no hostile acts towards the Hacan player this turn.
    
• Activating a system containing only the Hacan player's structures will still cause Trade Convoys to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Hacan player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Trade Convoys to be returned.

### Production Biomes (Technology)

### Quantum Datahub Node (Technology)

• If either strategy card had trade goods on it at the start of the strategy phase, those trade goods remain with the player that originally chose the strategy card.
    
• In a three- or four-player game, the Hacan player chooses which strategy cards are swapped.
    
• The Hacan player must have three trade goods before they spend the command token; they cannot use the Muaat player's Alliance promissory note to gain the third trade good.

### Wrath of Kenara (Flagship)

• This ability may be triggered only once for each die rolled. The Hacan player cannot spend two (or more) trade goods to apply +2 (or more) to a single die, but they may spend two (or more) trade goods to apply +1 to each of two (or more) dice.

### Carth of Golden Sands (Agent)

• A player that has their maximum number of commodities may have their commodities replenished. If this happens, they will take no commodities. However, they will still trigger any "when [this] player replenishes commodities" effects, most notably the Trade Agreement promissory note.
    
• The Hacan player cannot have more than six commodities.
    
• The ability of Carth of Golden Sands cannot be resolved while another ability is resolving. For example, if the Hacan player is exploring an industrial planet and has revealed the card, they cannot use the ability of Carth of Golden Sands until after they resolve the card's effect.

### Gila the Silvertongue (Commander)

• Additional votes must be cast for the same outcome as the other votes the Hacan player cast.

• If the Hacan player abstains or otherwise casts zero votes, they cannot cast additional votes.
        
• If another player has the Hacan player's Alliance promissory note, their additional votes must be cast for the same outcome they cast their other votes for.

### Harrugh Gefhara — Galactic Securities Net (Hero)

• Production limits still apply.

### Pride of Kenara (Mech)

• Structures are also moved.
    
• The planet cannot be traded during combat.`
    },
    {
        id: 'jol_nar',
        name: 'The Universities of Jol-Nar',
        content: `### Fragile

• The Fragile ability does not affect anti-fighter barrage, bombardment or space cannon rolls.
    
• The effect of the Fragile ability is mandatory.

### Brilliant

### Analytical

### Research Agreement (Promissory Note)

• If the Jol-Nar player will research several technologies in a row, then after each, the player holding Research Agreement may play it. The Jol-Nar player does not decide the next technology they will research until after the player holding the Research Agreement plays it or declines to.
    
• If a player receives Research Agreement in a transaction immediately after the Jol-Nar player researched a technology, that player may play it immediately to gain that technology.

• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive Research Agreement more than once per turn.
        
• Once a player has used Research Agreement after the Jol-Nar player researches a technology, no other player may use Research Agreement for that same Jol-Nar research instance to gain the same technology.
        
• If the active player received the Research Agreement on a previous turn, they may play it and immediately perform a transaction with the Jol-Nar player to regain it. They may then play it when the Jol-Nar player researches their next technology.

• Any deal between the Jol-Nar player and another player regarding when Research Agreement will be played, if made before Research Agreement is exchanged, is non-binding.
    
• If a faction has a faction-specific unit upgrade as one of their faction technologies, they cannot gain that unit upgrade from Research Agreement when the Jol-Nar player researches the generic version of that unit upgrade.
    
• Research Agreement may be triggered when the Jol-Nar player reseaches a technology outside of the Technology strategy card. For example, it may be triggered by the Divert Funding action card, the Focused Research action card, the Reveal Prototype action card, the Technology Rider action card, the Ixthian Artifact agenda, the Wormhole Research agenda, or the Enigmatic Device exploration card.

• Research Agreement cannot be triggered by a game effect that instructs the Jol-Nar player to directly gain a technology, without researching. For example, it cannot be triggered by the Fire of the Gashlai Muaat faction promissory note, the Plagiarize action card, the Research Grant Reallocation agenda, or the Maw of Worlds relic.
        
• Research Agreement cannot be triggered when the Jol-Nar player resolves Genetic Memory.

### E-Res Siphons (Technology)

• E-Res Siphons ability is triggered when the system is activated, even if the active player will perform no hostile acts towards the Jol-Nar player this turn.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Jol-Nar player's ships (for example, the primary ability of the Diplomacy strategy card), this will not cause E-Res Siphons ability to trigger.

### Spatial Conduit Cylinder (Technology)

• Other players may use the Deep Space Cannon ability of units in the same system as a Jol-Nar player's unit to produce hits during the Space Cannon Offense step.
    
• If the Jol-Nar player moves ships out of a gravity rift, they must still roll for removal.
    
• If its move value is high enough, a ship may still travel through other systems as it moves to the active system. This will allow a ship with capacity to transport units as normal from a system it did not start its movement in.

### J.N.S. Hylarim (Flagship)

### Doctor Sucaban (Agent)

• If the Jol-Nar player has the Infantry II unit upgrade, any of their infantry removed with Doctor Sucaban will not roll for resurrection.

### Ta Zern (Commander)

• "Combat" is a unit attribute, not a unit ability; Ta Zern cannot reroll combat dice.
    
• Ta Zern cannot be used to reroll dice for an Infantry II resurrection ability.

### Rin, The Master's Legacy — Genetic Memory (Hero)

• The Jol-Nar player does not have to meet the prerequisites of the technologies they acquire.
    
• All replacements happen simultaneously. If this ability returns a specific technology, it cannot then be regained via this ability.
    
• If the Jol-Nar player later gains a technology they returned, they gain it readied.

### Shield Paling (Mech)

• The Shield Paling itself is still affected by the Fragile ability.`
    },
    {
        id: 'keleres',
        name: 'Council Keleres',
        content: `### The Tribunii

• The Keleres player chooses their starting technology after all other players, including the Argent and Winnu players, have gained their starting technologies.
    
• If there are not two unique starting technologies amongst those owned by other players, the Keleres player will start the game with fewer technologies. This will most commonly happen in a three player game, where one of the other players is playing as N'orr or Winnu.

### Council Patronage

• The Keleres player must mandatorily replenish their commodities and gain a trade good every strategy phase.
    
• If the Keleres player already has two commodities, they will still replenish their commodities during the strategy phase. This will not give them additional commodities, but will trigger any effects that happen when the Keleres player replenishes their commodities.
    
• If another player is holding the Keleres player's Trade Agreement promissory note, they may use it when the Keleres player replenishes commodities from Council Patronage.

### Law's Order

• The blanked laws come back into effect at the end of the turn.
    
• If this ability is used, all laws are blanked. The Keleres player cannot choose for some laws to remain in effect.
    
• If the Keleres player owns the Political Censure law, they will not lose a victory point when it is blanked, and they may use action cards during this turn.

• If the Keleres player then uses the Repeal Law action card, targeting the Political Censure law, then it will be discarded without the Keleres player losing the victory point.

• The Keleres player and all of the other players treat all laws as blank for the turn.

### Keleres Rider (Promissory Note)

• After playing Keleres Rider, a player may use additional abilities, including playing other rider cards.

• Any other riders may be played to predict the same or a different outcome.

• The effect of a successful Keleres Rider will be resolved after the effect of the agenda.
    
• A player who cannot vote may still play a Keleres Rider.
    
• A player who cannot play action cards may still play a Keleres Rider.

### Agency Supply Network (Technology)

• Any abilities that trigger "when/after a unit uses Production" will trigger an additional time, for example, the Sarween Tools technology.
    
• The additional Production ability cannot belong to the same unit as the original Production ability.

• During a tactical action, the active player must use every Production ability of their units in the active system, or none of them. As such, the additional Production ability must belong to a unit in a different system.
        
• When the Keleres player resolves the secondary ability of the Warfare strategy card, they use the Production ability of a single space dock in their home system. As such, they may use the Production ability of a second unit in their home system, if present.

• The Keleres player may use Custodia Vigilia as the additional Production ability, and when they use Custodia Vigilia as the original Production ability, they may use an additional Production ability.
    
• The original Production ability must be fully resolved, before the Keleres player may use an additional Production ability.

• The Keleres player cannot pay one resource for two fighters or infantry, then place one with a unit using the original Production ability and one with the unit using the additional Production ability.

### I.I.H.Q. Modernization (Technology)

• If the Keleres player is neighbors with another player, that player is neighbors with the Keleres player.

### Custodia Vigilia (Legendary Planet)

• The Custodia Vigilia planet card is gained exhausted.
    
• Units cannot be placed on Custodia Vigilia.
    
• Custodia Vigilia is not adjacent to any system, unit, player or other planet.
    
• The Keleres player cannot lose control of Custodia Vigilia.

• The Keleres player cannot be eliminated once they control Custodia Vigilia.

• Custodia Vigilia may be used to qualify for objectives, if it meets any other requirements listed.

• Custodia Vigilia cannot be used to qualify for any objective that requires planets in a system.

• Custodia Vigilia may be elected by any "elect planet" agendas. However, Custodia Vigilia may be immune to the effects of the agenda.
    
• A player gains victory points from the Imperial strategy card only if they control Mecatol Rex. If they use the Imperial strategy card to score an objective, then they gain victory points from that objective, and not the Imperial strategy card.
    
• The Keleres player may use a command token to perform the secondary of Imperial during the same strategic action that they gained that token.
    
• When the Keleres player uses the Production ability of Custodia Vigilia, it is treated as though the Keleres player was using the Production abilitiy of one of their units on Mecatol Rex.

• This may trigger the abilities of the Sarween Tools technology, and other similar abilities.
        
• Custodia Vigilia counts towards scoring the Produce en Masse objective within the Mecatol Rex system.

• The Ul player's Terraform faction promissory note may be attached to Custodia Vigilia.

• If Terraform is attached to Custodia Vigilia, it may be explored. However, Custodia Vigilia may be immune to the effects of some exploration cards.

### Artemiris (Flagship)

• If a player cannot spend two influence, they cannot activate the system containing the Artemiris.

### Xander Alexin Victori III (Agent)

• Xander Alexin Victori III applies to only a single instance of spending trade goods.

### Suffi An (Commander)

• The trade good to unlock Suffi An is spent after, and independent of, any trade goods spent while resolving the action card.
    
• If the Keleres player uses their additional action to perform another component action, they may perform another additional action. They may do this any number of times.
    
• Suffi An does not trigger from the component action of the action card used that was to unlock her.

• If the Keleres player can perform a second action through some other game effect (such as the Fleet Logistics technology), they may unlock Suffi An by playing an action card with a component action for their first action, then perform a second component action, which will then allow them to perform a third action because of Suffi An.

• If a player's turn is ended by a game effect, they cannot use Suffi An to perform an additional action.
    
• A player cannot use Suffi An to pass on the same turn they performed an action.
    
• If a player's additional action would be to use a component action to play an action card, and that card is cancelled, they are not required to perform an alternate additional action on that turn.

### Harka Leeds — Erwan's Covenant (Hero)

### Kuuasi Aun Jalatai — Overwing Zeta (Hero)

• The Keleres player must be participating in the combat in order to resolve Overwing Zeta.
    
• If a player wishes to place a ship, but there are none of that type left in their reinforcements, they may remove a ship of that type from any system that does not contain one of their command tokens and place that instead.
    
• Overwing Zeta may be played at the start of any round of combat, not just the first.

• Overwing Zeta may be played in a round following the Artemiris being destroyed.

### Odlynn Myrr — Operation Archon (Hero)

• The additional votes are not cast until the Keleres player casts votes normally.
    
• The Keleres player may vote for a different outcome than the one they predicted. If they do, they will gain one trade good and one command token.

### Omniopiares (Mech)

• If a planet contains multiple mechs, the invading player must pay one influence for each, as separate payments. For example, if all four mechs were on a planet, the invading player could only exhaust Meer to pay for one instance of the ability; they would still have three instances of a single influence to pay.`
    },
    {
        id: 'letnev',
        name: 'The Barony of Letnev',
        content: `### Munitions Reserves

• Munitions Reserves may only be triggered once per round. The Letnev player cannot spend four (or more) trade goods to get two (or more) rerolls.

### Armada

• If the Letnev player has zero command tokens in their fleet pool, they may still have ships on the game board. While this is the case, effects that remove command tokens from a player's fleet pool cannot affect the Letnev player.

### War Funding (Promissory Note)

• A player may play War Funding when the Letnev player has zero or one trade goods. The Letnev player will lose the single trade good, if applicable, and the other effects will resolve as normal.
    
• A player may receive War Funding in a transaction during a combat. If received at the start of a round, that player may play it immediately.

• A transaction must involve the active player. As such, the defender will be unable to receive War Funding.
        
• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive War Funding more than once per turn.
        
• If the active player received War Funding on a previous turn, they may play it and immediately perform a transaction with the Letnev player to regain it. However, War Funding cannot be played twice in one timing window. The active player cannot play War Funding again until the next round of combat.
        
• If the attacker receives War Funding after the defender has played it, the attacker cannot play it during the same round of combat.

### War Funding &Omega; (Promissory Note)

• A player may receive War Funding &Omega;  in a transaction during a combat. If received after dice are rolled, that player may play it immediately.

• A transaction must involve the active player. As such, the defender will be unable to receive War Funding &Omega;.
        
• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive War Funding &Omega; more than once per turn.
        
• If the active player received War Funding &Omega; on a previous turn, they may play it and immediately perform a transaction with the Letnev player to regain it. However, War Funding &Omega; cannot be played twice in one timing window. The active player cannot play War Funding again until the next round of combat.
        
• If the attacker receives War Funding &Omega; after the defender has played it, the attacker cannot play it during the same round of combat.

• A player may only reroll combat rolls with War Funding &Omega;. They cannot reroll anti-fighter barrage rolls and similar.

### L4 Disruptors (Technology)

• A player may still use the Space Cannon ability of their units against the Letnev player's ships during the Space Cannon Offense step in this system.

### Non-Euclidean Shielding (Technology)

• Non-Euclidean Shielding may be applied when a Dunlain Reaper uses its Sustain damage ability.
    
• Non-Euclidean Shielding applies whenever hits are produced. This includes hits produced by Bombardment and Space Cannon abilities.
    
• If there are multiple hits that can be cancelled, then the Letnev player must cancel two hits whenever one of their units uses its Sustain damage ability; they cannot cancel just one.
    
• Say the Letnev player has exactly one hit produced against them remaining, and one of their units uses its Sustain damage ability to cancel it. If additional hits are produced against the Letnev player's units, such as with the Reflective Shielding action card, the Letnev player cannot retroactively use the previous use of Sustain damage to allow Non-Euclidean Shielding to cancel a second hit.

### Arc Secundus (Flagship)

• The Arc Secundus is not repaired at the end of combat.
    
• The Arc Secundus only uses its repair ability during combats it is participating in.
    
• If the ability of the Arc Secundus results in no units on a planet having the Planetary Shield ability, then the ability of the Magen Defense Grid technology cannot be used during ground combat on that planet.

• The Arc Secundus has no effect on the Magen Defense Grid &Omega; or Magen Defense Grid &Omega;&Omega; technologies.

### Viscount Unlenn (Agent)

• This ability only applies to combat rolls. It does not apply to dice rolls for a unit's Anti-Fighter Barrage ability.
    
• The extra dice is mandatory for the chosen unit.

### Rear Admiral Farran (Commander)

• If the Letnev player has more ships in a system than allowed for by their fleet pool plus Armada, they must first remove ships to meet this limit before they can unlock Rear Admiral Farran.
    
• This effect may be applied when a Dunlain Reaper uses its Sustain damage ability.

• If the Ul player has the Letnev player's Alliance promissory note, then this effect may be applied when a Hel-Titan PDS uses its Sustain damage ability.

• A unit that becomes damaged without using its Sustain Damage ability will not trigger this effect.
    
• If multiple units use their Sustain Damage ability within a single step, the trade goods are gained one at a time.

### Darktalon Treilla — Dark Matter Affinity (Hero)

• The game round ends after the agenda phase (or the status phase if the custodians token is yet to be removed from Mecatol Rex).
    
• At the end of the game round the Letnev player might need to remove ships from the board to satisfy fleet pool limits.

### Dunlain Reaper (Mech)

• A Deploy ability may be resolved only once per timing window. As such, the Letnev player may only place one Dunlain Reaper this way per ground combat round.

• Further Dunlain Reapers may be placed in later rounds.

• A Deploy ability may only be resolved for units in a player's reinforcements. If all four Dunlain Reapers are already on the board, no Dunlain Reaper may be deployed.

• If a Dunlain Reaper is destroyed during combat, then another may be deployed in a later round of the same combat.`
    },
    {
        id: 'lizix',
        name: 'The L1Z1X Mindnet',
        content: `### Assimilate

• Any space docks that are placed by this ability during a tactical action may produce units during the Production step of that tactical action.
    
• If the L1Z1X player resolves their Assimilate ability, and then plays the Infiltrate action card, or vice versa, they will replace zero PDS and space docks with zero PDS and space docks when they resolve the latter ability.
    
• If the L1Z1X player would have to place a structure, but there are none of that type left in their reinforcements, they may remove a structure of that type from any system that does not contain one of their command tokens and place that instead.
    
• The L1Z1X player must mandatorily replace every structure. However, if there are none of that type in their reinforcements they are not forced to do so.

### Harrow

• The Planetary Shield ability will prevent the use of the Harrow ability on a planet.
    
• The L1Z1X player cannot use their Harrow ability if they are not the active player. This will most commonly occur due to the effect of the N'orr player's commander, G'hom Sek'kus.
    
• The L1Z1X player may use their Harrow ability at the end of the round in which their last ground force was destroyed. This may cause the combat to end in a draw.
    
• During the Bombardment step, each of the L1Z1X player's units with the Bombardment ability is assigned only one planet to bombard. However, during ground combat, every unit in the system with the Bombardment ability may use it against the planet the ground combat is taking place on.

• An Annihilator may bombard when using Harrow if that mech is not currently participating in ground combat, even if it has been committed to a different planet, and has been or will be involved in another ground combat during the current invasion.

• The L1Z1X player may use the ability of the X-89 Bacterial Weapon &Omega; or X-89 Bacterial Weapon &Omega;&Omega; technologies whenever they bombard.

### Cybernetic Enhancements (Promissory Note)

• If the L1Z1X player has no command tokens in their strategy pool, Cybernetic Enhancements cannot be played.

### Cybernetic Enhancements &Omega; (Promissory Note)

### Inheritance Systems (Technology)

• The two resources for Inheritance Systems must be paid in addition to and separately from any other costs paid to research the technology. For example, if the L1Z1X player is performing the secondary of the Technology strategy card, they cannot spend the five resources of [0.0.0] plus one trade good to pay for the costs of both Technology and Inheritance Systems. Instead, they would have to spend [0.0.0] to pay for the cost of Technology, wasting the fifth resource, then spend two trade goods to pay for the cost of Inheritance Systems.

### Super Dreadnought (Unit)

### [0.0.1] (Flagship)

### I48S (Agent)

• The infantry must be in the system when it is activated for it to be eligible to be replaced. It cannot be replaced if it is moved into or produced in the active system later in the turn.
    
• If a player wishes to place a mech, but there are none left in their reinforcements, they may remove a mech from any system that does not contain one of their command tokens and place that instead. The mech will be placed undamaged.

### 2RAM (Commander)

• Those units still have Planetary Shield. The player that owns those units may still use the ability of the Magen Defense Grid technology.

### The Helmsman — Dark Space Navigation (Hero)

• Ships in systems with one of the L1Z1X player's command tokens may move.
    
• Ships may transport units only if their origin system does not contain one of the L1Z1X player's command tokens.

• A future rule change will allow a player's ships to transport units from systems that contain that player's command token when those ships move outside of a tactical action.

• Ships move directly to their destination system. They may only transport units from their origin system.
    
• Ships moving out of a gravity rift must roll for removal.
    
• Ships cannot move into a nebula or supernova, even if it contains one of the L1Z1X player's command tokens.

• Ships may travel into an asteroid field only if the L1Z1X player owns the Antimass Deflectors technology.

• Dark Space Navigation may be used to move ships into the wormhole nexus. If the nexus is inactive, this will cause it to activate.

### Annihilator (Mech)

• An Annihilator may bombard when using the L1Z1X player's Harrow ability if that mech is not currently participating in ground combat, even if it has been committed to a different planet, and has been or will be involved in another ground combat during the current invasion.
    
• An Annihilator may bombard any one planet during the Bombardment step of an invasion.`
    },
    {
        id: 'mahact',
        name: 'The Mahact Gene-Sorcerers',
        content: `### Edict

• If the Mahact player is ever required to remove one of their command tokens from their fleet pool, and they only have other players' command tokens in their fleet pool, they must remove one of those tokens, and return it to the reinforcements of the player that owns it.
    
• If the Mahact player is ever limited by the number of tokens they may have in their fleet pool, such as by the Fleet Regulations law, they may still add a command token to their fleet pool when they are at the limit, but must then remove one command token and return it to the corresponding reinforcements.
    
• If the Mahact player wins a combat against a player that has no command tokens in their reinforcements, and none of their command tokens are on the Mahact player's command sheet, that player must choose one of their command tokens on their command sheet to remove and place on the Mahact player's command sheet.

• If a player has no command tokens in their reinforcements or on their command sheet, the Mahact player cannot place one of that player's command tokens on their command sheet if they win a combat against that player.

• If the Mahact player is required to place a command token from their reinforcements on the board, such as when they retreat from a space combat, or the primary ability of the Diplomacy strategy card, if they have no tokens in their reinforcements, they must use a Mahact token from any pool of their command sheet, and not another player's token in their fleet pool.
    
• When the Mahact player wins a space combat, they add the command token to their fleet pool before they resolve fleet pool requirements.
    
• If the Mahact player wins a combat against the Mentak player and gains one of their command tokens, they cannot resolve the ability of S'ula Mentarion, the Mentak commander, from winning that same combat to take a promissory note from the Mentak player.

### Imperia

### Hubris

• If a game effect would force another player to give a promissory note to the Mahact player, but the only promissory note that player has is their Alliance promissory note, that player does not give anything to the Mahact player.

### Scepter of Dominion (Promissory Note)

• If a player already has a command token in the chosen system, they do not place a command token there.
    
• If a player has no command tokens in their reinforcements, that player places one command token of their choice from their command sheet.
    
• There is no mechanism to create a binding deal between the Mahact player and another player regarding which system that player will choose when resolving Scepter of Domination.
    
• The Mahact player will also place a command token in the chosen system, unless their command sheet has none of their own tokens on it.
    
• Scepter of Dominion cannot place command tokens in the home system of an eliminated player.

### Genetic Recombination (Technology)

• A player that cannot vote due to a game effect or because they have zero influence on readied planets cannot be targeted by Genetic Recombination.

• If a player then gains the ability to vote, such as by gaining the Xxcha player' Alliance promissory note, they may then be targeted by Genetic Recombination.

### Crimson Legionnaire (Unit)

• If multiple Crimson Legionnaires are destroyed at the same time, the Mahact player decides whether to gain a commodity or convert a commodity to a trade good individually for each.

• If two Crimson Legionnaires are destroyed at the same time, the Mahact player may choose to gain a commodity, then immediately convert that commodity to a trade good.

### Arvicon Rex (Flagship)

### Jae Mir Kan (Agent)

• When resolving the secondary ability of the Construction strategy card, the active player's command token is placed in the system the Mahact player places their structure.

• If the Mahact player chooses to resolve the secondary ability of the Construction strategy card, they must choose a system in which they can place a structure.
        
• If the Mahact player already has a command token in the chosen system, they place one of the active player's command tokens in that system regardless.

• If the Mahact player has the Muaat player's Alliance promissory note, they will not gain a trade good from it when they use the ability of Jae Mir Kan.

### Il Na Viroset (Commander)

• The Mahact player cannot use any "when/after you activate a system" abilities.

• Other players cannot use any "when/after another player activates a system that&hellip;" abilities.
        
• If the Mahact player activates a system containing another player's units, they must still return any promissory notes with such an activation as the return condition.

• The Mahact player may still use any "at the end of your turn" abilities.

### Airo Shir Aur — Benediction (Hero)

• Fighters and ground forces in the space area of the origin system are moved. Ground forces on planets are left behind.

• If the Mahact player moves their own ships, they may transport ground forces on planets.
        
• If the Mahact player moves the Saar player's units, any Floating Factories in the origin system will also be moved.

• Any abilities that trigger when a player moves ships trigger from the perspective of the Mahact player.
    
• Any abilities that trigger when a player's ships move trigger from the perspective of the player that owns them.
    
• Any abilities that trigger when a player moves their ships do not trigger.
    
• The Mahact player may move another player's ships into an asteroid field only if that player owns the Antimass Deflectors technology.
    
• The Mahact player may move another player's ships into a supernova only if that player owns the Magmus Reactor Muaat factional technology.
    The Mahact player may only move the Empyrean player's ships into a nebula.
    
• If the Mahact player moves a player's ships out of a gravity rift, that player must roll for removal.

• If the Mahact player is moving the Vuil'raith player's ships out of a system containing a Dimensional Tear, the Vuil'raith player will not roll for removal.

• The Mahact player cannot move ships through a wormhole while the Enforced Travel Ban law is in play.
    
• The Mahact player cannot move the Creuss player's ships from a system with an alpha wormhole into a system with a beta wormhole (and no alpha wormhole), or vice versa.
    
• If the Mahact player moves the Muaat player's war sun, the Muaat player cannot trigger their Nova Seed hero ability.
    
• The system the combat is taking place in is considered the active system during that combat.
    
• The player whose ships were moved is considered to be the attacker, the other player is considered to be the defender.

• Regardless of which of the two players in combat is the attacker and which is the defender, the next player in initiative order will resolve abilities first, after the Mahact player.

• Resolving Benediction is not a tactical action. The Activation, Movement, Invasion and Production steps are not resolved.

• Any abilities that occur "when/after you/another player activate a system" will not trigger.
        
• The Space Cannon Offense substep is not resolved.

• Either player in the combat may score the Brave the Void, Darken the Skies, Demonstrate Your Power, Destroy their Greatest Ship, Fight with Precision, Spark a Rebellion, or Unveil Flagship secret objectives.

• The Mahact player cannot score these secret objectives unless they are participating in the combat.
        
• No player may score the Betray a Friend secret objective.

### Starlancer (Mech)

• Once the Mahact player resolves the ability of a Starlancer, the active player cannot use any "after you activate a system" abilities.

• Other players, including the Mahact player, cannot use any "after another player activates a system that&hellip;" abilities.

• The active player may still use any "at the end of your turn" abilities.
    
• The Mahact player may use the ability to end their own turn and gain their own spent command token from their fleet pool.
    
• The Starlancer must be in the system before activation to be able to use its ability.`
    },
    {
        id: 'mentak',
        name: 'The Mentak Coalition',
        content: `### Ambush

• Game effects that reroll, modify, or otherwise affect combat rolls do not affect dice rolls made when resolving the Ambush ability.
    
• If a cruiser or destroyer is removed before the Mentak player can resolve their Ambush ability, that ship cannot be one of the ships used when they do resolve their Ambush ability.
    
• The Shields Holding action card may be used to cancel the hit.
    
• A ship may cancel the hit by using its Sustain Damage ability, if present.

• If the chosen ship does so, the Direct Hit and/or Reflective Shielding action cards may be played.

### Pillage

• While the agenda phase and the Hacan player's Trade Convoys promissory note allow a player to resolve transactions with all other players, they do not make that player neighbors with the Mentak player.
    
• Effects that force players to give objects to other players are not transactions.

• If Alice plays Bob's Trade Agreement promissory note, then the Mentak player may use Pillage on Alice, but not Bob.

• If the Creuss player has units or controls planets in a system with an alpha wormhole, and the Mentak player has units or controls planets in a system with a beta wormhole, or vice versa, then the Creuss player and Mentak player are neighbors. The Mentak player may thus use their Pillage ability against the Creuss player.
    
• If the Winnu player owns Lazax Gate Folding, then the Mentak player may become neighbors with the Winnu player during the Winnu player's tactical action. If so, the Mentak player may use their Pillage ability during this time.
    
• If a player would gain multiple trade goods one at a time, the Mentak player can use their Pillage ability for each trade good.
    
• If a game effect instructs a player to convert their commodities to trade goods, that player does not gain any trade goods from that effect. The Mentak player cannot use their Pillage ability for those trade goods.
    
• The Mentak player may use their Pillage ability even if the transaction does not involve trade goods.
    
• The Mentak player may use their Pillage ability against both players involved in a transaction.
    
• If the Mentak player resolves a transaction with another player, they may then use their Pillage ability against that player.

• The Mentak player does not decide to use their Pillage ability until after the transaction has been resolved. Any deal made to not use their Pillage ability before the transaction has been resolved is non-binding.

### Promise of Protection (Promissory Note)

• If the player with Promise of Protection in their play area resolves a transaction with another player, the Mentak player may still use their Pillage ability on that other player.
    
• Promise of Protection has no effect while it is in a player's hand.
    
• Promise of Protection is returned when the system is activated, even if the active player will perform no hostile acts towards the Mentak player this turn.
    
• Activating a system containing only the Mentak player's structures will still cause Promise of Protection to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Mentak player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Promise of Protection to be returned.

### Mirror Computing (Technology)

• If an effect specifically requires that trade goods are spent (for example, the Negotiate Trade Routes objective), Mirror Computing does not increase the value of those trade goods.

### Salvage Operations (Technology)

• The produced unit must be paid for.
    
• If the space combat ends in a draw, Salvage Operations has no effect.
    
• If the Mentak player wishes to place a unit using their Salvage Operations ability, but there are none of that type left in their reinforcements, they can remove a unit of that type from any system that does not contain one of their command tokens and place that instead.
    
• If the opponent has a faction specific ship, including their flagship, destroyed, the Mentak player may use their Salvage Operations to produce a generic ship of the same type, or their Fourth Moon, as appropriate.
    
• The Mentak player cannot produce ground forces using Salvage Operations, even if their opponent has the ability to treat a ground force as a ship.
    
• The Mentak player cannot produce a war sun unless they have their war sun technology.

### Fourth Moon (Flagship)

### Suffi An (Agent)

### S'ula Mentarion (Commander)

• The Mentak player's opponent chooses which promissory note they give to the Mentak player.
    
• If the Mentak player resolves their Salvage Operations to place their fourth cruiser faction technology after winning a space combat, they cannot use the ability of S'ula Mentarion from winning that combat.
    
• If the Mentak player places their fourth cruiser during combat, such as by the effect of Sleeper Cell, they may unlock and use the ability of S'ula Mentarion at the end of that combat, should they win.

• The four cruisers need not survive until the end of combat; S'ula Mentarion is unlocked from the placement of the fourth cruiser on the game board.

### Ipswitch, Loose Cannon — Sleeper Cell (Hero)

• The Mentak player can trigger the Sleeper Cell ability, their Ambush ability, or any other "at the start of a space combat" abilities they have in any order.
    
• If ships are destroyed before the Sleeper Cell ability is triggered, the Mentak player cannot place those units.
    
• Fleet pool limits still apply during combat. However, if the Mentak player is at their fleet pool limit, they may still place a unit using this ability, but must then immediately remove a unit.
    
• Capacity is not checked during combat. As such, the Mentak player may place an unlimited number of fighters into a combat with this ability.
    
• If all of the Mentak player's ships are destroyed, they may still place ships with this ability. If they do, combat will continue.
    
• No costs are paid for the placed units.
    
• Both players will choose and destroy one of their own ships in the active system for each hit their opponent produced during each round of combat, before the Mentak player places their ships for the Sleeper Cell ability. As such, the Mentak player may place a ship that was destroyed in the same round of combat, if they destroyed one of their opponent's ships of the same type, even if they had none of that ship type in their reinforcements.

• When players would use their ships' Sustain Damage abilities, they do so in alternating order, starting with the attacker. If the Mentak player uses a Direct Hit action card to destroy one of their opponent's ships, they must then make the choice immediately if they will replace it using the Sleeper Cell ability, before any other ships may use their Sustain Damage ability. Should the Mentak version of the newly placed ship type have a Sustain Damage ability, it may then use it during the same combat round.

• If the Mentak player wishes to place a unit with this ability, but there are none of that type left in their reinforcements, they may remove a unit of that type from any system that does not contain one of their command tokens and place that instead. This unit will be placed undamaged.
    
• If the opponent has a faction specific ship, including their flagship, destroyed, the Mentak player may place a generic ship of the same type, or their Fourth Moon, as appropriate.
    
• If the Fourth Moon is destroyed during combat, but the Mentak player then destroys their opponent's flagship and places the Fourth Moon back into the combat, they cannot score the Unveil Flagship objective.

• If the Mentak player starts the combat without the Fourth Moon, and places it during the combat, they may score the Unveil Flagship objective if the Fourth Moon is not destroyed.

• If a destroyed unit is a ground force or structure, that the other player is treating as a ship due to some effect, the Mentak player cannot place that unit.
    
• The Mentak player cannot place a war sun unless they have their war sun technology.
    
• The opponent may still retreat during combat.

### Moll Terminus (Mech)

• If a player commits a mech to a planet that contains both a Moll Terminus mech and a PDS belonging to the Mentak player, then the committed mech cannot use its Sustain Damage ability to cancel any Space Cannon hits during that invasion.`
    },
    {
        id: 'muaat',
        name: 'The Embers of Muaat',
        content: `### Star Forge

• The Muaat player cannot use Star Forge if the do not have a war sun on the game board.

### Gashlai Physiology

### Fires of the Gashlai (Promissory Note)

• If a player already owns their war sun unit upgrade technology, they cannot play Fires of the Gashlai.

### Magmus Reactor (Technology)

• The war sun must be in the system prior to the use of Production to gain the trade good.
    
• The trade good is gained after the use of Production; it cannot be used to pay for the produced units.

### Magmus Reactor &Omega; (Technology)

• If the Muaat player has a unit in a system containing a supernova, they cannot be eliminated.

### Prototype War Sun (Unit)

### The Inferno (Flagship)

### Umbat (Agent)

• The produced units must be paid for.
    
• No unit is using its Production ability. The Sarween Tools technology and similar effects will not allow a more expensive ship to be produced.
    
• If ground forces are produced, they may be placed in the space area or on a planet the player controls in the system with their war sun or flagship.
    
• If the Naalu or Yin players are chosen, and choose to produce fighters or infantry, they will only be able to produce two of those units; their commander will have no effect.

• If the Regulated Conscription law is in play, then that player may use their commander to produce two units for one resource when resolving Umbat.

### Magmus (Commander)

• When a command token is spent to resolve the secondary ability of a strategy card, the trade good is gained after resolving the secondary ability. As such, it cannot be spent to pay for costs of the secondary ability.
    
• If the Muaat player spends multiple tokens from their strategy pool (e.g. for the Lead From the Front objective), they gain that many trade goods, one at a time.

• Each trade good gained may trigger the Mentak player's Pillage faction ability.
        
• If the Muaat player wishes to score Lead From the Front and Form a Spy Network during the one status phase, they must do so simultaneously, and both happen before the Mentak player may use their Pillage faction ability. If the Mentak player subsequently uses their agent, Suffi An, when they use their Pillage faction ability on the trade goods the Muaat player gained from Magmus when spending the tokens for Lead From the Front, then the Muaat player cannot discard the drawn action card for Form a Spy Network.

• If the Muaat player uses the ability of the Scepter of Emelpar relic, they will be unable to benefit from the ability of Magmus.
    
• The Muaat player must have Magmus unlocked before spending the strategy token in order to gain the trade good.

• For example, if the Muaat player spends a strategy token to follow the secondary ability of the Warfare strategy card, and in doing so produces the war sun that unlocks Magmus, they will not gain the trade good from spending that strategy token.

### Adjudicator Ba'al — Nova Seed (Hero)

• Any method of movement is sufficient to trigger this ability, not only tactical action movement. For example, the Muaat player may trigger Nova Seed when they retreat.

• If the Mahact player moves the Muaat player's war sun via the use of their Benediction hero ability, the Muaat player cannot trigger Nova Seed.

• If the war sun is in the target system when it is activated, it must move out of the system, and back in, for Nova Seed to be able to be triggered.
    
• Any command tokens, frontier tokens and the Muaat player's units on the replaced system tile are transferred to the new supernova tile. Any Creuss wormhole tokens are returned to the Creuss player and any Ul sleeper tokens are returned to the Ul player. All other tokens are purged.
    
• The Muaat player's units may exist in and move out of the supernova system, even if the Muaat player does not own Magmus Reactor.
    
• If the Muaat player owns Magmus Reactor &Omega;, and resolves this ability during a tactical action, they will be able to produce units during the Production step, if the Muaat player still has units in the system.
    
• Nova Seed cannot target the home system of an eliminated player.
    
• Nova Seed may target the Creuss Gate (tile 17) or the Wormhole Nexus (tile 82).
    
• The Empyrean player cannot use the ability of their agent, Acamar, on the Muaat player after they use Nova Seed if the original system tile contained planets.

### Ember Colossus (Mech)`
    },
    {
        id: 'naalu',
        name: 'The Naalu Collective',
        content: `### Telepathic

• The Naalu player retains the Naalu 0 token, even if an effect such as the Imperial Arbiter law causes them to lose the strategy card it was on. The Naalu player will place the Naalu 0 token on another strategy card in this scenario.

### Foresight

• Using Foresight is not a retreat. As such, it cannot be cancelled with the Intercept action card.
    
• The command token is not spent. The Naalu player cannot use the Scepter of Emelpar, nor will they gain a trade good if they have the Muuat player's Alliance promissory note.
    
• Fighters are moved without being transported. Ground forces may be transported.
    
• The Naalu player cannot use Foresight to move into a nebula or supernova.

• The Naalu player may use Foresight to move into an asteroid field only if they own the Antimass Deflectors technology.

• If the Naalu player uses Foresight to move out of a gravity rift, they will have to roll for removal.

• If all ships are removed, the strategy token will still be placed in the destination system.

• After moving, capacity and fleet pool limits apply in the destination system.
    
• If the destination system already contains one of the Naalu player's command tokens, the command token from the Naalu player's strategy pool is instead placed in their reinforcements.
    
• After resolving Foresight, play continues to the Space Cannon Offense step. Only the active player's ships in the active system may be assigned hits.

### Gift of Prescience (Promissory Note)

• The player with Gift of Prescience retains the Naalu 0 token, even if an effect such as the Imperial Arbiter law causes them to lose the strategy card it was on. That player will place the Naalu 0 token on another strategy card in this scenario.

### Neuroglaive (Technology)

• The active player must meet fleet pool limits in all systems that contain their ships before they may proceed to the Movement step.
    
• If the Mahact player only has other players' command tokens in their fleet pool when they trigger Neuroglaive, they must return one of those command tokens to that player's reinforcements.

### Hybrid Crystal Fighter (Unit)

### Matriarch (Flagship)

• The committed fighters are returned to the space area when combat ends, and thus will not be on the planet for the Establish Control step. If the Naalu player does not commit at least one ground force to a planet and have it survive the combat, they will be unable to gain control of that planet, and the ground combat will end in a draw.
    
• Any structures on the planet will not be destroyed if the Naalu player committed no ground forces.
    
• The Daxcive Animators technology will not allow the Naalu player to gain control of a planet without committing a ground force.
    
• The committed fighters may be assigned hits during the Space Cannon Defense step.

### Z'eu (Agent)

• When the Covert Legislation agenda is revealed during the agenda phase, the Naalu player cannot look at the hidden agenda. Once the speaker has read the hidden agenda, the Naalu player may look at the next card of the agenda deck.

### Z'eu &Omega; (Agent)

• All other rules applying to tactical actions apply, other than placing a command token.

• The system cannot already contain a command token for the player performing the tactical action.
        
• A player may play a Ceasefire promissory note or discard the Minister of Peace law for their effects.
        
• If a player uses Z'eu &Omega; to activate a system containing another player's units, that will count for the purposes of returning promissory notes, and other similar effects.

• The chosen player is considered to be the active player.
    
• If the chosen player is not the Naalu player, it is not considered their turn for game effects.

• They cannot use any "at the start/end of your turn" abilities.
        
• If the Yssaril player is chosen, and owns their Transparasteel Plating faction technology, other players may still play action cards during the action.

• If the chosen player is not the Naalu player, they may use any "before/after you perform an action" abilities.
    
• If the chosen player is not the Naalu player, abilities that would end their turn instead end their tactical action.
    
• If the chosen player is not the Naalu player, they cannot use the Fleet Logistics technology to perform an additional action.

• The chosen player may use the Master Plan action card or the Minister of War agenda to perform an additional action.
        
• If the chosen player is able to perform a component action, they may then use the ability of Suffi An, the Keleres commander, to perform additional actions.

• If the chosen player is not the Naalu player, and they had previously passed, they are still considered passed during their action. They do not pass at the end of the action.

• The chosen player cannot score the Prove Endurance secret objective at the end of their action.
        
• If the Yssail player owns their Transparasteel Plating faction technology, and uses the ability of Ssruu, their agent, to duplicate the ability of Z'eu &Omega;, choosing a player that has passed, the chosen player cannot play action cards during their action.

• Any deal between the Naalu player and another player regarding which system will be activated, if made before Z'eu &Omega; is exhausted, is non-binding.

### M'aban (Commander)

• When producing units, the Naalu player must produce all the units they intend to produce before they may unlock M'aban. M'aban cannot be applied to the instance of producing the units that unlocks it.

• For example, before production, the Naalu player has ten fighters on the game board. They pay two resources during production. They cannot produce two fighters, unlock M'aban, then produce three more fighters. Instead, they would produce all four fighters, and then unlock M'aban.

• If the Regulated Conscription law is in play, the Naalu player may produce two fighters for one resource. This will count one towards their Production limit.
    
• If a game effect instructs the Naalu player to produce ships without using the Production ability, they may only produce additional fighters if that game effect allows them to produce fighters.
    
• The Naalu player may choose to produce one fighter for one resource. If they do, they may produce one additional fighter.

### M'aban &Omega; (Commander)

• The Naalu player cannot look at the agenda deck while a player is resolving the primary ability of the Politics strategy card.
    
• When the Covert Legislation agenda is revealed during the agenda phase, the Naalu player cannot look at the hidden agenda. Once the speaker has read the hidden agenda, the Naalu player may look at the next card of the agenda deck.

### The Oracle — C-Radium Geometry (Hero)

• Each other player chooses which promissory note they give the Naalu player.

### Iconoclast (Mech)

• The +1 will not apply to an opponent who has a relic but zero relic fragments.

### Iconoclast &Omega; (Mech)

• The ability will apply regardless of if the Iconoclast is in the space area or on a planet in the system.`
    },
    {
        id: 'naaz_rokha',
        name: 'The Naaz-Rokha Alliance',
        content: `### Distant Suns

• If the Naaz-Rokha player has multiple Eidolon on the planet they explore, they will draw only one additional exploration card.
    
• The Naaz-Rokha player must choose to use this ability before seeing the first exploration card.
    
• If a planet has multiple traits, the additional exploration card must come from the same deck as the first.

### Fabrication

• If the relic deck is empty, the Naaz-Rokha player may still purge two relic fragments as an action.
    
• If the Naaz-Rokha player has no command tokens in their reinforcements, they may still purge one relic fragment as an action.
    
• Either or both of the relic fragments may be Unknown Relic Fragments.

### Black Market Forgery (Promissory Note)

• If there are no cards in the relic deck, a player cannot gain a relic. As such, a player cannot play Black Market Forgery when the relic deck is empty.
    
• Either or both of the relic fragments may be Unknown Relic Fragments.

### Pre-Fab Arcologies (Technology)

• The planet is not readied until after the planet is explored. If the Freelancers exploration card is revealed, then:

• If the planet was exhausted before the exploration, its influence or resources cannot be spent to produce the unit.
        
• If the planet was readied before the exploration, its influence or resources may be spent to produce the unit by exhausting it. After the unit is produced, the planet will then be readied.

### Supercharge (Technology)

• Supercharge does not modify anti-fighter barrage, bombardment or space cannon rolls.

### Visz El Vir (Flagship)

• Each mech will roll an additional die.
    
• The Visz El Vir ability applies to both Eidolon and Z-Grav Eidolon.

### Garv and Gunn (Agent)

### Dart and Tai (Commander)

### Hesh and Prit — Perfect Synthesis (Hero)

• The Naaz-Rokha player may choose to perform the secondary ability of zero, one or two strategy cards.

• The Naaz-Rokha player cannot choose the same strategy card twice.

• The Naaz-Rokha player must choose which strategy cards they will perform the secondary abilities of before they resolve any of those abilities.
    
• When resolving the abilities of two strategy cards, they may be resolved in either order. Game objects affected by the first strategy card ability may be affected by the second.

• For example, say the Naaz-Rokha player chooses to resolve the secondary abilities of the Diplomacy and Warfare strategy cards. They may resolve the Diplomacy ability first to ready some planets, then exhaust those same planets to pay for the units they produce with the Warfare ability. Alternatively, they may resolve the Warfare ability first, exhausting some of their readied planets to pay for the units they produce, then resolve the Diplomacy ability to ready those same planets.

• If a player is eliminated, the strategy cards that they had are considered "unchosen".
    
• If the Naaz-Rokha player has no command tokens in their reinforcements, they must use a command token from their command sheet when performing the secondary ability of the strategy cards.
    
• If the Naaz-Rokha player has the Muaat player's Alliance promissory note, they will not gain a trade good from it when they use their Perfect Synthesis ability.

### Eidolon /
Z-Grav Eidolon (Mech)

• The Naaz-Rokha mechs are only Z-Grav Eidolon during the Space Combat step, only in the active system, and only in the space area.
    
• If the Naaz-Rokha player had  an Eidolon in the space area of the active system, they must mandatorily use its ability to convert it to a Z-Grav Eidolon.

• All other players will have the opportunity to resolve an ability between the Naaz-Rokha player resolving their Eidolon ability and any other ability.
        
• If the Naaz-Rokha player owns the Assault Cannon technology, they may count their Z-Grav Eidolon towards the three non-fighter ships, once they resolve its ability. However, if another player then resolves an ability that reduces the number of non-ships the Naaz-Rokha player has in the active system to less than three, the Naaz-Rokha player will no longer be able to resolve the Assault Cannon technology ability. 

• Any effect that may target ships or non-fighter ships may target a Z-Grav Eidolon.
    
• A Z-Grav Eidolon is still a ground force and a mech.
    
• A Z-Grav Eidolon participating in a space combat may count towards scoring the Demonstrate Your Power secret objective.
    
• When a Z-Grav Eidolon reverts back to an Eidolon at the end of combat, it will count towards capacity in the active system. Capacity limits must be met before proceeding to the Invasion step.`
    },
    {
        id: 'nekro',
        name: 'The Nekro Virus',
        content: `### Galactic Threat

• The Nekro player may still play rider action cards.
    
• If the Nekro player has the Xxcha player's Alliance promissory note, the Nekro player may vote, without losing their ability to predict outcomes for their Galactic Threat ability.
    
• If the speaker breaks a tie without casting any votes, then the speaker's technology are ineligible to be gained.

• If no player casts votes, then no technology can be gained.

### Technology Singularity

• If the Nekro player gains a technology during a space combat, this does not prevent them from gaining technology during ground combats in the Invasion step of the same tactical action.
    
• If multiple ground combats happen on separate planets as part of a single Invasion step during one action, the Nekro player may gain a technology during each combat.
    
• Any method that destroys a unit during combat will trigger Technology Singularity, including an anti-fighter barrage roll, the Direct Hit action card, the Creuss player's Dimensional Splicer faction technology, etc.

• This includes any method used by the Nekro player's opponent that destroys their own units, usually as an ability cost.
        
• If a unit is removed, but not destroyed, that unit will not trigger the Technology Singularity ability.
        
• Space cannon and bombardment rolls happen outside of combat. Any hits produced cannot be used to trigger the Technology Singularity ability.

• If the Nekro player chooses to gain a unit upgrade technology, that upgrade will be in effect from that point in the combat onwards.

• The combat value of a combat dice is fixed as it is rolled, and all combat dice are rolled before any hits are assigned. Gaining a unit upgrade technology will not cause any already rolled combat dice to produce any additional hits due to an improved combat value. The same applies to unit ability dice.
        
• Destroying an opponent's unit during the Anti-Fighter Barrage step, and gaining a unit upgrade technology will allow units of that type to use the abilities and attributes of the upgrade for the combat rolls of the same round.
        
• Destroying an opponent's unit at the start of a combat, such as with the ability of the Assault Cannon technology, and gaining a unit upgrade technology with an Anti-Fighter Barrage ability will allow units of that type to use that ability during the Anti-Fighter Barrage step of the first round of combat.
        
• If the Nekro player uses the Direct Hit action card to destroy a unit when it uses its Sustain Damage ability, this will occur before any units are destroyed from being assigned hits. If the Nekro player then gains a technology that gives their units the Sustain Damage ability, they may then use that ability for their units participating in the combat to cancel hits produced by their opponent during that round of combat.
        
• Players resolve abilities in initiative order, starting from the active player, until all players decline to resolve an ability consecutively; players who declined to resolve an ability previously may choose to resolve an ability if another player does so. While every player has the opportunity to resolve an ability, it is most common for only the two players involved in the combat to do so. Say the Nekro player does not have the Dreadnought II unit upgrade. If they use the Sustain Damage ability of one of their dreadnoughts, then their opponent may destroy it with a Direct Hit action card. If the Nekro player does not use the Sustain Damage ability (or any other ability within the same timing window), then their opponent may choose to use the Sustain Damage ability of one of their units (or any other ability within the same timing window). If they do not, then the timing window advances, and no more units may use their Sustain Damage abilities to cancel any of the remaining hits. If the opponent does, however, use the Sustain Damage ability of one of their units, the Nekro player may then destroy it with a Direct Hit action card, if it is an eligible target. After that, the Nekro player may choose to use the Sustain Damage ability of one of their units, even if they had previously declined to do so; if they gained the Dreadnought II unit upgrade when they destroyed their opponent's non-dreadnought unit with the Direct Hit action card, then their opponent can no longer destroy the Nekro player's with their own Direct Hit action card.

• If the Nekro player destroys a unit, and gains a technology with an ability that is used during the same timing window, they may use that ability immediately.

• For example, if the Nekro player uses the ability of the Assault Cannon technology at the start of a space combat to destroy a unit belonging to the Creuss player, and thus place a Valefar token on that player's Dimensional Splicer faction technology, the Nekro player may immediately use the ability of their Valefar Dimensional Splicer to produce a hit against one of the Creuss player's ships.

• If the Nekro player gains the Infantry II unit upgrade from their Technology Singularity ability during a combat, any of the Nekro player's infantry destroyed at the same time as the unit used to trigger the Technology Singularity ability will be returned to their reinforcements.

• If the Nekro player uses a Direct Hit action card to destroy an opponent's unit, and gain the Infantry II unit upgrade, then any infantry destroyed in that Assign Hits step will roll to be placed on the Infantry II card. This will most commonly occur if the Nekro player has infantry participating in space combat via the ability of their flagship, The Alastor.
        
• Any infantry destroyed by the Argent player's Strike Wing Alpha II faction unit ability are destroyed during the Roll Dice substep of the Anti-Fighter Barrage step. The Nekro player will not have the opportunity to gain the Infantry II unit upgrade until the Assign Hits substep immediately following, and so the destroyed infantry will be returned to their reinforcements.

### Propagation

• If the Nekro player resolves an ability that instructs them to "gain" a technology, instead of "research" that technology, they will get that technology instead of the command tokens.
    
• The Nekro player may still resolve the primary or secondary abilities of the Technology strategy card, which will instead gain them command tokens.

• The Nekro player may still benefit from owning the Minister of Sciences agenda card.

• If an ability triggers "when" a player researches a technology, that ability will still be triggered by the Nekro player.

• If the Nekro player owns The Prophet's Tears relic, they may draw an action card whenever they would research a technology.

• If an ability triggers "after" a player researches a technology, that ability will never be triggered by the Nekro player.

• If the Anti-Intellectual Revolution law is in play, the Nekro player will not destroy a ship when they would research a technology.

• The Nekro player may play any action card that would allow them to research a technology, even if there is no viable technology that the Nekro player could have researched.

• For example, the Nekro player may always play the Reveal Prototype action card at the start of combat, even if they would not meet the prerequisites of any of the unit upgrades for the units they have participating in the combat, and/or they already have the unit upgrades for each unit they have participating in the combat, and/or the units they have participating in the combat have no unit upgrade.

### Antivirus (Promissory Note)

• The effect of Antivirus does not prevent the Nekro player gaining a technology from a player via their Galactic Threat ability.
    
• The player holding Antivirus may only play it at the start of a combat they are participating in.

• Antivirus may be played at the start of a combat that the Nekro player is not participating in.

• Antivirus has no effect while it is in a player's hand.
    
• Antivirus is returned when the system is activated, even if the active player will perform no hostile acts towards the Nekro player this turn.
    
• Activating a system containing only the Nekro player's structures will still cause Antivirus to be returned.
    
• If an effect other than activating a system during a tactical action places a command counter in a system with the Nekro player's units (for example, the primary ability of the Diplomacy strategy card), this will not cause Antivirus to be returned.

### Valefar Assimilator (Technology)

• When copying another technology, each Valefar Assimilator retains its original text; it may later be used to copy a different faction technology.
    
• When copying another technology, Valefar Assimilator will retain its exhausted/readied state. It will not copy the target technology's exhausted/readied state.

• The Nekro player may use any ability of the copied technology that does not require exhausting as a cost, even if the Valefar Assimilator card is exhausted.
        
• An exhausted Valefar Assimilator will always ready during the Status Phase, even if it is not currently copying a technology with an exhaust ability.

• If the Nekro player would copy a faction-specific unit upgrade, and they are already copying a faction-specific unit upgrade of the same type, they must use the same Valefar Assimilator token; they lose the previous faction unit upgrade.
    
• The Nekro player cannot copy faction-specific units that have not been upgraded.
    
• A faction's mech is not a technology. The Nekro player cannot use a Valefar Assimilator to copy a mech.
    
• If the Nekro player has a generic unit upgrade, and gains a faction-specific unit upgrade, then the faction-specific version will be in effect. If the faction-specific unit upgrade is later lost, they revert to the generic unit upgrade.

• Owning two unit upgrades for the same type of unit in this manner only counts as one unit upgrade towards the Develop Weaponry and Revolutionize Warfare objectives.
        
• If the Nekro player gains a faction-specific infantry unit upgrade technology while they own the generic Infantry II unit upgrade technology and they have infantry on that unit upgrade card that would be placed in their home system at the start of their next turn, then those infantry are transferred to the Valefar Assimilator card that they are using to copy the faction-specific infantry unit upgrade.

• If another player returns a technology which is currently being copied by a Valefar Assimilator, it will remain copied with a Valefar Assimilator token on it while in that player's technology deck.
    
• For the Adapt New Strategies objective, a Valefar Assimilator technology will count if and only if it is currently copying another technology.
    
• For notes about technologies of a specific faction, see that faction's notes.
    
• If the Nekro player has copied certain technology (possibly two or more at different points in time), the following apply:

• If both the Saar player's Floating Factory II unit upgrade and the Vuil'raith player's Vortex technology are copied, and another player blockades a Nekro space dock, the Nekro player returns any captured units, then destroys the blockaded space dock.
        
• If both the Letnev player's Non-Euclidean Shielding technology and the generic Duranium Armor technology are copied, then a space combat between the Nekro player and the Letnev player in certain circumstances may result in neither player being able to win. If this happens, the attacker must declare a retreat. If the attacker cannot do so, they destroy all their units in that combat.
        
• If both the Muaat player's Magmus Reactor technology and the Saar player's Floating Factory II unit upgrade are copied, the Nekro player may move their space docks into supernovae.
        
• If the Saar player's Floating Factory II unit upgrade is copied, both the Nekro player and the Saar player may have their space docks in the same system, if there are no ships in that system.
        
• If the N'orr player's Exotrireme II unit upgrade is copied, and the Nekro player is in a combat with the N'orr player, then the players will alternate when resolving end of combat round abilities, starting with the active player (all players may resolve abilities in initiative order, but it is most common for only the two players involved in the combat to want to resolve abilities). For example, if the attacking player has two Exotriremes II in the system and the defender has four, assuming both players are hostile towards each other, the most likely sequence is as follows: The attacker activates one of their Exotriremes II, leaving them with one and the defender with two; The defender activates one of their Exotriremes II leaving them with one and the attacker with none.

• The Nekro player may lose a technology if they copy a new one. If they lose certain technologies, the following apply:

• If the Saar player's Floating Factory II is lost, each space dock the Nekro player controls must be placed on a planet they control in the same system, or the space dock is removed.
        
• If the Muaat player's Prototype War Sun II is lost, and the Nekro player does not have the generic war sun technology, each of their war suns are removed from the game board.
        
• If the Muaat player's Magmus Reactor is lost, the Nekro player's units may remain in and move out of any supernovae they are currently in, but cannot move additional units into or through.
        
• If the Vuil'raith player's Dimensional Tear II is lost, the dimensional tear tokens are removed from under the Nekro player's space docks; the systems are no longer gravity rifts (unless the system tile is a printed gravity rift).
        
• If a unit upgrade that provides that unit with the Sustain Damage ability is lost, any damaged units will remain damaged, until either the status phase or another effect repairs them.
        
• The Nekro player may lose a faction-specific infantry unit upgrade technology, while they have infantry on the unit upgrade card that would be placed in their home system at the start of their next turn. If they are moving the Valefar Assimilator token to a different faction-specific infantry unit upgrade technology, the infantry remain on the Valefar Assimilator card. Else, if they own the generic Infantry II unit upgrade technology, the infantry are transferred to that unit upgrade card. Otherwise, the infantry are returned to the Nekro player's reinforcements.

### The Alastor (Flagship)

• Any effect that may target ships or non-fighter ships may target a ground force that is participating in space combat due to the effect of The Alastor.

• This includes counting towards the three non-fighter ships necessary to trigger the effect of the Assault Cannon technology.
        
• The Winnu player's flagship, the Salai Sai Corian, will roll one dice for each ground force the Nekro player has participating in a space combat via the effect of The Alastor.

• After the Nekro player uses the ability of The Alastor, all other players will have the opportunity to resolve an "at the start of combat" or an "at the start of a round of combat" ability before the Nekro player may resolve another ability.

• For example, say the Nekro player owns the Assault Cannon technology, and uses the ability of The Alastor to bring the total number of non-fighter ships in the combat to three (or more). Other players may then resolve one ability each. If their opponent uses an ability that destroys ships, such as from their own Assault Cannon, to reduce the number of non-fighter ships the Nekro player has in the combat to two (or fewer), then the Nekro player will be unable to resolve the ability of their Assault Cannon

• Some abilities may destroy The Alastor at the start of a combat before the Nekro player has used its ability, such as the Assault Cannon technology.
    
• Ground forces on planets remain there while participating in combat. Effects that target units in a space area cannot target these ground forces.

• When the Nekro player is in a space combat against the Argent player, their infantry on planets participating in the combat cannot be targeted by the ability of the Argent player's Strike Wing Alpha II destroyers.

• If The Alastor is destroyed during space combat, any ground forces in that combat remain in that combat.
    
• If the Nekro player copies another player's flagship unit upgrade technology with one of their Valefar Assimilator technologies during a space combat, any ground forces in that combat remain in that combat. If the Nekro player starts the space combat copying another player's flagship unit upgrade technology, ground forces cannot participate in that combat, unless the Nekro player stops copying that flagship unit upgrade technology during the "start of combat" window.
    
• The ground forces in the space area during the combat still retain their ability to be transported. Since transported units do not count against capacity during combat, these ground forces will not count toward the Nekro player's fleet pool limit.
    
• A mech in the space combat may be targeted with the Direct Hit action card if it uses its Sustain Damage ability.
    
• If the Nekro player has one of their Valefar Assimilator tokens on the Ul player's Hel Titan II faction unit upgrade technology, they may use The Alastor to have their PDS in the active system participate in the space combat.
    
• A ground force participating in a space combat may count towards scoring the Demonstrate Your Power secret objective.
    
• If the Nekro player loses their last ground force during a space combat and consequently meets the requirements for elimination, they are immediately eliminated. They will not be given the opportunity to score any objectives from winning the combat or destroying certain units at the same time their last ground force was destroyed.

• If the Nekro player uses a Direct Hit action card to destroy an opponent's flagship, they may score the Destroy their Greatest Ship secret objective, even if there are some hits remaining that will cause the Nekro player to be eliminated once they are assigned. If this would bring the Nekro player to ten victory points, they will instead win the game before they are eliminated.

### Nekro Malleon (Agent)

• If the chosen player is the Muaat player with their commander, Magmus, unlocked, they will gain a trade good from it if they spend a token from their strategy pool when resolving this ability.

• That trade good will be gained separately from the other two.

• The ability of Nekro Malleon cannot be resolved while another ability is resolving. For example, if the Nekro player is targeted by the Spy action card, they cannot use the ability of Nekro Malleon to discard one of their action cards before Spy resolves.

### Nekro Acidos (Commander)

• When the Nekro player gains their third technology and unlocks Nekro Acidos, they cannot apply Nekro Acidos to that instance of gaining a technology.
    
• When the Nekro places a Valefar Assimilator token on a technology, they are not gaining a technology.

### UNIT.DSGN.FLAYESH — Polymorphic Algorithm (Hero)

• When the other player's units are destroyed, this does not trigger the Nekro player's Technology Singularity ability.
    
• Unit upgrades do not have a color. The Nekro player cannot gain a unit upgrade with Polymorphic Algorithm.

### Mordred (Mech)

• A Mordred will apply +2 against a player with both Valefar Assimilator tokens, and not +4.`
    },
    {
        id: 'nomad',
        name: 'The Nomad',
        content: `### The Company

### Future Sight

• The Nomad player may only predict agenda outcomes via game effects that allow them to do so, e.g. rider action cards.
    
• If the Nomad player predicts multiple different outcomes, and one of those outcomes is resolved, they will gain the trade good.

• If the Nomad player predicts an outcome and votes for another outcome (via the Xxcha player's Alliance promissory note), and one of those outcomes is resolved, they will gain the trade good.

• If the Deadly Plot action card is played, the Nomad will not gain a trade good from Future Sight.

### The Cavalry (Promissory Note)

• One ship is chosen. That ship retains the flagship's values and abilities until it is destroyed or the combat ends.
    
• If the chosen ship does not usually have the Sustain Damage ability, and is damaged during combat, it will remain damaged even after losing the Sustain Damage ability.

• The damaged ship may be chosen again if The Cavalry is played by the same player during a future combat, regaining the Sustain Damage ability. As it is already damaged, it will be unable to use its Sustain Damage ability again.
        
• The damaged ship will be repaired during the status phase, regardless of if it currently has the Sustain Damage ability.
        
• In a future combat, the damaged ship may be repaired by the Duranium Armor technology. It will be unable to be damaged again unless it has regained the Sustain Damage ability.
        
• If the Emergency Repairs action card is played, the damaged ship will not be repaired unless it currently has the Sustain Damage ability.

### Temporal Command Suite (Technology)

• The Nomad player may perform a transaction with another player without being neighbors with that player.
    
• The Nomad player may perform a transaction with another player even if neither player is the active player.

• Temporal Command Suite may allow the Nomad player to perform a transaction at a time they usually could not. For example, if the Mentak player exhausts their agent, Suffi An, during the strategy phase when another player gains the trade goods on the strategy card they chose, the Nomad player may use Temporal Command Suite and then perform a transaction with the Mentak player.

• Temporal Command Suite may allow the Nomad player to perform a second transaction with another player during one turn, before or after the regular transaction.
    
• An agent cannot be resolved twice in one timing window. If a player's agent is readied immediately after resolving, it cannot immediately resolve again.

### Memoria (Flagship)

• Only the Memoria is adjacent to systems with a Quantum Manipulator. Other ships cannot move between the Memoria's system and a system containing a Quantum Manipulator using this ability.
    
• Other players cannot use the Deep Space Cannon ability of units in the same system as a Quantum Manipulator against the Memoria, unless those units are adjacent using another adjacency method.
    
• The Memoria cannot retreat to a system containing a Quantum Manipulator, unless it is adjacent to that system using another adjacency method.
    
• The Intimidate Council objective requires the system to be adjacent to Mecatol Rex. As such, the Nomad player cannot use the Memoria's ability to score this objective. A similar prohibition applies to the Learn the Secrets of the Cosmos and Threaten Enemies objectives.
    
• All ship movement is simultaneous. The Nomad player cannot transport a Quantum Manipulator into a system, and then use that to move the Memoria into that system during the same movement.
	
• The Memoria is adjacent to the system that the Quantum Manipulator is in before movement, regardless of if that Quantum Manipulator is transported during that movement.

### Artuno the Betrayer (Agent)

• If the Nomad player would gain trade goods from multiple effects, they may only put the trade goods from one of those effects on Artuno the Betrayer.

• For example, if the Nomad player successfully predicts the outcome of an agenda via the Trade Rider action card, they could put either the trade goods gained from the Trade Rider, or from Future Sight, but not both.

• When a player gains trade goods that were on a strategy card, they do not gain them from the supply.
    
• When the Nomad player gains trade goods that were on Artuno the Betrayer, they do not gain them from the supply.

### Field Marshal Mercer (Agent)

• The ground forces may be from a system with that players command token in it.
    
• The ground forces may be on a planet or in a space area.
    
• The ground forces may be from different systems.
    
• The ground forces may be placed on one or two planets.
    
• Any damaged mechs remain damaged.

### The Thundarian (Agent)

• The dice are rerolled in the same round. Any effects that apply for a single round of combat remain in effect.

• This includes the Magen Defense Grid technology, the Fighter Prototype and Morale Boost action cards, the Letnev Munitions Reserves faction ability, the Naaz-Rokha Supercharge faction technology, the Letnev War Funding promissory note, the Letnev agent, Viscount Unlenn, and the Sol agent, Evelyn DeLouis.

• The Roll Dice step occurs after the start of a round of combat. Any effects that may be played at the start or end of a round of combat cannot be played until the next round of combat.

• This includes the ability of the Duranium Armor or Magen Defense Grid technologies, the Fighter Prototype or Morale Boost action cards, the L1Z1X Harrow or the Letnev Munitions Reserves faction abilities, the Naaz-Rokha Supercharge faction technology, the Letnev War Funding promissory note, the Letnev flagship, the Arc Secundus, the Letnev mech, a Dunlain Reaper, the N'orr Exotrireme II dreadnought ability, the Keleres Overwing Zeta hero ability, the Letnev agent, Viscount Unlenn, or the Sol agent, Evelyn DeLouis.

• The Thundarian is played at the end of the "Roll Dice" step, after effects that occur "when/after you roll dice" or similar.

• If The Thundarian is used after the Hacan player has spent trade goods for the ability of their flagship, the Wrath of Kenara, those trade goods remain spent, but the +1 to combat rolls will not be applied for the subsequent dice rolls. The Hacan player may spend trade goods after the subsequent dice roll to use the ability of the Wrath of Kenara for the new results.
        
• If The Thundarian is used after a player has used the ability of The Crown of Thalnos relic, any units that did not produce hits and so were destroyed remain destroyed, but the +1 to combat rolls will not be applied for the subsequent dice rolls. That player may use the ability of The Crown of Thalnos on the subsequent dice roll.
        
• If The Thundarian is used after a player has played the Fire Team action card, it will be discarded without effect on the subsequent roll.
        
• If The Thundarian is used after a player has played the Letnev War Funding Ω promissory note, it will be returned without effect on the subsequent roll.
        
• If the N'orr player's Valkyrie Particle Weave faction technology would produce a hit, that hit is not assigned if The Thundarian is used.

• If a game effect readies The Thundarian when it is used, its effect may be applied again at the end of the same round of combat.

### Navarch Feng (Commander)

• Producing the flagship still counts towards Production limits.
    
• The flagship still has a cost of 8.

• The flagship cannot be produced with abilities that are limited by the cost of units, such as the Integrated Economy technology or the Muaat player's agent, Umbat.
        
• If the flagship is chosen for the Scuttle action card, the player gains 8 trade goods.

• The objective elected by the Classified Document Leaks agenda is a public objective, not a secret objective. Navarch Feng cannot be unlocked by scoring it.

• If the Classified Document Leaks agenda is discarded, the elected objective is neither a public objective nor a secret objective. Navarch Feng cannot be unlocked by having scored it.
        
• Commanders cannot become locked after being unlocked. If the Nomad player has only one scored secret objective, and it is elected by the Classified Document Leaks agenda, this will have no effect on Navarch Feng.

### Ahk-Syl Siven — Probability Matrix (Hero)

• The game round ends after the agenda phase (or the status phase if the custodians token is yet to be removed from Mecatol Rex).
    
• The Memoria may transport ground forces from systems containing one of the Nomad player's command tokens while the ability of Ahk-Syl Siven is active.

### Quantum Manipulator (Mech)

• When a Quantum Manipulator uses its Sustain Damage ability to cancel a hit produced against a ship, the Direct Hit and Reflective Shielding action cards cannot be played, as the Quantum Manipulator is not a ship.
    
• A Quantum Manipulator may use its Sustain Damage ability to cancel any hit produced during combat against the Nomad player's ships, not just hits produced by combat rolls. For example, hits produced by anti-fighter barrage rolls may be cancelled.

• Effects which directly destroys a ship cannot be prevented with the ability of a Quantum Manipulator.
        
• Hits that are produced outside of combat cannot be cancelled with the ability of a Quantum Manipulator. For example, hits produced by space cannon rolls cannot be canceled.

• During a space combat, A Quantum Manipulator cannot be repaired by the Duranium Armor technology, as it is not participating in the combat.`
    },
    {
        id: 'norr',
        name: 'Sardakk N\'orr',
        content: `### Unrelenting

• Unrelenting does not affect anti-fighter barrage, bombardment or space cannon rolls.

### Tekklar Legion (Promissory Note)

• Tekklar Legion does not affect anti-fighter barrage, bombardment or space cannon rolls.

### Valkyrie Particle Weave (Technology)

• The hit produced by Valkyrie Particle Weave is added to any other hits produced in the immediately preceding Roll Dice step.

• Valkyrie Particle Weave produces a hit before any hits may be cancelled. Cancelling the original hits will not cause the additional hit to be cancelled.

• The N'orr player producing zero hits with their combat roll will not prevent Valkyrie Particle Weave from producing an additional hit.
    
• If the opponent produces a hit, Valkyrie Particle Weave mandatorily produces a hit.

### Exotrireme (Unit)

• When resolving the ability of an Exotrireme II, the N'orr player chooses which ships are destroyed.

• The N'orr cannot choose their own ships as targets.

• Effects that cancel hits, such as the Sustain Damage ability, cannot be used to prevent ships from being destroyed.
    
• If a player retreats, the N'orr player will be unable to use the ability of an Exotrireme II to destroy an opponent's ship.
    
• If the N'orr player is in a combat with the Yin player, then the two players will alternate when resolving end of combat round abilities, starting with the attacker.

### C'morran N'orr (Flagship)

• C'morran N'orr does not affect anti-fighter barrage, bombardment or space cannon rolls.

### T'ro (Agent)

### G'hom Sek'kus (Commander)

• Planets in the home system of an eliminated player will not contribute to unlocking G'hom Sek'kus.
    
• This ability allows the N'orr player to commit ground forces to a planet even if they have no ships in the active system.
    
• The Parley action card will place the committed ground forces in the space area of the active system. If the N'orr player does not have enough capacity in the space area for the extra ground forces, including zero capacity, they will have to remove fighters and ground forces to meet capacity limits.
    
• The N'orr player may commit up to one ground force from each eligible planet during each Commit Ground Forces step, regardless of the number of planets they are committing ground forces to.
    
• The N'orr player may only commit ground forces as the active player.
    
• Only the active player may use the Bombardment ability of their units during an invasion. As such, any ships in the active system will be unable to use their Bombardment ability unless they belong to the N'orr player.

• This prevents the L1Z1X player from using their Harrow faction ability, unless they have the N'orr Alliance promissory note and they are the active player.

• Another player may still produce hits against the N'orr player's ground forces committed using G'hom Sek'kus during the Space Cannon Defense step.
    
• The N'orr player must legally be able to move into the destination system in order to commit ground forces with G'hom Sek'kus

• If another player plays the N'orr player's Ceasefire promissory note, they cannot commit any ground forces to planets in the active system during this action, other than ground forces already in the active system.
        
• The N'orr player cannot commit ground forces to Mirage if it is in an asteroid field, unless the N'orr player owns the Antimass Deflectors technology.
        
• The N'orr player cannot commit ground forces to Mirage if it is in a supernova. Another player may do so if they own the Magmus Reactor Muaat faction technology and the N'orr player's Alliance promissory note.
        
• If the N'orr player commits any ground forces from a gravity rift system, those ground forces must roll for removal.
        
• The N'orr player cannot commit ground forces through a wormhole if the Enforced Travel Ban law is in play.

• The N'orr player may use this ability to commit ground forces to any planet in the active system, regardless of who, if anyone, controls it.
    
• If the N'orr player purges the Dominus Orb relic during the Movement step of a tactical action, they may use G'hom Sek'kus to commit ground forces from systems that contain their command tokens during that tactical action.
    
• The Commit Ground Forces step is entirely resolved before the Establish Control step (with other steps between). When the N'orr player gains control of their fifth non-home system planet, an unlocks G'hom Sek'kus, they cannot then use G'hom Sek'kus to commit additional ground forces during that tactical action.
    
• Ground forces cannot be committed to a planet if it has the Demilitarized Zone exploration card attached.

### Sh'val, Harbinger — Tekklar Conditioning (Hero)

• The Parley action card will place the committed ground forces in the space area of the active system. As the N'orr player will not have enough capacity in the space area for their ground forces, they will have to remove all ground forces from that planet, that are now in the space area of that system.
    
• The Space Cannon Offense, Space Combat and Bombardment steps are skipped.
    
• Another player may still produce hits against the N'orr player's ground forces committed using Tekklar Conditioning during the Space Cannon Defense step.
    
• Any abilities that trigger "after a player moves ships&hellip;" or similar cannot be used following Tekklar Conditioning. 

### Valkyrie Exoskeleton (Mech)

• The hit produced by the Valkyrie Exoskeleton is added to any other hits produced in the immediately preceding Roll Dice step.
    
• If a Valkyrie Exoskeleton uses its Sustain Damage ability during a ground combat, it mandatorily produces a hit.`
    },
    {
        id: 'saar',
        name: 'The Clan of Saar',
        content: `### Scavenge

• If the Saar player gains control of multiple planets during one invasion, the trade goods are gained one at a time.
    
• When the Saar player gains control of a planet that is not already controlled by another player, they will explore it before gaining the trade good from this ability.

• If the Saar player is to gain control of multiple planets not already controlled by another player, they will gain and explore one planet and gain a trade good before gaining and exploring the next.
        
• If the Saar player has the Naaz-Rokha player's Alliance promissory note, and they gain control of a planet that was controlled by another player, they may explore it or gain a trade good in either order.

### Nomadic

### Ragh's Call (Promissory Note)

• Playing Ragh's Call will prevent ground combat from occurring on that planet.
    
• Any PDS on the planet remain. They might produce hits during the Space Cannon Defense step.
    
• All of the Saar player's ground forces must be placed on the same planet.
    
• Any damaged mechs remain damaged.

### Chaos Mapping (Technology)

• The produced unit must be paid for.
    
• The produced unit may move later that same turn, if the Saar player performs a tactical action.
    
• A unit may be produced on each of the Saar player's turns; Chaos Mapping is not exhausted.

• A unit may be produced on the turn the Saar player passes.

• A player may still use abilities such as action cards or Deep Space Cannon that affect the Saar player's units located in asteroid fields.
    
• If an asteroid field contains only non-ship units belonging to the Saar player, it may still be activated by other players.

### Floating Factory (Unit)

• A floating Factory does not count towards the Saar player's fleet pool.
    
• When a Floating Factory produces ground forces, they may be placed in the space area or on a planet they control in that system.
    
• Hits produced by space cannon rolls cannot be assigned to a Floating Factory.
    
• Game effects that affect ship movement, such as the Gravity Drive technology, the Flank Speed action card, the Light/Wave Deflector technology, the Antimass Deflectors technology, etc, may affect Floating Factories.
    
• A Floating Factory moving through or out of a gravity rift must roll for removal. It will receive the +1 to its movement.
    
• If the Saar player announces a retreat during a space combat, but all their ships are destroyed that round, any Floating Factories in that system are destroyed without retreating.

• If neither player has ships in the active system after the final round of combat, the Floating Factory is not destroyed, and does not retreat.

• If the Saar player has their last ship destroyed during combat by a Direct Hit action card, a Floating Factory in the system will be blockaded and destroyed, even if the Saar player produced enough hits to destroy their opponent's remaining ships during that round of combat.

• Players alternate using the Sustain Damage ability of their units, one at a time, starting with the active player, and continuing until both players decline, in a row, to use the Sustain Damage of one of their units. If both the Saar player and their opponent have a Direct Hit, then the first unit to use Sustain Damage will be the first unit that may be destroyed by a Direct Hit. If the Saar player's unit is the last to be destroyed, and leaves no other ships in the system, then a Floating Factory in that system will not be blockaded nor destroyed.

• If, at the end of the combat, the Saar player has no ships, an their opponent has only fighters, then any Floating Factories in the system will be blockaded, and thus destroyed, before the fighters are removed due to lack of capacity.

• If the Nekro player has only ground forces participating in the combat as ships due to the effect of their flagship, the Alastor, those ground forces will blockade and destroy any Floating Factories, even if those ground forces are on planets instead of in the space area.

• When resolving an ability of the Construction strategy card, the Saar player must control a planet in the system they place a Floating Factory in.

• The Saar player cannot place a Floating Factory in a system if the only planet they control in that system has the Demilitarized Zone cultural exploration card attached.

• If an effect allows a Floating Factory to move through a system that contains another player's ships (such as the Light/Wave Deflectors technology), it will not be blockaded in systems it moves through.
    
• If a Floating Factory is in a system that contains none of the Saar player's ships, and another player moves ships into that system, the Floating Factory is immediately destroyed.

• This will happen before the Space Cannon Offense step. The Floating Factory is destroyed, even if all of the other player' ships are destroyed during this step. Additionally, the Saar player cannot use that Floating Factory to resolve a space cannon roll enabled by the Experimental Battlestation action card.
        
• If all of the other player's ships are removed due to a gravity rift, they will not arrive in the active system. The Floating Factory will not be destroyed.

• A Floating Factory cannot count towards the Improve Infrastructure or Protect the Border objectives.

### Son of Ragh (Flagship)

### Captain Mendosa (Agent)

• The Saar player does not decide to use this ability until after the other player has activated a system. Any deal made to use this ability before the system has been activated is non-binding.
    
• The effect of Captain Mendosa occurs when the system is activated. The move value will be set to the chosen ship's move value during this window.

• Move value modifying effects that trigger after a system is activated, such as the Flank Speed action card or the Gravity Drive technology will not be included in Captain Mendosa's effect.
        
• Gravity rifts apply the +1 during movement. This modifier will not be included in Captain Mendosa's effect.

• The nebula effect of setting the move value of all ships in that system to one will be overwritten by Captain Mendosa's effect.

### Rowl Sarring (Commander)

### Gurno Aggero — Armageddon Relay (Hero)

• A unit is not adjacent to the system it is in.

### Scavenger Zeta (Mech)

• The Saar player may perform the Deploy ability or their Scavenge ability in either order. If they perform their Scavenge ability first, they may pay for the Deploy ability with the gained trade good.
    
• When the Saar player gains control of a planet that is not already controlled by another player, they will explore it before the Deploy ability will be able to trigger.
    
• If the Saar player gains control of multiple planets, they may deploy one Scavenger Zeta to each.`
    },
    {
        id: 'sol',
        name: 'The Federation of Sol',
        content: `### Orbital Drop

### Versatile

### Military Support (Promissory Note)

• Military Support is played before the Sol player may use Orbital Drop.
    
• Military Support may be played the turn the Sol player passes.
    
• Military Support may be played when the Sol player has no command tokens in their strategy pool.
    
• A player may receive Military Support in a transaction during the Sol player's turn. If received at the start of the Sol player's turn, that player may play it immediately.

• The active player may perform a transaction with each other player at most once per turn. As such, a player cannot receive Military Support more than once per turn.
        
• If a player received Military Support on a previous turn, they may play it at the start of the Sol player's turn, and immediately perform a transaction with the Sol player to regain it. However, Military Support cannot be played twice in one timing window. The active player cannot play Military Support again until the Sol player's next turn.

### Advanced Carrier (Unit)

### Spec Ops (Unit)

### Genesis (Flagship)

• Placing the infantry during the status phase is mandatory. After, the Sol player might need to remove an infantry or fighter to meet capacity limits.

### Evelyn DeLouis (Agent)

• This ability only applies to combat rolls.

• This ability does not allow one of the L1Z1X player's Annihilator mechs to roll an additional Bombardment dice when resolving their Harrow ability.

### Claire Gibson (Commander)

• If an invasion involves ground combat on multiple planets, an infantry will be placed on each.
    
• If the Sol player has no ground forces on a planet they control, ground combat will not occur, and so they cannot place an infantry on that planet. This includes if they lose the last of their ground forces during the Bombardment step of the invasion.
    
• The start of ground combat occurs after the Space Cannon Defense step. If all of the ground forces committed to a planet are destroyed in that step, then the ground combat will be skipped on that planet, and this ability will not trigger.

### Jace X — Helio Command Array (Hero)

### ZS Thunderbolt M2 (Mech)`
    },
    {
        id: 'ul',
        name: 'The Titans of Ul',
        content: `### Terragenesis

### Awaken 

• Only sleeper tokens present in the system when it is activated may be replaced with PDS.
    
• A sleeper token that is placed during the Activation step, most commonly by using the Scanlink Drone Network technology and the Terragenesis ability, cannot be replaced via the Awaken ability during the same tactical action.
    
• If the Ul player wishes to place a PDS, but there are none left in their reinforcements, they may remove a PDS from any system that does not contain one of their command tokens and place that instead. The PDS will be placed undamaged.
    
• If the Ul player places a PDS on a planet controlled by another player, and that player does not have any ground forces on that planet, the Ul player will destroy all of the other player's structures, and gain control of that planet immediately. If the other player has ground forces, then a ground combat will be resolved during the Invasion step of the tactical action.

### Coalescence 

• Units placed on planets via the Awaken ability are not committed. They cannot be assigned hits during the Space Cannon Defense step.
    
• If the Ul player's units exist in the same location as another player's units, no game effect can prevent the combat from occuring, including effects that end the Ul player's turn.
    
• If another player plays the Ul player's Ceasefire promissory note, the Ul player may still place units into the active system using their flagship or Awaken ability.
    
• Only the active player may use the Bombardment ability of their units during an invasion. As such, any ships in the active system will be unable to use their Bombardment ability during the Ul player's turn, unless they belong to the Ul player.

• This prevents the L1Z1X player from using their Harrow ability.

### Terraform (Promissory Note)

• Once played, Terraform is never returned to the Ul player.
    
• Once played, Terraform counts as being in the play area of the player who controls the planet.
    
• If a planet has multiple traits, the player exploring the planet chooses which of the corresponding exploration decks to draw from.

### Hel-Titan (Unit)

• The Ul player cannot use the secondary ability of the Warfare strategy card to use the Production ability of a Hel-Titan.
    
• When multiple units use their Production ability, the Production value is pooled. As such, if the Ul player has two Hel-Titans in a system, they may produce two infantry or two fighters for one resource, rather than two resources.
    
• Effects that remove ground forces, and then place them on the game board without transporting them, such as the Decoy Operation action card or the Transit Diodes technology, may be used on a Hel-Titan.
    
• Effects that move ground forces, such as the Ghost Squad action card or the ability of the N'orr player's commander, G'hom Sek'kus, (via the Alliance promissory note), cannot be used to move a Hel-Titan to another planet.
    
• If a player is able to ignore Planetary Shield, then Hel-Titan are eligible units to assign any hits produced by a bombardment roll.

### Saturn Engine (Unit)

### Ouranos (Flagship)

• Only PDS present in the system when it is activated may be replaced with the Ouranos.
    
• A PDS that is placed during the activation step, most commonly by using the Awaken ability, cannot be replaced with the Ouranos during the same tactical action.

### Tellurian (Agent)

• Cancelling a hit cannot be used to stop an effect that directly destroys a unit.

### Tungstantus (Commander)

• The trade good may be spent on the units produced by the Production ability that triggered Tungstantus.

• The trade good may be spent as it is gained. The number of trade goods the Ul player has after producing units is used to determine if the Mentak player may use their Pillage ability.
        
• A trade good will not be gained unless at least one unit is produced.

• Other effects that produce units without a unit using its Production ability will not trigger Tungstantus.

### Ul the Progenitor — Geoform (Hero)

• The Space Cannon ability is controlled by whichever player controls Elysium.

### Hecatoncheires (Mech)

• When the Ul player would place multiple PDS during a single step, they may resolve a Deploy ability to place one Hecatoncheires for any or all of those PDS.
    
• A Deploy ability may only be resolved for units in a player's reinforcements. If all four of the Hecatoncheires are already on the board, no Hecatoncheires may be deployed.
    
• The Ul player cannot place a PDS on a planet that already has two of their PDS on it. As such, they are unable to place a Hecatoncheires on a planet with two of their PDS using its Deploy ability.
    
• The Ul player must have at least one PDS in their reinforcements to place in order to use the Deploy ability of a Hecatoncheires. However, when they would place a PDS, they may remove a PDS from any system that does not contain one of their command tokens and put it in their reinforcements. They may then use the Deploy ability of a Hecatoncheires.`
    },
    {
        id: 'vuilraith',
        name: 'The Vuil\'raith Cabal',
        content: `### Devour

• When an opponent's Infantry II is destroyed during combat, the Vuil'raith player captures an infantry token, and the opponent rolls for resurrection, placing the destroyed infantry on the Infantry II unit upgrade card if successful.
    
• The Vuil'raith player cannot capture the Ul player's Hel Titan PDS.
    
• For additional information, see the Capture rules reference page.

### Amalgamation

• If the Vuil'raith player produces multiple units, their Amalgamation ability may be applied to each.
    
• If the Vuil'raith player has captured their own units, they may use their Amalgamation ability when producing a unit of that type, even of they have no other units of that type in their reinforcements.
    
• Amalgamation does not change the cost of the produced units, only the resources spent.

• If the Vuil'raith player uses the ability of the Integrated Economy technology, Amalgamation will have no effect on the limit to the units they may build.

• The Vuil'raith player produces one fighter or infantry without spending resources for each captured fighter or infantry they spend.
    
• If the Vuil'raith player has the Naalu or Yin player's Alliance promissory note, they may spend one resource for one fighter or infantry, but spend a captured unit instead of that resource, then get one additional fighter or infantry for no cost, which will not count towards their production limit.

### Riftmeld

### Crucible (Promissory Note)

• Each gravity rift will still provide its usual +1 to each ship's move value.
    
• Crucible will provide an additional +1 to each ship's move value, which will not increase if that ship moves through two or more gravity rifts.

• A ship that moves through or out of no gravity rifts will apply +0 to its move value.
        
• A ship that moves through or out of one gravity rift will apply +2 to its move value.
        
• A ship that moves through or out of two gravity rifts will apply +3 to its move value.
        
• A ship that moves through or out of three gravity rifts will apply +4 to its move value.
        
• And so on.

• If a ship could move from its current system to the active system through a gravity rift if its move value were +2, it may do so using Crucible. This is true even if that ship could not reach the gravity rift without Crucible.

• For example, consider a series of systems X-S-G-Y. Only systems connected by a "-" are adjacent. System "G" is a gravity rift. Systems "X", "S" and "Y" are standard systems with no movement restrictions. A ship with a move value of one is in system "X". Were it to have +2 to its movement value, it could reach system "Y". Currently, that ship may reach only system "S". Despite this, if its owner activated system "Y" and played Crucible, the ship could move to that system.

• If the active player received Crucible on a previous turn, they may play it and immediately perform a transaction with the Vuil'raith player to regain it. However, Crucible cannot be played twice in one timing window. The active player cannot play Crucible again until their next turn.
    
• Any deal between the Vuil'raith player and another player regarding when Crucible will be played, if made before Crucible is exchanged, is non-binding.
    
• If a player plays both Crucible and the Nav Suite action card during the same tactical action, they will still apply +1 to the move value of their ships that move through or out of a gravity rift.

### Vortex (Technology)

• A unit is not adjacent to the system it is in; the Vortex ability cannot target a ground force on another planet in the same systems as one of the Vuil'raith player's Dimensional Tears, unless there is a second space dock in an adjacent system.
    
• Vortex cannot be used if there are no units that can be targeted.
    
• If a player has all their units of a particular type on the board, other than fighters or infantry, that type of unit belonging to that player cannot be targeted.
    
• If another player is blockading a Dimensional Tear, their units cannot be targeted with Vortex.

### Dimensional Tear (Unit)

• This system is a gravity rift, and thus an anomaly.

• This system qualifies for the Make History and similar such objectives.

• If a ship moves through or out of multiple gravity rifts, and/or the same gravity rift multiple times, each instance will provide a +1 to movement.

• For example, consider a series of systems A-B-C-M. Only systems connected by a "-" are adjacent. Systems "A", "B" and "C" have dimensional tears, while system "M" does not. The Vuil'raith player has a carrier with move one in system "C" and a ground force in system "A". They could activate system "M" and move the carrier along the path "C" &rarr; "B" &rarr; "A" &rarr; "B" &rarr; "C" &rarr; "M", picking up the ground force from system "A". This path would make the carriers move value 1+5, which is more than enough for this movement.

• Multiple Dimensional Tears in a single system have no additional effects.
    
• If a Dimensional Tear is in a system that is normally a gravity rift (e.g. the Cormund system), the Vuil'raith player will not have to roll for removal when moving out of or through that system. There are no additional effects.
    
• If a Dimensional Tear is in a system with a Nebula, then the +1 to move values will be applied after the nebula sets each ship's move value to 1.
    
• If the Dimensional Tear plastic figure is destroyed or removed, the Dimensional Tear token is also removed.

### The Terror Between (Flagship)

• When The Terror Between is destroyed, it still captures units that were destroyed at the same time.

• Using the Sustain Damage ability of units is done before remaining hits are assigned. As such, if The Terror Between is destroyed by a Direct Hit action card, units destroyed by being assigned hits in the same round of combat, or from the same pool of Space Cannon hits, will not be captured.

• If ships are destroyed outside of combat, those ships will still be captured by The Terror Between.

### The Stillness of Stars (Agent)

• If a player loses their commodities immediately after replenishing them, most commonly via that player's Trade Agreement promissory note, the Vuil'raith player may still target them. If they do, they still use that player's full commodity value to determine which units may be captured.
    
• The Vuil'raith player cannot capture a unit without a cost. Notably, they cannot capture a PDS, a space dock, or a war sun of a player without their war sun unit upgrade.
    
• If the Vuil'raith player chooses to capture a fighter or infantry, they will capture one, not two.
    
• When the primary ability of the Trade strategy card is resolved, the Vuil'raith player must choose if they will use The Stillness of Stars or not after the active player has replenished their commodities, but before players are chosen to perform the secondary ability without spending a command token.
    
• When the secondary ability of the Trade strategy card is resolved, the Vuil'raith player must choose if they will use The Stillness of Stars or not after the current player has replenished their commodities, but before the next player has decided if they will spend a command token to perform the secondary.
    
• When The Stillness of Stars converts a player's commodities to trade goods, those trade goods are not treated as being gained for the purpose of triggering other abilities. In particular, the Mentak player's Pillage faction ability is not triggered by this ability.

### That Which Molds Flesh (Commander)

### It Feeds on Carrion — Dimensional Anchor (Hero)

• Units captured while resolving Dimensional Anchor are not destroyed.
    
• If a player's units are blockading one of the Vuil'raith player's Dimensional Tears, dice will not be rolled for that player's units when resolving Dimensional Anchor.
    
• Each non-fighter ship affected will roll only once, regardless of how many Dimensional Tears it is adjacent to.
    
• The player that owns the ground forces and fighters chooses which are removed. They are not assigned to particular ships beforehand.
    
• If the Nekro player has used a Valefar Assimilator faction technology to copy Dimensional Tear II, ships in systems containing or adjacent to the Nekro player's space docks will also have to roll for capture when resolving Dimensional Anchor. This includes the Nekro player's own ships.

### Reanimator (Mech)

• If the Vuil'raith player owns the Infantry II unit upgrade technology, and one is destroyed during ground combat on a planet with a Reanimator, the Vuil'raith player captures an infantry token, and they roll for resurrection, placing the destroyed infantry on the Infantry II unit upgrade card if successful.
    
• If the Vuil'raith player's infantry on a planet with a Reanimator are destroyed outside of combat, such as with the Plague action card, those infantry will be captured.`
    },
    {
        id: 'winnu',
        name: 'The Winnu',
        content: `### Blood Ties

• The Winnu player must still commit at least one ground force to Mecatol Rex to remove the custodians token.

### Reclamation

• Placing the structure will occur after the Production step. If the Winnu player places a Space Dock, they cannot produce out of it during the same action.
    
• If the Winnu player has no PDS or Space Docks left in their reinforcements, they may remove a unit from any system that does not contain one of their command tokens and place that unit on Mecatol Rex when resolving Reclamation.

### Acquiescence (Promissory Note)

• If either strategy card had trade goods on it at the start of the strategy phase, those trade goods remain with the player that originally chose the strategy card.
    
• In a three- or four-player game, the player that played Acquiescence chooses which one strategy card from each player are swapped.

### Acquiescence &Omega; (Promissory Note)

• If a player plays Acquiescence &Omega; when the Winnu player is resolving the Construction strategy card, that player will not place a command token in the system they placed their structure in.
    
• If the Muaat player has their commander, Magmus, unlocked, and they play Acquiescence &Omega;, they will not gain a trade good from their commander ability.

### Hegemonic Trade Policy (Technology)

• Changing a planet's resource value will affect the Production value of a Space Dock on that planet.

### Lazax Gate Folding (Technology)

• While Lazax Gate Folding is exhausted, the wormhole passive effect still applies if its conditions are met.
    
• Lazax Gate Folding may cause the Mecatol Rex system to be adjacent to other systems containing an alpha or beta wormhole for all players during the Winnu player's tactical actions.

• The Winnu player may become neighbors with other players via Lazax Gate Folding.
        
• Other players may use the Deep Space Cannon ability of their units in systems containing alpha or beta wormholes during the Space Cannon Offense step of the Winnu player's turn if the Mecatol Rex system is the active system.
        
• Units in the Mecatol Rex system with the Deep Space Cannon ability may use it during the Space Cannon Offense step of the Winnu player's turn if the active system contains an alpha or beta wormhole.
        
• A player may retreat to a system containing an alpha or beta wormhole from the Mecatol Rex system, or vice versa, during the Winnu player's tactical action.
        
• The Creuss player may use their Dimensional Splicer faction technology ability in the Mecatol Rex System during the Winnu player's tactical action.

• The Winnu player may use the component action of Lazax Gate Folding if they do not control Mecatol Rex. If they do, they must exhaust it, and there will be no additional effect.

### Salai Sai Corian (Flagship)

• If the Winnu player's opponent has only fighters participating in the combat, the Salai Sai Corian will roll no dice.
    
• During a combat against the Nekro player in a system containing each player's flagships, the Salai Sai Corian will count the Nekro player's infantry participating in the combat when determining how many dice to roll.

### Berekar Berekon (Agent)

• Production limits still apply.

### Rickar Rickani (Commander)

• If Rickar Rickani is unlocked via a combat in the Mecatol Rex system, then the +2 will apply to combat rolls during that combat.
    
• If a system meets two (or more) of the conditions listed (such as by attaching the Nano-Forge relic to Mecatol Rex), Rickar Rickani will only apply +2 to combat rolls, not +4 (or +6).

### Mathis Mathinus — Imperial Seal (Hero)

• A player chosen to perform the secondary ability must still spend a command token from their strategy pool to do so, except for the Leadership strategy card and potentially the Trade strategy card.

• In the case of the Construction strategy card, the command token is placed as required on the game board.

• If the Winnu player chooses the Trade strategy card for this ability and the Winnu player chooses a player to resolve the secondary without spending a command token via the primary ability, the chosen player must resolve the secondary ability. Additionally, if the Winnu player chooses a player to resolve the secondary via the Hero's ability, it is optional for that player to resolve the secondary, but if they do, they must spend a strategy token to do so.
    
• Acquiescence &Omega; cannot be triggered by this ability.

### Reclaimer (Mech)

• Placing the structure will occur after the Production step. If the Winnu player places a Space Dock, they cannot produce out of it during the same action.
    
• If the Winnu player has no PDS or Space Docks left in their reinforcements, they may remove a unit from any system that does not contain one of their command tokens and place that unit on the newly controlled planet.
    
• If the Winnu player gains control of a planet with multiple Reclaimers, they may place a structure for each one, if they may do so without exceeding the maximum number of that structure allowed on a planet.
    
• The Reclaimer need only be on the planet at the end of the tactical action the Winnu player gained it, not when the Winnu player gains control of it. This can occur from effects such as the Infiltrate action card, or some exploration cards.`
    },
    {
        id: 'xxcha',
        name: 'The Xxcha Kingdom',
        content: `### Peace Accords

• A planet is adjacent to both the system it is in, and every system adjacent to that.
    
• If the planet was uncontrolled, the Xxcha player explores it.
    
• The planet is gained exhausted.

### Quash

• Quash, Political Favor, the Political Secret promissory note, and the Veto action card are all played in the same timing window, before the rider timing window.

• If Quash is used after any Political Secret promissory notes have been played, those are immediately returned and will have no effect on the replacement agenda.

• Each agenda is considered separate for the purpose of limiting each pair of players to one transaction per agenda.
    
• Quash may be used on the replacement agenda.

### Political Favor (Promissory Note)

• Quash, Political Favor, the Political Secret promissory note, and the Veto action card are all played in the same timing window, before the rider timing window.

• If Political Favor is used after any Political Secret promissory notes have been played, those are immediately returned and will have no effect on the replacement agenda.

• If the Xxcha player has no command tokens in their strategy pool, Political Favor cannot be played.
    
• Each agenda is considered separate for the purpose of limiting each pair of players to one transaction per agenda.

### Instinct Training (Technology)

• Instinct Training may cancel a Sabotage action card.
    
• If a player has a second copy of an action card, they may play it if the first was cancelled by Instinct Training.
    
• If an action card is cancelled by Instinct Training, no costs are paid.
    
• A player playing an action card announces the following before Instinct Training may be played:

• Any targeted planets, system, units, players, cards, outcomes, and/or other such objects.
        
• The value of any variable cost to be paid.

• Any dice are rolled and any cards are drawn only after all other players has declined to play Instinct Training.
    
• If an action card instructs a player to research a technology, that player need not announce what technology they are researching until all other players has declined to play Instinct Training.
    
• If an action card is played that will have an effect later, such as a rider, that card may only be cancelled by Instinct Training when it is originally played.
    
• If the action card that was cancelled by Instinct Training was to be used to perform a component action, the active player must perform a different action, or pass.

• If the component action was to be the second action the active player was to perform on their turn, through an effect such as the Fleet Logistics technology, the active player may end their turn without performing a second action and without passing.

### Nullification Field (Technology)

• Once the Xxcha player resolves the ability of Nullification Field, the active player cannot use any "after you activate a system" abilities.

• Other players, including the Xxcha player, cannot use any "after another player activates a system that&hellip;" abilities.

• The active player may still use any "at the end of your turn" abilities.

### Loncara Ssodu (Flagship)

• During the Space Cannon Offense supstep of a tactical action, the active player resolves the Space Cannon abilities of their units first. If the Xxcha player is not the active player, and the Loncara Ssodu is destroyed by another player's space cannon roll, it will not resolve its own Space Cannon ability.

### Ggrocuto Rinn (Agent)

• A planet is adjacent to both the system it is in, and every system adjacent to that.
    
• A planet must be exhausted to be targeted by Ggrocuto Rinn.

### Elder Qanoj (Commander)

• A planet with zero influence may be used to cast one additional vote.
    
• The Xxcha player may play rider action cards and vote on the same agenda.
    
• The Xxcha player's Political Secret promissory note will prevent them from playing action cards or using their Quash ability, but will not prevent them from voting.
    
• If the Nekro player has the Xxcha player's Alliance promissory note, the Nekro player may vote, without losing their ability to predict outcomes for their Galactic Threat faction ability.
    
• Game effects may prevent the Xxcha player from casting additional votes.

### Xxekir Grom — Political Data Nexus (Hero)

• If the Xxcha player draws one of the Classified Document Leaks, Judicial Abolishment, Miscount Disclosed or New Constitution agendas, they will only discard it (if required) and reveal a new one if they choose to reveal that agenda.
    
• If the Xxcha player draws the Covert Legislation agenda, they will only draw a hidden agenda if they choose to reveal it. If the Xxcha player is not the speaker, the speaker will view the hidden agenda, but the Xxcha player will not see it until it is either discarded from Quash, or resolved.
    
• If the Xxcha player draws, reveals and resolves the Miscount Disclosed agenda, they cast one vote for an outcome of the elected law, and resolve it.
    
• If the Xxcha player draws, reveals and resolves the Public Execution agenda, the elected player may still vote in the agenda phase following the current action phase.
    
• When the Xxcha player chooses and reveals an agenda, they may then use their Quash ability.
    
• After the Xxcha player chooses and reveals an agenda, they may play any rider action cards on the revealed agenda.
    
• The Xxcha player chooses the order the two agendas are resolved.
    
• The two agendas are revealed before either is resolved.

• The Xxcha player will resolve all abilities that trigger when or after an agenda is revealed for the first agenda before revealing the second agenda.

• When an agenda outcome with an immediate effect resolves, all players resolve the effect.
    
• If an agenda would give multiple players a victory point, those players gain that victory point in initiative order, regardless of the Xxcha player's initiative.
    
• Other players may still perform one transaction total with the Xxcha player during this turn, if they are neighbors.
    
• If the Representative Government law is in play, it will have no effect on the Xxcha player as they resolve Political Data Nexus.
    
• If a third law is put into play, the Dictate Policy objective cannot be scored until the agenda phase.
    
• The Drive the Debate objective cannot be scored while resolving Political Data Nexus.
    
• Effects from agenda outcomes that occur "at the end of this agenda phase" are ignored.
    
• Effects from agenda outcomes that occur "at the start of the next strategy phase" will still occur.

### Xxekir Grom — Political Data Nexus &Omega;(Hero)

• During the status phase, public and secret objectives are scored simultaneously. The Xxcha player cannot score a public objective, unlock Xxekir Grom, and then use Political Data Nexus &Omega; in order to score a secret objective, or vice versa.
    
• The combined value may be spent as either influence or resources, not both, and cannot be split between the two.

• If the Xxcha player owns a planet with three influence and three resources, they cannot score the Amass Wealth objective by exhausting just it and spending three trade goods.

• Political Data Nexus &Omega; only changes the spendable influence and resources. It does not change the value for any other game effect.

• A space dock will not add the influence value of the planet it is on to its Production value.
        
• The influence value of a planet will not increase the number of units the Xxcha player may produce when using the Integrated Economy technology.
        
• The resource values of the planets the Xxcha player controls will not contribute to unlocking Elder Qanoj.
        
• Political Data Nexus &Omega; does not apply when scoring the Establish Hegemony or Hoard Raw Materials objectives.
        
• The Xxcha player will not add the influence value of a planet when they gain trade goods with the Mining Initiative action card. Other players will not add the influence value when they gain trade goods from the Uprising action card if they choose to exhaust one of the Xxcha player's planets.

• The resource value of a planet will be added to its influence value when the Xxcha player casts votes during the agenda phase.

### Indomitus (Mech)

• During the Space Cannon Offense supstep of a tactical action, the active player resolves the Space Cannon abilities of their units first. If the Xxcha player is not the active player, and their ships are removed by another player's space cannon roll, they must immediately remove units to meet their capacity limit. They will not resolve the Space Cannon abilities of any of their removed mechs.
    
• During the Space Cannon Defense substep of a tactical action, only non-active players can use the Space Cannon ability of their units. The Xxcha player cannot use the Space Cannon ability of their mechs immediately after committing them to a planet against units owned by that planet's controller.`
    },
    {
        id: 'yin',
        name: 'The Yin Brotherhood',
        content: `### Indoctrination

• Indoctrination is limited to once per ground combat.
    
• If an invasion involves ground combats on multiple planets, Indoctrination may be used at the start of each of them.
    
• If the Yin player's opponent only has mechs in the ground combat, Indoctrination cannot be used.

• If the Yin player is in a combat with the Naalu player, and the Naalu player is using the ability of their flagship, the Matriarch, to commit only fighters to the ground combat, Indoctrination cannot be used.

• If the last of a player's ground forces in a ground combat are removed by Indoctrination, that player loses the combat immediately. They will be unable to use any "start of combat" abilities.

### Devotion

• When resolving Devotion, the Yin player chooses which ship is assigned the hit.

• The Yin cannot choose their own ships as targets.
        
• The targeted ship may cancel the hit with its Sustain Damage ability, if present. Other ships with the Sustain Damage ability cannot cancel the hit.

• The Shields Holding action card may be used to cancel the hit.
    
• If a player retreats, the Yin player will be unable to use Devotion to destroy an opponent's ship.
    
• If the Yin player is in a combat with the N'orr player, then the two players will alternate when resolving end of combat round abilities, starting with the attacker.

### Greyfire Mutagen (Promissory Note)

• Leader abilities, mech abilities and flagship abilities are not faction abilities.

### Greyfire Mutagen &Omega; (Promissory Note)

• A player may receive Greyfire Mutagen &Omega; in a transaction during a ground combat. If received at the start of ground combat, that player may play it immediately.

• A transaction must involve the active player. As such, the defender will be unable to receive Greyfire Mutagen &Omega;.
        
• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive Greyfire Mutagen &Omega; more than once per turn.
        
• If the active player received Greyfire Mutagen &Omega; on a previous turn, they may play it and immediately perform a transaction with the Yin player to regain it. However, Greyfire Mutagen &Omega; cannot be played twice in one timing window. The active player cannot play Greyfire Mutagen &Omega; again during the same ground combat.
        
• If an invasion involves ground combat on multiple planets, Greyfire Mutagen &Omega; may be played at the start of each of them.

### Impulse Core (Technology)

• When resolving Impulse Core, the Yin player's opponent chooses which ship is assigned the hit.
    
• Effects that cancel hits, such as the Sustain Damage ability, may be used to cancel a hit produced by Impulse Core.
    
• Impulse Core will resolve before the Anti-Fighter Barrage step of a space combat. As such, any destroyed destroyers will not make an anti-fighter barrage roll.

### Yin Spinner (Technology)

• The infantry may be placed on a planet that does not contain a unit with Production.
    
• Other effects that produce units without a unit using its Production ability will not trigger Yin Spinner.

### Yin Spinner &Omega; (Technology)

• The two infantry must be placed together.
    
• Other effects that produce units without a unit using its Production ability will trigger Yin Spinner &Omega;.

### Van Hauge (Flagship)

• When the Van Hauge is destroyed, it will not destroy any of the Saar player's Floating Factories present in the system.
    
• The Van Hauge will not destroy ground forces in the system. However, each player must then remove ground forces, if necessary, from the space area of that system to meet capacity limits.
    
• As both players will have zero ships in the active system after the Van Hauge is destroyed, the combat will end in a draw.

### Brother Milor (Agent)

• If all of a player's ships are destroyed during combat, they may still place ships with this ability. If they do, combat will continue.

• If that player's opponent has no ships remaining, that player will instead win that combat.

• Capacity is not checked during combat. As such a player may use Brother Milor to place fighters into a space combat where they have no spare capacity. After that combat ends, that player must remove fighters and/or ground forces to meet their capacity limit in that system.
    
• If the Yin player uses Brother Milor after the Van Hauge is destroyed during a space combat, they will win that combat.
    
• If all ships in the system are destroyed, and there are excess hits that have not been assigned to a ship, those hits will lapse, and cannot be assigned to the newly placed fighters.

• If a ship uses its Sustain Damage ability, and is then destroyed by a Direct Hit action card, then any remaining hits may be assigned to any placed fighters.

• If all ships in the system are destroyed by hits produced from a space cannon roll, the player that produced those hits may score the Turn Their Fleets to Dust secret objective before the new fighters are placed.

### Brother Milor &Omega; (Agent)

• Brother Milor &Omega; may only be used during the action phase.
    
• If all of a player's units are destroyed during combat, they may still place units with this ability. If they do, combat will continue.

• If that player's opponent has no units remaining, that player will instead win that combat.

• Capacity is not checked during combat. As such a player may use Brother Milor &Omega; to place fighters into a space combat where they have no spare capacity. After that combat ends, that player must remove fighters and/or ground forces to meet their capacity limit in that system.
    
• If the Yin player uses Brother Milor &Omega; after the Van Hauge is destroyed during a space combat, they will win that combat.
    
• If all units in the combat are destroyed, and there are excess hits that have not been assigned to a unit, those hits will lapse, and cannot be assigned to the newly placed units.

• If a ship uses its Sustain Damage ability, and is then destroyed by a Direct Hit action card, then any remaining hits may be assigned to any placed fighters.

• If all ships in the system are destroyed by hits produced from a space cannon roll, the player that produced those hits may score the Turn Their Fleets to Dust secret objective before the new fighters are placed.
    
• If all ground forces on a planet are destroyed by hits produced from a bombardment roll, the player that produced those hits may score the Make an Example of Their World secret objective before the new infantry are placed.
    
• If the Yin player uses Brother Milor &Omega; when a unit is destroyed that is both a ground force and a ship due to some game effect, that unit's owner may place two fighters or two infantry.

• If placed this way during a space combat, any newly placed infantry cannot participate. If placed this way during a ground combat, any newly placed fighters cannot participate.

### Brother Omar (Commander)

• If the Regulated Conscription law is in play, the Yin player may produce two infantry for one resource. This will count one towards their Production limit.
    
• If a game effect instructs the Yin player to produce units without using the Production ability, they may only produce infantry if that game effect allows them to produce infantry.
    
• The Yin player may choose to produce one infantry for one resource. If they do, they may produce one additional infantry.

### Brother Omar &Omega; (Commander)

• The faction abilities to unlock Brother Omar are Indoctrination or Devotion.
    
• If another player owns a faction specific unit upgrade, it cannot be chosen in order to gain the generic version of that unit upgrade by using Brother Omar.

• If another player has the Yin player's Alliance promissory note, they cannot use it to research a faction specific unit upgrade.

### Dannel of the Tenth — Spinner Overdrive (Hero)

• The Yin player may ready a planet they control containing zero infantry.

### Dannel of the Tenth &Omega; — Quantum Dissemination &Omega; (Hero)

• A total of three infantry may be placed. These may all be placed on one planet, or placed one each on three planets, or split two/one between two planets.
    
• The Yin player may commit infantry to Mallice even if the wormhole nexus has not been flipped to its active side. Doing so will cause the wormhole nexus to flip.
    
• Only the Commit Ground Forces, Ground Combat and Establish Control steps of an invasion are resolved.
    
• The Yin player commits all infantry before resolving any combats.

• Only the three infantry from the Yin player's reinforcements may be committed during the Commit Ground Forces step. Ground forces in the space area above the planets cannot be committed.

• The Yin player may use their Indoctrination ability and their mech's Deploy ability.
    
• The Yin player does not activate the systems containing the planets that they are committing infantry to. As such, any effects that trigger "when/after a player activates a system" do not trigger.
    
• The Parley action card may be used on one planet when the Yin player resolves Quantum Dissemination.

• If the Yin player has no ships with capacity in the planet's system, then the infantry will be removed from the board.
        
• If the Yin player does have ships with capacity in the planet's system, then the infantry will be placed in the space area of the system. The Yin player might then need to remove infantry and/or fighters from the system to satisfy the capacity limit.

### Moyin's Ashes (Mech)

• A Deploy ability may only be resolved for units in a player's reinforcements. If all four Moyin's Ashes are already on the board, no more may be deployed.

• If a Moyin's Ashes is destroyed during combat, another may be deployed in a later combat during the same invasion.

• The removed unit must still be an infantry.
    
• The Deploy ability has a total cost of three influence. The Yin player may exhaust a single planet with three or more influence to pay this cost.`
    },
    {
        id: 'yssaril',
        name: 'The Yssaril Tribes',
        content: `### Stall Tactics

### Scheming

• No other abilities may resolve until the Yssaril player has discarded the action card.
    
• Scheming applies whenever the Yssaril player draws action cards.
    
• The Yssaril player will draw only one additional action card, regardless of how many action cards they are instructed to draw.
    
• The discarded action card may be any card in the Yssaril player's hand; it does not have to be one of the cards they just drew.
    
• Effects that give the Yssaril player action cards without drawing them, such as The Codex relic or the Reverse Engineer action card, will not trigger Scheming.

### Crafty

• The effect of the Executive Sanctions law does not affect the Yssaril player.

### Spy Net (Promissory Note)

• The player that plays Spy Net must look at the Yssaril player's hand of action cards. They do not have to read or memorize what they look at.
    
• A player may receive Spy Net in a transaction during their turn. If received at the start of that player's turn, that player may play it immediately.

• The active player may perform a transaction with each other player at most once per turn. As such, the active player cannot receive Spy Net more than once per turn.
        
• If the active player received Spy Net on a previous turn, they may play it and immediately perform a transaction with the Yssaril player to regain it. However, Spy Net cannot be played twice in one timing window. The active player cannot play Spy Net again until their next turn.

• Any deal between the Yssaril player and another player regarding which action card will be chosen, if made before Spy Net is exchanged, is non-binding.

### Mageon Implants (Technology)

• When resolving Mageon Implants, the Yssaril player is not drawing a card. As such, Scheming will not trigger.
    
• The Yssaril player must target a player with at least one action card in their hand when they resolve Mageon Implants.

### Transparasteel Plating (Technology)

• Other players may resolve faction abilities, leader abilities or technology abilities during the Yssaril player's turns.

### Y'sia Y'ssrila (Flagship)

• If the Yssaril player owns the Light/Wave Deflector technology, it will have no additional effect on the Y'sia Y'ssrila

### Ssruu (Agent)

• If the Yssaril player duplicates an agent that allows a unit to roll an additional die, and both the duplicated agent and Ssruu target the same unit, that unit will roll two additional dice.
    
• If the Yssaril player duplicates the Saar player's Captain Mendosa agent, they may do so before or after other effects are used to modify any ship's move value. This includes the Saar player's Captain Mendosa agent effect.
    
• If both the Yssaril player and the Vuil'raith player wish to target the same player with the Vuil'raith The Stillness of Stars agent ability, then they will both be able to capture a ship, resolving in initiative order from the active player. Both players will still use the target player's full commodity value to determine which units they may capture. Should the first player to resolve capture the last of a type of unit from the target player's reinforcements, the latter player cannot capture a unit of the same type.
    
• If the Yssaril player duplicates the Mentak player's Suffi An agent, then the Yssaril player and the player targeted by the Mentak player's Pillage ability will draw action cards. The Mentak player will not.
    
• Duplicating the effect of the Argent player's Trillossa Aun Mirik agent, the Creuss player's Emissary Taivra agent or the Jol-Nar player's Doctor Sucaban agent during the same timing window as that agent is used will have no additional effect.
    
• If either the Yssaril player or the Nomad player resolve the effect of the Nomad player's The Thundarian agent, the other will be unable to resolve the same effect immediately. They must wait until dice are rolled again before they may resolve the effect.
    
• For notes about an agent of a specific faction, see that faction's notes.

### So Ata (Commander)

• The Yssaril player cannot unlock So Ata if they are yet to discard a card for their Scheming ability.

### Kyver, Blade and Key — Guild of Spies (Hero)

• Each other player chooses which action card they show the Yssaril player.
    
• Taking action cards from a player using Guild of Spies will not trigger the Yssaril player's Scheming ability.

### Blackshade Infiltrator (Mech)`
    }
];

// Export all rules as a single string for the RAG service
export const ALL_RULES_TEXT = [
    ...COMPLETE_RULES.map(r => `RULE: ${r.title}\n${r.content}`),
    ...COMPONENT_DATA.map(c => `COMPONENT: ${c.title}\n${c.content}`),
    ...FACTION_RULES.map(f => `FACTION: ${f.name}\n${f.content}`)
].join('\n\n---\n\n');
