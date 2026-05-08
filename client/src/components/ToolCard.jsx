function ToolCard({
  index,
  toolData,
  tools,
  handleChange
}) {

  const selectedTool = tools.find(
    (tool) => tool.name === toolData.tool
  )

  return (
    <div className="bg-black border border-zinc-700 p-5 rounded-lg space-y-4">

      <h3 className="text-xl font-bold">
        Tool {index + 1}
      </h3>

      <select
        value={toolData.tool}
        onChange={(e) =>
          handleChange(index, "tool", e.target.value)
        }
        className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
      >
        <option value="">Select Tool</option>

        {tools.map((tool) => (
          <option key={tool.name} value={tool.name}>
            {tool.name}
          </option>
        ))}
      </select>

      <select
        value={toolData.plan}
        onChange={(e) =>
          handleChange(index, "plan", e.target.value)
        }
        className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
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
        placeholder="Monthly Spend"
        value={toolData.monthlySpend}
        onChange={(e) =>
          handleChange(index, "monthlySpend", e.target.value)
        }
        className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <input
        type="number"
        placeholder="Seats"
        value={toolData.seats}
        onChange={(e) =>
          handleChange(index, "seats", e.target.value)
        }
        className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
      />

    </div>
  )
}

export default ToolCard