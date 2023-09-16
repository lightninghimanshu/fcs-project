'use client'

export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
          <input type="text" className="p-2" placeholder="Username" />
          <input type="password" className="p-2" placeholder="Password" />
          <button
            onClick={() => {
              window.location.href = "/admin";
            }}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
