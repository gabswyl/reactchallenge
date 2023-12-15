
import './App.css'
import Header from './hooks/Header'
import Info from './hooks/info'

function App() {

  return (
    <>
      <main className='container'>
        <div className='x'>
          <Header />
          <Info />
        </div>
      </main>
      <img className='vector' src="./public/Vector.svg" />

    </>
  )
}

export default App
