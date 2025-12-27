import heroImage from '../assets/Images/Property 1=L1.png';
import bgImage from '../assets/Images/c88209290d14b7e717e8b262be57e0eac49b8dc9.jpg';
function Hero() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#CD6028] via-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              <span className="text-gray-900">Document Automation & Fraud Detection</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Get a Demo
              </button>
              <button className="border-2 border-blue-600 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="AI Document Automation"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
