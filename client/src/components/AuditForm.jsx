import { useState } from "react"
import { tools } from "../data/tools"
import { generateAudit } from "../utils/auditEngine"

function AuditForm() {

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    monthlySpend: "",
    seats: "",
    teamSize: "",
    useCase: ""
  })

  const [result, setResult] = useState(null)

  const selectedTool = tools.find(
    (tool) => tool.name === formData.tool
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const auditResult = generateAudit(formData)

    setResult(auditResult)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-8 rounded-xl w-full max-w-xl space-y-5"
    >

      <h2 className="text-3xl font-bold">
        AI Spend Audit
      </h2>

      <select
        name="tool"
        value={formData.tool}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      >
        <option value="">Select Tool</option>

        {tools.map((tool) => (
          <option key={tool.name} value={tool.name}>
            {tool.name}
          </option>
        ))}
      </select>

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      >
        <option value="">Select Plan</option>

        {selectedTool?.plans.map((plan) => (
          <option key={plan} value={plan}>
            {plan}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="monthlySpend"
        placeholder="Monthly Spend ($)"
        value={formData.monthlySpend}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      />

      <input
        type="number"
        name="seats"
        placeholder="Number of Seats"
        value={formData.seats}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      />

      <input
        type="number"
        name="teamSize"
        placeholder="Team Size"
        value={formData.teamSize}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      />

      <select
        name="useCase"
        value={formData.useCase}
        onChange={handleChange}
        className="w-full p-3 rounded bg-black border border-zinc-700"
      >
        <option value="">Primary Use Case</option>
        <option value="coding">Coding</option>
        <option value="writing">Writing</option>
        <option value="research">Research</option>
        <option value="data">Data</option>
      </select>

      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded font-bold"
      >
        Generate Audit
      </button>

      {
        result && (
          <div className="bg-black border border-zinc-700 p-5 rounded-lg space-y-3">

            <h3 className="text-2xl font-bold">
              Audit Result
            </h3>

            <p>
              <span className="font-bold">
                Recommendation:
              </span>{" "}
              {result.recommendation}
            </p>

            <p>
              <span className="font-bold">
                Monthly Savings:
              </span>{" "}
              ${result.savings}
            </p>

            <p>
              <span className="font-bold">
                Reason:
              </span>{" "}
              {result.reason}
            </p>

          </div>
        )
      }

    </form>
  )
}

export default AuditForm