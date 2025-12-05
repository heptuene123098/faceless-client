"use client";

import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<"account" | "subscription">(
    "account"
  );

  return (
    <div className="bg-[#F1F1F1] min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
         <div className="rounded-xl shadow p-6 space-y-6">
          <h1 className="text-3xl font-semibold text-[#662D91]">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your account and subscription.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("account")}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === "account"
                ? "text-[#662D91] font-semibold border-b-4 border-[#662D91]"
                : "text-gray-500 hover:text-[#662D91]"
            }`}
          >
            Account
          </button>

          <button
            onClick={() => setActiveTab("subscription")}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === "subscription"
                ? "text-[#662D91] font-semibold border-b-4 border-[#662D91]"
                : "text-gray-500 hover:text-[#662D91]"
            }`}
          >
            Subscription
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          {/* ACCOUNT TAB CONTENT */}
          {activeTab === "account" && (
            <>
              {/* Account Info */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  Account Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Name
                    </label>
                    <input
                     aria-label="Enter your name"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-[#662D91]"
                      defaultValue="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                    aria-label="Enter your email address"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-[#662D91]"
                      defaultValue="example@mail.com"
                    />
                  </div>
                </div>
              </section>

              <hr />

              {/* Security */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  Security
                </h2>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    aria-label="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-[#662D91]"
                  />
                </div>

                <button className="px-6 py-2 bg-[#662D91] text-white rounded-lg hover:bg-[#571f7b] transition">
                  Update Password
                </button>
              </section>
            </>
          )}

          {/* SUBSCRIPTION TAB CONTENT */}
          {activeTab === "subscription" && (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  Subscription Plan
                </h2>

                <p className="text-gray-600">
                  You are currently on the <strong>Free Plan</strong>.
                </p>

                <button className="px-6 py-2 bg-[#662D91] text-white rounded-lg hover:bg-[#571f7b] transition">
                  Upgrade Plan
                </button>
              </section>

              <hr />

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  Billing History
                </h2>

                <p className="text-gray-500">No previous payments.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
