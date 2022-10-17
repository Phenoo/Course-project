import Img from '../../assets/user4.jpg'


const Header = () => {
  return (
    <div className="dashboard-header">
      <section>
        <div className="top">
          <div className="profile">
            <div className="image">
              <img src={Img} alt="profile" />
            </div>
            <div className="text">
              <div className="div">
                <h4>
                  rolans r
                </h4>
                <h6 className="badge">
                  beginner
                </h6>
              </div>
              <p>
                student
              </p>
            </div>
          </div>
          <div className="setting-btn">
            <button>
              account settings
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="dashboard-links">
          <ul>
            <li>
              <a href="#a">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#a">
                courses
              </a>
            </li>
            <li>
              <a href="#a">
                Wishlists
              </a>
            </li>
            <li>
              <a href="#a">
                messages
              </a>
            </li>
            <li>
              <a href="#a">
              purchase history
              </a>
            </li>
            <li>
              <a href="#a">
                deposit
              </a>
            </li>
            <li>
              <a href="#a">
                transactions
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Header