const statusStyles = {
  completed: "bg-[#ecfdf3] text-[#027a48] border-[#abefc6]",
  canceled: "bg-[#fff1f3] text-[#c01048] border-[#fecdd6]",
  active: "bg-[#eff6ff] text-[#0d6efd] border-[#bfdbfe]",
  pending: "bg-[#fffaeb] text-[#b54708] border-[#fedf89]",
  rejected: "bg-[#fff1f3] text-[#b42318] border-[#fecdd6]",
};

function StatusBadge({ status }) {
  const key = status?.toLowerCase();
  const classes = statusStyles[key] || "bg-[#f2f4f7] text-[#344054] border-[#d0d5dd]";

  return (
    <span
      className={`inline-flex min-w-[92px] items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold ${classes}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
