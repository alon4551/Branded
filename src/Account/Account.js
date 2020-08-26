import React from 'react';

const Account=({user})=>{
    return(<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc v-mid pl3">
        <div className="w-100 tl">

        <h1 className="f6 f5-ns fw6 lh-title black mv0">{user.firstName} {user.lastName} </h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">{user.email}</h2>
        </div>
      </div>
      <div className="dtc v-mid">
        <div className="w-100 tr">

        <input type="data"  value={user.birthday} disabled/>
        <h2 className="f6 fw4 mt0 mb0 black-60">{user.gender}</h2>
        </div>
      </div>
    </article>);
}
export default Account;