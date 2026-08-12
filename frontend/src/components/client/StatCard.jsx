function StatCard({ icon, label, value }) {
  return (
    <article className="flex min-h-[132px] flex-col justify-between rounded-xl border border-[#e6e9ef] bg-white p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)] transition hover:-translate-y-0.5 hover:border-[#cfd8e8] hover:shadow-[0_16px_36px_rgba(16,24,40,0.08)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f0f6ff] text-[#0d6efd]">
        {icon}
      </div>
      <div>
        <strong className="block text-[24px] font-semibold leading-tight text-[#111827]">
          {value}
        </strong>
        <span className="mt-1 block text-[13px] font-medium text-[#667085]">
          {label}
        </span>
      </div>
    </article>
  );
}

export default StatCard;
