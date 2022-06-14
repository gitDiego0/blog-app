import Navbar from '../Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  )
}
