export default () => {
  const viewHome = `
  <!-- HEADER + MENU BAR -->
  <header>
    <nav class="nav">

      <a onclick="openPage('Home', this,'rgb(12 46 45 / 0%)')" id="OpenDefault">
        <img class="logo" src="/src/img/Logos/LogoG8.png" alt="Ecogram"></a>

      <button class="NavToggle" area-label="Open menu" >
        <img class="MenuBar" src="/src/img/Icons/WhiteBorder/Menu.png" alt="Menu">
      </button>
      <ul class="nav-menu nav-menu_visible"  data-animation="center">

        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link" onclick="openPage('Home', this,'rgb(12 46 45 / 0%)')">
            <img src="/src/img/Icons/WhiteBorder/Home1.png" alt="Home">
            <p>Eco Home</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link " onclick="openPage('Search', this,'rgb(12 46 45 / 0%)')" >
            <img src="/src/img/Icons/WhiteBorder/Search1.png" alt="Search Users">
            <p>Search User</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a  class="nav-menu-link nav-link" onclick="openPage('EditProfile', this,' rgb(12 46 45 / 0%)')">
            <img src="/src/img/Icons/WhiteBorder/Edit1.png" alt="Edit Profile">
            <p>Edit Profile</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link" onclick="openPage('AboutUs', this, 'rgb(12 46 45 / 0%)')">
            <img src="/src/img/Icons/WhiteBorder/Inf1.png" alt="About Us">
            <p>About Us</p>
          </a>
        </li>
        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link" onclick="openPage('SignOut', this,' rgb(12 46 45 / 0%)')">
            <img src="/src/img/Icons/WhiteBorder/SignOut.png" alt="Sign Out">
            <p>Sign Out</p>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- HOME PAGE -->
    <section id="Home" class="Box">

      <div class="HomeBox">
        <div class="UserName">
          <h1>USER NAME</h1> 
          <div class="linea2">&nbsp;</div>
        </div>
        
        <div class="Avatar">
          
          <img class="Avatar-img" src="/src/img/Avatares/Animals/AvatarA7.png" alt="Avatar Profile">
          <div class="linea2">&nbsp;</div>
        </div>
        <div class="User">
          <h3>User</h3>
          <p>@User165</p>
        </div>
        <div class="Country">
          <h3>Country</h3>
          <p>Italia</p>
        </div>
  
        <div class="Bio">
          
          <h3>Biography:</h3>
          <div>
            <p>Hola, soy amante del arte en reciclado. Hago muchas manualidades pro ambientales. Les invito a ver mi galeria. 🧮 </p>
          </div>
        </div>
        
        <div class="Interests">
          <h3>
            Interests:
          </h3>
          <div class="Interests-Box">
            <img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt="">
            <img src="/src/img/Intereses/InteresesCN/SiembraCN.png" alt="">
            <img src="/src/img/Intereses/InteresesCN/ReciclajeCN.png" alt="">
          </div>
        </div>
        
        <div class="Publications">

          <nav class="nav-Publications">
            <button class="tablink" onclick="openBoxPublication('publications', this, 'rgb(26, 77, 33)')" id="defaultOpen">
              <img src="/src/img/Icons/WhiteBorder/Notice.png" alt="Notice">
            </button>
            <button class="tablink" onclick="openBoxPublication('events', this, 'rgb(28, 70, 99)')">
              <img src="/src/img/Icons/WhiteBorder/Event1.png" alt="Events">
            </button>
            <button class="tablink" onclick="openBoxPublication('galery', this, 'rgb(102, 74, 31)')">
              <img src="/src/img/Icons/WhiteBorder/Galery1.png" alt="Galery">
            </button>
            <button class="tablink" onclick="openBoxPublication('historial', this, 'rgb(172, 35, 35)')">
              <img src="/src/img/Icons/WhiteBorder/Heart.png" alt="Heart">
            </button>
          </nav>

          <div id="publications" class="tabcontent"><br>
            <h1>PUBLICATIONS PUBLIC</h1>
            <p>All publications</p>
          </div>
          
          <div id="events" class="tabcontent">
            <h1>EVENTS</h1>
            <p>All events</p>
          </div>
          
          <div id="galery" class="tabcontent">
            <h1>MY GALLERY</h1>
            <p>Photos</p>
          </div>

          <div id="historial" class="tabcontent">
            <h1>HISTORIAL</h1>
            <p>All likes</p>
          </div>

          <footer class="footer-Publications">
            <button class="tablink" onclick="openBoxPublication('publications', this, 'rgb(26, 77, 33)')" id="defaultOpen">
              <img src="/src/img/Icons/WhiteBorder/Notice.png" alt="Notice">
            </button>
            <button class="tablink" onclick="openBoxPublication('events', this, 'rgb(28, 70, 99)')">
              <img src="/src/img/Icons/WhiteBorder/Event1.png" alt="Events">
            </button>
            <button class="tablink" onclick="openBoxPublication('galery', this, 'rgb(102, 74, 31)')">
              <img src="/src/img/Icons/WhiteBorder/Galery1.png" alt="Galery">
            </button>
            <button class="tablink" onclick="openBoxPublication('historial', this, 'rgb(172, 35, 35)')">
              <img src="/src/img/Icons/WhiteBorder/Heart.png" alt="Heart">
            </button>
          </footer> 
        </div>
      </div>

    </section>

    <!-- SEARCH PAGE -->
    <section id="Search" class="Box">

    </section>

    <!-- EDITP ROFILE PAGE -->
    <section id="EditProfile" class="Box">

    </section>

    <!-- ABOUT US PAGE -->
      <section id="AboutUs" class="Box">
          <div class="AboutUsContent">
            <div class="LogoLargeDiv">
              <img class="LogoLarge" src="/src/img/Logos/LogoG7.png" alt="Ecogram">
            </div>
            <br>
            <div class="AboutUsText">
              <h1>ECOGRAM</h1>
              <h3>EVERONMENTAL SOCIAL NETWORK
              </h3><br>
              <p>Es una red social creada con fines pro ambientales. Conocerás personas de diversos países con intereses afines al cuidado de nuestro único hogar "El Planeta Tierra". Si tú no lo cuidas, ¿Quién lo hará?</p>
              <br>
              <h1>¿QUÉ ENCONTRARÁS EN ECOGRAM?</h1>
              <h3>En esta plataforma podrás encontrar las siguientes secciones:
              </h3><br>
              <ul>
                <li>
                  Buscar usuarios con el mismo interés y de otros países.
                </li>
                <li>
                  Ver publicaciones, referentes al medio ambente,de todos los usuarios.
                </li>
                <li>
                  Publicar tips, imágenes, eventos, entre otros recursos pro ambientales.
                </li>
                <li>
                  Editar y gestionar tu perfil como desees.
                </li>
                <li>
                  Tener tu propia gelria de fotos pro ambientales.
                </li>
              </ul>
            <br>
            <h1>FOUNDERS:</h1>
          </div>
          <div class="FounderImg">
            <img src="/src/img/Logos/KMR4.png" alt="Founders">
          </div><br>
          <div class="FounderRedSocial-Box">
            <div class="FounderRedSocial-Box1">
              <div>
                <h3>Katerin Tello</h3>
              </div>
              <div class="FRS-div1">
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-gmail-32.png" alt="Gmail">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-github-30.png" alt="GitHub">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-linkedin-30.png" alt="LinkedIn">
                </div>
              </div>
            </div>
            <div class="FounderRedSocial-Box1">
              <div>
                <h3>Mariana Guanda</h3>
              </div>
              <div class="FRS-div1">
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-gmail-32.png" alt="Gmail">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-github-30.png" alt="GitHub">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-linkedin-30.png" alt="LinkedIn">
                </div>
              </div>
            </div>
            <div class="FounderRedSocial-Box1">
              <div>
                <h3>Rosamaria Rodriguez</h3>
              </div>
              <div class="FRS-div1">
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-gmail-32.png" alt="Gmail">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-github-30.png" alt="GitHub">
                </div>
                <div class="RedSocialContainerImg">
                  <img src="/src/img/RedesSociales/icons8-linkedin-30.png" alt="LinkedIn">
                </div>
              </div>
            </div>
          </div>

          </div>
      </section>


    <!-- SIGN OUT PAGE -->
    <section id="SignOut" class="Box">

    </section>
  </main>

  <script>

    /************ FUCTION OPEN PAGES *************/
    function openPage(pageName,elmnt,color) {
      var i, Box, BoxNavs;
      Box = document.getElementsByClassName("Box");
      for (i = 0; i < Box.length; i++) {
        Box[i].style.display = "none";
      }
      BoxNavs = document.getElementsByClassName("BoxNavs");
      for (i = 0; i < BoxNavs.length; i++) {
        BoxNavs[i].style.backgroundColor = "";
      }
      document.getElementById(pageName).style.display = "block";
      elmnt.style.backgroundColor = color;
    }

    // Obtenga el elemento con id = "OpenDefault" y haga clic en él
    document.getElementById("OpenDefault").click();

    /************ FUCTION OPEN SECTIONS PUBLICATIONS *************/
    function openBoxPublication(BoxPublicationName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(BoxPublicationName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

  // Event for Nav-Menu responsive

    const navToggle = document.querySelector('.NavToggle');
    const navMenu = document.querySelector('.nav-menu');

    // BAR NAVEGATION

    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu_visible');

      // Event for area-label open and close menu

      if (navMenu.classList.contains('nav-menu_visible')) {
        navToggle.setAttribute('aria-label', 'Close menu');
      } else {
        navToggle.setAttribute('aria-label', 'Open menu')
      }
    });

  </script>`;
  // <a type="submit" href="#/home">Send</a>
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewHome;

  return divElemt;
};
