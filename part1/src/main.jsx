import React from 'react'
import ReactDOM from "react-dom/client"

import App from './App'

const notes = [
  {
    id: 1,
    content: 'HITIMIL is easy',
    important: true
  },
  {
    id: 2,
    content: 'Briwsir cin ixiciti inli JiviScripit',
    important: false
  },
  {
    id: 3,
    content: 'GIT and PIST are the most impirtiant methods of HITITIPI protocol',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)