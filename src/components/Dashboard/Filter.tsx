function Filter() {
  return (
    <div className="filter">
      <form>
        <div className="inpute-conatiner">
          <label>Organization</label>
          <select name="organization">
            <option value="hey">hey</option>
          </select>
        </div>
        <div className="inpute-conatiner">
          <label>Username</label>
          <input type="username" placeholder="User" />
        </div>
        <div className="inpute-conatiner">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="inpute-conatiner">
          <label>Date</label>
          <input type="Date" placeholder="Date" />
        </div>
        <div className="inpute-conatiner">
          <label>Phone Number</label>
          <input type="phone" placeholder="Phone Number" />
        </div>
        <div className="inpute-conatiner">
          <label>Status</label>
          <select />
        </div>
        <div className="btn-conatiner">
          <button>Reset</button>
          <button className="btn-right">Filter</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
