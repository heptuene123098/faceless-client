interface NotificationDropdownProps {
  notifications: {
    id: number;
    message: string;
  }[];
}

export default function NotificationDropdown({
  notifications,
}: NotificationDropdownProps) {
  return (
    <div className="absolute max-sm:-right-10 right-0 top-12 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-3 border-b font-semibold text-gray-700">
        Notifications
      </div>
      <ul className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
          >
            {notification.message}
          </li>
        ))}
      </ul>
      <div className="text-sm text-center text-purple-600 hover:underline cursor-pointer p-2">
        View all
      </div>
    </div>
  );
}
