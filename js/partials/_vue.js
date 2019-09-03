var app = new Vue({
  el: '#app',
  data: {
    phase: 'begin',
    activeTitle: 'none',
    bgPattern: '',
    settings: {
      maxSize: 120
    },
    formURL: null,
    cssCopied: false,
    bg: {
      pattern: null,
      title: null,
      size: 50,
      fixed: true,
      positionHorizontal: 50,
      positionVertical: 50,
      cover:false,
      localFile: true,
      borders: {
        width: 20,
        slice: 10
      },
      show: {
        body: true,
        inner: false,
        headline: true,
        button: false,
        borders: false
      }
    },
    currentPattern: null
  },

  methods: {
    setPattern(pattern) {
      let self = this;
      self.phase = 'browse patterns';
      self.currentPattern = pattern;
      self.activeTitle = pattern.title;
      
      self.bgPattern = "patterns/"+pattern.folder+"/"+pattern.file;
      console.log(pattern.title);

      self.bg.title = pattern.title;
      self.bg.pattern = "patterns/"+pattern.folder+"/"+pattern.file;
    },

    copyCSS() {
      var CodeBlock = document.querySelector('#CopyCode');  
      var range = document.createRange();  
      range.selectNode(CodeBlock);  
      window.getSelection().addRange(range);  
      try {  
        // Now that we've selected the anchor text, execute the copy command  
        var successful = document.execCommand('copy');  
        var msg = successful ? 'successful' : 'unsuccessful';  
        console.log('Copy email command was ' + msg);  
      } catch(err) {  
        alert('Oops, unable to copy');  
      }  
    },

    gForm(u, t) {
      let self = this;
      //self.phase = "show form";
      self.formURL = u;

      if (t == "blank") {
        window.open(self.formURL);
      }

    },

    formatDate(d) {
      const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
      const MonthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
      let e = d.split("-");
      return MonthAbbr[parseInt(e[1] - 1)] + ' ' + e[2] + ', ' + e[0];
    }

  },

  computed: {

    styleObject() {
      let self = this;
      let s = {};
      if (self.bgPattern) {
        s.backgroundImage = 'url('+self.bg.pattern+')';
      }
      if (self.bg.size == self.settings.maxSize) {
        s.backgroundSize = 'cover';
      } else if (self.bg.size) {
        s.backgroundSize = self.bg.size+'%';
      }
      
      if (self.bg.positionHorizontal == 50 && self.bg.positionVertical == 50) {
        s.backgroundPosition = 'center';
      }

      else {
        s.backgroundPosition = self.bg.positionHorizontal+'% '+ self.bg.positionVertical+'%';
        console.log(s);
      }

      if (self.bg.show.borders) {
        s.borderImageSource = 'url('+self.bg.pattern+')';
        s.borderWidth = self.bg.borders.width + 'px';
        s.borderImageSlice = self.bg.borders.slice + '%';
      }

      return s;
    },

    coolCSS() {
      let self = this;
      let pre = "";

      let patternURL = "";
      if (self.bg.localFile) {
        //patternURL = self.bg.pattern;
        let p = self.bg.pattern.split("/");
        patternURL = p[(p.length - 1)];
      } else {
        patternURL = '"' + siteURL + '/' + self.bg.pattern + '"';
      }

      // GENERIC COOL BG STYLE
      if (self.bg.show.body || self.bg.show.headline || self.bg.show.inner || self.bg.show.button) {

        pre += '.cool {\n';
        if (self.bg.pattern) {
          pre += '  background-image:url('+patternURL+');\n';
        }

        if (self.bg.size == self.settings.maxSize) {
          pre += '  background-size: cover;\n';
        } else if (self.bg.size) {
          pre += '  background-size: '+self.bg.size+'%;\n';
        }

        if (self.bg.positionHorizontal == 50 && self.bg.positionVertical == 50) {
          pre += '  background-position: center\n';
        }
        else {
          pre += '  background-position: '+self.bg.positionHorizontal+'% '+self.bg.positionVertical+'%\n';
        }

        pre += '}';
      }
      
      // HEADLINE SPECIFIC STYLES
      if (self.bg.show.headline) {
        pre += '\n\nh1.cool {\n';
        pre += '  background-clip: text;\n';
        pre += '  -webkit-text-fill-color: transparent;\n';
        pre += '}';
        
      }

      // BUTTON SPECIFIC STYLES
      if (self.bg.show.button) {
        pre += '\n\nbutton.cool {\n';
        pre += '  transition:background-size 0.5s ease;\n';
        pre += '}';
        pre += '\n\nbutton.cool:hover, button.cool:focus {\n';
        pre += '  background-size: '+(self.bg.size * 2)+'%;\n';
        pre += '}';
      }


      // BORDER STYLES
      if (self.bg.show.borders) {
        pre += '\n\n.cool-borders {\n';
        pre += '  border-image-source: url('+patternURL+');\n';
        pre += '  border-width: '+self.bg.borders.width+'px;\n';
        pre += '  border-image-slice: '+self.bg.borders.slice+'%;\n';
        pre += '  border-image-repeat: round;\n';
        pre += '}';
      }


      return pre;
    },



  },

  mounted: function() {
    let self = this;
  }

});
