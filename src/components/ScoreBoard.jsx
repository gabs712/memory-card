export default function ScoreBoard({ clicked, highest }) {
  const score = clicked.length

  return (
    <div className="fixed left-0 right-0 top-0 mb-4 bg-black/60 p-2 px-7 text-white">
      <div className="flex justify-between">
        <p aria-live="polite">Score: {score}</p>
        <p aria-live="polite">Highest: {highest}</p>
      </div>
    </div>
  )
}
