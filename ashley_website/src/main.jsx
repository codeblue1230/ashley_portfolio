// External Imports
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Internal Imports
import { Portfolio, FinalPortfolio } from './components/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    	<Router>
			<Routes>
				<Route path="/" element={<Portfolio/>}/>
				<Route path="/portfolio" element={<FinalPortfolio/>}/>
			</Routes>
    	</Router>
  	</React.StrictMode>,
)
