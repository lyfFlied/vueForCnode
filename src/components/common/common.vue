<template>
  <div id="common">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>


<script>
  import Headers from './Headers';
  import Footers from './Footers';

  export default {
    name: "common",
    components: {
      Headers,
      Footers
    }
  }
</script>
