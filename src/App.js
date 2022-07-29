import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "1014a229d22547d4b6928dd8a2c851d1"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
	  <Routes>
         <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = "in" category = "general"/>}/>
         {/* <Route path="/" element={<News country = "in" category = "general"/>}/> */}
          <Route path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = "in"category = "general"/>}/>
          <Route path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country = "in"category = "Business"/>}/>
          <Route path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country = "in"category = "Entertainment"/>}/>
          <Route path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country = "in"category = "Health"/>}/>
          <Route path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country = "in"category = "Science"/>}/>
          <Route path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country = "in"category = "Sports"/>}/>
          <Route path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country = "in"category = "Technology"/>}/>
    	</Routes>

        {/* <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch> */}
        
      </div>
    )
 
}

export default App;