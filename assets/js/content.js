$(document).ready(function() {
  var path = window.location.pathname; // misal: "/products/product_rfid.html"
  var parts = path.split("/");          // hasil: ["", "products", "product_rfid.html"]
  var folder = parts[1];                // ambil index 1 = "products"
  var filename = path.substring(path.lastIndexOf('/') + 1); // ambil setelah last "/"
  console.log(path); // hasil: product_rfid.html

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  getHeader(filename);
  getAbout();
  getTeams();
  getClients();
  getServices();
  getFeatures();
  getFooter();

  /**
  * Service Details Page
  */

  if (filename == 'service-details.html' && id != null) {
    var service = services.find(s => s.id == id);
    if (service) {
      $('#page-title').text(service.name);
      getServiceDetails(id);
    }
  }
});

var teams = [
    {id: 1, name: 'Walter White', position: 'Chief Executive Officer', image: 'team-1.jpg', sosmed: [{id:1, icon:'bi bi-twitter-x', link:'javascript:void(0)'}, {id:2, icon:'bi bi-facebook', link:'javascript:void(0)'}, {id:3, icon:'bi bi-instagram', link:'javascript:void(0)'}, {id:4, icon:'bi bi-linkedin', link:'javascript:void(0)'}]},
    {id: 2, name: 'Sarah Jhonson', position: 'Product Manager', image: 'team-2.jpg', sosmed: [{id:1, icon:'bi bi-twitter-x', link:'javascript:void(0)'}, {id:2, icon:'bi bi-facebook', link:'javascript:void(0)'}, {id:3, icon:'bi bi-instagram', link:'javascript:void(0)'}, {id:4, icon:'bi bi-linkedin', link:'javascript:void(0)'}]},
    {id: 3, name: 'William Anderson', position: 'CTO', image: 'team-3.jpg', sosmed: [{id:1, icon:'bi bi-twitter-x', link:'javascript:void(0)'}, {id:2, icon:'bi bi-facebook', link:'javascript:void(0)'}, {id:3, icon:'bi bi-instagram', link:'javascript:void(0)'}, {id:4, icon:'bi bi-linkedin', link:'javascript:void(0)'}]},
    {id: 4, name: 'Amanda Jepson', position: 'Accountant', image: 'team-4.jpg', sosmed: [{id:1, icon:'bi bi-twitter-x', link:'javascript:void(0)'}, {id:2, icon:'bi bi-facebook', link:'javascript:void(0)'}, {id:3, icon:'bi bi-instagram', link:'javascript:void(0)'}, {id:4, icon:'bi bi-linkedin', link:'javascript:void(0)'}]}
];

var clients = [
    {id: 1, image: 'client-1.png'},
    {id: 2, image: 'client-2.png'},
    {id: 3, image: 'client-3.png'},
    {id: 4, image: 'client-4.png'},
    {id: 5, image: 'client-5.png'},
    {id: 6, image: 'client-6.png'},
    {id: 7, image: 'client-7.png'},
    {id: 8, image: 'client-8.png'}
];

var services = [
    {id: 1, name: 'RFID & Barcode Solutions', icon: 'bx bx-rfid bx-lg', colorClass: 'item-teal', link: 'service-details.html', shadow: 'M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174', img: 'scan.jpg'},
    {id: 2, name: 'IT Solutions', icon: 'bx bx-globe-alt bx-lg', colorClass: 'item-orange', link: 'service-details.html', shadow: 'M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426', img: ''},
    {id: 3, name: 'IoT Solutions', icon: 'bx bx-desktop bx-lg', colorClass: 'item-pink', link: 'service-details.html', shadow: 'M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781', img: ''},
    {id: 4, name: 'Monitoring Solutions', icon: 'bx bx-cctv bx-lg', colorClass: 'item-red', link: 'service-details.html', shadow: 'M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813', img: ''}
];

var features = [
    {id: 1, name: 'Lorem Ipsum', icon: 'bi bi-eye', color: '#ffbb2c'},
    {id: 2, name: 'Dolor Sitema', icon: 'bi bi-infinity', color: '#5578ff'},
    {id: 3, name: 'Sed perspiciatis', icon: 'bi bi-mortarboard', color: '#e80368'},
    {id: 4, name: 'Magni Dolores', icon: 'bi bi-nut', color: '#e361ff'},
    {id: 5, name: 'Nemo Enim', icon: 'bi bi-shuffle', color: '#47aeff'},
    {id: 6, name: 'Eiusmod Tempor', icon: 'bi bi-star', color: '#ffa76e'},
    {id: 7, name: 'Midela Teren', icon: 'bi bi-x-diamond', color: '#11dbcf'},
    {id: 8, name: 'Pira Neve', icon: 'bi bi-camera-video', color: '#4233ff'},
    {id: 9, name: 'Dirada Pack', icon: 'bi bi-command', color: '#b2904f'},
    {id: 10, name: 'Moton Ideal', icon: 'bi bi-dribbble', color: '#b20969'},
    {id: 11, name: 'Verdo Park', icon: 'bi bi-activity', color: '#ff5828'},
    {id: 11, name: 'Flavor Nivelanda', icon: 'bi bi-brightness-high', color: '#29cc61'}
];

