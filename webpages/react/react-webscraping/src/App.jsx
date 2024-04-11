import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import puppeteer from 'puppeteer-core'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getQuotes = async()=>{
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    })

    const page = await browser.newPage();

    await page.goto('https://www.quintoandar.com.br/alugar/imovel/aclimacao-sao-paulo-sp-brasil?referrer=home&profiling=true', {
        waitUntil: "domcontentloaded",
    })

    const pageData = await page.evaluate(()=>{
      const button = document.querySelector('div.MuiBox-root.mui-10smzr0')
      return button.innerHTML
    })

    console.log(pageData)
  }

  getQuotes()


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
