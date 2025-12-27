import { useState } from 'react';
import member2 from '../assets/Images/Member Image.png';
import member1 from '../assets/Images/Member Image (1).png';
import member3 from '../assets/Images/Member Image (2).png';
import bgShape1 from '../assets/Images/Combined-Shape-Copy.png';
import bgDots from '../assets/Images/Group-2-Copy-2.png';

function Team() {
  const [selectedIndex, setSelectedIndex] = useState(1); // Center member is default
  const teamMembers = [
    {
      image: member1,
      name: 'TEAM MEMBER 1',
      title: 'Position Title',
      description: 'Description for team member 1 goes here.',
    },
    {
      image: member2,
      name: 'MANSI SHUKLA',
      title: 'CEO FutureSphere',
      description: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.',
    },
    {
      image: member3,
      name: 'TEAM MEMBER 3',
      title: 'Position Title',
      description: 'Description for team member 3 goes here.',
    },
  ];

  const selectedMember = teamMembers[selectedIndex];
  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background abstract shapes - left side */}
      <img
        src={bgShape1}
        alt=""
        className="absolute top-0 left-50 w-1/3 opacity-80 z-0"
      />
      {/* Dotted pattern - right side */}
      <img
        src={bgDots}
        alt=""
        className="absolute top-0 right-0 w-48 opacity-30 z-0"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet our team
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto bg-gradient-to-r from-[#CD6028] via-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent leading-relaxed">
            Meet our passionate and talented team, committed to delivering exceptional
            results, driving innovation, and transforming your vision into reality.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 bg-[#4A90E2] text-white rounded-lg flex items-center justify-center hover:bg-[#357ABD] transition-colors"
            aria-label="Previous team member"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-[#4A90E2] text-white rounded-lg flex items-center justify-center hover:bg-[#357ABD] transition-colors"
            aria-label="Next team member"
          >
            →
          </button>
        </div>

        {/* Team Members */}
        <div className="flex justify-center items-end gap-8 mb-8">
          {teamMembers.map((member, index) => {
            const isSelected = index === selectedIndex;
            let borderClass = 'border-4 ';
            if (isSelected) {
              borderClass += 'border-[#D08B5B]'; // Orange-brown for selected
            } else if (index === 0) {
              borderClass += 'border-gray-900'; // Black for left member
            } else {
              borderClass += 'border-white'; // White for right member
            }

            return (
              <div key={index} className="relative">
                <div
                  className={`w-32 h-32 rounded-full overflow-hidden ${borderClass} ${isSelected ? 'scale-110' : ''
                    } transition-all cursor-pointer`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Member Details Card */}
        <div className="max-w-4xl mx-auto relative">
          {/* Upward-pointing triangle (caret) */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#4A90E2]"></div>
          </div>

          {/* Blue Card */}
          <div className="bg-[#4A90E2] rounded-2xl p-12 text-center text-white shadow-xl">
            <h3 className="text-4xl font-bold mb-3">{selectedMember.name}</h3>
            <p className="text-[#D08B5B] text-xl font-semibold mb-6">
              {selectedMember.title}
            </p>
            <p className="text-white leading-relaxed max-w-2xl mx-auto">
              {selectedMember.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
