import Image from 'next/image';

export default function ToolsCard() {
  const tools = [
    { name: 'Figma', icon: '/tools/figma.svg' },
    { name: 'Framer', icon: '/tools/framer.svg' },
  ];

  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-lg">
              <div className="relative w-6 h-6">
                <Image 
                  src={tool.icon} 
                  alt={tool.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}