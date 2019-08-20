var app = new Vue({
  el: '#app',
  data: {
    phase: 'begin',
    activeTitle: 'none',
    bgPattern: '',
    settings: {
      maxSize: 120
    },
    bg: {
      pattern: null,
      title: null,
      size: 50,
      fixed: true,
      positionHorizontal: 50,
      positionVertical: 50,
      cover:false,
      borders: {
        width: 5,
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
      self.currentPattern = pattern;
      self.activeTitle = pattern.title;
      
      self.bgPattern = "patterns/"+pattern.folder+"/"+pattern.file;
      console.log(pattern.title);

      self.bg.title = pattern.title;
      self.bg.pattern = "patterns/"+pattern.folder+"/"+pattern.file;

    }

  },

  computed: {

    styleObject() {
      let self = this;
      let s = {};
      if (self.bgPattern) {
        s.backgroundImage = 'url('+self.bgPattern+')';
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
        s.borderImageSource = 'url('+self.bgPattern+')';
        s.borderWidth = self.bg.borders.width + 'px';
        s.borderImageSlice = self.bg.borders.slice + '%';
      }

      return s;
    },

    coolCSS() {
      let self = this;
      let pre = "";

      // GENERIC COOL BG STYLE
      if (self.bg.show.body || self.bg.show.inner || self.bg.show.button) {

        pre += '.cool {\n';
        if (self.bgPattern) {
          pre += '  background-image:url('+self.bgPattern+');\n';
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
        pre += '  border-image-source: url('+self.bgPattern+');\n';
        pre += '  border-width: '+self.bg.borders.width+'px;\n';
        pre += '  border-image-slice: '+self.bg.borders.slice+'%;\n';
        pre += '  border-image-repeat: round;\n';
        pre += '}';
      }


      return pre;
    },

    titleFontSize() {
      let self = this;
      //return (100 / self.bg.title.length) + 'px';
      return {
        fontSize: (1100 / self.bg.title.length) + 'px'
      };
    },

  },

  mounted: function() {
    let self = this;
  }

});
