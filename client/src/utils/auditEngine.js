export function generateAudit(toolsData) {

  const audits = []

  let totalSavings = 0

  toolsData.forEach((tool) => {

    let recommendation = ""
    let savings = 0
    let reason = ""

    // ChatGPT Logic
    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      Number(tool.seats) <= 2
    ) {

      recommendation = "Switch to ChatGPT Plus"

      savings = Number(tool.monthlySpend) - 40

      reason =
        "Small teams usually do not require Team plan."
    }

    // Claude Logic
    else if (
      tool.tool === "Claude" &&
      tool.plan === "Team" &&
      Number(tool.seats) <= 2
    ) {

      recommendation = "Switch to Claude Pro"

      savings = Number(tool.monthlySpend) - 40

      reason =
        "Claude Team is expensive for very small teams."
    }

    else {

      recommendation = "Current plan looks optimized"

      savings = 0

      reason =
        "No major savings opportunity detected."
    }

    totalSavings += savings

    audits.push({
      tool: tool.tool,
      recommendation,
      savings,
      reason
    })

  })

  return {
    audits,
    totalSavings
  }
}