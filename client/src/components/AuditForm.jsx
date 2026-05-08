function AuditForm() {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-black">
          AI Spend Audit
        </h1>

        <p className="text-zinc-600 mt-4">
          App is working successfully.
        </p>

        <input
          type="text"
          placeholder="Test Input"
          className="w-full mt-6 p-4 border rounded-xl text-black"
        />

        <button
          className="w-full mt-4 bg-green-500 text-black font-bold py-4 rounded-xl"
        >
          Generate Audit
        </button>
      </div>
    </div>
  );
}

export default AuditForm;