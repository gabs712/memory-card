export default function Container({ children }) {
  return (
    <div className={`min-h-svh w-full bg-sky-600`}>
      <div className="max-w-7xl relative mx-auto">{children}</div>
    </div>
  )
}
