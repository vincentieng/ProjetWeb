new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['Name', 'Country','Logo'],
    gridData: [
      { Name: 'Glyndwr University', Country: 'Wales', Logo: 'http://santiagocuervo.com/wp-content/uploads/2011/07/glyndwr_logo.jpg', Link:'https://www.glyndwr.ac.uk/' },
      { Name: 'Tama University', Country: 'Tokyo', Logo: 'https://journalducoin.com/wp-content/uploads/2018/04/Tama-University-logo-1.jpg',Link:'https://www.tama.ac.jp/english/' },
      { Name: 'Polytechnique Montreal', Country: 'Canada', Logo: 'https://www.directioninformatique.com/wp-content/uploads/2013/05/Polytechnique_Montreal_logo_200_200.jpg', Link:'http://www.polymtl.ca/' },
      { Name: 'Heriot-Watt University', Country: 'Scotland', Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heriot-Watt_University_logo.svg/1200px-Heriot-Watt_University_logo.svg.png', Link:'https://www.hw.ac.uk/' }
    ],
    companyData:[
      { Name: 'CGI', Logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/CGI_logo.svg',
       Link:'https://www.cgi.fr/' , id:"CGI"},

      { Name: 'GROUPE DES SYSTEMES ET DES HOMMES', Logo: 'http://sinenomine.fr/wp-content/uploads/2013/03/sh.jpg',
       Link:'https://www.s-h.fr/',id:"GSM" },

      { Name: 'AIRBUS CYBERSECURITY', Logo: 'https://operationnels.com/wp-content/uploads/2015/01/airbus_logo.png',
      Link:'https://www.airbus.com', id:"Airbus" },

      { Name: 'BI Consulting', Logo: 'http://www.sailing-up.com/ressources/10241/93/bi-consulting-logo-225.png',
       Link:'https://www.bi-consulting.com ', id:"BI" },

      { Name: 'OXIANE', Logo: 'https://www.authec.fr/wp-content/uploads/2013/03/logo_oxiane1.png',
       Link:'https://www.oxiane.com/' ,id:"OXIANE"},
    ]

  }
})
