import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import maps from '../images/maps.png'

const Profile = () => {
  const user = useSelector(state => state.user)
  const [accounts, setAccounts] = useState(user.allaccounts);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log(accounts)
    setProfile(accounts.filter(acc => {
      if (acc.name === user.username) {
        return acc
      }
    }))
  }, [user])

  return (
    <div>
      <div className="profile">
        <h1 style={{ textAlign: 'left' }}>Profile</h1>
        {profile.length > 0 &&
          <div className="profile-left">

            <img id="profilepic" src={profile[0].profilepicture} alt="profile_pic" />
            <p className="profilename">{profile[0].name}</p>

            <div className="left-section1">
              <table style={{ borderCollapse: 'collapse' }} >
                <tbody>
                  <tr>
                    <td className="keys">UserName :</td>
                    <td className="values">{profile[0].username}</td>
                  </tr>
                  <tr>
                    <td className="keys">e-mail :</td>
                    <td className="values">{profile[0].email}</td>
                  </tr>
                  <tr>
                    <td className="keys">Phone :</td>
                    <td className="values">{profile[0].phone}</td>
                  </tr>
                  <tr>
                    <td className="keys">Website :</td>
                    <td className="values">{profile[0].website}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="company">Company</p>
            <div className="left-section2">
              <table style={{ borderCollapse: 'collapse' }} >
                <tbody>
                  <tr>
                    <td className="keys">Name :</td>
                    <td className="values">{profile[0].company.name}</td>
                  </tr>
                  <tr>
                    <td className="keys">catchPhrase :</td>
                    <td className="values">{profile[0].company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <td className="keys">bs :</td>
                    <td className="values">{profile[0].company.bs}</td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>}

        {profile.length > 0 &&
          <div className="profile-right">
            <p className="address"
              style={{ float: 'left' }, { display: 'block' }, { textAlign: 'left' }}
            >
              Address :
            </p>
            <table style={{ borderCollapse: 'collapse' }} >
              <tbody>
                <tr>
                  <td className="keys">Street :</td>
                  <td className="values">{profile[0].address.street}</td>
                </tr>
                <tr>
                  <td className="keys">Suite :</td>
                  <td className="values">{profile[0].address.suite}</td>
                </tr>
                <tr>
                  <td className="keys">City :</td>
                  <td className="values">{profile[0].address.city}</td>
                </tr>
                <tr>
                  <td className="keys">Zipcode :</td>
                  <td className="values">{profile[0].address.zipcode}</td>
                </tr>
              </tbody>
            </table>
            <img src={maps} alt="maps" id="maps_image" />
            <p className="geo">
              <span className="keys">Lat:</span>
              <span className="values">{profile[0].address.geo.lat}</span>

              <span className="keys">Long:</span>
              <span className="values">{profile[0].address.geo.lng}</span>
            </p>

            <div className="chat">
              <span>Chats</span>
            </div>

          </div>
        }

      </div>
    </div>
  );
}

export default Profile;