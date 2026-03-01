$(document).ready(function() {
  var path = window.location.pathname; // misal: "/products/product_rfid.html"
  var parts = path.split("/");          // hasil: ["", "products", "product_rfid.html"]
  var folder = parts[1];                // ambil index 1 = "products"
  var filename = path.substring(path.lastIndexOf('/') + 1); // ambil setelah last "/"
  console.log('path : ', path); // hasil: product_rfid.html
  console.log('folder : ', folder); // hasil: products
  console.log('filename : ', filename); // hasil: product_rfid.html

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  getHeader(path,folder, filename);
  if (path == '/about.html') {
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

    getAbout();
    getTeams(teams);
    getClients(clients);
  }
  
  if (folder == 'products') {
    var products = [
      { title: 'Chainway C72 UHF RFID Reader', description: 'Chainway C72 is an Android-based handheld RFID reader designed for industrial use. Powered by an octa-core processor and supporting 4G, Wi-Fi, and Bluetooth connectivity, the C72 offers high performance for a variety of applications. With powerful UHF RFID reading capabilities, barcode scanning, and high-quality GPS and camera features, the C72 is suitable for asset management, logistics, warehousing, and distribution.', image: '/assets/img/products/chainway-c72.jpg" class="card-img-top" alt="chainway-c72', type: 'RFID' },
      { title: 'Chainway C66 UHF RFID Reader', description: 'Chainway C66 is the latest handheld Android UHF RFID reader that combines modern design, high performance, and modular flexibility. Designed for professional applications in various sectors such as logistics, warehousing, retail, manufacturing, and field service, C66 offers a fast, accurate, and efficient scanning experience.', image: '/assets/img/products/chainway-c66.jpg" class="card-img-top" alt="chainway-c66', type: 'RFID' },
      { title: 'Chainway C5 UHF RFID Reader', description: 'Chainway C5 is a handheld Android UHF RFID reader designed for professional applications in logistics, retail, asset management and warehousing. With high RFID reading performance, ergonomic design and long battery life, C5 provides maximum efficiency and mobility in field work.', image: '/assets/img/products/chainway-c5.jpg" class="card-img-top" alt="chainway-c5', type: 'RFID' },
      { title: 'Chainway R6 UHF RFID Sled Reader', description: 'Chainway R6 is a UHF RFID sled reader designed to transform Android/iOS smartphones or tablets into high-performance RFID devices. With a flexible snap-on design and connectivity via Bluetooth or USB Type-C, the R6 offers an efficient mobile RFID solution for applications such as logistics, retail, asset management, and warehousing.', image: '/assets/img/products/chainway-r6-sled.jpg" class="card-img-top" alt="chainway-r6-sled', type: 'RFID' },
      { title: 'Chainway SR160 UHF RFID Scanner', description: 'Chainway SR160 is a high-performance handheld UHF RFID scanner that also supports 1D/2D barcode scanning. With its ergonomic design, medium-range RFID reading capability, and Bluetooth connectivity, the SR160 is the perfect solution for mobile applications in retail, logistics, warehousing, and field service.', image: '/assets/img/products/chainway-sr160.jpg" class="card-img-top" alt="chainway-sr160', type: 'RFID' },
      { title: 'Chainway MC50 5G Mobile Computer', description: 'Chainway MC50 is a next-generation 5G mobile computer that combines high performance, ultra-fast network speeds, and advanced industrial features. Designed for professional applications such as logistics, manufacturing, retail, field service, and asset management, MC50 offers the ultimate mobility solution with speed, resilience, and flexibility.', image: '/assets/img/products/chainway-mc50.jpg" class="card-img-top" alt="chainway-mc50', type: 'RFID' },
      { title: 'Chainway P80 RFID Tablet', description: 'Chainway P80 is a rugged Android tablet designed for industrial and high mobility applications. With an 8-inch display, high performance, and flexible data reading capabilities, the P80 is ideal for use in field, warehouse, and retail environments. The tablet supports a variety of optional modules such as barcode scanner, NFC, and RFID to meet complex operational needs.', image: '/assets/img/products/chainway-p80.jpg" class="card-img-top" alt="chainway-p80', type: 'RFID' },
      { title: 'Chainway CP20 Barcode Printer', description: 'Chainway CP20 is a high-performance desktop barcode printer designed for medium to high-volume label printing needs. With support for a variety of interfaces and print methods, the CP20 is ideal for use in retail, logistics, warehouse and healthcare environments.', image: '/assets/img/products/chainway-cp20.jpg" class="card-img-top" alt="chainway-cp20', type: 'RFID' },
      { title: 'Chainway CP30 RFID Printer', description: 'Chainway CP30 is an RFID printer that supports both thermal printing and thermal transfer. Equipped with a 3.5-inch LCD touch screen, multiple communication interfaces, and automatic identification of print heads with different resolutions, it can be connected via Bluetooth or USB. CP30 can print various RFID tags and barcodes accurately and quickly, meeting the printing needs of various industries.', image: '/assets/img/products/chainway-cp30.jpg" class="card-img-top" alt="chainway-cp30', type: 'RFID' },
      { title: 'Chainway URA4 Fixed RFID Reader', description: 'Chainway URA4 is a high-performance stationary UHF RFID reader with compact design. Equipped with the ability to read up to 4 external antennas simultaneously, URA4 is ideal for automation applications such as warehouse management, access control, and real-time inventory tracking.', image: '/assets/img/products/chainway-ura4.jpg" class="card-img-top" alt="chainway-ura4', type: 'RFID' },
      { title: 'Chainway R1 RFID Reader/Writer', description: 'Chainway R1 is a compact and easy-to-use desktop UHF RFID reader. Suitable for use at the cashier\'s desk, office, or customer service desk. With plug-and-play capability, the R1 is ideal for applications such as user identification, registration, and tracking of goods on a small to medium scale.', image: '/assets/img/products/chainway-r1.jpg" class="card-img-top" alt="chainway-r1', type: 'RFID' },
      { title: 'Chainway R3 Desktop RFID Reader', description: 'Chainway R3 is a high-performance desktop UHF RFID reader with an elegant design for tabletop use. Ideal for applications such as guest registration, retail checkout, small-scale inventory management, and document tracking. The R3 supports USB connection and offers easy plug-and-play operation across a variety of systems.', image: '/assets/img/products/chainway-r3.jpg" class="card-img-top" alt="chainway-r3', type: 'RFID' },
      { title: 'Impinj R700 Series RFID Readers', description: 'Impinj R700 is a next-generation reader with high performance and advanced features. Built to support large-scale IoT solutions and edge data processing, the R700 offers high speed and modern system integration.', image: '/assets/img/products/impinj-r700.webp" class="card-img-top" alt="impinj-r700', type: 'RFID' },
      { title: 'Impinj R420 Series RFID Readers', description: 'Impinj R420 is an industrial-grade UHF RFID reader with 4 antenna ports. This reader delivers high performance in high-volume, high-speed tag reading, ideal for environments that demand maximum efficiency.', image: '/assets/img/products/impinj-r420.jpg" class="card-img-top" alt="impinj-r420', type: 'RFID' },
      { title: 'Impinj R220 Series RFID Readers', description: 'The Impinj Speedway R220 is a dual-antenna UHF RFID reader designed for high performance with minimal configuration. It is suitable for small to medium-sized applications such as asset tracking, inventory management, and access control.', image: '/assets/img/products/impinj-r220.jpg" class="card-img-top" alt="impinj-r220', type: 'RFID' },
      { title: 'Impinj RFID Antenna', description: 'Impinj antennas are designed to deliver maximum performance in UHF RFID systems. Available in a variety of models and gains to support a variety of applications — from warehouse entrances to automated production lines.', image: '/assets/img/products/impinj-antenna.webp" class="card-img-top" alt="impinj-antenna', type: 'RFID' },
      { title: 'UHF RFID Gate', description: 'UHF RFID Gate is an automatic gate system based on UHF RFID technology designed to detect and identify RFID tags as objects or individuals pass through a specific area. Ideal for applications in warehouses, libraries, events, distribution centers, and high-security areas, RFID Gate offers fast, contactless detection on a large scale.', image: '/assets/img/products/uhf-rfid-gate.jpg" class="card-img-top" alt="uhf-rfid-gate', type: 'RFID' },
      { title: 'RFID Label Tag', description: 'RFID Label Tag is a sticker-shaped tag that is flexible, lightweight, and easy to apply to various types of surfaces. Ideal for tracking goods, asset identification, and logistics and retail systems, this label tag uses UHF technology for long-distance and high-speed reading.', image: '/assets/img/products/label-tag.webp" class="card-img-top" alt="label-tag', type: 'RFID' },
      { title: 'RFID Hard Tag', description: 'RFID Hard Tag is a hard-shell industrial tag designed for extreme use. Suitable for tracking applications in rugged environments such as manufacturing, mining, and outdoor warehouses. Hard tags offer resistance to shock, water, extreme temperatures, and chemicals.', image: '/assets/img/products/hard-tag.jpg" class="card-img-top" alt="hard-tag', type: 'RFID' },
      { title: 'Label Barcode', description: 'Barcode labels are printed identification media used to label products, packaging, shelves, assets, and documents with barcodes for easy tracking, management, and inventory. Barcode labels are available in a variety of sizes, materials, and adhesive types to meet the needs of a variety of industries.', image: '/assets/img/products/label-barcode.jpeg" class="card-img-top" alt="label-barcode', type: 'Barcode' },
      { title: 'Label Shipping', description: 'Shipping Label is an identification label used to provide shipping details on a package, such as the sender and recipient addresses, tracking number, barcode, and special instructions. This label is very important to ensure accuracy, speed, and security in the logistics and distribution process.', image: '/assets/img/products/label-shipping.webp" class="card-img-top" alt="label-shipping', type: 'Barcode' },
      { title: 'Label Block Colour', description: 'Colour Block Labels are solid colored labels used to mark, group, and identify products, shelves, or documents based on specific color categories. With their bold colors, these labels increase visibility and speed up the classification process in a variety of industrial and logistics operations.', image: '/assets/img/products/label-block-colour.jpg" class="card-img-top" alt="label-block-colour', type: 'Barcode' },
      { title: 'Label Inkjet', description: 'Inkjet Labels are specialty labels designed to be printed using inkjet printers, producing high-quality color prints with sharp details. Ideal for labeling needs that require attractive visuals, such as premium product labels, promotional labels, and retail packaging labels.', image: '/assets/img/products/label-inkjet.jpg" class="card-img-top" alt="label-inkjet', type: 'Barcode' },
      { title: 'Label Palet', description: 'Pallet Labels are large-sized identification labels used to mark and track pallets in logistics, warehousing, and distribution processes. These labels contain important information such as item code, quantity, shipping destination, and barcode/QR code for easy automatic scanning.', image: '/assets/img/products/label-palet.jpg" class="card-img-top" alt="label-palet', type: 'Barcode' },
      { title: 'Label Hang Tag', description: 'Hang Tag Label is a hanging label that is commonly used to provide additional product information, such as brand, price, size, material, or care instructions. Usually hung on retail products such as clothing, bags, shoes, and accessories, Hang Tags also serve to strengthen brand identity and attract consumer attention.', image: '/assets/img/products/label-hang-tag.jpg" class="card-img-top" alt="label-hang-tag', type: 'Barcode' },
      { title: 'Label Non-Release', description: 'Non-Release Labels are special labels designed without a release layer (linerless), meaning these labels roll directly without backing paper. This technology makes the printing process more efficient and environmentally friendly, while reducing production waste and speeding up labeling applications.', image: '/assets/img/products/label-non-release.jpg" class="card-img-top" alt="label-non-release', type: 'Barcode' },
      { title: 'Label E-Ticket', description: 'E-Ticket Label is a printed label that serves as a physical digital proof of access to services or events, such as transportation, concerts, events, and logistics. Usually containing a barcode or QR code that can be scanned for quick verification, E-Ticket Label supports efficient queuing systems and modern access management.', image: '/assets/img/products/label-eticket.jpg" class="card-img-top" alt="label-eticket', type: 'Barcode' },
      { title: 'Label Fabric/Garment', description: 'Fabric/Garment labels are fabric labels used to provide important information on textile products, such as care instructions, size, material, brand, and origin. These labels are designed to be durable, comfortable on the skin, and able to withstand repeated washing.', image: '/assets/img/products/label-fabric.jpg" class="card-img-top" alt="label-fabric', type: 'Barcode' },
      { title: 'Label Printing/Branding', description: 'Label Printing/Branding is a special label printing solution to support brand identity on products, packaging, and promotions. This label is designed not only as identification, but also as part of a branding strategy to strengthen the company\'s image in the eyes of consumers.', image: '/assets/img/products/label-printing.avif" class="card-img-top" alt="label-printing', type: 'Barcode' },
      { title: 'Label Chemical Drum', description: 'Chemical Drum Labels are industrial labels specifically designed to provide identification of chemicals in drums, barrels, or other large containers. These labels must meet international safety standards, withstand extreme environments, and include important information such as the chemical, hazard symbols, and handling instructions.', image: '/assets/img/products/label-chemical-drum.jpg" class="card-img-top" alt="label-chemical-drum', type: 'Barcode' },
      { title: 'Label Price Tag', description: 'Price Tag Label is a price label used to display price information, product codes, and sometimes discount or promotion details. This label is important to make it easier for customers to see prices quickly and speed up the checkout process at retail or stores.', image: '/assets/img/products/label-price-tag.jpg" class="card-img-top" alt="label-price-tag', type: 'Barcode' },
      { title: 'Label Frozen Food', description: 'Frozen Food Labels are special labels designed for frozen food products, with materials and adhesives that are resistant to extreme temperatures. This label ensures that product information remains legible and sticks firmly to the surface of the packaging even when stored in the freezer for a long period of time.', image: '/assets/img/products/label-frozen-food.webp" class="card-img-top" alt="label-frozen-food', type: 'Barcode' },
      { title: 'Label Customs', description: 'Customs Label is an official label used for customs declaration purposes in international shipping. This label contains important information such as description of goods, value, origin of goods, and HS (Harmonized System Code) code to ensure smooth export-import processes in accordance with government regulations in the destination country.', image: '/assets/img/products/label-customs.jpg" class="card-img-top" alt="label-customs', type: 'Barcode' },
      { title: 'Ribbon Barcode', description: 'Barcode Ribbon is a special ink ribbon used in the thermal transfer printing process to print barcodes, text, and graphics on labels. This ribbon is an important component to produce sharp, durable prints, and is suitable for various industrial needs, including logistics, manufacturing, retail, and healthcare.', image: '/assets/img/products/ribbon-barcode.jpg" class="card-img-top" alt="ribbon-barcode', type: 'Barcode' },
      { title: 'Bluetooth Low Energy (BLE)', description: 'Bluetooth Low Energy (BLE) is a wireless communication technology based on the Bluetooth standard designed for applications that require very low power consumption with stable and reliable connections. BLE is the main foundation in various modern IoT (Internet of Things) solutions, from asset tracking, industrial sensors, to wearable devices.', image: '/assets/img/products/ble.jpg" class="card-img-top" alt="ble', type: 'IoT' },
      { title: 'Electronic Shelf Label (ESL)', description: 'Electronic Shelf Label (ESL) is a digital electronic label used to automatically display prices and product information on shelves or displays in stores or retail. ESL replaces traditional price tags, providing greater flexibility, efficiency, and accuracy in managing prices and product information across stores or retail chains.', image: '/assets/img/products/esl.webp" class="card-img-top" alt="esl', type: 'IoT' },
      { title: 'Dahua WizMind 7 Series', description: 'Dahua WizMind 7 Series is a premium AI-based CCTV camera solution for advanced security applications. Equipped with the latest deep learning, the series offers high accuracy for facial analytics, vehicle tracking, and behavioral analysis.', image: '/assets/img/products/dahua-wizmind-7-series.png" class="card-img-top" alt="dahua-wizmind-7-series', type: 'CCTV' },
      { title: 'Dahua WizMind 5 Series', description: 'Dahua WizMind 5 Series delivers deep learning-based AI with high performance yet more economical, ideal for a wide range of industrial and commercial sectors.', image: '/assets/img/products/dahua-wizmind-5-series.png" class="card-img-top" alt="dahua-wizmind-5-series', type: 'CCTV' },
      { title: 'Dahua WizSense Series', description: 'Dahua WizSense Series is designed to combine intelligent AI technology with more affordable price. Focus on real-world needs such as human and vehicle detection.', image: '/assets/img/products/dahua-wizsense-series.png" class="card-img-top" alt="dahua-wizsense-series', type: 'CCTV' },
      { title: 'Dahua Lite Series', description: 'The Dahua Lite Series is an economical choice for standard surveillance needs without sacrificing basic quality.', image: '/assets/img/products/dahua-lite-series.png" class="card-img-top" alt="dahua-lite-series', type: 'CCTV' },
      { title: 'Dahua Wireless Series', description: 'The Dahua Wireless Series offers wireless surveillance cameras for installation and operational flexibility.', image: '/assets/img/products/dahua-wireless-series.png" class="card-img-top" alt="dahua-wireless-series', type: 'CCTV' },
      { title: 'Dahua Eureka Series', description: 'The Eureka Series is Dahua\'s entry-level thermal solution, designed for simple security applications and basic temperature monitoring at an affordable price.', image: '/assets/img/products/dahua-eureka-series.png" class="card-img-top" alt="dahua-eureka-series', type: 'CCTV' },
      { title: 'Dahua Anti-Corrosion Series', description: 'The Anti-Corrosion Series is specially designed for extreme environments such as chemical plants, ports and maritime areas, with corrosion-resistant body and special material protection.', image: '/assets/img/products/dahua-anti-corrosion-series.png" class="card-img-top" alt="dahua-anti-corrosion-series', type: 'CCTV' },
      { title: 'Dahua Pro Series', description: 'The Pro Series offers the perfect balance between performance and price for mid- to high-end applications that require more precise temperature detection and intelligent analytics.', image: '/assets/img/products/dahua-pro-series.png" class="card-img-top" alt="dahua-pro-series', type: 'CCTV' },
      { title: 'Dahua Ultra Series', description: 'Ultra Series is the premium series with the highest performance for critical monitoring needs and the most precise temperature detection.', image: '/assets/img/products/dahua-ultra-series.png" class="card-img-top" alt="dahua-ultra-series', type: 'CCTV' },
      { title: 'Dahua Thermography Series', description: 'Thermography Series focuses on body temperature measurement or industrial inspection, such as mass temperature screening or production quality control.', image: '/assets/img/products/dahua-thermography-series.png" class="card-img-top" alt="dahua-thermography-series', type: 'CCTV' },
      { title: 'EntryPass N-Mini 2', description: 'EntryPass N-Mini 2 is a smart network-based access control controller designed for single and multi-door management needs in modern security systems. With high capability, compact size, and flexible connection support, N-Mini 2 is suitable for various types of installations, from small to enterprise scale.', image: '/assets/img/products/entrypass-n-mini-2.jpg" class="card-img-top" alt="entrypass-n-mini-2', type: 'Access Control' },
      { title: 'EntryPass AY-J12C', description: 'EntryPass AY-J12C is an RFID proximity card reader designed for access control applications requiring high accuracy, fast performance, and easy installation. With its compact and weatherproof design, the AY-J12C is ideal for both indoor and outdoor use.', image: '/assets/img/products/entrypass-ay-j12c.jpg" class="card-img-top" alt="entrypass-ay-j12c', type: 'Access Control' },
      { title: 'EntryPass Mini', description: 'EntryPass Mini is a compact access control controller designed for simple access management needs with high security levels. With its small form factor and reliable capabilities, EntryPass Mini is perfect for small to medium-sized projects without sacrificing security features.', image: '/assets/img/products/entrypass-mini.jpg" class="card-img-top" alt="entrypass-mini', type: 'Access Control' },
      { title: 'EntryPass N-Mini', description: 'EntryPass N-Mini is a further developed version of Mini with full support for network operations (TCP/IP) and larger user capacity, designed for projects requiring scalability and centralized management.', image: '/assets/img/products/entrypass-n-mini.jpg" class="card-img-top" alt="entrypass-n-mini', type: 'Access Control' },
      { title: 'EntryPass QR Code Reader', description: 'EntryPass QR Code Reader is an innovative QR Code reader designed for modern access control systems, supporting fast, secure and flexible QR code-based authentication. This solution is ideal for guest, visitor and regular user access needs that prioritize convenience and efficiency.', image: '/assets/img/products/entrypass-qr-code-reader.jpg" class="card-img-top" alt="entrypass-qr-code-reader', type: 'Access Control' },
      { title: 'Suprema BioEntry W3', description: 'Suprema BioEntry W3 is a weatherproof RFID and fingerprint access control device (IP67 & IK09) with super fast biometric identification performance. Ideal for outdoor areas with high security levels.', image: '/assets/img/products/suprema-bioentry-w3.png" class="card-img-top" alt="suprema-bioentry-w3', type: 'Access Control' },
      { title: 'Suprema BioStation 2a', description: 'Suprema BioStation 2a is an AI-based access control terminal with outstanding fingerprint recognition speed and accuracy, designed for enterprise needs.', image: '/assets/img/products/suprema-biostation-2a.png" class="card-img-top" alt="suprema-biostation-2a', type: 'Access Control' },
      { title: 'Suprema BioStation 3', description: 'Suprema BioStation 3 is an all-in-one device that supports multi-modal access: facial recognition, QR Code, mobile access, and RFID in one small and powerful unit.', image: '/assets/img/products/suprema-biostation-3.png" class="card-img-top" alt="suprema-biostation-3', type: 'Access Control' },
      { title: 'Suprema BioStation L2', description: 'Suprema BioStation L2 is an economical fingerprint access control terminal with premium features for commercial to enterprise use.', image: '/assets/img/products/suprema-biostation-l2.png" class="card-img-top" alt="suprema-biostation-l2', type: 'Access Control' },
      { title: 'Suprema BioLite N2', description: 'Suprema BioLite N2 is an IP-based outdoor fingerprint terminal with RFID and PoE support for single door to multi-site access control applications.', image: '/assets/img/products/suprema-biolite-n2.png" class="card-img-top" alt="suprema-biolite-n2', type: 'Access Control' },
      { title: 'Suprema BioEntry W2', description: 'Suprema BioEntry W2 is a high-performance weatherproof fingerprint reader with an anti-vandal IK09 casing for maximum protection.', image: '/assets/img/products/suprema-bioentry-w2.png" class="card-img-top" alt="suprema-bioentry-w2', type: 'Access Control' },
      { title: 'Suprema BioEntry R2', description: 'Suprema BioEntry R2 is a small fingerprint and RFID reader for distributed access control systems with RS-485 communication to the main controller.', image: '/assets/img/products/suprema-bioentry-r2.png" class="card-img-top" alt="suprema-bioentry-r2', type: 'Access Control' },
      { title: 'Suprema X-Station 2', description: 'Suprema X-Station 2 is a flexible access control terminal that supports multiple authentication methods: QR Code, Mobile Access, RFID, PIN, all in one elegant touchscreen-based device.', image: '/assets/img/products/suprema-x-station-2.png" class="card-img-top" alt="suprema-x-station-2', type: 'Access Control' },
      { title: 'Access Point', description: 'Access Point is a network device that functions as a bridge between wireless devices (such as laptops, smartphones, tablets) and a wired network (LAN). Access Point provides a stable, secure Wi-Fi connection that can reach a wider area.', image: '/assets/img/products/access-point.png" class="card-img-top" alt="access-point', type: 'IT Infrastructure' },
      { title: 'Server', description: 'A server is a hardware device that provides services, applications, data storage, and network resource management for multiple client devices in a network.', image: '/assets/img/products/server.jpg" class="card-img-top" alt="server', type: 'IT Infrastructure' },
      { title: 'Switch', description: 'A switch is a network device that connects multiple devices in a LAN network and manages data delivery efficiently based on MAC addresses.', image: '/assets/img/products/switch.jpg" class="card-img-top" alt="switch', type: 'IT Infrastructure' },
    ];

    products = products.filter(p => p.type.replace(' ', '').toLocaleLowerCase() === filename.replace('.html', '').replace('-', '').toLocaleLowerCase());
    getProducts(products, filename);
  }

  if (path == '/solutions.html') {
    var solutions = [
        {id: 1, name: 'Asset/Inventory Tracking', icon: 'bx bx-laptop bx-lg', colorClass: 'item-cyan', link: 'solutions/asset-tracking.html', shadow: 'M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174', img: 'scan.jpg'},
        {id: 2, name: 'Vehicle Tracking', icon: 'bx bx-truck bx-lg', colorClass: 'item-red', link: 'solutions/vehicle-tracking.html', shadow: 'M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426', img: ''},
        {id: 3, name: 'Automated Process Tracking', icon: 'bx bx-microchip bx-lg', colorClass: 'item-teal', link: 'solutions/automated-process-tracking.html', shadow: 'M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781', img: ''},
        {id: 4, name: 'Document Tracking', icon: 'bx bx-file-search bx-lg', colorClass: 'item-indigo', link: 'solutions/document-tracking.html', shadow: 'M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813', img: ''},
        {id: 5, name: 'People Tracking', icon: 'bx bx-child bx-lg', colorClass: 'item-pink', link: 'solutions/people-tracking.html', shadow: 'M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572', img: ''}
    ];

    getSolutions(folder, solutions);
  }

  if (folder.includes('service') || path.includes('index.html')) {
    var services = [
        {id: 1, name: 'RFID & Barcode Solutions', icon: 'bx bx-rfid bx-lg', colorClass: 'item-teal', link: 'services/rfid-solutions.html', shadow: 'M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174', img: 'scan.jpg'},
        {id: 2, name: 'IT Solutions', icon: 'bx bx-globe-alt bx-lg', colorClass: 'item-orange', link: 'services/it-solutions.html', shadow: 'M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426', img: ''},
        {id: 3, name: 'IoT Solutions', icon: 'bx bx-desktop bx-lg', colorClass: 'item-pink', link: 'services/iot-solutions.html', shadow: 'M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781', img: ''},
        {id: 4, name: 'Monitoring Solutions', icon: 'bx bx-cctv bx-lg', colorClass: 'item-red', link: 'services/monitoring-solutions.html', shadow: 'M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813', img: ''}
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

    if (path == '/services.html' || path == '/index.html') {
      getServices(folder, services);
      getFeatures(features);
    }

    if (path == '/service-details.html' && id != null) {
      var service = services.find(s => s.id == id);
      if (service) {
        $('#page-title').text(service.name);
        getServiceDetails(id, service);
      }
    }
  }
  
  getFooter(folder);

  /**
  * Service Details Page
  */

});

function getHeader(path, folder, filename) {
  var headerSection = '<div class="container position-relative d-flex align-items-center">' +
      '<a href="index.html" class="logo d-flex align-items-center me-auto">' +
        '<img src="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/assets/img/logo.png' : 'assets/img/logo.png') + '" alt="">' +
      '</a>' +
  
      '<nav id="navmenu" class="navmenu">' +
        '<ul>' +
          '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/index.html' : 'index.html') + '" class="' + (path == '/index.html' ? 'active' : '') + '">Home</a></li>' +
          '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/about.html' : 'about.html') + '" class="' + (path == '/about.html' ? 'active' : '') + '">About Us</a></li>' +
          '<li class="dropdown ' + (folder == 'products' ? 'active' : '') + '"><span>Products</span> <i class="bi bi-chevron-down toggle-dropdown"></i>' +
            '<ul>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/rfid.html' : 'products/rfid.html') + '" class="' + (path == '/products/rfid.html' ? 'active' : '') + '">RFID</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/barcode.html' : 'products/barcode.html') + '" class="' + (path == '/products/barcode.html' ? 'active' : '') + '">Barcode</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/iot.html' : 'products/iot.html') + '" class="' + (path == '/products/iot.html' ? 'active' : '') + '">IoT</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/cctv.html' : 'products/cctv.html') + '" class="' + (path == '/products/cctv.html' ? 'active' : '') + '">CCTV</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/access-control.html' : 'products/access-control.html') + '" class="' + (path == '/products/access-control.html' ? 'active' : '') + '">Access Control</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/it-infrastructure.html' : 'products/it-infrastructure.html') + '" class="' + (path == '/products/it-infrastructure.html' ? 'active' : '') + '">IT Infrastructure</a></li>' +
              '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/products/software.html' : 'products/software.html') + '" class="' + (path == '/products/software.html' ? 'active' : '') + '">Software</a></li>' +
            '</ul>' +
          '</li>' +
          '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/solutions.html' : 'solutions.html') + '" class="' + (path == '/solutions.html' || folder == 'solutions' ? 'active' : '') + '">Solutions</a></li>' +
          '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services.html' : 'services.html') + '" class="' + (path == '/services.html' || folder == 'services' ? 'active' : '') + '">Services</a></li>' +
          '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/contact.html' : 'contact.html') + '" class="' + (path == '/contact.html' ? 'active' : '') + '">Contact</a></li>' +
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

