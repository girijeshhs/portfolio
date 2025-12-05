import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

// Skill commands mapping
const skillCommands: Record<string, { title: string; items: string[] }> = {
  frontend: { title: "Frontend", items: skills.frontend },
  backend: { title: "Backend", items: skills.backend },
  databases: { title: "Databases", items: skills.databases },
  database: { title: "Databases", items: skills.databases },
  db: { title: "Databases", items: skills.databases },
  blockchain: { title: "Blockchain", items: skills.blockchain },
  web3: { title: "Blockchain", items: skills.blockchain },
  ml: { title: "ML & AI", items: skills.ml_ai },
  ai: { title: "ML & AI", items: skills.ml_ai },
  "ml-ai": { title: "ML & AI", items: skills.ml_ai },
  tools: { title: "Tools & DevOps", items: skills.tools },
  devops: { title: "Tools & DevOps", items: skills.tools },
};

const Terminal: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<Array<{ type: 'command' | 'text' | 'skills' | 'error'; content: string; skills?: string[] }>>([
    { type: 'text', content: "Welcome! Type 'help' to see available commands, or try 'skills all' to see everything." },
  ]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedInput = inputText.trim().toLowerCase();
      
      // Add the command to output
      setOutput((prev) => [...prev, { type: 'command', content: inputText }]);

      if (trimmedInput === "" || trimmedInput === "help") {
        setOutput((prev) => [...prev, { 
          type: 'text', 
          content: `Available Commands:
  skills <category>  - Show skills for a category
  skills all         - Show all my skills
  clear              - Clear terminal
  
Categories: frontend, backend, databases, blockchain, ml, tools` 
        }]);
      } else if (trimmedInput === "clear") {
        setOutput([]);
      } else if (trimmedInput === "skills all" || trimmedInput === "all") {
        Object.entries(skillCommands).forEach(([key, value], index) => {
          // Only show unique categories
          if (['frontend', 'backend', 'databases', 'blockchain', 'ml', 'tools'].includes(key)) {
            setTimeout(() => {
              setOutput((prev) => [...prev, { 
                type: 'skills', 
                content: value.title, 
                skills: value.items 
              }]);
            }, index * 100);
          }
        });
      } else if (trimmedInput.startsWith("skills ")) {
        const category = trimmedInput.replace("skills ", "").trim();
        if (skillCommands[category]) {
          setOutput((prev) => [...prev, { 
            type: 'skills', 
            content: skillCommands[category].title, 
            skills: skillCommands[category].items 
          }]);
        } else {
          setOutput((prev) => [...prev, { 
            type: 'error', 
            content: `Unknown category: ${category}. Try: frontend, backend, databases, blockchain, ml, tools` 
          }]);
        }
      } else if (skillCommands[trimmedInput]) {
        // Direct category name without "skills" prefix
        setOutput((prev) => [...prev, { 
          type: 'skills', 
          content: skillCommands[trimmedInput].title, 
          skills: skillCommands[trimmedInput].items 
        }]);
      } else {
        setOutput((prev) => [...prev, { 
          type: 'error', 
          content: `Command not found: ${inputText}. Type 'help' for available commands.` 
        }]);
      }

      setInputText("");
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <span className="text-gray-500 text-sm font-mono">girijesh@dev ~ skills</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm h-[450px] overflow-y-auto">
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index}>
                {line.type === 'command' ? (
                  <div className="text-gray-300">
                    <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> {line.content}
                  </div>
                ) : line.type === 'skills' ? (
                  <div className="text-gray-300 pl-3">
                    <span className="text-yellow-500">{line.content}:</span> {line.skills?.join(" • ")}
                  </div>
                ) : line.type === 'error' ? (
                  <div className="text-red-400 pl-3">{line.content}</div>
                ) : (
                  <div className="text-gray-400 pl-3 whitespace-pre-wrap">{line.content}</div>
                )}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-500">➜</span>
            <span className="text-cyan-400">~</span>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent text-white outline-none ml-1"
              placeholder=""
              autoFocus
            />
            <span className="w-1.5 h-3.5 bg-gray-400 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
