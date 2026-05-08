import { useState } from "react";

function AuditForm() {

  const [toolsData, setToolsData] = useState([
    {
      tool: "",
      plan: "",
      spend: "",
      seats: ""
    }
  ]);

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [auditGenerated, setAuditGenerated] = useState(false);

  const handleChange = (index, field, value) => {

    const updated = [...toolsData];

    updated[index][field] = value;

    setToolsData(updated);
  };

  const addTool = () => {

    setToolsData([
      ...toolsData,
      {
        tool: "",
        plan: "",
        spend: "",
        seats: ""
      }
    ]);
  };

  const generateAudit = () => {

    setAuditGenerated(true);

    alert("Audit Generated Successfully");
  };

  const saveReport = () => {

    if (!email || !company || !role) {

      alert("Please fill all fields");
      return;
    }

    alert("Report Saved Successfully");
  };

  return (

    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl space-y-6">

        <div>

          <h1 className="text-5xl font-bold text-black">
            AI Spend Audit
          </h1>

          <p className="text-zinc-600 mt-4 text-lg">
            Analyze your AI tooling costs and uncover savings opportunities.
          </p>

        </div>

        {
          toolsData.map((toolData, index) => (

            <div
              key={index}
              className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6 space-y-4"
            >

              <select
                value={toolData.tool}
                onChange={(e) =>
                  handleChange(index, "tool", e.target.value)
                }
                className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
              >

                <option value="">
                  Select AI Tool
                </option>

                <option value="ChatGPT">
                  ChatGPT
                </option>

                <option value="Claude">
                  Claude
                </option>

                <option value="Gemini">
                  Gemini
                </option>

                <option value="Cursor">
                  Cursor
                </option>

              </select>

              <select
                value={toolData.plan}
                onChange={(e) =>
                  handleChange(index, "plan", e.target.value)
                }
                className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
              >

                <option value="">
                  Select Subscription Plan
                </option>

                <option value="Free">
                  Free
                </option>

                <option value="Plus">
                  Plus
                </option>

                <option value="Pro">
                  Pro
                </option>

                <option value="Team">
                  Team
                </option>

                <option value="Enterprise">
                  Enterprise
                </option>

              </select>

              <input
                type="number"
                placeholder="Monthly Spend ($)"
                value={toolData.spend}
                onChange={(e) =>
                  handleChange(index, "spend", e.target.value)
                }
                className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
              />

              <input
                type="number"
                placeholder="Number of Seats"
                value={toolData.seats}
                onChange={(e) =>
                  handleChange(index, "seats", e.target.value)
                }
                className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
              />

            </div>

          ))
        }

        <button
          onClick={addTool}
          className="w-full bg-black text-white font-bold py-4 rounded-xl"
        >
          + Add Another Tool
        </button>

        <button
          onClick={generateAudit}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl"
        >
          Generate Audit
        </button>

        {
          auditGenerated && (

            <div className="bg-green-100 border border-green-400 rounded-2xl p-6">

              <h2 className="text-3xl font-bold text-black mb-4">
                Audit Results
              </h2>

              <p className="text-lg text-black">
                Potential Monthly Savings:
                <span className="font-bold text-green-700">
                  {" "} $250
                </span>
              </p>

              <p className="text-lg text-black mt-2">
                Recommended Action:
                <span className="font-bold">
                  {" "} Consolidate unused AI subscriptions
                </span>
              </p>

            </div>

          )
        }

        <div className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6 space-y-4">

          <h2 className="text-3xl font-bold text-black">
            Save Audit Report
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
          />

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
          />

          <input
            type="text"
            placeholder="Developer / Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-black"
          />

          <button
            onClick={saveReport}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl"
          >
            Save Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default AuditForm;