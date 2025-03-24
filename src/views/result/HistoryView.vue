<script>
import { Download } from 'lucide-vue-next'
import { Button } from '@/components/ui/button/index.js'
import CalculationHistoryDataTable from '@/components/result/CalculationHistoryDataTable.vue'
export default {
  name: 'HistoryView',
  components: { CalculationHistoryDataTable, Button, Download }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="m-12">
      <div class="">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl mb-6">Berechnungsverlauf</h1>
          </div>
          <div>
            <Button variant="">
              <Download class="w-4 h-4"></Download>
              <span>Verlauf exportieren</span>
            </Button>
          </div>
        </div>
        <p class="text-lg text-gray-700 text-justify mb-4">
          Übersicht aller durchgeführten CO2-Berechnungen.
        </p>
      </div>
      <div class="mt-8">
        <CalculationHistoryDataTable></CalculationHistoryDataTable>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
