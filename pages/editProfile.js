import {
// db,
// collection,
// getDocs,
// getDoc,
// doc,
} from '../utils/firebaseconfig.js';

// Obtener un usuario
// async function readUserEditProfile(uid) {
//   let data = '';
//   const docRef = doc(db, 'users', uid);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap);

//   if (docSnap.exists()) {
//     // console.log("Document data:", docSnap.data());
//     data = docSnap.data();
//     console.log('Document data:', data);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log('No such document!');
//   }
//   return data;
// }

const EditProfile = () => {
  const viewEditProfile = ` 
  <body>
    <section id="EditProfile" class="Box">
      <div id="Profile">
        <div class="titleEditProfile">
          <h1>EDIT PROFILE</h1>
        </div>
        <div class="containerSection">
          <div class="bodyEditProfile">
            <div class="nameUser">
            </div>
            <div class="profileAndInterest"></div>
            <div class="interests">
              <img src="AnimalCN.png" alt="" />
              <img src="SiembraCN.png" alt="" />
              <img src="ReciclajeCN.png" alt="" />
            </div>
            <div class="photoProfile">
              <img
                src="AvatarA7.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="countryUser">
              <div class="countryUserFlex">
                <h3>Country:</h3>
                <select name="select">
                  <option value="value1">Value 1</option>
                  <option value="value2" selected>Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
              </div>
            </div>
            <div class="titleWriteBio">
              <h3>Write your bio:</h3>
            </div>
            <div class="bioUser">
              <textarea name="comments" id="texta2"></textarea>
              <div class="buttonSave">
                <button>
                  <h2>SAVE</h2>
                </button>
              </div>
            </div>
          </div>
          <div class="selectProfile" class="Box">
            <div id="selectPhoto" class="Box">
              <h2>Choose your profile picture:</h2>
              <div id="photos" class="Box">
                  <div class="img0">
                    <img
                    src="AvatarA1.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img1">
                    <img
                    src="AvatarA2.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img2">
                    <img
                    src="AvatarA3.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img3">
                    <img
                    src="AvatarA4.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img4">
                    <img
                    src="AvatarA5.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img5">
                    <img
                    src="AvatarA6.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img6">
                    <img
                    src="AvatarA7.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img7">
                    <img
                    src="AvatarA8.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img8">
                    <img
                    src="AvatarA9.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img9">
                    <img
                    src="AvatarA10.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img10">
                    <img
                    src="AvatarA11.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img11">
                    <img
                    src="AvatarA12.png"
                    alt=""
                    srcset=""
                  />
                  </div>
              </div>
          
          </div>
            <div id="selectInterest" class="Box">
              <h2>Pick 3 of your interests:</h2>
              <div id="photos" class="Box">
                <div class="img0">
                  <img
                  src="Agua.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img1">
                  <img
                  src="Animal.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img2">
                  <img
                  src="Clima.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img3">
                  <img
                  src="Energia.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img4">
                  <img
                  src="Energia2.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img5">
                  <img
                  src="Fabrica.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img6">
                  <img
                  src="Oceanos.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img7">
                  <img
                  src="Reciclaje.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img8">
                  <img
                  src="ResiduosTóxicos.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img9">
                  <img
                  src="Siembra.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img10">
                  <img
                  src="Tala.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img11">
                  <img
                  src=""
                  alt=""
                  srcset=""
                />
                </div>
            </div>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </section>
  </body>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewEditProfile;

  const infoUser = (info) => {
    console.log('info: ', info);
    divElemt.querySelector('.nameUser').innerHTML
    += `<h3>${info.name}</h3>`;
  };

  const uid = () => {
    // const uidSS = sessionStorage.getItem('key');
    console.log('uidSS: ', localStorage.getItem('user'));
    const uidSS = JSON.parse(localStorage.getItem('user'));

    return uidSS;
  };

  infoUser(uid());
  return divElemt;
};

export default EditProfile;
