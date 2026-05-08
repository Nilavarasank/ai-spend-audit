import { describe, it, expect } from "vitest"
import { generateAudit } from "./auditEngine"

describe("Audit Engine", () => {

  it("calculates savings correctly", () => {

    const result = generateAudit([
      {
        tool: "ChatGPT",
        plan: "team",
        monthlySpend: 200,
        seats: 2
      }
    ])

    expect(result.totalSavings).toBeGreaterThanOrEqual(0)

  })

  it("returns annual savings", () => {

    const result = generateAudit([
      {
        tool: "Claude",
        plan: "pro",
        monthlySpend: 100,
        seats: 1
      }
    ])

    expect(result.annualSavings).toBeGreaterThanOrEqual(0)

  })

  it("returns audits array", () => {

    const result = generateAudit([
      {
        tool: "Gemini",
        plan: "pro",
        monthlySpend: 50,
        seats: 1
      }
    ])

    expect(Array.isArray(result.audits)).toBe(true)

  })

  it("handles empty input", () => {

    const result = generateAudit([])

    expect(result.totalSavings).toBe(0)

  })

  it("includes recommendation", () => {

    const result = generateAudit([
      {
        tool: "Cursor",
        plan: "business",
        monthlySpend: 500,
        seats: 2
      }
    ])

    expect(result.audits[0].recommendation).toBeDefined()

  })

})