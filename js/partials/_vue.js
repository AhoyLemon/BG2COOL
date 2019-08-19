var app = new Vue({
  el: '#app',
  data: {
    phase: 'begin',
    activeTitle: 'none',
    bgPattern: '',
    bg: {
      size: 50,
      fixed: true,
      //position: 'center'
      positionHorizontal: 50,
      positionVertical: 10
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
      let s = {}
      if (self.bgPattern) {
        s.backgroundImage = 'url('+self.bgPattern+')';
      }
      if (self.bg.size) {
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
      let pre = '.bg {\n';
      if (self.bgPattern) {
        pre += '  background-image:url('+self.bgPattern+');\n';
      }
      if (self.bg.size) {
        pre += '  background-size: '+self.bg.size+'%;\n';
      }
      pre += '}';
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
