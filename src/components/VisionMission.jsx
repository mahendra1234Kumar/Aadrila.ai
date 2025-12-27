import visionIcon from '../assets/Images/Vision_Icon.png';
import missionIcon from '../assets/Images/Mission_Icon.png';
import bgShape1 from '../assets/Images/abstract-blue-background-with-dynamic-shape 1 (1).png';

function VisionMission() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <img
        src={bgShape1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* About Us */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              About Us
            </h2>
            <p className="bg-gradient-to-r from-[#CD6028] via-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent text-lg">
              Meet the Minds Shaping Document Automation.
            </p>
          </div>
        </div>
        {/* OUR VISION */}
        <div className="relative max-w-6xl mb-28 ml-0">
          <div className="bg-white rounded-2xl shadow-md px-10 py-6 flex items-center justify-between relative">

            {/* Left Text */}
            <p className="text-gray-600 max-w-2xl">
              To redefine document management with cutting-edge technology
              that ensures accuracy, efficiency, and trust.
            </p>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Divider */}
              <div className="w-[3px] h-12 bg-orange-500"></div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                Our Vision
              </h3>

              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <img
                  src={visionIcon}
                  alt="Vision"
                  className="w-7 h-7 filter brightness-0 invert"
                />
              </div>
            </div>

          </div>
        </div>
        {/* OUR MISSION */}
        <div className="relative max-w-6xl ml-auto mr-0 mb-28">
          <div className="bg-white rounded-2xl shadow-md px-10 py-6 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <img
                  src={missionIcon}
                  alt="Mission"
                  className="w-7 h-7 filter brightness-0 invert"
                />
              </div>

              {/* Title + Divider */}
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                  Our Mission
                </h3>
                <div className="w-[3px] h-12 bg-orange-500"></div>
              </div>
            </div>

            {/* Right Text */}
            <p className="text-gray-600 max-w-2xl text-right">
              To redefine document management with cutting-edge technology
              that ensures accuracy, efficiency, and trust.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default VisionMission;
