'use client';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <input type="text" className="p-2" placeholder="Username" />
      <input type="password" className="p-2" placeholder="Password" />
      <button
        onClick={() => {
          window.location.href = "/buyer-seller";
        }}
      >Login</button>
      <button
        onClick={() => {
          window.location.href = "/admin-login";
        }}
      >
        Admin Login
      </button>
    </div>
  );
}
