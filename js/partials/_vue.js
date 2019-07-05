var app = new Vue({
  el: '#app',
  data: {
    phase: 'begin',
    activeTitle: 'none',
    bgPattern: ''
  },

  methods: {
    setPattern(pattern) {
      let self = this;
      self.activeTitle = pattern.title;
      self.bgPattern = pattern.file;
      console.log(pattern.title);
    }

  },

  computed: {
    rockLeft() {
      return 'calc('+this.s.width+'% + '+this.r.left+'%)';
    },

  },

  mounted: function() {
    let self = this;
  }

});
