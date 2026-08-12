const notificationMeta = {
  reservation_confirmed: {
    icon: "M9 12.75 11.25 15 15.5 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#e9fbef] text-[#079455]",
  },
  reservation: {
    icon: "M9 12.75 11.25 15 15.5 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#e9fbef] text-[#079455]",
  },
  payment_reminder: {
    icon: "M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#fff4e5] text-[#b54708]",
  },
  payment: {
    icon: "M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#fff4e5] text-[#b54708]",
  },
  promotion: {
    icon: "M12 11v5M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#eaf1ff] text-[#0d6efd]",
  },
  reservation_canceled: {
    icon: "M15 9 9 15M9 9l6 6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#fff1f3] text-[#d92d20]",
  },
  canceled: {
    icon: "M15 9 9 15M9 9l6 6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#fff1f3] text-[#d92d20]",
  },
  success: {
    icon: "M9 12.75 11.25 15 15.5 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#e9fbef] text-[#079455]",
  },
  warning: {
    icon: "M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#fff4e5] text-[#b54708]",
  },
  info: {
    icon: "M12 11v5M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    wrapper: "bg-[#eaf1ff] text-[#0d6efd]",
  },
};

function SvgIcon({ path }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 6h18M8 6V4h8v2M10 11v6M14 11v6M6 6l1 15h10l1-15" />
    </svg>
  );
}

function NotificationCard({ notification, onMarkAsRead, onDelete, onViewReservation }) {
  const meta = notificationMeta[notification.type] || notificationMeta.info;
  const hasReservation = Boolean(notification.reservationId);

  return (
    <article
      className={`rounded-xl border p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(16,24,40,0.08)] ${
        notification.isRead
          ? "border-[#e6e9ef] bg-white"
          : "border-[#c8ddff] bg-[#f6faff]"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${meta.wrapper}`}
        >
          <SvgIcon path={meta.icon} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[18px] font-semibold text-[#111827]">
                {notification.title}
              </h2>
              {!notification.isRead && (
                <span className="rounded-full bg-[#0d6efd] px-2.5 py-1 text-xs font-semibold text-white">
                  New
                </span>
              )}
            </div>
            <span className="shrink-0 text-sm text-[#667085]">
              {notification.time}
            </span>
          </div>

          <p className="mt-2 text-[15px] leading-6 text-[#475467]">
            {notification.message}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {!notification.isRead && (
              <button
                type="button"
                onClick={() => onMarkAsRead(notification.id)}
                className="rounded-lg border border-[#d9dde5] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:border-[#b8c1d1] hover:bg-[#f8fafc]"
              >
                Mark as read
              </button>
            )}
            {hasReservation && (
              <button
                type="button"
                onClick={() => onViewReservation(notification.reservationId)}
                className="rounded-lg bg-[#0d6efd] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b5ed7]"
              >
                View reservation
              </button>
            )}
            <button
              type="button"
              onClick={() => onDelete(notification)}
              className="ml-auto rounded-lg p-2 text-[#667085] transition hover:bg-[#f2f4f7] hover:text-[#d92d20]"
              aria-label={`Delete ${notification.title}`}
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NotificationCard;
