export default function ScoreBoard({ clicked, highest }) {
  const score = clicked.length

  return (
    <div className="fixed left-0 right-0 top-0 mb-4 bg-black/60 p-1.5 px-3 text-white">
      <div className="flex justify-between">
        <p>Score: {score}</p>
        <p>Highest: {highest}</p>
      </div>
    </div>
  )
}
