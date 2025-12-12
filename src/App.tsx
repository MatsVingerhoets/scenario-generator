import { Container, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import scenarios, { type ScenarioTypeKey } from "./data/scenarios"
import { useState } from 'react'
import Overview from './components/Overview'

const scenarioTypes = scenarios.types

function App() {
  const typeKeys = Object.keys(scenarioTypes) as ScenarioTypeKey[]
  const [selectedType, setSelectedType] = useState<ScenarioTypeKey | ''>('')

  const handleTypeChange = (event: SelectChangeEvent) => {
    const nextType = event.target.value as ScenarioTypeKey
    setSelectedType(nextType)
  };

  return (
    <Container style={{ backgroundColor: "white" }}>
      <h2>Selected type: {selectedType}</h2>
      <FormControl fullWidth>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          id="type-select"
          value={selectedType}
          label="Type"
          onChange={handleTypeChange}
        >
          {typeKeys.map((type) => (

            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedType !== '' && (
        <Overview key={selectedType} type={selectedType} />
      )}

    </Container>
  )
}

export default App
