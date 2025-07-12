import Image from "next/image";
import Link from "next/link";

export default function ToolsCard() {
  const tools = [
    { name: "Framer", icon: "/tools/framer.svg", color: "bg-white" },
    { name: "Cursor", icon: "/tools/cursor.png", color: "bg-black" },
    { name: "Figma", icon: "/tools/figma.svg", color: "bg-black" },
    { name: "Photoshop", icon: "/tools/photoshop.svg", color: "bg-white" },
  ];

  return (
    <div className="col-span-3 bg-neutral-900 rounded-xl overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-medium tracking-tight mb-3">Tools I Use</h3>
        <div className="grid grid-cols-3 gap-2">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`flex items-center justify-center aspect-square rounded-xl ${tool.color}`}
            >
              <div className="relative w-8 h-8">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          <Link
            href="/tools"
            className="flex items-center justify-center aspect-square rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <span className="text-sm text-neutral-400">See all</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