function getHeader(filename) {
  var headerSection = '<div class="container position-relative d-flex align-items-center">' +
      '<a href="index.html" class="logo d-flex align-items-center me-auto">' +
        '<img src="assets/img/logo.png" alt="">' +
      '</a>' +
  
      '<nav id="navmenu" class="navmenu">' +
        '<ul>' +
          '<li><a href="index.html" class="' + (filename === 'index.html' ? 'active' : '') + '">Home</a></li>' +
          '<li><a href="about.html" class="' + (filename === 'about.html' ? 'active' : '') + '">About Us</a></li>' +
          '<li class="dropdown"><span>Products</span> <i class="bi bi-chevron-down toggle-dropdown"></i>' +
            '<ul>' +
              '<li><a href="javascript:void(0)">RFID</a></li>' +
              '<li><a href="javascript:void(0)">Barcode</a></li>' +
              '<li><a href="javascript:void(0)">IoT</a></li>' +
              '<li><a href="javascript:void(0)">CCTV</a></li>' +
              '<li><a href="javascript:void(0)">Access Control</a></li>' +
              '<li><a href="javascript:void(0)">IT Infrastructure</a></li>' +
              '<li><a href="javascript:void(0)">Software</a></li>' +
            '</ul>' +
          '</li>' +
          '<li><a href="services.html" class="' + (filename === 'services.html' || filename === 'service-details.html' ? 'active' : '') + '">Services</a></li>' +
          '<li><a href="portfolio.html" class="' + (filename === 'portfolio.html' ? 'active' : '') + '">Portfolio</a></li>' +
          '<li><a href="contact.html" class="' + (filename === 'contact.html' ? 'active' : '') + '">Contact</a></li>' +
        '</ul>' +
        '<i class="mobile-nav-toggle d-xl-none bi bi-list"></i>' +
      '</nav>' +
    '</div>';
  $('#header').html(headerSection);
}

function getAbout() {
    var aboutSection = '<div class="container">' +
        '<div class="row position-relative">' +
          '<div class="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src="assets/img/about.jpg"></div>' +
          '<div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">' +
            '<h2 class="inner-title">Diginesia Teknologi Indonesia</h2>' +
            '<div class="our-story">' +
              '<h4>Est 2021</h4>' +
              '<h3>About Us</h3>' +
              '<p>PT. Diginesia Teknologi Indonesia (DTI), founded in January 2021, is an IT solution provider focused on bringing innovative technology to businesses. We offer IT services and solutions that help companies meet their needs, improve efficiency, and grow.</p>' +
              '<p>Our goal is to support businesses by providing technology that makes their operations smoother and more successful.</p>' +
              '<p>DTI is able to provide the best-fit solutions to our Partners / Customers, and we ourselves must be able to adapt to the changes in IT world and the way we all look at the world nowadays.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    $('#about').html(aboutSection);
}

function getTeams() {
    let person = '';

    $.each(teams, function(index, team) {
        let socialMedia = '';
        $.each(team.sosmed, function(i, sosmed) {
            socialMedia += '<a href="' + sosmed.link + '"><i class="' + sosmed.icon + '"></i></a>';
        });

        person += '<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">' +
            '<div class="team-member">' +
              '<div class="member-img">' +
                '<img src="assets/img/team/' + team.image + '" class="img-fluid" alt="">' +
                '<div class="social">' +
                  socialMedia +
                '</div>' +
              '</div>' +
              '<div class="member-info">' +
                '<h4>' + team.name + '</h4>' +
                '<span>' + team.position + '</span>' +
              '</div>' +
            '</div>' +
          '</div>';
    });

    var teamSection = '<div class="container section-title" data-aos="fade-up">' +
        '<h2>Our Team</h2>' +
        '<p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>' +
      '</div>' +

      '<div class="container">' +
        '<div class="row gy-4">' +
            person +
        '</div>' +
      '</div>';

    $('#team').html(teamSection);
}

