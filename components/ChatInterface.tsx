import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { BotIcon, SendIcon, UserIcon } from './icons';

interface ChatInterfaceProps {
  chatHistory: ChatMessage[];
  isStreaming: boolean;
  onSendMessage: (message: string) => void;
}

// Separate component for a single message to handle markdown rendering
const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
    // Basic markdown for bolding and lists. A more robust library could be used.
    const renderContent = (content: string) => {
        let html = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\s*-\s/g, '\n<li>')
            .replace(/(\n<li>.*)+/g, (match) => `<ul class="list-disc list-inside pl-4">${match.replace(/\n<li>/g, '\n<li>')}</ul>`);

        return <div dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, '<br />') }} />;
    };

    return (
        <div className={`flex items-start gap-3 my-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
            {message.role === 'bot' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center"><BotIcon className="w-5 h-5" /></div>}
            <div className={`p-3 rounded-lg max-w-lg ${message.role === 'user' ? 'bg-blue-800/70' : 'bg-gray-700/70'}`}>
                {renderContent(message.content)}
                {message.role === 'bot' && message.content === '' && (
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-0"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                )}
            </div>
            {message.role === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center"><UserIcon className="w-5 h-5" /></div>}
        </div>
    );
};


const ChatInterface: React.FC<ChatInterfaceProps> = ({ chatHistory, isStreaming, onSendMessage }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  return (
    <div className="w-full h-[70vh] bg-black/30 backdrop-blur-sm p-4 rounded-b-lg border-x border-b border-cyan-500/30 flex flex-col">
      <div className="flex-grow overflow-y-auto pr-2">
        {chatHistory.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 border-t-2 border-cyan-500/50 pt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isStreaming ? "Awaiting response..." : "Ask a question about the rules..."}
          disabled={isStreaming}
          className="flex-grow bg-gray-800/50 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isStreaming || !input.trim()}
          className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-bold p-3 rounded-lg transition-all flex items-center justify-center"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;