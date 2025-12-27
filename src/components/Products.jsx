
import product1Image from '../assets/Images/Image [big-images-on-homepage] (1).png';
import product2Image from '../assets/Images/Image [big-images-on-homepage] (2).png';
import product3Image from '../assets/Images/Image [big-images-on-homepage] (3).png';
import bgDots from '../assets/Images/Group-2-Copy-2.png';
import bgCircle from '../assets/Images/Combined-Shape-Copy (1).png';
import bgShape1 from '../assets/Images/Combined-Shape-Copy.png';
import bgShape3 from '../assets/Images/Group-2.png';
const products = [
  {
    id: 1,
    tag: 'DocSim',
    title: 'AI-Powered Document Similarity Engine',
    description:
      'Detects near-duplicate, tampered, and fraudulent documents across large repositories.',
    features: [
      'Detects near-duplicates and altered documents',
      'Fraud pattern identification',
      'Multi-language support',
    ],
    image: product1Image,
  },
  {
    id: 2,
    tag: 'DocVerify',
    title: 'Automated Document Verification',
    description:
      'Verify documents instantly using AI trained on millions of samples.',
    features: [
      'Real-time verification',
      'High-accuracy OCR',
      'API-ready integration',
    ],
    image: product2Image,
  },
  {
    id: 3,
    tag: 'DocShield',
    title: 'Advanced Fraud Prevention Suite',
    description:
      'Enterprise-grade fraud prevention for sensitive document workflows.',
    features: [
      'Risk scoring engine',
      'Anomaly detection',
      'Enterprise security',
    ],
    image: product3Image,
  },
];

function Products() {
  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden">

      {/* 🔹 Background Decorations */}
      <img
        src={bgDots}
        alt=""
        className="absolute top-10 left-10 w-48 opacity-80"
      />

      <img
        src={bgShape3}
        alt=""
        className="absolute top-1/2 left-0 w-42 opacity-80"
      />
      <img
        src={bgShape1}
        alt=""
        className="absolute bottom-10 right-10 w-40 opacity-40"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="bg-gradient-to-r from-[#CD6028] via-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent font-semibold mb-2">
            features and benefits.
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Our Products
          </h2>
        </div>

        {/* Products */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="grid md:grid-cols-2 gap-16 items-center relative"
            >
              {/* TEXT */}
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-orange-500 to-blue-600">
                  {product.tag}
                </span>

                <h3 className="text-3xl font-bold text-gray-900 mb-5">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <ul className="space-y-3 text-gray-600 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                    Learn More
                  </button>
                  <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    Schedule a Demo
                  </button>
                </div>
              </div>

              {/* IMAGE + CIRCLE BG */}
              <div className={`relative flex justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img
                  src={bgCircle}
                  alt=""
                  className="absolute -bottom-16 -right-16 w-[120%] opacity-80"
                />

                <img
                  src={product.image}
                  alt={product.title}
                  className="relative z-10 rounded-3xl shadow-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
