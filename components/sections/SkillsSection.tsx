"use client";

export default function SkillsSection() {
  const prompts = [
    { cmd: "frontend", color: "text-green-400" },
    { cmd: "backend", color: "text-cyan-400" },
    { cmd: "databases", color: "text-yellow-400" },
    { cmd: "blockchain", color: "text-purple-400" },
    { cmd: "ml", color: "text-pink-400" },
    { cmd: "tools", color: "text-orange-400" },
    { cmd: "skills all", color: "text-white" },
  ];

  return (
    <div id="skills" className="font-mono text-xs">
      <div className="text-gray-500 mb-2 text-[10px]">// try typing:</div>
      <div className="space-y-1">
        {prompts.map((item) => (
          <div key={item.cmd} className="text-gray-400 hover:text-white transition-colors cursor-default">
            <span className="text-green-500">❯</span> <span className={item.color}>{item.cmd}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-800 text-[10px] text-gray-600">
        <span className="text-yellow-500">$</span> help <span className="text-gray-700">→ all cmds</span>
      </div>
    </div>
  );
}
