import React from 'react'

const Transaction = () => {
  return (
    <div className="transaction-container">
      <section className="transaction-wrapper">
        <h4>
          latest transaction
        </h4>
        <div className="banner">
          <div className="right">
            <div>
              <h6>
                referred id
              </h6>
            </div>
            <div>
              <h6>
                details
              </h6>
            </div>
          </div>
          <div className="just">
            <div>
              <h6>
                amount
              </h6>
            </div>
            <div>
              <h6>
                post transaction
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transaction