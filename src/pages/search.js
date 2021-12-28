import {
  getDocs,
  collection,
  db,
  query,
  where,
} from '../utils/firebaseconfig.js';
import { countries } from '../utils/countries.js';
import { interests } from '../utils/interests.js';

String.prototype.capitalize = function() {
// console.log(this.charAt(0).toUpperCase() + this.slice(1));
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// Function - Get Users data from Firestore
async function usersInFirestore() {
  const usersData = await getDocs(collection(db, 'users'));
  return usersData;
}

// Template View Search Users
const Search = () => {
  const viewSearch = `      
    <div class='container'>
      <div class='caja1'>
        <div class='input'>
          <input type='text' id='fname' name='firstname' placeholder='🔍 User name..'>
        </div>
        <div class='filtros'>
          <div class='filtro1'>
              <select class='selectCountry' name='select'>
                <option value='Country'>Country</option>
              </select>
          </div>
          <div class='filtro2'>
            <select  class='selectInterest' name='select'>
              <option value='Interest'>Interest</opcion>
            </select>
          </div>
        </div>
      </div>
      <div class='caja2'></div>
      </div>
`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSearch;

  // Clear
  const clearCards = () => {
    while (divCardUser.firstChild) {
      divCardUser.firstChild.remove();
    }
  };

  // Divs querySelector
  const divCardUser = divElemt.querySelector('.caja2');
  const divInputName = divElemt.querySelector('#fname');
  const divSelectCountry = divElemt.querySelector('.selectCountry');
  const divSelectInterest = divElemt.querySelector('.selectInterest');

  // Filter
  async function filterUsers(key, divElem) {
    clearCards();
    let filterInfo = divElem;
    let q = query(collection(db, 'users'));

    if (key == 'username') {
      console.log('filterInfo.value: ', filterInfo.value);
      q = query(collection(db, 'users'), 
        where('name', '>=', filterInfo.value.capitalize()),
        where('name', '<=', filterInfo.value.capitalize()+ '\uf8ff'));
    }
    if (key == 'country') {
      q = query(collection(db, 'users'), where('country', '==', filterInfo.value));
    }
    if (key == 'interests'){
      q = query(collection(db, 'users'), where('interests', 'array-contains', filterInfo.value));
    }
    const querySnapshot = await getDocs(q);
    printDataUsers(querySnapshot);
  }

  // Show input - filter Name
  divInputName.addEventListener('keyup', () => {filterUsers('username', divInputName)});

  // Show countries
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in countries) {
    divSelectCountry.innerHTML += `
    <option value='${prop}:${countries[prop]}'>
      ${countries[prop]}
    </option>`;
  };
  divSelectCountry.addEventListener('change', () => { filterUsers('country', divSelectCountry); });

  // Show Select Interest
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in interests) {
    divSelectInterest.innerHTML += `
    <option value='${interests[prop]}'>
      ${prop}
    </option>`;
  };
  divSelectInterest.addEventListener('change', () => {
    // console.log('divSelectInterest:', divSelectInterest.value);
    filterUsers('interests', divSelectInterest);
  });

  // Print Users -> for user
  function printDataUsers(data) {
    // console.log('data: ', data);
    let dataUsers = data;
    dataUsers.forEach((doc) => {
      // console.log(doc.id, ' => ', doc.data());
      // Print One User
      let user, photo, fullname, country, interests;
      user = doc.data();
      photo = user.photo;
      fullname = user.name;
      country = user.country.split(':')[1];
      interests = user.interests;
      printUser(photo, fullname, country, interests);
    });
    return;
  }

  // Print One card user
  function printUser(photo, fullname, country, interests) {
    divCardUser.innerHTML += `
        <div class='search'>
          <div class='perfil'><img class='imgPerfil' src='${photo}' alt=''></div>
          <div class='caracteres'>
            <div class='nombre'>${fullname}</div>
            <div class='pais'>${country}</div>
            <div class='intereses'>
              <div class='imgCaracteres'><img src='${interests[0]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[1]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[2]}' alt=''></div>
            </div>
            <div class='flexBtn'>
              <button id="btnSeeUserPost" class="btnSeeUserPost" data-userPost:  ><a href="#/home">See Posts</a></button>
            </div>
          </div>  
        </div>
  `;
    return;
  }

  // Users in Firestore and print
  const infoUsers = () => {
    usersInFirestore()
      .then((querySnapshot) => {
        const data = querySnapshot;
        // Print
        printDataUsers(data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  // Users
  infoUsers();

  return divElemt;
};

export default Search;
