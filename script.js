var template = {
  creatorsNames: [],
  contentLinks: [],
  pages: [],
  SMPagesDiscovered: [],
  SMPagesToBeShared: [],
  language: ''
};

var handlers = {
  createCreatorsName_textArea: function() {
    var creatorsNamesUl = document.getElementById('CreatorsNames');
    var textInput = document.createElement("input");
    textInput.type = "text";
    creatorsNamesUl.appendChild(document.createElement("br"));
    creatorsNamesUl.appendChild(textInput);
  },
  createSMlinks_textArea: function() {
    var SMlinksUl = document.getElementById('ContentLinks');
    var input = document.createElement("input");
    input.type = "text";
    SMlinksUl.appendChild(document.createElement("br"));
    SMlinksUl.appendChild(input);
  }
};

var generateTemplate = {
  getCreatorsNames: function() {
    template.creatorsNames = [];
    var names = document.getElementById('CreatorsNames');
    var inputs = names.getElementsByTagName('input');
    var lineBreaks = names.querySelectorAll('br');
    
    Array.from(inputs).forEach(function(name) {
      if (name.value !== "") {
        template.creatorsNames.push(name.value);
      }
      name.remove();
    });
    Array.from(lineBreaks).forEach(function(br) {
      br.remove();
    });
    var textInput = document.createElement("input");
    textInput.type = "text";
    names.appendChild(textInput);
  },
  getContentLinks: function() {
    template.contentLinks = [];
    var links = document.getElementById('ContentLinks');
    var inputElements = links.getElementsByTagName('input');
    var lineBreaks = links.querySelectorAll('br');
    
    
    Array.from(inputElements).forEach(function(link) {
      if (link.value !== "") {
        template.contentLinks.push(link.value);
      }
      link.remove();
    });
    Array.from(lineBreaks).forEach(function(br) {
      br.remove();
    });
    var input = document.createElement("input");
    input.type = "text";
    links.appendChild(input);    
  },
  getPages: function() {
    template.pages = [];
    var pages = document.getElementById('pages');
    var inputPages = pages.getElementsByTagName('input');
    
     Array.from(inputPages).forEach(function(p) {
      if (p.checked) {
        template.pages.push(p.value);
        p.checked = false;
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

    var creatorsNames = "";
    for (var p = 0;p < template.creatorsNames.length;p++) {
      creatorsNames += template.creatorsNames[p];
      if (template.creatorsNames.length === 2) {
        if (p == 0) {
          if (template.language === 'engTemplate') {
            creatorsNames += " and ";
          } else if (template.language === 'jpnTemplate') {
            creatorsNames += "と";
          } else if (template.language === 'spaTemplate') {
            creatorsNames += " y ";
          } else if (template.language === 'chitemplate') {
            creatorsNames += "和";
          }          
        }
      } else if (template.creatorsNames.length > 2) {
        if (p < template.creatorsNames.length-2) {
          if (template.language === 'jpnTemplate') {
            creatorsNames += "、";
          } else if (template.language === 'chitemplate') {
            creatorsNames += ",";
          } else {
            creatorsNames += ", ";
          }
        } else if (p == template.creatorsNames.length-2) {
          if (template.language === 'engTemplate') {
            creatorsNames += ", and ";
          } else if (template.language === 'jpnTemplate') {
            creatorsNames += "、";
          } else if (template.language === 'spaTemplate') {
            creatorsNames += " y ";
          } else if (template.language === 'chitemplate') {
            creatorsNames += "和";
          }                    
        }
      }
    }
    
    var pages = "";
    if (template.pages.length === 1) {
        if (template.language === 'engTemplate') {
          pages += "page, ";
        } else if (template.language === 'jpnTemplate') {
          pages += "ページ";
        } else if (template.language === 'spaTemplate') {
          pages += "la red social ";
        }
    } else {
        if (template.language === 'engTemplate') {
          pages += "pages: ";
        } else if (template.language === 'jpnTemplate') {
          pages += "ページ";
        } else if (template.language === 'spaTemplate') {
          pages += "las redes sociales: ";
        }
    }

    for (var q = 0;q < template.pages.length;q++) {
      pages += template.pages[q];
      if (template.pages.length === 2) {
        if (q == 0) {
          if (template.language === 'engTemplate') {
            pages += " and ";
          } else if (template.language === 'jpnTemplate') {
            pages += "と";
          } else if (template.language === 'spaTemplate') {
            pages += " y ";
          } else if (template.language === 'chitemplate') {
            pages += "和";
          }          
        }
      } else if (template.pages.length > 2) {
        if (q < template.pages.length-2) {
          if (template.language === 'jpnTemplate') {
            pages += "、";
          } else if (template.language === 'chitemplate') {
            pages += ",";
          } else {
            pages += ", ";
          }
        } else if (q === template.pages.length-2) {
          if (template.language === 'engTemplate') {
            pages += ", and ";
          } else if (template.language === 'jpnTemplate') {
            pages += "、";
          } else if (template.language === 'spaTemplate') {
            pages += " e ";
          } else if (template.language === 'chitemplate') {
            pages += "和";
          }                    
        }
      }
    }
    
    var SMPagesDiscovered = "";
    for (var k = 0;k < template.SMPagesDiscovered.length;k++) {
      SMPagesDiscovered += template.SMPagesDiscovered[k];
      if (template.SMPagesDiscovered.length === 2) {
        if (k == 0) {
          if (template.language === 'engTemplate') {
            SMPagesDiscovered += " and ";
          } else if (template.language === 'jpnTemplate') {
            SMPagesDiscovered += "と";
          } else if (template.language === 'spaTemplate') {
            SMPagesDiscovered += " y ";
          } else if (template.language === 'chitemplate') {
            SMPagesDiscovered += "和";
          }
        }
      } else if (template.SMPagesDiscovered.length === 3) {
        if (k < 1) {
          if (template.language === 'jpnTemplate') {
            SMPagesDiscovered += "、";
          } else {
            SMPagesDiscovered += ", ";
          }         
        } else if (k == 1) {          
          if (template.language === 'engTemplate') {
            SMPagesDiscovered += ", and ";
          } else if (template.language === 'jpnTemplate') {
            SMPagesDiscovered += "、";
          } else if (template.language === 'spaTemplate') {
            SMPagesDiscovered += " e ";
          } else if (template.language === 'chitemplate') {
            SMPagesDiscovered += ", ";
          }
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
      if (template.SMPagesToBeShared.length === 2) {
        if (n == 0) {
          if (template.language === 'engTemplate') {
            SMPagesToBeShared += " and ";
          } else if (template.language === 'jpnTemplate') {
            SMPagesToBeShared += "と";
          } else if (template.language === 'spaTemplate') {
            SMPagesToBeShared += " y ";
          } else if (template.language === 'chitemplate') {
            SMPagesToBeShared += "和";
          }          
        }
      } else if (template.SMPagesToBeShared.length === 3) {
        if (n < 1) {
          if (template.language === 'jpnTemplate') {
            SMPagesToBeShared += "、";
          } else {
            SMPagesToBeShared += ", ";
          }         
        } else if (n == 1) {
          if (template.language === 'engTemplate') {
            SMPagesToBeShared += ", and ";
          } else if (template.language === 'jpnTemplate') {
            SMPagesToBeShared += "、";
          } else if (template.language === 'spaTemplate') {
            SMPagesToBeShared += " e ";
          } else if (template.language === 'chitemplate') {
            SMPagesToBeShared += "和";
          }           
        }
      }
    }    
    // Add all the input elements into template (span objects)
    var allSpans = templateInUse.getElementsByTagName('span');
    for (var l = 0;l < allSpans.length;l++) {
      if (allSpans[l].getAttribute('name') === 'name') {
        allSpans[l].innerHTML = creatorsNames;
      } else if (allSpans[l].getAttribute('name') === 'pages') {
        allSpans[l].innerHTML = pages;
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
      this.getCreatorsNames();
      this.getPages();
      this.getSMPagesDiscovered();
      this.getContentLinks();
      this.getSMPagesToBeShared();
      this.getLanguage();
      this.displayTemplate();
  },
  copy: function() {
    var copyText = document.getElementById(template.language);
    var textArea = document.createElement("textarea");
    textArea.value = copyText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
};