function getTeams(teams) {
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

function getClients(clients) {
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

function getProducts(products, filename) {
    let html = '';
    $.each(products, function(index, product) {
      // console.log(product.title);
      html +=  '<div class="col-md-3">' +
        '<div id="product-'+ product.title.replace(/ /g, "") +'" class="card h-100 shadow" data-aos="zoom-in-down" data-aos-delay="200">' +
            '<img src="' + product.image + '">' +
            '<div class="card-body">' +
                '<h5 class="card-title">' + product.title + '</h5>' +
                '<p class="card-text">' + product.description + '</p>' +
            '</div>' +
        '</div>' +
      '</div>';
    });

    $('#'+ filename.replace('.html', '').toLowerCase() + ' .container .row').html(html);
}

function getSolutions(folder, solutions) {
    let solutionItems = '';
    $.each(solutions, function(index, solution) {
        solutionItems += '<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' + ((index + 1) * 100) + '">' +
            '<div class="solution-item ' + solution.colorClass + ' position-relative">' +
              '<div class="icon">' +
                '<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">' +
                  '<path stroke="none" stroke-width="0" fill="#f5f5f5" d="' + solution.shadow + '"></path>' +
                '</svg>' +
                '<i class="' + solution.icon + '"></i>' +
              '</div>' +
              '<a href="' + (folder == 'products'  || folder == 'solutions' || folder == 'services' ? '/' +solution.link : solution.link) + '" class="stretched-link">' +
                '<h3>' + solution.name + '</h3>' +
              '</a>' +
            '</div>' +
          '</div>';
    });

    $('#solutions .container .row').html(solutionItems);
}

function getServices(folder, services) {
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
              '<a href="' + (folder == 'products'  || folder == 'solutions' || folder == 'services' ? '/' +service.link : service.link) + '" class="stretched-link">' +
                '<h3>' + service.name + '</h3>' +
              '</a>' +
            '</div>' +
          '</div>';
    });

    $('#services .container .row').html(serviceItems);
}

function getFeatures(features) {
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

function getServiceDetails(id, services) {
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

function getFooter(folder) {
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
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/index.html' : 'index.html') + '">Home</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/about.html' : 'about.html') + '">About us</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/solutions.html' : 'solutions.html') + '">Solutions</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services.html' : 'services.html') + '">Services</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/contact.html' : 'contact.html') + '">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="col-lg-3 col-md-3 footer-links">' +
          '<h4>Our Services</h4>' +
          '<ul>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services/rfid-solutions.html' : 'services/rfid-solutions.html') + '">RFID & Barcode Solutions</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services/it-solutions.html' : 'services/it-solutions.html') + '">IT Solutions</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services/iot-solutions.html' : 'services/iot-solutions.html') + '">IoT Solutions</a></li>' +
            '<li><a href="' + (folder == 'products' || folder == 'solutions' || folder == 'services' ? '/services/monitoring-solutions.html' : 'services/monitoring-solutions.html') + '">Monitoring Solutions</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="container copyright text-center mt-4">' +
      '<p>© <span>2021</span> <strong class="px-1 sitename">PT. Diginesia Teknologi Indonesia</strong></p>' +
    '</div>';
  $('#footer').html(footerSection);
}