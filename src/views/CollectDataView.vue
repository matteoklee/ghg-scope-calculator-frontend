<script>
import { Button } from '@/components/ui/button/index.js'

export default {
  name: 'CollectDataView',
  components: { Button }
}
</script>

<template>
  <div class="py-4">
    <div class="flex flex-col">
      <div class="flex justify-end">
        <Button variant="" size="lg" class="text-md bg-white text-primary border-primary border hover:text-white">
          Zurück
        </Button>
      </div>
      <h1>This is a collect data page</h1>
    </div>
  </div>
</template>

<style scoped>

</style>
