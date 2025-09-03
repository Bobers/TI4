import type { CodexEntry } from '../types';
import { actionCards } from './actionCards';
import { agendas } from './agendas';
import { attachments } from './attachments';
import { components } from './components';
import { exploration } from './exploration';
import { factions } from './factions';
import { objectives } from './objectives';
import { planets } from './planets';
import { promissoryNotes } from './promissoryNotes';
import { relics } from './relics';
import { strategyCards } from './strategyCards';
import { technologies } from './technologies';
import { units } from './units';

const GITHUB_IMAGE_BASE_URL = 'https://raw.githubusercontent.com/bradleysigma/tirules/main/images/';

const createSearchText = (obj: any): string => {
  return JSON.stringify(obj)
    .replace(/\{|\[|\"|\"|\]|\}/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase();
};

const formatToImageName = (name: string, type: string) => {
    let cleanName = name
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/['.,()]/g, '');

    if (type === 'Faction') {
        cleanName = `the_${cleanName}`;
    }
    
    // Faction flagships have a specific naming convention in the image repo
    if (type === 'Unit' && name.includes('(')) {
        const parts = name.split('(');
        const unitName = parts[0].trim();
        const factionName = parts[1].replace(')','').trim();
        cleanName = `flagship_${factionName.toLowerCase().replace(/\s/g, '_')}`;
    }
    
    return cleanName;
};

const getImageUrl = (name: string, type: CodexEntry['type']): string => {
    const imageName = formatToImageName(name, type);
    const folder = type.toLowerCase().replace(/\s/g, '-');
    return `${GITHUB_IMAGE_BASE_URL}${folder}/${imageName}.png`;
};


const transformedActionCards: CodexEntry[] = actionCards.map(d => ({
  id: `ac-${d.name}`,
  name: d.name,
  type: 'Action Card',
  expansion: d.expansion,
  data: d,
  searchText: createSearchText(d),
  imageUrl: getImageUrl(d.name, 'Action Card'),
}));

const transformedAgendas: CodexEntry[] = agendas.map(d => ({
    id: `ag-${d.name}`,
    name: d.name,
    type: 'Agenda',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Agenda'),
}));

const transformedAttachments: CodexEntry[] = attachments.map(d => ({
    id: `at-${d.name}`,
    name: d.name,
    type: 'Attachment',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Attachment'),
}));

const transformedComponents: CodexEntry[] = components.map(d => ({
    id: `co-${d.name}`,
    name: d.name,
    type: 'Component',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
}));

const transformedExploration: CodexEntry[] = exploration.map(d => ({
    id: `ex-${d.name}`,
    name: d.name,
    type: 'Exploration',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Exploration'),
}));

const transformedFactions: CodexEntry[] = factions.map(d => ({
    id: `fa-${d.name}`,
    name: d.name,
    type: 'Faction',
    expansion: "N/A",
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Faction'),
}));

const transformedObjectives: CodexEntry[] = objectives.map(d => ({
    id: `ob-${d.name}`,
    name: d.name,
    type: 'Objective',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Objective'),
}));

const transformedPlanets: CodexEntry[] = planets.map(d => ({
    id: `pl-${d.name}`,
    name: d.name,
    type: 'Planet',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Planet'),
}));

const transformedPromissoryNotes: CodexEntry[] = promissoryNotes.map(d => ({
    id: `pn-${d.name}`,
    name: d.name,
    type: 'Promissory Note',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Promissory Note'),
}));

const transformedRelics: CodexEntry[] = relics.map(d => ({
    id: `re-${d.name}`,
    name: d.name,
    type: 'Relic',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Relic'),
}));

const transformedStrategyCards: CodexEntry[] = strategyCards.map(d => ({
    id: `sc-${d.name}`,
    name: d.name,
    type: 'Strategy Card',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Strategy Card'),
}));

const transformedTechnologies: CodexEntry[] = technologies.map(d => ({
    id: `te-${d.name}`,
    name: d.name,
    type: 'Technology',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Technology'),
}));

const transformedUnits: CodexEntry[] = units.map(d => ({
    id: `un-${d.name}`,
    name: d.name,
    type: 'Unit',
    expansion: d.expansion,
    data: d,
    searchText: createSearchText(d),
    imageUrl: getImageUrl(d.name, 'Unit'),
}));

export const codexData: CodexEntry[] = [
  ...transformedActionCards,
  ...transformedAgendas,
  ...transformedAttachments,
  ...transformedComponents,
  ...transformedExploration,
  ...transformedFactions,
  ...transformedObjectives,
  ...transformedPlanets,
  ...transformedPromissoryNotes,
  ...transformedRelics,
  ...transformedStrategyCards,
  ...transformedTechnologies,
  ...transformedUnits,
];