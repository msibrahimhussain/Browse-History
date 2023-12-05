import './index.css'

const UserHistory = props => {
  const {historyDetails, deleteUser} = props
  const {domainUrl, logoUrl, title, timeAccessed, id} = historyDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="history-card-container">
      <div>
        <p className="time-accessed">{timeAccessed}</p>
        <div className="domain">
          <img src={logoUrl} className="domain-img" alt="domain logo" />
          <h1>{title}</h1>
          <p>{domainUrl}</p>
        </div>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default UserHistory
