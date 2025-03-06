import styles from '../../styles/Analytics.module.css';

export default function Analytics() {
  // Dummy data for analytics cards
  const analyticsData = [
    { id: 1, title: 'Daily Active Users', value: '12,456', change: '+15%' },
    { id: 2, title: 'Revenue', value: '$45,678', change: '+8%' },
    { id: 3, title: 'Conversion Rate', value: '3.2%', change: '+0.5%' },
    { id: 4, title: 'Average Session', value: '8m 42s', change: '-1%' }
  ];

  // More dummy data to enable scrolling
  const tableData = Array(20).fill().map((_, index) => ({
    id: index + 1,
    date: `March ${index + 1}, 2025`,
    users: Math.floor(1000 + Math.random() * 9000),
    sessions: Math.floor(1500 + Math.random() * 10000),
    revenue: `$${Math.floor(1000 + Math.random() * 5000)}`
  }));

  return (
    <div className={styles.analytics}>
      <h1 className={styles.title}>Analytics Dashboard</h1>
      
      <div className={styles.summary}>
        {analyticsData.map(card => (
          <div key={card.id} className={styles.card}>
            <h3>{card.title}</h3>
            <div className={styles.value}>{card.value}</div>
            <div className={styles.change} style={{ color: card.change.includes('+') ? '#4caf50' : '#f44336' }}>
              {card.change}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <h2>Recent Activity</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Users</th>
              <th>Sessions</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.date}</td>
                <td>{row.users}</td>
                <td>{row.sessions}</td>
                <td>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}