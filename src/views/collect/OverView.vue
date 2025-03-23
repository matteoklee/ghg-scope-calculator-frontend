<script>
import { Button } from '@/components/ui/button/index.js'
import { ArrowRight, Factory, Plug, Truck } from 'lucide-vue-next'

export default {
  name: 'OverView',
  components: { Button, ArrowRight, Factory, Plug, Truck },
  data() {
    return {
      scopeItems: [
        {
          title: 'Scope 1',
          icon: Factory,
          subTitle: 'Direkte Emissionen',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          path: '/collect/scopes'
        },
        {
          title: 'Scope 2',
          icon: Plug,
          subTitle: 'Indirekte Emissionen aus Energiebezug',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          path: '/collect/scopes'
        },
        {
          title: 'Scope 3',
          icon: Truck,
          subTitle: 'Sonstige indirekte Emissionen',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          path: '/collect/scopes'
        }
      ]
    }
  }
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
    <div class="mt-8">
      <div class="grid xl:grid-cols-3 grid-cols-1 xl:gap-12 gap-4">

        <div v-for="(item, index) in scopeItems" :key="index" class="border rounded-md p-6 shadow">
          <div class="inline-flex items-center">
            <component :is="item.icon" class="mr-2 h-5 w-5" />
            <span class="text-2xl font-semibold">{{ item.title }}</span>
          </div>
          <div class="mt-2">
            <p class="text-sm text-gray-700 text-justify">
             {{ item.subTitle }}
            </p>
          </div>
          <div class="mt-4">
            <p class="text-sm text-gray-700 text-justify">
              {{ item.description }}
            </p>
          </div>
          <div class="mt-4">
            <router-link :to="item.path">
              <Button class="inline-flex items-center w-full">
                <span>{{ item.title }} Daten eingeben</span>
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
