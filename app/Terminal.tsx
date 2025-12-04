import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

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
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div className="rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl bg-[#0d1117]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <span className="text-gray-400 text-xs font-mono">skills-terminal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-mono">zsh</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <div className="space-y-3">
            {output.map((line, index) => (
              <div key={index}>
                {line.type === 'command' ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[#27C93F]">❯</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-white">{line.content}</span>
                  </div>
                ) : line.type === 'skills' ? (
                  <div className="pl-4 py-2">
                    <div className="text-purple-400 font-semibold mb-2">◆ {line.content}</div>
                    <div className="flex flex-wrap gap-2">
                      {line.skills?.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : line.type === 'error' ? (
                  <div className="text-red-400 pl-4 text-xs">{line.content}</div>
                ) : (
                  <div className="text-gray-400 pl-4 whitespace-pre-wrap text-xs">{line.content}</div>
                )}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[#27C93F]">❯</span>
            <span className="text-purple-400">~</span>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent text-white outline-none text-sm"
              placeholder="type a command..."
              autoFocus
            />
            <span className="w-2 h-4 bg-white/70 animate-pulse"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
