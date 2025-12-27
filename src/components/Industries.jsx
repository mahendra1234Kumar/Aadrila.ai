
import healthcareIcon from '../assets/Images/Healthcare_Icon.png';
import lendingIcon from '../assets/Images/Lending_Icon.png';
import insuranceIcon from '../assets/Images/Insurance_Icon.png';
import bgShape1 from '../assets/Images/Combined-Shape-Copy.png';
import bgShape2 from '../assets/Images/Group-2-Copy-2.png';
import bgShape3 from '../assets/Images/Group-2.png';

function Industries() {
  const industries = [
    {
      icon: insuranceIcon,
      title: 'Insurance',
      description: 'Automate claims processing with accurate document validation.',
    },
    {
      icon: lendingIcon,
      title: 'Lending',
      description: 'Ensure faster loan approvals with fraud detection and instant verification.',
    },
    {
      icon: healthcareIcon,
      title: 'Healthcare',
      description:
        'Streamline patient record management and ensure compliance with HIPAA standards.',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Shapes */}
      <img
        src={bgShape1}
        alt=""
        className="absolute top-0 left-0 w-[45%] opacity-30"
      />

      <img
        src={bgShape3}
        alt=""
        className="absolute top-12 right-1/4 w-40 opacity-80"
      />

      <img
        src={bgShape2}
        alt=""
        className="absolute bottom-12 right-0 w-48 opacity-30"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="max-w-xl mb-20">

          <p className="bg-gradient-to-r from-[#CD6028] via-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent font-semibold mb-2">
            AI-driven innovation for growth.
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Empower
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl px-8 py-10 shadow-md hover:shadow-lg transition-all text-center max-w-sm mx-auto
                ${index === 0
                  ? 'md:mt-24'
                  : index === 1
                    ? 'md:mt-6'
                    : 'md:-mt-50'
                }`}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-14 h-14"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;

