'use client'
export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
        <button
          className="p-2"
          onClick={() => {
            window.location.href = "/buyer";
          }}
        >
          Buyer
        </button>
        <button
          className="p-2"
          onClick={() => {
            window.location.href = "/seller";
          }}
        >
          Seller
        </button>
      </div>
    </main>
  );
}
