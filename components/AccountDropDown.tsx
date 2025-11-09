export default function AccountDropDown() {
  return (
    <div className="absolute right-0 top-12 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b">
        <p className="text-sm font-semibold text-gray-800">
          Nebolisa Ugochukwu
        </p>
        <p className="text-xs text-gray-500">Attendee</p>
      </div>
      <ul className="divide-y divide-gray-100">
        <li className="px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">
          Manage Profile
        </li>
        <li className="px-4 py-3 hover:bg-gray-50 text-sm text-red-600 cursor-pointer">
          Sign Out
        </li>
      </ul>
    </div>
  );
}
