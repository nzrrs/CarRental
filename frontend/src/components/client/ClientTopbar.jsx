import SearchIcon from "../../assets/icons/client/Search.svg";
import { administrateurs, utilisateurs } from "../../data/data";

function getCurrentClient() {
  const adminUserIds = new Set(
    administrateurs.map((admin) => admin.utilisateurId)
  );

  // TODO: Replace this fallback with the authenticated client once auth exists.
  return utilisateurs.find((user) => !adminUserIds.has(user.id)) ?? utilisateurs[0];
}

function ClientTopbar() {
  const user = getCurrentClient();
  const fullName = user?.nom ?? "Client";
  const initials = fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex items-center justify-end border-b border-[#e5e7eb] bg-white px-10 py-6">
      <div className="flex w-full max-w-[640px] items-center gap-5">
        <div className="relative flex-1">
          <input
            className="h-[46px] w-full rounded-lg border border-[#d9dde5] bg-[#fbfcfd] pr-5 pl-13 text-[15px] outline-0 placeholder:text-[#7c8594]"
            placeholder="Search here"
          />
          <img
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 opacity-60"
            src={SearchIcon}
            alt="search"
          />
        </div>

        <div
          className="flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0d6efd] text-sm font-semibold text-white"
          aria-label={fullName}
          title={fullName}
        >
          {initials || "CL"}
        </div>
      </div>
    </header>
  );
}

export default ClientTopbar;
