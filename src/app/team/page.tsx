import Image from 'next/image';
import '../globals.css';

const teamMembers = [
  {
    name: 'username',
    description: 'some random description goes here',
    image: '/images/profile/pfp.png',
    tags: ['pwn', 'web', 'crypto'],
  },
];

export default function Team() {
  return (
    <main className="min-h-screen w-full bg-[url('/images/starfield-bg.jpg')] bg-cover bg-center text-white font-['Press_Start_2P']">
      {/* Heading */}
      <h1 className="text-center pt-32 pb-10 text-4xl lowercase">the team</h1>

      {/* Grid Container */}
      <div className="mx-auto mt-10 mb-40 flex max-w-6xl flex-wrap justify-center gap-16 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex w-[260px] min-h-[400px] flex-col items-center rounded-2xl bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-8 shadow-[0_0_20px_3px_rgba(168,85,247,0.5)] mt-12" // Added mt-12 here
          >
            {/* Profile Image */}
            <div className="h-28 w-28 mb-5 rounded-full border-2 border-white bg-zinc-800 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-base text-center">{member.name}</h2>

            {/* Description */}
            <p className="text-[10px] text-zinc-300 text-center leading-relaxed max-w-[200px]">
              {member.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {member.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-purple-500 bg-black/30 px-3 py-1 text-[10px] text-purple-400 shadow-[0_0_6px_1px_rgba(168,85,247,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
