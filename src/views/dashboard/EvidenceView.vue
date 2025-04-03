<script>
import { ArrowLeft, File, Factory, Eye, Download, ThumbsUp, ThumbsDown } from 'lucide-vue-next';
import { Button } from '@/components/ui/button/index.js';
import { Badge } from '@/components/ui/badge/index.js'
import { Separator } from '@/components/ui/separator/index.js'

export default {
  name: 'EvidenceView',
  components: { Separator, Badge, Button, ArrowLeft, File, Factory, Eye, Download, ThumbsUp, ThumbsDown },
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl mb-6">Nachweise & Validierung</h1>
        </div>
        <div>
          <router-link to="/dashboard">
            <Button variant="">
              <ArrowLeft class="w-4 h-4"></ArrowLeft>
              <span>Zurück</span>
            </Button>
          </router-link>
        </div>
      </div>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
    <div class="mt-8">
      <div class="border rounded-lg p-8">
        <div class="mb-6">
          <h1 class="text-xl font-medium mb-2">Nachweisdokumente</h1>
          <p class="text-gray-500 text-sm">Überprüfen und verifizieren Sie die hochgeladenen Nachweise.</p>
        </div>

        <div class="border rounded-lg p-4">
          <div class="flex justify-between items-center">
            <div class="inline-flex items-center mb-2">
              <File class="w-5 h-5 mr-2"></File>
              <p class="font-medium text-lg">Erdgas-Rechnung_2023.pdf</p>
            </div>
            <div>
              <Badge variant="destructive">Ausstehend</Badge>
            </div>
          </div>
          <div class="flex flex-col ml-4">
            <p class="text-gray-500 text-sm mb-2">1.2 MB • 14.12.2023</p>
            <div class="inline-flex items-center mb-2">
              <Factory class="w-4 h-4 mr-2"></Factory>
              <p class="text-md">Scope 1: Stationäre Verbrennung</p>
            </div>
            <p class="text-sm">Erdgas</p>
          </div>

          <Separator class="my-4"></Separator>

          <div class="flex justify-between items-center">
            <div class="inline-flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Eye class="w-4 h-4"></Eye>
              </Button>
              <Button variant="outline" size="icon">
                <Download class="w-4 h-4"></Download>
              </Button>
            </div>
            <div class="inline-flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <ThumbsUp class="w-4 h-4 text-green-500"></ThumbsUp>
              </Button>
              <Button variant="outline" size="icon">
                <ThumbsDown class="w-4 h-4 text-red-500"></ThumbsDown>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
