const autocomplete = new Vue({
  el: '#app',
  data: {
    abbreviations: country_data
  },
  methods: {
    onSearchTextChanged(newSearchText) {
      console.log('input changed to ' + newSearchText)
    }
  }
})
