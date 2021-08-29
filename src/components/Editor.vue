<template>
  <div>
        <VueTrix inputId="textarea2" :inputName="inputName" v-model="content2"/>
        {{content2}}
  </div>
</template>

<script>
import VueTrix from 'vue-trix'

export default {
  name: 'Editor',
  components: {
    VueTrix
  },
  props: {
    inputName: {
      type: String,
      required: false,
      default: 'content'
    }
  },
  data () {
    return {  
      content2: '<blockquote>description content</blockquote>',
    }
  },
  methods: {
  },
  watch: {
    content2 (value) {
      value = value === undefined ? '' : value
      if (this.$refs.trix.innerHTML !== value) {
        this.$refs.trix.editor.loadHTML(value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
