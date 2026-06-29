function EmptyState({ title, message, actionLabel, onAction }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-[#d9dde5] bg-white px-6 py-10 text-center">
      <h3 className="text-[20px] font-semibold text-[#111827]">{title}</h3>
      {message && (
        <p className="mt-2 max-w-md text-[15px] leading-6 text-[#667085]">
          {message}
        </p>
      )}
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 rounded-lg bg-[#0d6efd] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#0b5ed7]"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
