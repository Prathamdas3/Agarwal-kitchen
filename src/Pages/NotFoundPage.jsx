import Notfound from '../assets/Images/notfound.gif'
export default function NotFoundPage() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center
    "
      style={{ height: '100vh' }}
    >
      <img src={Notfound} alt="not found" width={200} height={200} />
      <h2 style={{ color: '#fc5d35' }}>Page Not Found</h2>
    </div>
  )
}
