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
      size: 50,
      fixed: true,
      positionHorizontal: 50,
      positionVertical: 50,
      cover:false,
      show: {
        body: true,
        inner: false,
        headline: false,
        button: false
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
      return s;
    },

    coolCSS() {
      let self = this;
      let pre = '.cool {\n';
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

      return pre;
    },

    

    /*
    rockLeft() {
      return 'calc('+this.s.width+'% + '+this.r.left+'%)';
    },
    */

  },

  mounted: function() {
    let self = this;
  }

});
