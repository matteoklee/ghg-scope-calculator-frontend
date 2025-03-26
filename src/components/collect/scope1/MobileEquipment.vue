<script>
import { Button } from '@/components/ui/button/index.js'
import { ArrowLeft } from 'lucide-vue-next'

export default {
  name: 'MobileEquipment',
  components: { ArrowLeft, Button }
}
</script>

<template>
  <div class="m-12">
    <div class="">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl mb-6">Mobile Verbrennung</h1>
        </div>
        <div>
          <router-link to="/collect">
            <Button variant="">
              <ArrowLeft class="w-4 h-4"></ArrowLeft>
              <span>Zurück</span>
            </Button>
          </router-link>
        </div>
      </div>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Emissionen aus der Verbrennung von Kraftstoffen in unternehmenseigenen oder kontrollierten
        Fahrzeugen.
      </p>
    </div>
    <div class="mt-12">
      Lorem Ipsum
    </div>
  </div>
</template>

<style scoped>

</style>