function getClients() {
    let clientLogos = '';
    $.each(clients, function(index, client) {
        clientLogos += '<div class="col-xl-3 col-md-4 client-logo">' +
            '<img src="assets/img/clients/' + client.image + '" class="img-fluid" alt="">' +
          '</div><!-- End Client Item -->';
    });

    var clientSection = '<div class="container section-title" data-aos="fade-up">' +
        '<h2>Clients</h2>' +
        '<p>Companies and partners who trust us to deliver technology solutions that drive growth and efficiency</p>' +
      '</div><!-- End Section Title -->' +

      '<div class="container" data-aos="fade-up" data-aos-delay="100">' +
        '<div class="row g-0 clients-wrap">' +
          clientLogos +
        '</div>' +
      '</div>';

    $('#clients').html(clientSection);
}

function getServices() {
    let serviceItems = '';
    $.each(services, function(index, service) {
        serviceItems += '<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' + ((index + 1) * 100) + '">' +
            '<div class="service-item ' + service.colorClass + ' position-relative">' +
              '<div class="icon">' +
                '<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">' +
                  '<path stroke="none" stroke-width="0" fill="#f5f5f5" d="' + service.shadow + '"></path>' +
                '</svg>' +
                '<i class="' + service.icon + '"></i>' +
              '</div>' +
              '<a href="' + service.link + '?id=' + service.id + '" class="stretched-link">' +
                '<h3>' + service.name + '</h3>' +
              '</a>' +
            '</div>' +
          '</div>';
    });

    $('#services .container .row').html(serviceItems);
}

function getFeatures() {
    let featureItems = '';
    $.each(features, function(index, feature) {
        featureItems += '<div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="' + ((index + 1) * 100) + '">' +
            '<div class="features-item">' +
                '<i class="' + feature.icon + '" style="color: ' + feature.color + ';"></i>' +
                '<h3>' + feature.name + '</h3>' +
            '</div>' +
          '</div>';
    });

    var featureSection = '<div class="container section-title" data-aos="fade-up">' +
        '<h2>Features</h2>' +
        '<p>Powerful features crafted to deliver seamless, efficient, and scalable technology solutions</p>' +
      '</div>' +
      '<div class="container">' +
        '<div class="row gy-4">' +
            featureItems +
        '</div>' +
      '</div>';

    $('#features').html(featureSection);
}

