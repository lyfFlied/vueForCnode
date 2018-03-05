<template>
  <div id="common">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from '@/packages/ui/Headers'
import Footers from '@/packages/ui/Footers'

export default {
  name: 'common',
  components: {
    Headers,
    Footers
  }
}
</script>
