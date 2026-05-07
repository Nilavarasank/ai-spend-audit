export function generateAudit(data) {

  let recommendation = ""
  let savings = 0
  let reason = ""

  // ChatGPT Logic
  if (
    data.tool === "ChatGPT" &&
    data.plan === "Team" &&
    Number(data.seats) <= 2
  ) {
    recommendation = "Switch to ChatGPT Plus"
    savings = Number(data.monthlySpend) - 40
    reason =
      "Small teams usually do not require the Team plan."
  }

  
  else if (
    data.tool === "Claude" &&
    data.plan === "Team" &&
    Number(data.seats) <= 2
  ) {
    recommendation = "Switch to Claude Pro"
    savings = Number(data.monthlySpend) - 40
    reason =
      "Claude Team is expensive for very small teams."
  }

  else {
    recommendation = "Current plan looks optimized"
    savings = 0
    reason =
      "No major savings opportunity detected."
  }

  return {
    recommendation,
    savings,
    reason
  }
}