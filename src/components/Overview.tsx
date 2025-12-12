import { useMemo, useState } from "react"
import { FaRotateRight } from "react-icons/fa6"
import scenarios, {
  getRandomCategoryItem,
  getRandomModifierItem,
  type ModifierKey,
  type ScenarioCategoryKey,
  type ScenarioTypeKey
} from "../data/scenarios"

type Props = {
  type: ScenarioTypeKey
}

type RandomCategoryKey = Exclude<ScenarioCategoryKey, "transitions">

const RANDOM_CATEGORY_LABELS: Array<{ key: RandomCategoryKey; label: string }> = [
  { key: "subTypes", label: "SubType" },
  { key: "objectives", label: "Objective" },
  { key: "opposition", label: "Opposition" },
  { key: "escalation", label: "Escalation" },
  { key: "stakes", label: "Stakes" }
]

const MODIFIER_LABELS: Array<{ key: ModifierKey; label: string }> = [
  { key: "environmental", label: "Environmental" },
  { key: "social/situational", label: "Social / Situational" },
  { key: "narrative", label: "Narrative" }
]

const blankSelection: Record<RandomCategoryKey, string> = {
  subTypes: "",
  objectives: "",
  opposition: "",
  escalation: "",
  stakes: ""
}

const blankModifierSelection: Record<ModifierKey, string> = {
  environmental: "",
  "social/situational": "",
  narrative: ""
}

const Overview = ({ type }: Props) => {
  const typeData = scenarios.types[type] as Partial<
    Record<ScenarioCategoryKey, readonly string[]>
  >

  const availableCategories = useMemo(
    () => RANDOM_CATEGORY_LABELS.filter(({ key }) => (typeData[key]?.length ?? 0) > 0),
    [typeData]
  )

  const rollAll = () => {
    const next = { ...blankSelection }
    availableCategories.forEach(({ key }) => {
      next[key] = getRandomCategoryItem(type, key)
    })
    return next
  }

  const rollModifiers = () => {
    const next = { ...blankModifierSelection }
    MODIFIER_LABELS.forEach(({ key }) => {
      next[key] = getRandomModifierItem(key)
    })
    return next
  }

  const [selection, setSelection] = useState<Record<RandomCategoryKey, string>>(rollAll)
  const [modifierSelection, setModifierSelection] = useState<Record<ModifierKey, string>>(
    rollModifiers
  )

  const rerollCategory = (key: RandomCategoryKey) => {
    setSelection((prev) => ({
      ...prev,
      [key]: getRandomCategoryItem(type, key, prev[key])
    }))
  }

  const rerollModifier = (key: ModifierKey) => {
    setModifierSelection((prev) => ({
      ...prev,
      [key]: getRandomModifierItem(key, prev[key])
    }))
  }

  return (
    <>
      <h2>Overview:</h2>
      <h3>{type}</h3>
      <section style={{ paddingBlock: "0.5rem" }}>
        {MODIFIER_LABELS.map(({ key, label }) => {
          return (
            <div key={key} style={{ paddingBlock: "0.5rem" }}>
              <strong>{label}</strong>
              <div style={{ display: "flex", alignItems: "center", marginRight: "16px", gap: "0.5rem" }}>
                <p style={{ margin: 0, width: "50%" }}>{modifierSelection[key]}</p>
                <button
                  type="button"
                  aria-label={`Refresh ${label} modifier`}
                  onClick={() => rerollModifier(key)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    padding: "0.25rem",
                    cursor: "pointer"
                  }}
                >
                  <FaRotateRight />
                </button>
              </div>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(0, 0, 0, 0.2)"
                }}
              />
            </div>
          )
        })}
      </section>
      {availableCategories.map(({ key, label }, index) => {
        const isLast = index === availableCategories.length - 1
        return (
          <section key={key} style={{ paddingBlock: "0.5rem" }}>
            <h4 style={{ margin: 0 }}>{label}</h4>
            <div style={{ display: "flex", alignItems: "center", marginRight: "16px", gap: "0.5rem" }}>
              <p style={{ margin: 0, width: "50%" }}>{selection[key]}</p>
              <button
                type="button"
                aria-label={`Refresh ${label}`}
                onClick={() => rerollCategory(key)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: "0.25rem",
                  cursor: "pointer"
                }}
              >
                <FaRotateRight />
              </button>
            </div>
            {!isLast && (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(0, 0, 0, 0.2)"
                }}
              />
            )}
          </section>
        )
      })}
      {(typeData.transitions?.length ?? 0) > 0 && (
        <section style={{ paddingBlock: "0.5rem" }}>
          <h4 style={{ margin: 0 }}>Transitions</h4>
          <ul style={{ margin: "0.25rem 0 0.5rem 1rem" }}>
            {typeData.transitions!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default Overview
