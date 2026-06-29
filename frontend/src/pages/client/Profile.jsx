import { useState } from "react";
import { administrateurs, utilisateurs } from "../../data/data";

function getCurrentClient() {
  const adminUserIds = new Set(
    administrateurs.map((admin) => admin.utilisateurId)
  );

  // TODO: Replace this fallback with the authenticated client once auth exists.
  return utilisateurs.find((user) => !adminUserIds.has(user.id)) ?? utilisateurs[0];
}

function InfoIcon({ type }) {
  const paths = {
    phone:
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z",
    card: "M3.5 7.5h17v10h-17v-10ZM3.5 10.5h17",
    camera:
      "M4 8h3l1.5-2h7L17 8h3v11H4V8ZM12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    lock: "M6.5 10V7.5a5.5 5.5 0 0 1 11 0V10M5 10h14v10H5V10ZM12 15.5v1.75",
    mail: "M4 6.5h16v11H4v-11ZM4 8l8 5 8-5",
    message:
      "M5 5h14v10H8l-3 3V5ZM8 9h8M8 12h5",
    megaphone:
      "M4 13h3l9 4V7l-9 4H4v2ZM7 13l1 5h3M18 10.5a3 3 0 0 1 0 3",
    shield:
      "M12 3 5 6v5.5c0 4.35 2.97 7.98 7 9 4.03-1.02 7-4.65 7-9V6l-7-3Z",
    trash:
      "M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",
  };

  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={paths[type]} />
    </svg>
  );
}

function PanelTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="mb-9 inline-flex max-w-full overflow-x-auto rounded-2xl bg-[#e9e9ef] p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`shrink-0 rounded-xl px-4 py-2 text-[16px] font-semibold transition-colors ${
            tab === activeTab
              ? "bg-white text-[#111827] shadow-sm"
              : "text-[#111827] hover:bg-white/65"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function Field({ label, value, wide = false }) {
  return (
    <label className={wide ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-[16px] font-semibold text-[#111827]">
        {label}
      </span>
      <input
        className="h-[46px] w-full rounded-lg border-0 bg-[#f0f0f2] px-4 text-[15px] text-[#111827] outline-0"
        defaultValue={value}
      />
    </label>
  );
}

function EmptyField({ label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[16px] font-semibold text-[#111827]">
        {label}
      </span>
      <input
        type="password"
        className="h-[46px] w-full rounded-lg border-0 bg-[#f0f0f2] px-4 text-[15px] text-[#111827] outline-0"
      />
    </label>
  );
}

function OptionRow({
  icon,
  title,
  description,
  action,
  danger = false,
  onClick,
}) {
  const content = (
    <>
      <div
        className={`flex min-w-0 items-center gap-4 ${
          danger ? "text-[#d92d20]" : "text-[#111827]"
        }`}
      >
        <span
          className={`shrink-0 ${
            danger ? "text-[#d92d20]" : "text-[#98a2b3]"
          }`}
        >
          <InfoIcon type={icon} />
        </span>
        <span className="min-w-0">
          <span className="block text-[18px] font-semibold leading-tight">
            {title}
          </span>
          <span
            className={`mt-1 block text-[14px] ${
              danger ? "text-[#f04438]" : "text-[#667085]"
            }`}
          >
            {description}
          </span>
        </span>
      </div>
      {action}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full items-center justify-between gap-4 rounded-xl border border-transparent bg-[#f8f9fb] px-6 py-5 text-left transition-colors hover:border-[#d9dde5] hover:bg-white ${
          danger ? "hover:border-[#fda29b]" : ""
        }`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-transparent bg-[#f8f9fb] px-6 py-5 transition-colors hover:border-[#d9dde5] hover:bg-white">
      {content}
    </div>
  );
}

function CheckBox({ defaultChecked = false }) {
  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="h-6 w-6 shrink-0 accent-[#0d6efd]"
    />
  );
}

function PersonalInfoPanel({ user }) {
  return (
    <>
      <div className="grid gap-x-5 gap-y-7 md:grid-cols-2">
        <Field label="Full Name" value={user.nom ?? "Client"} wide />
        <Field label="Email Address" value={user.email} wide />
        <Field label="Phone Number" value={user.telephone} wide />
        <Field label="Account Status" value={user.status} />
        <Field label="Registration Date" value={user.dateInscription} />
      </div>

      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827]"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-lg border-0 bg-[#0d6efd] px-5 py-3 text-[16px] font-semibold text-white"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}

function SecurityPanel({ onDeleteAccount }) {
  return (
    <>
      <div className="grid gap-6">
        <EmptyField label="Current Password" />
        <EmptyField label="New Password" />
        <EmptyField label="Confirm New Password" />
      </div>

      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827]"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-lg border-0 bg-[#0d6efd] px-5 py-3 text-[16px] font-semibold text-white"
        >
          Update Password
        </button>
      </div>

      <div className="mt-10 grid gap-3">
        <OptionRow
          icon="trash"
          title="Delete Account"
          description="Permanently remove your profile and account data"
          danger
          onClick={onDeleteAccount}
          action={
            <span className="shrink-0 text-[15px] font-semibold text-[#d92d20]">
              Delete
            </span>
          }
        />
      </div>
    </>
  );
}

function PreferencesPanel() {
  return (
    <>
      <h2 className="mb-5 text-[22px] font-semibold text-[#111827]">
        Notifications
      </h2>

      <div className="grid gap-4">
        <OptionRow
          icon="mail"
          title="Email Notifications"
          description="Receive updates via email"
          action={<CheckBox defaultChecked />}
        />
        <OptionRow
          icon="message"
          title="SMS Notifications"
          description="Receive text message updates"
          action={<CheckBox />}
        />
        <OptionRow
          icon="megaphone"
          title="Marketing Emails"
          description="Receive promotional offers and news"
          action={<CheckBox defaultChecked />}
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827]"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-lg border-0 bg-[#0d6efd] px-5 py-3 text-[16px] font-semibold text-white"
        >
          Save Preferences
        </button>
      </div>
    </>
  );
}

function DeleteAccountModal({ onCancel, onConfirm, deleted }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
      <div className="w-full max-w-md rounded-2xl border border-[#dcdfe5] bg-white p-6 shadow-xl">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#fee4e2] text-[#d92d20]">
          <InfoIcon type="trash" />
        </div>
        <h2 className="text-[24px] font-semibold text-[#111827]">
          Delete Account?
        </h2>
        <p className="mt-3 text-[16px] leading-6 text-[#667085]">
          Are you sure you want to delete the account? This mock action will not
          contact a backend yet.
        </p>
        {deleted && (
          <p className="mt-4 rounded-lg bg-[#fee4e2] px-4 py-3 text-[15px] font-semibold text-[#b42318]">
            Mock delete action completed.
          </p>
        )}
        <div className="mt-7 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg border-0 bg-[#d92d20] px-5 py-3 text-[16px] font-semibold text-white"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const tabs = ["Personal Info", "Security", "Preferences"];
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteMockDone, setDeleteMockDone] = useState(false);
  const user = getCurrentClient();
  const fullName = user?.nom ?? "Client";
  const initials = fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
    setDeleteMockDone(false);
  };

  return (
    <div className="min-h-full bg-[#f5f6f8]">
      <section className="px-10 py-10">
        <h1 className="mb-8 text-[30px] font-semibold text-[#111827]">
          My Profile
        </h1>

        <div className="grid gap-8 xl:grid-cols-[420px_1fr]">
          <aside className="rounded-2xl border border-[#dcdfe5] bg-white p-8">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#0d6efd] text-[42px] font-semibold text-white">
                {initials || "CL"}
              </div>
                <button className="absolute right-0 bottom-1 flex h-12 w-12 items-center justify-center rounded-full border-0 bg-[#0d6efd] text-white">
                  <InfoIcon type="camera" />
                </button>
              </div>

              <h2 className="mt-6 text-[26px] font-semibold text-[#111827]">
                {fullName}
              </h2>
              <p className="mt-1 text-[16px] text-[#667085]">{user?.email}</p>
            </div>

            <div className="mt-18 grid gap-5 text-[16px] text-[#111827]">
              <div className="flex items-center gap-4">
                <span className="text-[#98a2b3]">
                  <InfoIcon type="phone" />
                </span>
                {user?.telephone || "No phone on file"}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#98a2b3]">
                  <InfoIcon type="shield" />
                </span>
                {user?.status || "Status unavailable"}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#98a2b3]">
                  <InfoIcon type="card" />
                </span>
                Member since {user?.dateInscription || "not available"}
              </div>
            </div>
          </aside>

          <form className="rounded-2xl border border-[#dcdfe5] bg-white p-8">
            <PanelTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            {activeTab === "Personal Info" && <PersonalInfoPanel user={user} />}
            {activeTab === "Security" && (
              <SecurityPanel onDeleteAccount={handleDeleteAccount} />
            )}
            {activeTab === "Preferences" && <PreferencesPanel />}
          </form>
        </div>
      </section>

      {showDeleteModal && (
        <DeleteAccountModal
          deleted={deleteMockDone}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => setDeleteMockDone(true)}
        />
      )}
    </div>
  );
}

export default Profile;
