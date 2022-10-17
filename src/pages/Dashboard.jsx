import Cards from '../components/dashboard/Cards'
import Header from '../components/dashboard/Header'
import Transaction from '../components/dashboard/Transaction'
import '../styles/dashboard.scss'

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Header />
      <Cards />
      <Transaction />
    </main>
  )
}

export default Dashboard