import React from "react";

var user_avtar="https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png";
function MyOrder() {

  return (
    <>
      <div className="Profilemaincontaner">
        <div className="imgdiv">
          <img src={user_avtar} alt=" icon" />
        </div>
          <h2>Your Order Here !</h2>
        <h2>Harsh Jha</h2>
        <h3>Email id : Harsh.j@antino.io</h3>
      </div>
    </>
  );
}

export default MyOrder;
