export default function Container({ children, className = '' }) {
  return (
    <div className={`min-h-svh w-full ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
