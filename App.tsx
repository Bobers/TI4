import React, { useState, useCallback, useEffect } from 'react';
import { localChatService } from './services/localChatService';
import type { ChatMessage } from './types';
import ChatInterface from './components/ChatInterface';
import GalacticCodex from './components/GalacticCodex';
import { GalaxyIcon, BotIcon, BookOpenIcon, BugIcon } from './components/icons';
import TestRunner from './components/TestRunner';

type ActiveTab = 'chat' | 'codex';

const App: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'bot', content: "Greetings, Commander! I'm your Twilight Imperium 4 rules assistant. I can help explain rules, guide new players, and answer questions about gameplay. What would you like to know?" }
  ]);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');
  const [showTestRunner, setShowTestRunner] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

  useEffect(() => {
    localChatService.initialize().then(() => {
      setIsInitializing(false);
    }).catch(err => {
      console.error('Failed to initialize chat service:', err);
      setIsInitializing(false);
    });
  }, []);

  const handleSendMessage = useCallback(async (message: string) => {
    if (isStreaming || !message.trim() || isInitializing) return;

    const newHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: message }];
    setChatHistory(newHistory);
    setIsStreaming(true);

    try {
      const stream = localChatService.sendMessage(newHistory);
      let botMessage = '';
      
      setChatHistory(prev => [...prev, { role: 'bot', content: '' }]);

      for await (const chunk of stream) {
        botMessage += chunk;
        setChatHistory(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: 'bot', content: botMessage };
            return updated;
        });
      }
    } catch (e) {
      console.error(e);
      setChatHistory(prev => {
          const updated = [...prev];
          const lastMessage = updated[updated.length - 1];
          if (lastMessage.role === 'bot') {
            lastMessage.content = 'An error occurred. Please try again.';
          } else {
            updated.push({ role: 'bot', content: 'An error occurred. Please try again.' });
          }
          return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  }, [chatHistory, isStreaming, isInitializing]);

  const TabButton: React.FC<{tabName: ActiveTab, label: string, icon: React.ReactNode}> = ({ tabName, label, icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-lg font-orbitron rounded-t-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 ${
        activeTab === tabName
          ? 'bg-black/30 backdrop-blur-sm border-b-2 border-cyan-400 text-cyan-300'
          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/70 hover:text-white'
      }`}
      aria-current={activeTab === tabName}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}>
      <header className="w-full max-w-4xl mb-4 text-center">
        <div className="flex items-center justify-center gap-4 relative">
          <GalaxyIcon className="w-12 h-12 text-cyan-400" />
          <h1 className="text-4xl font-bold font-orbitron text-cyan-300 tracking-widest" style={{textShadow: '0 0 8px #0891b2'}}>
            Twilight Imperium RuleMaster AI
          </h1>
          <button 
            onClick={() => setShowTestRunner(s => !s)}
            title="Run Integrity Tests"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
          >
            <BugIcon className="w-6 h-6 text-gray-400 hover:text-cyan-300" />
          </button>
        </div>
        <p className="text-gray-400 mt-2">Your AI adjudicator for the epic of galactic conquest.</p>
      </header>

      {showTestRunner && <TestRunner onClose={() => setShowTestRunner(false)} />}

      <div className={`w-full max-w-4xl flex-col gap-0 ${showTestRunner ? 'hidden' : 'flex'}`}>
        <div className="flex">
          <TabButton tabName="chat" label="Rule Adjudicator" icon={<BotIcon className="w-6 h-6" />} />
          <TabButton tabName="codex" label="Galactic Codex" icon={<BookOpenIcon className="w-6 h-6" />} />
        </div>
        
        <main className="w-full flex-grow flex flex-col">
          {activeTab === 'chat' && (
            <>
              {isInitializing && (
                <div className="text-center py-8 text-cyan-300">
                  <div className="animate-pulse">Loading vector database...</div>
                </div>
              )}
              <ChatInterface 
                chatHistory={chatHistory} 
                isStreaming={isStreaming}
                onSendMessage={handleSendMessage}
              />
            </>
          )}
          {activeTab === 'codex' && <GalacticCodex />}
        </main>
      </div>
    </div>
  );
};

export default App;