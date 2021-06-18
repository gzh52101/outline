module.exports = Behavior({
    properties: {
      test: {
        type: String
      }
    },
    data: {
      index: 1
    },
    attached: function(){},
    methods: {
      goto: function(url){
          wx.navigateTo({
              url
          })
      }
    }
  })