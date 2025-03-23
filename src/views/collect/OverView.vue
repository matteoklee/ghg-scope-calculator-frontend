<script>
import { Button } from '@/components/ui/button/index.js'
import { ArrowRight, Factory } from 'lucide-vue-next'

export default {
  name: 'OverView',
  components: { Button, ArrowRight, Factory }
}
</script>

<template>
  <div class="m-12">
    <div class="">
      <h1 class="text-4xl mb-6">Übersicht zur Datenerfassung.</h1>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
    <div class="mt-4">
      <div class="grid grid-cols-3 gap-6">
        <div class="border rounded-md p-4">
          <div class="inline-flex items-center">
            <Factory class="mr-2 h-5 w-5" />
            <span class="text-2xl font-bold">Scope 1</span>
          </div>
          <div class="mt-2">
            <p class="text-sm text-gray-700 text-justify">
             Direkte Emissionen
            </p>
          </div>
          <div class="mt-4">
            <p class="text-sm text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div class="mt-2">
            <router-link to="/collect/scopes">
              <Button class="inline-flex items-center">
                <span>Scope 1 Daten eingeben</span>
                <ArrowRight class="h-5 w-5 ml-2" />
              </Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
