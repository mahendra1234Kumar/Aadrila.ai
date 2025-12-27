
import bgDots from '../assets/Images/Group-2-Copy-2.png';
import bgShape3 from '../assets/Images/Group-2.png';
function Blogs() {
  const blogs = [
    {
      title: 'How AI is Revolutionizing Document Management for Enterprises',
      date: 'July 31, 2024',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard.',
    },
    {
      title: 'Top 5 Fraud Prevention Strategies for Financial Institutions',
      date: 'July 31, 2024',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard.',
    },
    {
      title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence',
      date: 'July 31, 2024',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard.',
    },
  ];
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorations */}
      <img
        src={bgDots}
        alt=""
        className="absolute top-10 left-10 w-48 opacity-80"
      />

      <img
        src={bgShape3}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 w-48 opacity-80"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blogs
          </h2>
          <p className=" font-medium 
    mb-2
    bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)]
    bg-clip-text
    text-transparent">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum has been the industry's standard.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <div key={index} className="relative">

              {/* Background gradient card */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-1/2 bg-gradient-to-r from-[#EDEBFF] via-[#F4F2FF] to-[#E6F0FF] rounded-xl z-0"
              />

              {/* Main Card */}
              <article className="relative z-10 bg-white p-8 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-2">
                  {blog.date}
                </p>

                <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </article>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-20">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white text-3xl flex items-center justify-center hover:bg-blue-700 transition">
            ‹
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white text-3xl flex items-center justify-center hover:bg-blue-700 transition">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
