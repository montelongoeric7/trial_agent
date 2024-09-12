import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          gp
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">My Clinic</Link>
          <Link href="/calendar" className="text-gray-600 hover:text-gray-900">Calendar</Link>
          <Link href="/patients" className="text-gray-600 hover:text-gray-900">Patients</Link>
          <Link href="/staff" className="text-gray-600 hover:text-gray-900">Staff</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md border border-gray-300">
            Sign in
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}