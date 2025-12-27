import bgDots from '../assets/Images/Group-2-Copy-2.png';

function Contact() {
  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      <img
        src={bgDots}
        alt=""
        className="absolute top-10 left-10 w-48 opacity-80"
      />
      {/* WHITE CONTENT */}
      <div className="container mx-auto px-6 pt-24 pb-[180px] relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[36px] font-bold text-gray-900 mb-2">
              Contact Us
            </h2>

            <p className="
    text-sm 
    leading-relaxed 
    max-w-md 
    mb-10
    bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)]
    bg-clip-text
    text-transparent
  ">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem ipsum has been the industry's standard.
            </p>

            <div className="space-y-8g text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  • U.S. Office
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Adrila Technologies NC,<br />
                  8 The Green, Ste R,<br />
                  Dover County of Kent Zip Code 19901
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  • India Office
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Adrila Technologies Private Limited,<br />
                  Unit No. 4–7, Lotus Trade Centre,<br />
                  Andheri West, Mumbai, Maharashtra 400053
                </p>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="relative -mb-[420px] ">
            <div className="bg-white rounded-2xl shadow-xl p-10 -mb-[420px]">
              <form className="space-y-4 text-sm">

                <div className="grid grid-cols-2 gap-4">
                  <input className="input" placeholder="Full Name" />
                  <input className="input" placeholder="Email" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input className="input" placeholder="Phone Number" />
                  <input className="input" placeholder="Company Name" />
                </div>
                <input className="input" placeholder="Inquiry Type" />
                <textarea
                  className="input resize-none"
                  rows="5"
                  placeholder="Message"
                />

                <button
                  className="w-full bg-[#3F6DB5] text-white py-3 rounded-full font-medium text-sm"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* BLUE FOOTER */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3F6DB5] pt-[60px] pb-10 text-white text-xs">
        <div className="container mx-auto px-6 text-left">
          © 2025 Adrila Technologies Private Limited (CIN: U74999UP2017PTC094688)
          <br />
          Registered Address: B-1/127, Sector-K Aliganj, Lucknow, Uttar Pradesh, India 226024
        </div>
      </div>

      {/* Input styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          outline: none;
        }
        .input:focus {
          border-color: #3F6DB5;
        }
      `}</style>

    </section>
  );
}

export default Contact;
