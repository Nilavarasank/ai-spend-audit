import AuditForm from "../components/AuditForm"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

function Dashboard() {

  const [reports, setReports] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {

    fetchReports()

  }, [])

  const fetchReports = async () => {

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {

      console.log(error)

    } else {

      setReports(data)

    }

  }

  const deleteReport = async (id) => {

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id)

    if (error) {

      console.log(error)

      return
    }

    fetchReports()
  }

  if (showForm) {

    return (
      <AuditForm
        goToDashboard={() => {
          setShowForm(false)
          fetchReports()
        }}
      />
    )

  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Audit Dashboard
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black px-5 py-3 rounded-lg font-bold hover:bg-zinc-200 transition"
        >
          New Audit
        </button>

      </div>

      <div className="space-y-5">

        {
          reports.map((report) => (

            <div
              key={report.id}
              className="border border-zinc-700 p-5 rounded-xl bg-zinc-900"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {report.company}
                  </h2>

                  <p className="text-zinc-400">
                    {report.email}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div className="text-green-400 font-bold text-2xl">
                    ${report.total_savings}
                  </div>

                  <button
                    onClick={() => deleteReport(report.id)}
                    className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded font-bold text-white"
                  >
                    Delete
                  </button>

                </div>

              </div>

              <p className="mt-4">
                <span className="font-bold">
                  Role:
                </span>{" "}
                {report.role}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Dashboard