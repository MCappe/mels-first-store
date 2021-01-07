const Filter = () => {
  return (
    <aside className="filterAside">
      <div className="wrapper">
      <div className="filterContainer">
        <p>Filter Results by Mood:</p>
        <div className="filterBtns">
          <button>Salty</button>
          <button>Angry</button>
          <button>Sarcastic</button>
        </div>
      </div>
      </div>
    </aside>
  )
}

export default Filter;