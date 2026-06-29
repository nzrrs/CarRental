import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyState from "../../components/client/EmptyState";
import NotificationCard from "../../components/client/NotificationCard";

function Notifications() {
  const navigate = useNavigate();
  // TODO: Wire this to project notification data/API when that model exists.
  const [notifications, setNotifications] = useState([]);
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const handleDelete = (notification) => {
    const shouldDelete = window.confirm(
      `Delete "${notification.title}" notification?`
    );

    if (shouldDelete) {
      setNotifications((currentNotifications) =>
        currentNotifications.filter((item) => item.id !== notification.id)
      );
    }
  };

  const handleMarkAsRead = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const handleViewReservation = (reservationId) => {
    navigate(`/client/reservations/${reservationId}`);
  };

  return (
    <div className="min-h-full bg-[#f5f6f8]">
      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-8 flex flex-col gap-5 rounded-xl border border-[#e6e9ef] bg-white p-6 shadow-[0_12px_30px_rgba(16,24,40,0.04)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[30px] font-semibold text-[#111827]">
              Notifications
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-[16px] text-[#667085]">
              <span>You have</span>
              <span className="rounded-full bg-[#eff6ff] px-3 py-1 text-sm font-semibold text-[#0d6efd]">
                {unreadCount} unread
              </span>
              <span>notifications</span>
            </p>
          </div>
          <button
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
            className="rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[15px] font-semibold text-[#111827] transition hover:border-[#b8c1d1] hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-50 sm:self-start"
          >
            Mark all as read
          </button>
        </div>

        {notifications.length === 0 ? (
          <EmptyState
            title="No notifications yet"
            message="You'll see reservation updates, payment reminders, and promotions here."
          />
        ) : (
          <div className="grid gap-4">
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onDelete={handleDelete}
                onMarkAsRead={handleMarkAsRead}
                onViewReservation={handleViewReservation}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Notifications;
