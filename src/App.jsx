import { useState } from 'react'
import './App.css'

function App() {
  const [output, setOutput] = useState('Welcome to ECC AI Engine. Select an action above.')

  const runCommand = (cmd, text) => {
    setOutput(`[Executing: ${cmd}]\n> Running system command...\n> Status: Ready\n> Output:\n${text}`)
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <div>
          <h1>⚡ ECC AI Studio</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#8b949e' }}>
            dhundhwana-arch/my-ecc
          </p>
        </div>
        <span className="status-badge">● Active Engine</span>
      </header>

      <div className="grid">
        <div className="card">
          <h3>🎯 Core Workflows</h3>
          <p style={{ fontSize: '0.85rem' }}>AI-driven planning and defect resolution</p>
          <button className="action-btn" onClick={() => runCommand('/plan', 'Requirements analyzed. Initializing step-by-step roadmap.')}>/plan</button>
          <button className="action-btn" onClick={() => runCommand('/build-fix', 'Scanning compiler outputs. Resolver agent dispatched.')}>/build-fix</button>
          <button className="action-btn" onClick={() => runCommand('/code-review', 'Inspecting local git changes for idiomatic patterns.')}>/code-review</button>
        </div>

        <div className="card">
          <h3>🤖 Cross-Model Reviews</h3>
          <p style={{ fontSize: '0.85rem' }}>Dual-model verification loop</p>
          <button className="action-btn" onClick={() => runCommand('/astra-review', 'Dispatching code to GPT-6-Astra via Codex bridge.')}>/astra-review</button>
          <button className="action-btn" onClick={() => runCommand('/santa-loop', 'Starting adversarial convergence loop between Claude and GPT.')}>/santa-loop</button>
        </div>

        <div className="card">
          <h3>🧠 Memory Vault</h3>
          <p style={{ fontSize: '0.85rem' }}>Local persistent markdown storage</p>
          <button className="action-btn" onClick={() => runCommand('memory doctor', 'Checking vault integrity: 0 broken links, 0 malformed files.')}>Memory Doctor</button>
          <button className="action-btn" onClick={() => runCommand('memory save', 'Ready to save unreviewed context to local markdown.')}>Save Context</button>
        </div>
      </div>

      <div className="card">
        <h3>💻 Terminal Console Output</h3>
        <div className="console-box">{output}</div>
      </div>
    </div>
  )
}

export default App
