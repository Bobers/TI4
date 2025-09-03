# TI4 Vector Database Schema

## Entry Structure
```typescript
interface VectorEntry {
    id: string;              // Unique identifier (e.g., "rule_abilities_main")
    type: 'rule' | 'component' | 'faction';
    category: string;        // Grouped category for filtering
    title: string;          // Human-readable title
    section: string;        // Content section type
    content: string;        // The actual text to embed
    metadata: {
        ruleNumber?: number;
        keywords: string[];
        crossReferences: string[];
        difficulty: 'basic' | 'intermediate' | 'advanced';
    };
    embedding?: number[];   // Will be added by embedding service
}
```

## Categories
- **game_round**: game_round, strategy_phase, action_phase, status_phase, agenda_phase
- **player_actions**: tactical_action, strategic_action, component_action, active_player
- **combat**: combat, space_combat, ground_combat, invasion, bombardment, anti_fighter_barrage, space_cannon
- **movement**: movement, move, transport, adjacency
- **resources**: resources, influence, trade_goods, commodities, deals, transactions
- **production**: production, producing_units, construction, cost
- **control**: control, planets, systems, neighbors, blockaded
- **command**: command_tokens, command_sheet, fleet_pool, reinforcements
- **cards**: action_cards, agenda_card, objective_cards, strategy_card
- **abilities**: abilities, exhausted, readied, attach, purge
- **anomalies**: anomalies, asteroid_field, gravity_rift, nebula, supernova, wormholes, wormhole_nexus
- **units**: units, ships, ground_forces, structures, mechs, fighters, infantry
- **victory**: victory_points, elimination, objectives
- **strategy_cards**: leadership, diplomacy, politics, construction, trade, warfare, technology, imperial
- **expansion**: leaders, exploration, relics, legendary_planets, frontier_tokens, hyperlanes, deploy, capture

## Section Types
- **rules_reference**: Core rule mechanics
- **notes**: Clarifications and edge cases
- **related_topics**: Cross-references
- **full**: Combined content for comprehensive search

## Statistics
- Total entries: 287
- Rules: 287
- Components: 0
- Factions: 0

Generated: 2025-09-02T21:01:58.945Z
