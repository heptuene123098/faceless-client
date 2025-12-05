export default function ExpoPurchasePage() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow p-8 max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-semibold text-[#662D91]">
          Complete Your Purchase
        </h1>

        <p className="text-gray-600">
          You are about to secure your spot for this Expo session.
        </p>

        <div className="space-y-3">
          <label className="block text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter your name"
          />

          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <button className="w-full bg-[#662D91] text-white py-3 rounded-lg hover:bg-[#571f7b] transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
