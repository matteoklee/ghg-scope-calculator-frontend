<script>
import { Button } from '@/components/ui/button/index.js';
import { ArrowLeft, Download, File, FileText } from 'lucide-vue-next';

export default {
  name: 'ResultStatsView',
  components: { File, ArrowLeft, FileText, Button, Download },
  data() {
    return {
      resultItems: [
        {
          title: 'Gesamte Emissionen',
          subTitle: 'All scopes combined',
          emission: 176.26,
        },
        {
          title: 'Direkte Emissionen',
          subTitle: 'Scope 1',
          emission: 126.64,
          percentage: 71.8,
        },
        {
          title: 'Indirekte Emissionen',
          subTitle: 'Scope 2 + Scope 3',
          emission: 49.62,
          percentage: 28.2,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="m-12">
      <div class="">
        <div class="flex justify-between items-center mb-6">
          <div class="inline-flex items-center">
            <router-link to="/">
              <Button variant="outline" class="mr-2" size="icon">
                <ArrowLeft class="w-4 h-4"></ArrowLeft>
              </Button>
            </router-link>
            <h1 class="text-4xl">CO2-Fußabdruck Ergebnisse</h1>
          </div>

          <div>
            <Button variant="outline">
              <Download class="w-4 h-4"></Download>
              <span>Exportieren</span>
            </Button>
          </div>
        </div>
        <p class="text-lg text-gray-700 text-justify mb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      <div class="mt-8">
        <div class="grid xl:grid-cols-3 grid-cols-1 gap-8">
          <div
            v-for="(item, index) in resultItems"
            :key="index"
            class="border shadow rounded-lg p-6"
          >
            <p class="text-2xl font-bold mb-2">{{ item.title }}</p>
            <p class="text-gray-700 mb-2">{{ item.subTitle }}</p>
            <p class="text-xl text-gray-500 mb-2">
              <span class="text-4xl font-bold text-black mr-2">{{ item.emission }}</span
              >tCO2e
            </p>
            <p v-if="item.percentage" class="text-gray-500">{{ item.percentage }} % of total</p>
          </div>
        </div>
      </div>
      <div class="my-4">
        <div class="border rounded-lg p-8">
          <div class="flex flex-col justify-center items-center space-y-4">
            <FileText class="w-12 h-12 text-gray-500"></FileText>
            <p class="text-lg font-medium">Keine Emissionsdaten vorhanden</p>
            <p class="text-gray-500">Bitte erfassen Sie zuerst Ihre Emissionsdaten in den entsprechenden Formularen.</p>
            <router-link to="/collect">
              <Button>Zur Datenerfassung</Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
