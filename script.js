var template = {
  creatorsName: '',
  contentLinks: [],
  SMPagesDiscovered: [],
  SMPagesToBeShared: [],
  language: ''
};

var generateTemplate = {
  getCreatorsName: function() {
    template.creatorsName = '';
    var creatorsNameTextInput = document.getElementById('CreatorsName');
    template.creatorsName = creatorsNameTextInput.value;
    creatorsNameTextInput.value = "";
  },
  getContentLinks: function() {
    template.contentLinks = [];
    var links = document.getElementById('ContentLinks');
    var inputElements = links.getElementsByTagName('input');
    
    Array.from(inputElements).forEach(function(link) {
      if (link.value !== "") {
        template.contentLinks.push(link.value);
        link.value = "";
      }
    });
  },
  getSMPagesDiscovered: function() {
    template.SMPagesDiscovered = [];
    var SMPagesDiscovered = document.getElementById('SMPagesDiscovered');
    var inputElements = SMPagesDiscovered.getElementsByTagName('input');
    
     Array.from(inputElements).forEach(function(page) {
      if (page.checked) {
        template.SMPagesDiscovered.push(page.value);
        page.checked = false;
      }
    });   
  },  
  getSMPagesToBeShared: function() {
    template.SMPagesToBeShared = [];
    var SMPagesToBeShared = document.getElementById('SMPagesToBeShared');
    var inputElements = SMPagesToBeShared.getElementsByTagName('input');
    
     Array.from(inputElements).forEach(function(page) {
      if (page.checked) {
        template.SMPagesToBeShared.push(page.value);
        page.checked = false;
      }
    });   
  },
  getLanguage: function() {
    template.language = '';
    var e = Array.from(document.getElementById('Language'));
    for (var i = 0;i < e.length;i++) {
      if (e[i].selected) {
        template.language = e[i].value;
        e[i].selected = false;
        e[0].selected = true;
        break;
      }
    };    
  },
  displayTemplate: function() {
    var templates = document.getElementById('templates');
    var tLst = Array.from(templates.getElementsByTagName('p'));
    
    for (var j = 0;j < tLst.length;j++) {
      if (tLst[j].style.display === 'block') {
        tLst[j].style.display = 'none';
        break;
      }
    };
    
    var templateInUse = document.getElementById(template.language);

    var SMPagesDiscovered = "";
    for (var k = 0;k < template.SMPagesDiscovered.length;k++) {
      SMPagesDiscovered += template.SMPagesDiscovered[k];
      if (template.SMPagesDiscovered.length == 2) {
        if (k == 0) {
          SMPagesDiscovered += " and ";
        }
      } else if (template.SMPagesDiscovered.length == 3) {
        if (k < 1) {
          SMPagesDiscovered += ", ";
        } else if (k == 1) {
          SMPagesDiscovered += ", and ";
        }
      }
    }
    
    var contentLinks = "";
    for (var m = 0;m < template.contentLinks.length;m++) {
      contentLinks += template.contentLinks[m];
      if (m != template.contentLinks.length-1) {
        contentLinks += " <br/> "
      }
    }
    
    var SMPagesToBeShared = "";
    for (var n = 0;n < template.SMPagesToBeShared.length;n++) {
      SMPagesToBeShared += template.SMPagesToBeShared[n];
      if (template.SMPagesToBeShared.length == 2) {
        if (n == 0) {
          SMPagesToBeShared += " and ";
        }
      } else if (template.SMPagesToBeShared.length == 3) {
        if (n < 1) {
          SMPagesToBeShared += ", ";
        } else if (n == 1) {
          SMPagesToBeShared += ", and ";
        }
      }
    }    
    // Add all the input elements into template (span objects)
    var allSpans = templateInUse.getElementsByTagName('span');
    for (var l = 0;l < allSpans.length;l++) {
      if (allSpans[l].getAttribute('name') === 'name') {
        allSpans[l].innerHTML = template.creatorsName;
      } else if (allSpans[l].getAttribute('name') === 'SMPagesDiscovered') {
        allSpans[l].innerHTML = SMPagesDiscovered;
      } else if (allSpans[l].getAttribute('name') === 'contentLinks') {
        allSpans[l].innerHTML = contentLinks;
      } else if (allSpans[l].getAttribute('name') === 'SMPagesToBeShared') {
        allSpans[l].innerHTML = SMPagesToBeShared;
      }
    };
    
    templateInUse.style.display = 'block';
  },
  generateButton: function() {
      this.getCreatorsName();
      this.getSMPagesDiscovered();
      this.getContentLinks();
      this.getSMPagesToBeShared();
      this.getLanguage();
      this.displayTemplate();
  }
};
