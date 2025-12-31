
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Welcome to Porterhouse. I am your digital Sommelier. Would you like a pairing for our 32oz Porterhouse, or perhaps some details on our Freedown Hills Wagyu?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the "Porterhouse Digital Sommelier & Steak Expert". 
          Location: 24 Jewry Street, Winchester.
          
          Specific Menu Data:
          - Signature: 32oz Porterhouse for Two (£72).
          - Ultra Premium: Freedown Hills UK Olive Fed Wagyu 14oz RibEye (£75).
          - Steaks: Fillet 10oz (£42), Sirloin 12/16oz (£38/£42), T-Bone 18oz (£39), Prime Rib 20oz (£45).
          - Offers: Chateaubriand for Two (£74) includes starters and sides (Sun-Thu).
          - Day Time (12-4pm): Rib Eye (£20), Burger (£11), Sea Bass (£16).
          - Wine Highlights: Rutini Altamira Malbec (£85), Bollinger (£75), Saint Julien 2016 (£95).
          - Philosophy: "100% Grass-Fed, Naturally Reared Beef. We do one thing better than anyone else: Beef."
          
          Guidelines:
          - Suggest wine pairings (e.g., Malbec for Rib Eye, Pinot Noir for Salmon).
          - Explain the Wagyu process (olive-fed for 4 months in Yorkshire).
          - Mention the Christmas Party Menu 2025 is now available for pre-order.
          - Be sophisticated, helpful, and concise.`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I apologize, I'm reflecting on our vintage selection. How else can I assist you?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, our connection to the cellar is momentarily interrupted. Please try again soon." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#121212] border border-zinc-800 w-[350px] md:w-[400px] h-[500px] shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-zinc-900 p-4 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-900/20 rounded-lg"><Sparkles className="text-red-700" size={18} /></div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest leading-none">Sommelier Expert</h4>
                <p className="text-[10px] text-zinc-500 uppercase mt-1 tracking-tighter">AI Concierge</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white"><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${m.role === 'user' ? 'bg-red-900 text-white rounded-l-xl rounded-tr-xl' : 'bg-zinc-800 text-zinc-200 rounded-r-xl rounded-tl-xl'}`}>{m.text}</div>
              </div>
            ))}
            {isLoading && <div className="flex space-x-1 p-2"><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></div></div>}
          </div>
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
            <div className="relative">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Ask about wine or steaks..." className="w-full bg-[#0a0a0a] border border-zinc-800 py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-red-900" />
              <button onClick={handleSendMessage} disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-red-700"><Send size={18} /></button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-red-900 hover:bg-red-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 group">
          <MessageSquare size={24} /><span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2">Ask Sommelier</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
