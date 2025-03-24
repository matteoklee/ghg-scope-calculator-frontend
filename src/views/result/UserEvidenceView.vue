<script>
import { Download } from 'lucide-vue-next'
import { Button } from '@/components/ui/button/index.js'
export default {
  name: 'UserEvidenceView',
  components: { Button, Download }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="m-12">
      <div class="">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl mb-6">Nachweise und Validierung</h1>
          </div>
          <div>
            <Button variant="">
              <Download class="w-4 h-4"></Download>
              <span>Verlauf exportieren</span>
            </Button>
          </div>
        </div>
        <p class="text-lg text-gray-700 text-justify mb-4">
          Übersicht aller hochgeladenen Nachweise und dessen Status.
        </p>
      </div>
      <div class="mt-8">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
