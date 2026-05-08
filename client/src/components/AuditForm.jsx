import { useEffect, useState } from "react"
import { tools } from "../data/tools"
import { generateAudit } from "../utils/auditEngine"
import ToolCard from "./ToolCard"
import { supabase } from "../lib/supabase"

function AuditForm({ goToDashboard }) {

  const [toolsData, setToolsData] = useState([
    {
      tool: "",
      plan: "",
      monthlySpend: "",
      seats: ""
    }
  ])

  const [teamSize, setTeamSize] = useState("")
  const [useCase, setUseCase] = useState("")
  const [result, setResult] = useState(null)

  const [leadData, setLeadData] = useState({
    email: "",
    company: "",
    role: ""
  })

  // Load saved data
  useEffect(() => {

    const savedData = localStorage.getItem("auditData")

    if (savedData) {

      const parsedData = JSON.parse(savedData)

      setToolsData(parsedData.toolsData || [])
      setTeamSize(parsedData.teamSize || "")
      setUseCase(parsedData.useCase || "")
    }

  }, [])

  // Save data automatically
  useEffect(() => {

    const data = {
      toolsData,
      teamSize,
      useCase
    }

    localStorage.setItem(
      "auditData",
      JSON.stringify(data)
    )

  }, [toolsData, teamSize, useCase])

  const handleChange = (index, field, value) => {

    const updatedTools = [...toolsData]

    updatedTools[index][field] = value

    setToolsData(updatedTools)
  }

  const handleLeadChange = (e) => {

    setLeadData({
      ...leadData,
      [e.target.name]: e.target.value
    })
  }

  const saveLead = async () => {

    if (
      !leadData.email ||
      !leadData.company ||
      !leadData.role
    ) {

      alert("Please fill all fields")

      return
    }

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email: leadData.email,
          company: leadData.company,
          role: leadData.role,
          total_savings: result.totalSavings,
          audit_data: result
        }
      ])

    if (error) {

      console.log(error)

      alert("Failed to save report")

      return
    }

    goToDashboard()
  }

  const addTool = () => {

    setToolsData([
      ...toolsData,
      {
        tool: "",
        plan: "",
        monthlySpend: "",
        seats: ""
      }
    ])
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const auditResult = generateAudit(toolsData)

    setResult(auditResult)
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-8 rounded-xl w-full max-w-3xl mx-auto mt-10 space-y-6 shadow-2xl"
    >

      <div className="space-y-2">

        <h2 className="text-4xl font-bold">
          AI Spend Audit
        </h2>

        <p className="text-zinc-400">
          Analyze your AI tooling costs and uncover savings opportunities.
        </p>

      </div>

      {
        toolsData.map((toolData, index) => (

          <ToolCard
            key={index}
            index={index}
            toolData={toolData}
            tools={tools}
            handleChange={handleChange}
          />

        ))
      }

      <button
        type="button"
        onClick={addTool}
        className="w-full bg-zinc-700 hover:bg-zinc-600 transition py-3 rounded font-bold"
      >
        + Add Another Tool
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="number"
          placeholder="Team Size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full p-3 rounded bg-black border border-zinc-700"
        />

        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full p-3 rounded bg-black border border-zinc-700"
        >
          <option value="">Primary Use Case</option>
          <option value="coding">Coding</option>
          <option value="writing">Writing</option>
          <option value="research">Research</option>
          <option value="data">Data</option>
        </select>

      </div>

      <button
        type="submit"
        className="w-full bg-white hover:bg-zinc-200 transition text-black py-4 rounded font-bold text-lg"
      >
        Generate Audit
      </button>

      {
        result && (

          <div className="bg-black border border-zinc-700 p-6 rounded-xl space-y-6">

            <div className="space-y-2">

              <h3 className="text-4xl font-bold">
                Audit Results
              </h3>

              <p className="text-zinc-400">
                Personalized optimization recommendations for your AI stack.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-green-500/10 border border-green-500 p-5 rounded-lg">

                <p className="text-zinc-400">
                  Monthly Savings
                </p>

                <h3 className="text-4xl font-bold text-green-400">
                  ${result.totalSavings}
                </h3>

              </div>

              <div className="bg-blue-500/10 border border-blue-500 p-5 rounded-lg">

                <p className="text-zinc-400">
                  Annual Savings
                </p>

                <h3 className="text-4xl font-bold text-blue-400">
                  ${result.annualSavings}
                </h3>

              </div>

            </div>

            {
              result.audits.map((audit, index) => (

                <div
                  key={index}
                  className="border border-zinc-700 rounded-xl p-5 space-y-3 bg-zinc-900"
                >

                  <div className="flex items-center justify-between">

                    <h4 className="text-2xl font-bold">
                      {audit.tool}
                    </h4>

                    <div className="text-green-400 font-bold text-xl">
                      ${audit.savings}
                    </div>

                  </div>

                  <p>
                    <span className="font-bold">
                      Recommendation:
                    </span>{" "}
                    {audit.recommendation}
                  </p>

                  <p>
                    <span className="font-bold">
                      Reason:
                    </span>{" "}
                    {audit.reason}
                  </p>

                </div>

              ))
            }

            <div className="border border-zinc-700 rounded-xl p-5 bg-zinc-950 space-y-4">

              <div className="space-y-2">

                <h3 className="text-2xl font-bold">
                  Save Your Audit Report
                </h3>

                <p className="text-zinc-400">
                  Get your personalized audit summary and future optimization updates.
                </p>

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={leadData.email}
                onChange={handleLeadChange}
                className="w-full p-3 rounded bg-black border border-zinc-700"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={leadData.company}
                onChange={handleLeadChange}
                className="w-full p-3 rounded bg-black border border-zinc-700"
              />

              <input
                type="text"
                name="role"
                placeholder="Your Role"
                value={leadData.role}
                onChange={handleLeadChange}
                className="w-full p-3 rounded bg-black border border-zinc-700"
              />

              <button
                type="button"
                onClick={saveLead}
                className="w-full bg-green-500 hover:bg-green-400 transition text-black py-3 rounded font-bold"
              >
                Save Audit Report
              </button>

            </div>

          </div>

        )
      }

    </form>
  )
}

export default AuditForm