export default function Discover() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F1F1] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md text-center space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#662D91]/10 text-[#662D91] flex items-center justify-center rounded-full text-4xl font-bold">
            🚧
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#662D91]">
          Discover Page Under Construction
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600">
          We're working hard to bring exciting new features to the Discover section.
          Please check back soon!
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#662D91] text-white rounded-xl hover:bg-[#571f7b] transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
