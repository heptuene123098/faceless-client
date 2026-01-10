"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const params = useSearchParams();
  const amount = params.get("amount");
  const title = params.get("title");

  const handlePayment = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, title }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-2xl">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <p className="mb-6">Amount: ${amount}</p>

      <button
        onClick={handlePayment}
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        Pay Now
      </button>
    </div>
  );
}
