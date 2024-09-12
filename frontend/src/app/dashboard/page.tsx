import Header from '../components/Header'
import TaskList from '../components/TaskList'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Ask Meddy...."
            className="w-full px-4 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <TaskList />
      </main>
    </div>
  )
}