import React, { useState, useMemo } from 'react';
import { codexData } from '../data/codex';
import type { CodexEntry, Faction, Technology, ActionCard, Unit, Planet, Agenda, PromissoryNote, Relic, StrategyCard, Objective, ExplorationCard, Attachment, Component } from '../types';
import { SearchIcon } from './icons';

const DATA_TYPES = [...new Set(codexData.map(d => d.type))].sort();

// Helper component for styled key-value pairs
const DetailItem: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({ label, children, className }) => (
  <div className={`py-2 ${className}`}>
    <strong className="text-cyan-400 font-semibold">{label}: </strong>
    <span className="text-gray-200">{children}</span>
  </div>
);

// --- Detail Renderers for each data type ---

const FactionDetail: React.FC<{ data: Faction }> = ({ data }) => (
    <div className="space-y-3 text-sm">
        <DetailItem label="Commodities">{data.commodities}</DetailItem>
        <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Abilities</strong>
            <ul className="list-disc list-inside pl-2 space-y-1 text-gray-200">
                {data.abilities.map(a => <li key={a.name}><strong className="font-semibold">{a.name}:</strong> {a.text}</li>)}
            </ul>
        </div>
         <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Leaders</strong>
            <div className="pl-2 space-y-1 text-gray-200">
                <p><strong className="font-semibold">Agent:</strong> {data.leaders.agents[0].name} - {data.leaders.agents[0].text}</p>
                <p><strong className="font-semibold">Commander:</strong> {data.leaders.commanders[0].name} - {data.leaders.commanders[0].text}</p>
                <p><strong className="font-semibold">Hero:</strong> {data.leaders.heroes[0].name} - {data.leaders.heroes[0].text}</p>
            </div>
        </div>
         <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Promissory Note: {data.promissory.name}</strong>
            <p className="pl-2 text-gray-200">{data.promissory.text}</p>
        </div>
        <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Starting Units & Tech</strong>
            <p className="pl-2 text-gray-200"><strong>Fleet:</strong> {Object.entries(data.starting.fleet).map(([k,v]) => `${v} ${k}`).join(', ')}</p>
            <p className="pl-2 text-gray-200"><strong>Tech:</strong> {data.starting.tech.join(', ')}</p>
        </div>
    </div>
);

const TechnologyDetail: React.FC<{ data: Technology }> = ({ data }) => (
    <div className="space-y-2 text-sm">
        <DetailItem label="Type">{data.type}</DetailItem>
        <DetailItem label="Prerequisites">
            {Object.entries(data.prereqs).length > 0 
                ? Object.entries(data.prereqs).map(([k, v]) => `${v} ${k}`).join(', ') 
                : 'None'}
        </DetailItem>
        <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Effect</strong>
            <p className="pl-2 text-gray-200">{data.text}</p>
        </div>
    </div>
);

const UnitDetail: React.FC<{ data: Unit }> = ({ data }) => (
    <div className="space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-2">
            <DetailItem label="Cost">{data.stats.cost ?? 'N/A'}</DetailItem>
            <DetailItem label="Combat">{data.stats.combat ?? 'N/A'}</DetailItem>
            <DetailItem label="Move">{data.stats.move ?? 'N/A'}</DetailItem>
            <DetailItem label="Capacity">{data.stats.capacity ?? 'N/A'}</DetailItem>
        </div>
        {data.abilities.length > 0 && <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Abilities</strong>
            <ul className="list-disc list-inside pl-2 text-gray-200">
                {data.abilities.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
        </div>}
    </div>
);

const SimpleTextDetail: React.FC<{ text: string }> = ({ text }) => (
    <div className="text-sm text-gray-200">{text}</div>
);

const ComponentDetail: React.FC<{ data: Component }> = ({ data }) => (
    <div className="text-sm text-gray-200"><DetailItem label="Count in Game">{data.count}</DetailItem></div>
);

const PlanetDetail: React.FC<{ data: Planet }> = ({ data }) => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <DetailItem label="Resources">{data.resources}</DetailItem>
        <DetailItem label="Influence">{data.influence}</DetailItem>
        <DetailItem label="Trait">{data.trait ?? 'None'}</DetailItem>
        <DetailItem label="Tech Specialty">{data.tech ?? 'None'}</DetailItem>
    </div>
);

const ObjectiveDetail: React.FC<{ data: Objective }> = ({ data }) => (
    <div className="space-y-2 text-sm">
        <DetailItem label="Type">{data.type}</DetailItem>
        <DetailItem label="Points">{data.points}</DetailItem>
        <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Condition</strong>
            <p className="pl-2 text-gray-200">{data.condition}</p>
        </div>
    </div>
);

const ExplorationDetail: React.FC<{ data: ExplorationCard }> = ({ data }) => (
    <div className="space-y-2 text-sm">
        <DetailItem label="Type">{data.type}</DetailItem>
        <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Text</strong>
            <p className="pl-2 text-gray-200">{data.text}</p>
        </div>
         <div>
            <strong className="text-cyan-400 font-semibold block mb-1">Resolution</strong>
            <p className="pl-2 text-gray-200">{data.resolution}</p>
        </div>
    </div>
);


