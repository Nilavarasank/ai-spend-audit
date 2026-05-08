function ToolCard({
  index,
  toolData,
  tools,
  handleChange
}) {

  return (

    <div className="space-y-4 bg-zinc-100 p-5 rounded-2xl border border-zinc-300">

      <div className="space-y-2">

        <label className="font-semibold text-black">
          AI Tool
        </label>

        <select
          value={toolData.tool}
          onChange={(e) =>
            handleChange(index, "tool", e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white border border-zinc-300 text-black caret-black focus:outline-none focus:ring-2 focus:ring-green-400"
        >

          <option value="" className="text-zinc-500">
            Select Tool
          </option>

          {
            tools.map((tool) => (

              <option
                key={tool.name}
                value={tool.name}
                className="text-black bg-white"
              >
                {tool.name}
              </option>

            ))
          }

        </select>

      </div>

      <div className="space-y-2">

        <label className="font-semibold text-black">
          Subscription Plan
        </label>

        <select
          value={toolData.plan}
          onChange={(e) =>
            handleChange(index, "plan", e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white border border-zinc-300 text-black caret-black focus:outline-none focus:ring-2 focus:ring-green-400"
        >

          <option value="" className="text-zinc-500">
            Select Plan
          </option>

          <option value="free" className="text-black bg-white">
            Free
          </option>

          <option value="plus" className="text-black bg-white">
            Plus
          </option>

          <option value="pro" className="text-black bg-white">
            Pro
          </option>

          <option value="team" className="text-black bg-white">
            Team
          </option>

          <option value="enterprise" className="text-black bg-white">
            Enterprise
          </option>

        </select>

      </div>

      <div className="space-y-2">

        <label className="font-semibold text-black">
          Monthly Spend
        </label>

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          value={toolData.monthlySpend}
          onChange={(e) =>
            handleChange(index, "monthlySpend", e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white border border-zinc-300 text-black caret-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

      </div>

      <div className="space-y-2">

        <label className="font-semibold text-black">
          Number of Seats
        </label>

        <input
          type="number"
          placeholder="Number of Seats"
          value={toolData.seats}
          onChange={(e) =>
            handleChange(index, "seats", e.target.value)
          }
          className="w-full p-4 rounded-xl bg-white border border-zinc-300 text-black caret-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

      </div>

    </div>
  )
}

export default ToolCard