var app = new Vue({
  el: '#app',
  data: {
    phase: 'begin',
    activeTitle: 'none',
    bgPattern: '',
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
