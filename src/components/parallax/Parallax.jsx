import './parallax.scss'

export const Parallax = ({type}) => {
  return (
    <div className="parallax"
    style={{
        background: 
        type==="about" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)" 
        : "linear-gradient(180deg, #111132, #505064)"
    }}
    >
        <h1>{type==="about" ? "What I Can" : "What I Did?"}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}
