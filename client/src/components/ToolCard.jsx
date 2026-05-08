function ToolCard({
  index,
  toolData,
  tools,
  handleChange
}) {

  return (

    <div className="bg-black border border-zinc-700 rounded-xl p-5 space-y-4">

      <select
        value={toolData.tool}
        onChange={(e) =>
          handleChange(index, "tool", e.target.value)
        }
        className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      >

        <option value="">
          Select Tool
        </option>

        {
          tools.map((tool) => (

            <option
              key={tool.name}
              value={tool.name}
            >
              {tool.name}
            </option>

          ))
        }

      </select>

      <select
        value={toolData.plan}
        onChange={(e) =>
          handleChange(index, "plan", e.target.value)
        }
        className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      >

        <option value="">
          Select Plan
        </option>

        <option value="free">
          Free
        </option>

        <option value="plus">
          Plus
        </option>

        <option value="pro">
          Pro
        </option>

        <option value="team">
          Team
        </option>

        <option value="enterprise">
          Enterprise
        </option>

      </select>

      <input
        type="number"
        placeholder="Monthly Spend ($)"
        value={toolData.monthlySpend}
        onChange={(e) =>
          handleChange(index, "monthlySpend", e.target.value)
        }
        className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400"
      />

      <input
        type="number"
        placeholder="Seats"
        value={toolData.seats}
        onChange={(e) =>
          handleChange(index, "seats", e.target.value)
        }
        className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400"
      />

    </div>
  )
}

export default ToolCard