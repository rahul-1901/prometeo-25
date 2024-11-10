import React from 'react'
import "./Speaker-Card.css"
const Card2 = ({name,profession,speech}) => {
  return (
    <div>
      <div className="wrapper">
        <div className="user-card">
          <div className="identity">
            <div className="user-card-img">
              <img
                src="https://www.computerhope.com/jargon/g/guest-user.png"
                alt=""
              />
              <div
                style={{ zIndex: 5, color: "black" }}
                className="speaker-details"
              >
                <h2 style={{ paddingTop: 4, margin: 0 }}>{name}</h2>
                <p style={{ padding: 0, margin: 0 }}>{profession}</p>
              </div>
            </div>
          </div>

          <div className="speaker-message">
            <div className="user-card-info">
              <p>{speech}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2
