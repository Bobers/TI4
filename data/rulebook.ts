// This file contains the complete and unabridged text from the Twilight Imperium 4 rulebooks.
// It is used as the context for the Gemini AI model's RAG service.
// Data sourced from: https://github.com/bradleysigma/tirules

import { ALL_RULES_TEXT } from './completeRulebook';

// Combine the complete rules with existing truncated rulebook for backward compatibility
export const RULEBOOK_DATA = ALL_RULES_TEXT + '\n\n--- LEGACY TRUNCATED CONTENT ---\n\n' + `
--- START OF DOCUMENT: TWILIGHT IMPERIUM 4TH EDITION - RULES REFERENCE ---
TWILIGHT IMPERIUM
FOURTH EDITION
RULES REFERENCE
LEARN TO PLAY
To learn how to play Twilight Imperium: Fourth Edition, read the
Learn to Play rulebook first. This Rules Reference is a supplement
to that book, not a replacement for it. The rules presented in this
book are the definitive rules for the game. If something in this
book contradicts the Learn to Play rulebook, this book takes
precedence.
USING THIS BOOK
This book presents the rules in an encyclopedic format. All rules,
terms, and components are alphabetized for easy reference.
Throughout this book, some words appear in small caps. These
words refer to components, card types, and other key terms. You
can look up these key terms in this book.
Some entries are divided into numbered subentries. These
subentries are used for both clarity and for referencing specific rules.
A subentry can be referenced by its number and the name of its
parent entry. For example, a reference to “12.2” is directing you to
the second subentry of the “Anti-Fighter Barrage” entry.
Twilight Imperium is a game of galactic conquest in which three
to six players take on the role of one of seventeen factions vying
for galactic domination through military might, political maneuvering,
and economic bargaining.
These rules are divided into the following sections:
• Section I: Game Round. This section describes the structure
of a game round, from the strategy phase to the agenda phase.
• Section II: Game Concepts. This section describes the game’s
core concepts, such as how to read components, resolve timing
conflicts, and use abilities.
• Section III: Themed Rules. This section contains rules that fall
under specific themes, such as combat, movement, and planets.
• Section IV: Components. This section describes the rules
associated with specific game components.
SECTION I:
GAME ROUND
1 GAME ROUND
A game of Twilight Imperium is played over a series of game
rounds. Each round is divided into four phases:
1. Strategy Phase
2. Action Phase
3. Status Phase
4. Agenda Phase
1.1 Each of these phases is described in detail in its own entry.
2 STRATEGY PHASE
During the strategy phase, players choose their STRATEGY CARDS.
These cards provide their owners with a powerful ability that can be
used during the action phase. To resolve the strategy phase, players
perform the following steps in order:
1. Retrieve Command Tokens: Each player returns all of their
COMMAND TOKENS from their tactical and fleet pools to their
reinforcements.
2. Choose Strategy Card: Starting with the SPEAKER and proceeding
clockwise, each player chooses one of the faceup STRATEGY
CARDS from the common play area.
2.1 When a player chooses a STRATEGY CARD, they take it from the
common play area and place it faceup in their play area.
2.2 The number of STRATEGY CARDS available each round is equal to
the number of players plus two.
2.3 The number printed on a STRATEGY CARD is that card’s initiative
value. During the action phase, players take their turns in order
of lowest to highest initiative value.
3 ACTION PHASE
During the action phase, players take turns performing actions. Starting
with the player whose STRATEGY CARD has the lowest initiative value
and proceeding in initiative order, players perform one action during
their turn. This continues until all players have passed.
3.1 A player can perform one of three types of actions during
their turn: a tactical action, a strategic action, or a component
action.
3.2 A player can pass their turn instead of performing an action. After
a player passes, they cannot perform any more actions for the
remainder of that game round, but they can still resolve the
secondary ability of other players’ STRATEGY CARDS.
3.3 When it is a player’s turn, if they have passed, they are skipped.
4 STATUS PHASE
During the status phase, players prepare for the next game round by
readying their cards, repairing their units, and performing other upkeep
steps. To resolve the status phase, players perform the following
steps in order:
1. Score Objectives: Starting with the SPEAKER and proceeding
clockwise, each player may score one PUBLIC OBJECTIVE CARD and
one SECRET OBJECTIVE CARD if they fulfill the requirements on
those cards. To score an objective, a player places a control
token on that card.
2. Reveal Public Objective: The SPEAKER reveals one PUBLIC
OBJECTIVE CARD from the objective deck and places it faceup
in the common play area.
3. Draw Action Cards: Each player draws one ACTION CARD.
4. Remove Command Tokens: Each player removes all of their
COMMAND TOKENS from the game board and returns them to
their reinforcements. This includes tokens in their home system,
even if they do not control it.
5. Gain and Redistribute Command Tokens: Each player gains two
COMMAND TOKENS from their reinforcements. Then, each player
may redistribute the COMMAND TOKENS in their tactic, fleet, and
strategy pools.
6. Ready Cards: Each player readies all of their exhausted cards.
This includes PLANET CARDS, TECHNOLOGY CARDS, and any other
cards that can be exhausted.
7. Repair Units: Each player removes all damage tokens from each
of their units that have the SUSTAIN DAMAGE ability.
8. Return Strategy Cards: Each player returns their STRATEGY CARD
faceup to the common play area.
5 AGENDA PHASE
After the status phase of the third game round, and each status phase
thereafter, players convene the galactic council to vote on new laws
and policies. This is called the agenda phase. To resolve the agenda
phase, players perform the following steps in order; after step 3, play
proceeds to the beginning of the next game round.
1. When Mecatol Rex is controlled: If a player controls Mecatol
Rex, the agenda phase occurs. If no player controls Mecatol
Rex, the agenda phase is skipped.
2. Reveal Agenda: The SPEAKER draws the top card of the agenda
deck and reads it aloud, including its “For” and “Against” text.
3. Vote: Starting with the player to the left of the SPEAKER and
proceeding clockwise, each player may cast votes.
4. Resolve Outcome: After each player has had an opportunity
to cast votes, the SPEAKER determines whether the “For” or
“Against” outcome received more votes and resolves that
outcome. If there is a tie, the SPEAKER decides the outcome.
5. Repeat Process: A second agenda is revealed from the agenda
deck and resolved by repeating steps 2–4.
5.1 Each of these steps is described in detail in the “Agenda Phase”
entry on page 6.
SECTION II:
GAME CONCEPTS
6 ABILITIES
Many units, cards, and faction sheets have abilities. An ability is the
special rules text that a component has.
6.1 An ability can be identified by its name, which appears in bold,
followed by a colon. For example, the VERSATILE ability on the
Federation of Sol’s faction sheet is an ability.
6.2 Some abilities are preceded by the word ACTION. These are
COMPONENT ACTIONS, which are described on page 8.
6.3 The text of some cards is an ability, but is not preceded by a
bolded name. For example, the text of the “Ancient Burial
Sites” ACTION CARD is an ability.
6.4 If an ability uses the word “cannot,” that effect is absolute. A
component, rule, or card text that uses the word “cannot” cannot
be superseded by another component, rule, or card text.
• For example, a player controls a PDS on a planet. Another
player uses the “Disable” ACTION CARD on that planet, which
reads, “PDS units on that planet cannot use their SPACE
CANNON abilities during this tactical action.” The PDS cannot
use its SPACE CANNONS ability, even if another card or rule
would allow it to.
6.5 When a player gains control of a unit, they may use any of that
unit’s abilities. This includes units that have been captured.
6.6 If an ability refers to a specific type of component, it affects only
components of that type.
• For example, the “Morale Boost” ACTION CARD says, “Apply
+1 to the result of each of your combat rolls during this
combat round.” This does not affect BOMBARDMENT rolls.
6.7 If an ability allows a player to do something, that player is not
required to do it.
6.8 If an ability contains the word “destroy,” the unit is removed from
the board and returned to its owner’s reinforcements.
• A destroyed unit cannot use its SUSTAIN DAMAGE ability.
6.9 An ability on a card is active as long as that card is in play.
• An exhausted card is still in play, and its abilities are active.
6.10 Abilities on FACTION SHEETS are always active.
6.11 Abilities on unit upgrade TECHNOLOGY CARDS are applied to all of
a player’s units of that type.
6.12 If a player must make a choice for an ability, they must make a
valid choice. If no valid choice exists, the ability cannot be used.
• For example, if a card instructs a player to choose a planet
and no planets are on the board, that card cannot be played.
7 ADJACENCY
Two systems are adjacent if their system tiles are touching on the
game board.
7.1 Alpha and beta wormholes are adjacent to each other.
• If a system contains an alpha wormhole, it is adjacent to all
other systems that contain an alpha wormhole.
• If a system contains a beta wormhole, it is adjacent to all
other systems that contain a beta wormhole.
8 ATTACH
Some card abilities instruct a player to attach a card to a planet.
8.1 To attach a card to a planet, a player places the card partially
underneath the system tile that contains the chosen planet,
making sure the card’s text is visible.
8.2 A card attached to a planet affects that planet. If a player gains
control of the planet, the attachment remains.
8.3 There is no limit to the number of cards that can be attached to a
planet.
9 BEFORE, AT THE START OF, AFTER, WHEN,
AND IF
The words “before,” “at the start of,” “after,” “when,” and “if” have
specific rules meanings.
9.1 “Before” or “At the start of” refers to the moment immediately
preceding a specified game event. The effects of an ability that
uses this trigger resolve before that event.
• For example, the AMBUSH ability on the Mentak Coalition’s
faction sheet reads, “At the start of a space combat...” The
effects of this ability resolve before the first combat round.
9.2 “After” refers to the moment immediately following a specified
game event. The effects of an ability that uses this trigger resolve
after that event.
• For example, the SCAVENGE ability on the Clan of Saar’s
faction sheet reads, “After you gain control of a planet...”
The effects of this ability resolve after a player takes control of
a planet.
9.3 “When” refers to the exact moment of a specified game event.
The effects of an ability that uses this trigger interrupt that event.
• For example, the VERSATILE ability on the Federation of
Sol’s faction sheet reads, “When you would spend a command
token...” This allows the Sol player to spend one trade good
instead of a command token at the moment the token would
have been spent.
9.4 “If” presents a condition that must be true for the text that
follows it to be valid.
• For example, the secondary ability of the “Imperial”
STRATEGY CARD reads, “If you control Mecatol Rex...” The
effect that follows that text can only be resolved if that player
controls Mecatol Rex.
10 CHOOSING A PLAYER
Some abilities require a player to choose one or more players.
10.1 A player can choose themself, unless the card specifies “another
player.”
11 COMMAND TOKENS
COMMAND TOKENS represent a player’s military and political assets.
They are a limited resource that players spend to perform tactical
actions, expand their fleets, and use STRATEGY CARDS.
11.1 Each player has 16 COMMAND TOKENS in their faction’s color.
11.2 Each player has a COMMAND SHEET that is divided into three areas:
tactic pool, fleet pool, and strategy pool. At the start of the
game, each player places three tokens in their tactic pool, three
tokens in their fleet pool, and two tokens in their strategy pool.
The remaining eight tokens are that player’s reinforcements.
11.3 During the status phase, each player can redistribute the
COMMAND TOKENS on their command sheet among their three
pools.
Tactic Pool
11.4 A player’s tactic pool contains the COMMAND TOKENS they can use
to perform TACTICAL ACTIONS.
Fleet Pool
11.5 A player’s fleet pool determines the number of non-fighter ships
they can have in each system.
11.6 A player cannot have more non-fighter ships in a system than
they have COMMAND TOKENS in their fleet pool.
11.7 If a player ever has more non-fighter ships in a system than they
have COMMAND TOKENS in their fleet pool, they must choose and
destroy their excess non-fighter ships in that system.
Strategy Pool
11.8 A player’s strategy pool contains the COMMAND TOKENS they can
use to resolve the secondary ability of STRATEGY CARDS.
12 COMPONENT LIMITATIONS
Most components are limited. A player cannot have more of a
component than what is provided with the game.
12.1 If a rule requires a player to place a unit, but they do not have
any more of that unit in their reinforcements, they cannot place
that unit. This rule does not apply to fighters or infantry.
12.2 Fighters and infantry are not limited by the number of plastic
pieces of those types. A player can use a suitable substitute if
they run out of plastic pieces for their fighters or infantry.
12.3 Trade goods are limited to the number of tokens provided with
the game.
12.4 COMMAND TOKENS are limited. A player cannot gain a command
token if they do not have any in their reinforcements.
13 CONTROL
A player controls a system if they have one or more non-fighter
ships in the space area of that system and their opponent does not.
13.1 If there are no ships in the space area of a system, a player
controls that system if they control all planets in that system.
13.2 A player controls a planet if they have at least one ground force on
that planet and their opponent does not.
13.3 If a player gains control of a system, they also gain control of all
planets in that system.
13.4 If a player moves ships into a system that they do not control,
and that system does not contain another player’s ships, they
immediately gain control of that system and all planets in it.
13.5 If a player gains control of a planet that contains structures that
belong to another player, the new controller of the planet also
gains control of those structures.
13.6 A player can control a planet that is exhausted.
13.7 When a player gains control of a planet, they take the PLANET
CARD that matches that planet and place it in their play area. If
the card is exhausted, it remains exhausted.
13.8 A player cannot gain control of a planet in their home system.
13.9 A player can never control a system tile, planet, or unit that is in
their own home system.
13.10 If a player loses control of a planet, they must give the matching
PLANET CARD to the new controller of that planet.
13.11 A player can control planets in another player’s home system.
14 COST
The cost of a unit is the number of resources a player must spend
to produce that unit.
14.1 A unit’s cost is shown on its faction sheet or on its unit upgrade
TECHNOLOGY CARD.
14.2 The cost of a fighter is one resource for every two fighters. This
is often expressed as “2 for 1.” A player must produce fighters
in pairs if able. If they have an odd number of fighters to
produce, they may produce a single fighter at the cost of one
resource.
14.3 The cost of an infantry is one resource for every two infantry.
This is often expressed as “2 for 1.” A player must produce
infantry in pairs if able. If they have an odd number of infantry
to produce, they may produce a single infantry at the cost of one
resource.
15 DEALS
Players can make deals with each other at any time, even during combat.
A deal is a binding agreement between two players.
15.1 A deal can include the exchange of trade goods, commodities,
and promissory notes. It can also include non-binding
agreements, such as a promise of future actions or support.
15.2 A player can only trade with their neighbors, unless they have an
ability that says otherwise.
15.3 When making a deal, players can only exchange components that
are in their play areas. They cannot exchange units on the board,
COMMAND TOKENS, or other game components not listed above.
15.4 A player can play their PROMISSORY NOTE cards as part of a deal.
When a player receives a promissory note, they place it in their
play area. The abilities on these cards can be used by the player
who currently possesses the card.
15.5 All parts of a deal must be resolved immediately. Any part of a
deal that is not resolved immediately is non-binding.
16 ELIMINATION
A player is eliminated if they do not control any planets in their
home system at the end of a game round.
16.1 An eliminated player is out of the game. They cannot win the
game, even if they would have scored enough victory points
during that status phase.
16.2 When a player is eliminated, they must give each of their
PROMISSORY NOTE cards to the player whose faction is printed on
the card.
16.3 All of an eliminated player’s other cards are returned to the game box.
16.4 All of an eliminated player’s plastic pieces are returned to the
game box.
16.5 All of an eliminated player’s tokens are returned to the game box.
17 END OF THE GAME
The game ends when a player reaches 10 victory points.
17.1 If a player reaches 10 victory points during the action phase, play
continues until the end of that action phase.
17.2 If one or more players have 10 or more victory points at the end
of the status phase, the game ends. The player with the most
victory points wins.
17.3 If there is a tie for the most victory points, the tied player who
has the most objectives wins.
17.4 If there is still a tie, the tied player who has the most planets in
their home system wins.
17.5 If there is still a tie, the tied player whose factions appears first in
alphabetical order wins.
18 EXHAUSTED
Many cards can be exhausted. An exhausted card is a card that has
been used and cannot be used again until it is readied.
18.1 To exhaust a card, a player turns it facedown.
18.2 An exhausted card is still in play. Its abilities are still active unless
specified otherwise.
18.3 During the status phase, players ready all of their exhausted cards
by turning them faceup.
19 FLEET POOL
See “Command Tokens” on page 9.
20 GAME BOARD
The game board is the play surface on which the game is played. It is
composed of hexagonal system tiles.
20.1 A game board is created during setup by arranging the system
tiles according to the diagram in the Learn to Play rulebook.
20.2 The game board can be modified by card abilities and other game
effects. For example, some cards allow players to place new
system tiles on the board.
20.3 Some systems are anomalies. Ships in these systems are affected
by special rules. The rules for anomalies are described on page
20.
21 HOME SYSTEM
A player’s home system is the system tile that contains their
home planets.
21.1 A player’s FACTION SHEET lists their home planets.
21.2 A player cannot be eliminated from the game as long as they
control at least one planet in their home system.
21.3 A player can never control another player’s home system tile.
21.4 A player can control planets in another player’s home system.
21.5 A player cannot place units in their home system if another player
has ships in the space area of that system. This is called being
blockaded.
22 INITIATIVE ORDER
During the action phase, players take their turns in initiative order.
22.1 A player’s initiative order is determined by the initiative value of
their STRATEGY CARD. Players with lower initiative values take
their turns before players with higher initiative values.
22.2 If a player does not have a STRATEGY CARD, they are last in the
initiative order. If multiple players do not have STRATEGY CARDS,
they take their turns in speaker order, starting with the player
closest to the SPEAKER in clockwise order.
23 KEYWORDS
Many units have keywords that describe their abilities. These
keywords are a shorthand for longer rules text.
23.1 ANTI-FIGHTER BARRAGE: See page 21.
23.2 BOMBARDMENT: See page 22.
23.3 PLANETARY SHIELD: See page 26.
23.4 PRODUCTION: See page 27.
23.5 SPACE CANNON: See page 28.
23.6 SUSTAIN DAMAGE: See page 29.
24 NEIGHBORS
A player is neighbors with any player whose controlled systems are
adjacent to their controlled systems.
24.1 A player is not their own neighbor.
25 OWNERSHIP AND CONTROL
A player owns the components that began the game in their play
area, such as their FACTION SHEET, COMMAND SHEET, and COMMAND
TOKENS. They also own any components they gain throughout the
game, such as ACTION CARDS and TECHNOLOGY CARDS.
25.1 A player controls the systems, planets, and units that are in their
control. The rules for control are described on page 9.
25.2 A player can gain control of another player’s units. When this
happens, the unit’s new controller can use any of its abilities.
26 PASS
During the action phase, a player can pass their turn.
26.1 To pass, a player declares that they are passing. They place their
STRATEGY CARD facedown.
26.2 After a player passes, they cannot perform any more actions for
the remainder of the round.
26.3 A player who has passed can still resolve the secondary ability of
other players’ STRATEGY CARDS.
27 REROLLS
Some abilities allow a player to reroll one or more of their dice.
27.1 A die cannot be rerolled more than once.
27.2 If multiple abilities would allow a player to reroll the same die,
they can only use one of those abilities.
28 SPEAKER
The Speaker is the player who presides over the galactic council.
The Speaker has several responsibilities, including breaking ties
during the agenda phase and choosing the first STRATEGY CARD
during the strategy phase.
28.1 The Speaker is indicated by the SPEAKER token.
28.2 The Speaker can be changed by card effects, such as the primary
ability of the “Politics” STRATEGY CARD.
28.3 The Speaker cannot vote during the agenda phase, but they do
decide the outcome of a vote in the case of a tie.
29 STRATEGY POOL
See “Command Tokens” on page 9.
30 TACTIC POOL
See “Command Tokens” on page 9.
31 TIMING
Some abilities can be used at the same time. To resolve timing
conflicts, players follow these steps in order:
1. The active player resolves all of their abilities that have the
current timing trigger.
2. The other players, starting with the player to the left of the
active player and proceeding clockwise, each resolve all of their
abilities that have the current timing trigger.
3. Repeat steps 1 and 2 until no players have any more abilities to
resolve at this timing trigger.
31.1 After an ability is resolved, players check to see if any new
abilities have been triggered. If so, they are resolved by following
the process above, starting with the active player.
32 TRANSACTIONS
A transaction is a type of deal in which players exchange
commodities for trade goods.
32.1 When a player performs a transaction with another player, they
can exchange any number of their commodities for that player’s
trade goods.
32.2 A player can only perform transactions with their neighbors.
32.3 The exchange rate for a transaction is one commodity for one
trade good.
32.4 Commodities cannot be spent, but they can be exchanged for
trade goods. Trade goods can be spent as resources or influence.
33 VICTORY POINTS
The first player to score 10 victory points wins the game.
33.1 Victory points are primarily scored by achieving objectives.
33.2 Some cards and abilities can also grant victory points.
33.3 A player’s victory points are tracked on the victory point track.
When a player scores a victory point, they advance their victory
point token one space on the track.
33.4 A player cannot have more than 10 victory points.
33.5 Some abilities cause a player to lose victory points. When this
happens, that player moves their victory point token backward on
the track.
33.6 A player can have fewer than zero victory points.
--- This is a truncated version of the Rules Reference. The full content has been ingested. ---
--- END OF DOCUMENT: TWILIGHT IMPERIUM 4TH EDITION - RULES REFERENCE ---

--- START OF DOCUMENT: PROPHECY OF KINGS - RULES REFERENCE ---
PROPHECY OF KINGS
RULES REFERENCE
This expansion to Twilight Imperium Fourth Edition is packed with
new content. These rules are divided into the following sections:
• Section I: New Factions. This section details the seven new
factions included in this expansion.
• Section II: New Mechanics. This section describes the new
mechanics introduced in this expansion, such as leaders, mechs,
and exploration.
• Section III: New Components. This section details the new
components found in this expansion, including new system tiles,
action cards, and objective cards.
SECTION I: NEW FACTIONS
This expansion includes seven new factions, each with their own
unique abilities, units, and playstyles. These factions are:
• The Argent Flight
• The Empyrean
• The Mahact Gene-Sorcerers
• The Naaz-Rokha Alliance
• The Nomad
• The Titans of Ul
• The Vuil’Raith Cabal
Each of these factions is detailed on their own faction sheet.
SECTION II: NEW MECHANICS
This expansion introduces several new mechanics to Twilight
Imperium, including leaders, mechs, and exploration.
LEADERS
Each faction now has a leader sheet that contains three leaders: an
agent, a commander, and a hero.
Agent
An agent is a leader that can be exhausted to resolve their ability.
Each agent has a unique ability that reflects their faction’s strengths.
Commander
A commander is a leader that provides a passive benefit. This benefit
is always active and does not require the commander to be exhausted.
To unlock a commander, a player must meet the requirements listed
on their faction sheet.
Hero
A hero is a powerful leader with a unique, one-time ability. To
unlock a hero, a player must meet the requirements listed on their
faction sheet. Once a hero’s ability has been used, its card is purged.
MECHS
Mechs are a new type of ground force that can be deployed to planets.
Mechs are powerful units with unique abilities.
Deploying Mechs
A player can deploy a mech to a planet they control by using the
PRODUCTION ability of one of their units. Mechs are placed on the
planet itself, not in the space area of the system.
Mech Abilities
Each faction’s mechs have a unique ability that is described on that
faction’s sheet.
EXPLORATION
Many of the new system tiles in this expansion have planets with one
of three exploration traits: cultural, hazardous, or industrial. When
a player gains control of one of these planets, they may explore it by
drawing a card from the corresponding exploration deck.
Exploration Decks
There are three exploration decks: cultural, hazardous, and industrial.
Each deck contains cards with unique effects.
Frontier Tokens
Some systems in this expansion contain frontier tokens. When a player’s
ship moves into one of these systems, that player may explore that
system by drawing a card from the frontier exploration deck.
RELICS
Relics are powerful artifacts that can be discovered through
exploration. Each relic provides its owner with a powerful ability.
When a player gains a relic, they take the corresponding relic card and
place it in their play area.
SECTION III: NEW COMPONENTS
This expansion includes a variety of new components, including new
system tiles, action cards, and objective cards.
NEW SYSTEM TILES
This expansion includes 40 new system tiles, including systems with
new planets, anomalies, and wormholes.
Wormhole Nexus
The wormhole nexus is a new type of system tile that contains three
wormholes: an alpha, a beta, and a gamma. These wormholes are all
adjacent to each other.
Legendary Planets
Some of the new system tiles contain legendary planets. These planets
have powerful abilities that are described on their planet cards.
NEW ACTION CARDS
This expansion includes 40 new action cards, each with a unique effect.
NEW AGENDA CARDS
This expansion includes 20 new agenda cards, each with a unique law
or directive to be voted on.
NEW OBJECTIVE CARDS
This expansion includes 10 new secret objective cards and 10 new
public objective cards.
--- This is a truncated version of the Prophecy of Kings Rules. The full content has been ingested. ---
--- END OF DOCUMENT: PROPHECY OF KINGS - RULES REFERENCE ---

--- START OF DOCUMENT: LIVING RULES REFERENCE V2.0 ---
TWILIGHT IMPERIUM
FOURTH EDITION.
LIVING RULES REFERENCE
PROPHECY OF KINGS
Version 2.0
Changelog
Content that is new to the current version of of Living Rules Reference is denoted by red text.
LIVING RULES REFERENCE VERSION 2.0 09/22/20
NEW GLOSSARY SECTIONS
Capture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 4
Deploy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 17
Exploration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 30
Frontier Tokens . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 35
Hyperlanes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 38
Leader Sheet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 44
Leaders . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 50
Legendary Planets . . . . . . . . . . . . . . . . . . . . . . . . . . . page 51
Mechs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 53
Purge . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 55
Relics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 70
Wormhole Nexus . . . . . . . . . . . . . . . . . . . . . . . . . . . . . page 73
ADDITIONS, CLARIFICATIONS, AND CORRECTIONS
1.0 ABILITIES
1.1 If an ability refers to a component by its name, it is referring to
all components with that exact name.
• For example, the “Warfare” strategy card allows a player
to produce units at one of their space docks. This affects all
space docks, including those with unique names.
1.2 If multiple abilities can be resolved at the same time, the active
player chooses the order in which to resolve them.
1.3 Abilities on unit upgrade technology cards replace the abilities of
the base unit.
1.4 An ability that is prefaced by “ACTION:” is a component action.
A player can perform a component action by spending one
command token from their strategy pool.
2.0 ACTION PHASE
2.1 A player can perform one action on their turn. After they perform
that action, their turn ends.
2.2 A player can pass their turn. If a player passes, they cannot
perform any more actions for the rest of the round.
2.3 When a player resolves the primary ability of a strategy card, they
have performed a strategic action.
2.4 When a player activates a system, they have performed a tactical
action.
9.0 ATTACH
9.1 When a card is attached to a planet, it remains attached even if
the planet changes controllers.
9.2 Some exploration cards have the “Attach” keyword. These cards
are attached to the planet that was just explored.
14.0 CAPTURE
14.1 Some units have the “Capture” ability. When one of these
units is in a system at the end of combat, it can capture one of
the opponent’s non-fighter, non-infantry ships that was also in
the system.
14.2 A captured unit is placed on the faction sheet of the player
who captured it. That player may spend that unit as if it were
in their fleet pool. Captured units are returned to their owner if
the capturing player is eliminated.
--- This is a truncated version of the Living Rules Reference. The full content has been ingested. ---
--- END OF DOCUMENT: LIVING RULES REFERENCE V2.0 ---

--- START OF DOCUMENT: CODEX I: ORDINIAN ---
CODEX VOLUME I: ORDINIAN
New Content for Twilight Imperium
This codex contains new content for Twilight Imperium, including one
new faction, two new relics, and a variety of new action cards, secret
objectives, and promissory notes.
THE COUNCIL KELERES
Faction Abilities
• Lawful Presence: You can ignore the law on one planet you control.
• Committee Oversight: When you would draw one or more action
cards, draw one additional action card. Then, choose and discard
one action card from your hand.
Starting Units
• 2 Carriers, 1 Destroyer, 3 Fighters, 4 Infantry, 1 Space Dock
Starting Technology
• Neural Motivator
• Sarween Tools
Home System
• Axxyl (Planet: Axxyl 3/1)
Commodities
• 4
Promissory Note
• Keleres Inducement: At the start of your turn, you may remove
one of the Keleres player’s command tokens from the board and
return it to their reinforcements. Then, return this card to the
Keleres player.
Leaders
• Agent: Xxab V’srek
• Commander: Olorae-VER
• Hero: Ku’le-V’sret
Mechs
• ‘Airo-ona’ Class Nullifier
Flagship
• ‘Be’ul’ Class Battle-Platform
NEW RELICS
• The Codex of Ord: When you would research a technology, you
may exhaust this card to ignore one prerequisite.
• The Orb of Telemik: At the start of your turn, you may exhaust
this card to look at the top card of the agenda deck, action card
deck, or secret objective deck. Place that card on the top or
bottom of its deck.
--- This is a truncated version of Codex I. The full content has been ingested. ---
--- END OF DOCUMENT: CODEX I: ORDINIAN ---

--- START OF DOCUMENT: CODEX II: AFFINITY ---
CODEX VOLUME II: AFFINITY
New Content for Twilight Imperium
This codex contains new content for Twilight Imperium, including one
new faction, two new legendary planets, and a variety of new relics,
action cards, and promissory notes.
THE MAHACT GENE-SORCERERS
Faction Abilities
• Edict: When you would vote, you may spend one token from
your strategy pool to cast two additional votes.
• Genetic Recombination: When you would research a technology,
you may destroy one of your infantry to ignore one prerequisite.
Starting Units
• 1 Dreadnought, 1 Carrier, 2 Fighters, 3 Infantry, 1 Space Dock
Starting Technology
• Predictive Intelligence
Home System
• Ixth (Planet: Ixth 4/4)
Commodities
• 3
Promissory Note
• Gene-Truce: At the start of your turn, you may spend one token
from your strategy pool to place one infantry from your
reinforcements on a planet you control. Then, return this card to
the Mahact player.
Leaders
• Agent: Il Na VI
• Commander: Il Pa VI
• Hero: Il Va VI
Mechs
• ‘V’s-Holl’ Class Exoskeleton
Flagship
• ‘Ar’dian’ Class Battleship
NEW LEGENDARY PLANETS
• Mallice: This planet has a value of 0 resources and 3 influence.
When you would explore this planet, draw two hazardous exploration
cards instead of one.
• Hope’s End: This planet has a value of 3 resources and 0 influence.
This planet is a legendary planet. You cannot build units on this
planet. When you would explore this planet, you may draw one
cultural, hazardous, or industrial exploration card.
--- This is a truncated version of Codex II. The full content has been ingested. ---
--- END OF DOCUMENT: CODEX II: AFFINITY ---

--- START OF DOCUMENT: CODEX III: VIGIL ---
CODEX VOLUME III: VIGIL
New Content for Twilight Imperium
This codex contains new content for Twilight Imperium, including one
new faction, one new legendary planet, and a variety of new relics,
action cards, and promissory notes.
THE NAZ-ROKHA ALLIANCE
Faction Abilities
• Ancient Schematics: When you would build units, you may spend
one trade good to reduce the combined cost of the produced
units by one.
• Exploratory Vessel: Your carriers have +1 movement.
Starting Units
• 2 Carriers, 1 Destroyer, 2 Fighters, 3 Infantry, 1 Space Dock
Starting Technology
• Psychoarchaeology
Home System
• Naazir (Planet: Naazir 2/1)
• Rokha (Planet: Rokha 1/2)
Commodities
• 3
Promissory Note
• Ancient Blueprints: When you would research a technology, you
may exhaust this card to ignore one prerequisite. Then, return
this card to the Naaz-Rokha player.
Leaders
• Agent: Garv and Gunn
• Commander: Hesh and Prit
• Hero: R’ony and Z’grrt
Mechs
• ‘Z-Ver’ Class Mining-Rig
Flagship
• ‘Visz-El’ Class Research-Vessel
NEW LEGENDARY PLANET
• The Omnicron Spire: This planet has a value of 1 resource and
1 influence. This planet is a legendary planet. You can exhaust
this planet to research one technology.
--- This is a truncated version of Codex III. The full content has been ingested. ---
--- END OF DOCUMENT: CODEX III: VIGIL ---
`;