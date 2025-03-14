<script>
import { Button } from '@/components/ui/button/index.js'

export default {
  name: 'CollectDataView',
  components: { Button }
}
</script>

<template>
  <div class="container">
    <div class="flex flex-col m-4">
      <div class="flex justify-end">
        <Button variant="outline" size="lg">
          Zurück
        </Button>
      </div>
      <h1>This is a collect data page</h1>
    </div>
  </div>
</template>

<style scoped>

</style>