const GalacticCodex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return codexData.filter(item => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);
      const matchesSearch = searchTerm.length === 0 || item.searchText.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedTypes]);
  
  const getTagStyle = (type: string) => {
      switch(type) {
          case 'Faction': return 'bg-yellow-400/30 text-yellow-200';
          case 'Objective': return 'bg-green-400/30 text-green-200';
          case 'Exploration': return 'bg-purple-400/30 text-purple-200';
          case 'Technology': return 'bg-blue-400/30 text-blue-200';
          case 'Unit': return 'bg-red-400/30 text-red-200';
          default: return 'bg-cyan-500/30 text-cyan-200';
      }
  }

  const renderDetail = (item: CodexEntry) => {
    const detailContent = () => {
        switch (item.type) {
            case 'Faction': return <FactionDetail data={item.data as Faction} />;
            case 'Technology': return <TechnologyDetail data={item.data as Technology} />;
            case 'Action Card': return <SimpleTextDetail text={(item.data as ActionCard).text} />;
            case 'Unit': return <UnitDetail data={item.data as Unit} />;
            case 'Planet': return <PlanetDetail data={item.data as Planet} />;
            case 'Agenda': return <SimpleTextDetail text={(item.data as Agenda).text} />;
            case 'Promissory Note': return <SimpleTextDetail text={(item.data as PromissoryNote).text} />;
            case 'Relic': return <SimpleTextDetail text={(item.data as Relic).text} />;
            case 'Objective': return <ObjectiveDetail data={item.data as Objective} />;
            case 'Exploration': return <ExplorationDetail data={item.data as ExplorationCard} />;
            case 'Attachment': return <SimpleTextDetail text={(item.data as Attachment).text} />;
            case 'Component': return <ComponentDetail data={item.data as Component} />;
            case 'Strategy Card':
                const card = item.data as StrategyCard;
                return <div className="text-sm space-y-2"><p><strong className="font-semibold text-cyan-400">Primary: </strong>{card.primary}</p><p><strong className="font-semibold text-cyan-400">Secondary: </strong>{card.secondary}</p></div>;
            default:
                return <pre className="text-xs text-gray-300 bg-gray-900/70 p-2 rounded-md whitespace-pre-wrap">{JSON.stringify(item.data, null, 2)}</pre>;
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
                {detailContent()}
            </div>
            {item.imageUrl && (
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <img src={item.imageUrl} alt={item.name} className="rounded-lg border border-cyan-800/50 object-contain" />
                </div>
            )}
        </div>
    )
  }

  return (
    <div className="w-full h-[70vh] bg-black/30 backdrop-blur-sm p-4 rounded-b-lg border-x border-b border-cyan-500/30 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search all components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>
        <div className="flex flex-wrap gap-2 items-center border-b border-cyan-500/30 pb-4">
            <span className="text-gray-300 font-bold mr-2">Filters:</span>
            {DATA_TYPES.map(type => (
                <button
                    key={type}
                    onClick={() => {
                        setSelectedTypes(prev => 
                            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
                        );
                    }}
                    className={`px-3 py-1 text-sm rounded-full transition-all border ${
                        selectedTypes.includes(type)
                        ? 'bg-cyan-500 text-gray-900 border-cyan-500 font-semibold'
                        : 'bg-gray-700/50 text-gray-200 border-gray-600 hover:bg-gray-600'
                    }`}
                >
                    {type}
                </button>
            ))}
             {selectedTypes.length > 0 && (
                <button 
                    onClick={() => setSelectedTypes([])}
                    className="px-3 py-1 text-sm rounded-full bg-red-800/70 text-red-200 border border-red-700 hover:bg-red-700">
                    Clear
                </button>
            )}
        </div>
      
      <div className="flex-grow overflow-y-auto pr-2 space-y-2">
        {filteredData.length > 0 ? filteredData.map(item => (
          <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg transition-all">
            <button 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-700/50 rounded-t-lg"
            >
              <div>
                <span className={`inline-block align-middle px-2 py-0.5 text-xs rounded-full mr-3 ${getTagStyle(item.type)}`}>{item.type}</span>
                <span className="font-bold text-lg text-gray-100">{item.name}</span>
              </div>
              <span className={`transform transition-transform text-cyan-400 ${expandedId === item.id ? 'rotate-90' : ''}`}>&#x25B6;</span>
            </button>
            {expandedId === item.id && (
              <div className="p-4 border-t border-cyan-800/50 bg-black/20 rounded-b-lg">
                {renderDetail(item)}
              </div>
            )}
          </div>
        )) : <p className="text-center text-gray-400">No results found for your query.</p>}
      </div>
    </div>
  );
};

export default GalacticCodex;