function getServiceDetails(id) {
  var sectionList = [];
  var cardList = [];
  var descList = [];

  if (id > 0) {
    var service = services.find(s => s.id == id);
    if (service) { 
      $("#service-detail-img").attr("src", "assets/img/services/" + (service.img !== '' ? service.img : 'services.jpg'));
    }
  }
  
  if (id == 1) {
    sectionList = [
      {id: 1, title: 'Overview', description: 'We provide integrated RFID and Barcode solutions to help companies manage assets, inventory, documents, vehicles, and even people movements accurately and efficiently. With the latest technology, tracking is no longer complicated — everything is real-time, automatic, and measurable.'},
      {id: 2, title: 'The Solutions We Offer', description: ''},
      {id: 3, title: 'Featured product', description: ''}
    ];

    cardList = [
      {id: 1, parent: 2, title: 'Asset & Inventory Tracking', description: 'Manage assets and stock comprehensively with RFID and barcode technology. Accurate real-time monitoring for warehouses, offices, and retail.'},
      {id: 2, parent: 2, title: 'Automated Process Tracking', description: 'Automate production, logistics and operational processes with RFID. Increase efficiency and reduce human error.'},
      {id: 3, parent: 2, title: 'People & Vehicle Tracking', description: 'Safely and efficiently track staff, visitor and vehicle movements in one integrated platform.'},
      {id: 4, parent: 3, title: 'Mobile & Handheld RFID', description: ''},
      {id: 5, parent: 3, title: 'Desktop & Fixed Reader', description: ''},
      {id: 6, parent: 3, title: 'RFID Antenna & Gate', description: ''},
      {id: 7, parent: 3, title: 'Label & Tag', description: ''},
      {id: 8, parent: 3, title: 'Barcode & RFID Printer', description: ''}
    ];

    descList = [
      {id: 1, parent: 4, description: 'Chainway C72 / C66 / C5'},
      {id: 2, parent: 4, description: 'Chainway R6 Sled Reader'},
      {id: 3, parent: 4, description: 'Chainway MC50 5G Mobile Computer'},
      {id: 4, parent: 5, description: 'Chainway R3, R1'},
      {id: 5, parent: 5, description: 'URA4 Reader'},
      {id: 6, parent: 5, description: 'Impinj R220 / R420 / R700'},
      {id: 7, parent: 6, description: 'Impinj Antenna'},
      {id: 8, parent: 6, description: 'UHF RFID Gate'},
      {id: 9, parent: 7, description: 'Label Tag / Hard Tag'},
      {id: 10, parent: 7, description: 'Shipping, Garment, Frozen, Hang Tag'},
      {id: 11, parent: 8, description: 'Chainway CP30 / CP20'},
      {id: 12, parent: 8, description: 'Thermal / Inkjet / Color Label'},
      {id: 13, parent: 8, description: 'Barcode Ribbon'}
    ];

    let sections = '';
    let description = '';
    $.each(sectionList, function(index, section) {
      sections += '<a href="#" class="' + (section.id == 1 ? 'active' : '') + '" data-id="' + section.id + '">' + section.title + '</a>';
      if (section.id == 1) {
        description = '<p>' + section.description + '</p>';
      }
    });

    sections = '<div class="services-list">' + sections + '</div>' +
    '<div class="description">' +
      description +
    '</div>';

    $('#detail-list').html(sections);

    $('.services-list a').on('click', function(e) {
        e.preventDefault(); // optional

        $('.services-list a').removeClass('active');
        $(this).addClass('active');

        var selectedId = $(this).data('id');
        var selectedSection = sectionList.find(s => s.id == selectedId);
        if (selectedSection) {
          var selectedCards = cardList.filter(c => c.parent == selectedId);
          if (selectedCards.length > 0) {
            description = '';
            var cardText = '';
            $.each(selectedCards, function(i, card) {
              var selectedDescLists = descList.filter(d => d.parent == card.id);
              if (selectedDescLists.length > 0) {
                var cardTextList = '';
                  $.each(selectedDescLists, function(j, desc) {
                    cardTextList += '<li>' + desc.description + '</li>';
                  });

                cardText = '<ul class="card-text">' +
                  cardTextList +
                '</ul>';
              } else {
                cardText = '<p class="card-text">' + card.description + '</p>';
              }
              description += '<div class="col-lg-12 col-md-6" data-aos="zoom-in-down" data-aos-delay="' + ((i + 1) * 100) + '">' +
                '<div class="card h-100 shadow mb-3">' +
                  '<div class="card-body p-4">' +
                    '<h5 class="card-title fw-bold">' + card.title + '</h5>' +
                      cardText +
                  '</div>' +
                '</div>' +
              '</div>';
            });
          }
          else {
            description = '<p>' + selectedSection.description + '</p>';
          }
          
          $('#detail-list .description').html(description);
        }
    });
  }
}

function getFooter() {
  var footerSection = '<div class="container footer-top">' +
      '<div class="row gy-4">' +
        '<div class="col-lg-6 col-md-6 footer-about">' +
          '<a href="index.html" class="logo d-flex align-items-center">' +
            '<span class="sitename">PT. Diginesia Teknologi Indonesia</span>' +
          '</a>' +
          '<div class="footer-contact pt-3">' +
            '<p>East Square Business Center</p>' +
            '<p>Jl. Pemuda No. 65, Pulogadung</p>' +
            '<p>Jakarta Timur 13220</p>' +
            '<p class="mt-3"><strong>Phone:</strong> <span><a href="https://wa.me/6282277778207">+62 822-777-78-207</a></span></p>' +
            '<p><strong>Email:</strong> <span><a href="mailto:sales@diginesiateknologi.co.id">sales@diginesiateknologi.co.id</a></span></p>' +
          '</div>' +
          '<div class="social-links d-flex mt-4">' +
            '<a href=""><i class="bi bi-twitter-x"></i></a>' +
            '<a href=""><i class="bi bi-facebook"></i></a>' +
            '<a href=""><i class="bi bi-instagram"></i></a>' +
            '<a href=""><i class="bi bi-linkedin"></i></a>' +
          '</div>' +
        '</div>' +

        '<div class="col-lg-3 col-md-3 footer-links">' +
          '<h4>Useful Links</h4>' +
          '<ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="about.html">About us</a></li>' +
            '<li><a href="#">Solutions</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="col-lg-3 col-md-3 footer-links">' +
          '<h4>Our Services</h4>' +
          '<ul>' +
            '<li><a href="#">RFID & Barcode Solutions</a></li>' +
            '<li><a href="#">IT Solutions</a></li>' +
            '<li><a href="#">IoT Solutions</a></li>' +
            '<li><a href="#">Monitoring Solutions</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="container copyright text-center mt-4">' +
      '<p>© <span>2021</span> <strong class="px-1 sitename">PT. Diginesia Teknologi Indonesia</strong></p>' +
    '</div>';
  $('#footer').html(footerSection);
}