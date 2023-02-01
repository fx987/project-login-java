import "./styles/home.scss"


const App = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='flex-home'>
      <div className="Home-logo">
        <img src="/gif.png" alt='' />
      </div>
      {children}
    </div>
  )
}

export default App
