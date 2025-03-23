<script>
import { Button } from '@/components/ui/button/index.js';
import { ArrowLeft, CircleSmall, Info, Upload } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge/index.js';
import UploadFileDialog from '@/components/collect/scope1/UploadFileDialog.vue';

export default {
  name: 'StationaryEquipment',
  components: { UploadFileDialog, Badge, Button, ArrowLeft, CircleSmall, Info, Upload },
};
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
      <div class="flex flex-col">
        <div class="inline-flex items-center mb-6">
          <div class="mr-2 w-2 h-2 rounded-full bg-gray-300"></div>
          <p class="text-xl">Preferred calculation method: Spend-based method</p>
        </div>
        <div class="inline-flex items-center">
          <div class="mr-2 w-2 h-2 rounded-full bg-greensign-700"></div>
          <p class="text-2xl">Import and map your data</p>
        </div>

        <div class="grid xl:grid-cols-3 grid-cols-1 xl:gap-8 gap-y-4 mt-6">
          <div class="xl:ml-6 col-span-2">
            <div class="border shadow p-8">
              <div class="inline-flex items-center mb-2">
                <p class="font-semibold mr-4">Data mapping</p>
                <Badge variant="outline">Recommended</Badge>
              </div>
              <div class="mb-4">
                <p class="text-justify text-gray-700">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div class="flex justify-between items-center">
                <Button variant="outline">
                  <Info class="w-4 h-4" />
                  <span>Template Instructions</span>
                </Button>
                <UploadFileDialog></UploadFileDialog>
              </div>
            </div>
          </div>

          <div class="">
            <div class="border shadow p-8">
              <div class="inline-flex items-center mb-2">
                <p class="font-semibold mr-4">Template Upload</p>
                <Badge variant="outline">Recommended</Badge>
              </div>
              <div class="mb-4">
                <p class="text-justify text-gray-700">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
              </div>
              <div class="flex justify-end items-center">
                <Button size="lg" class="w-full" variant="">
                  <Upload class="w-4 h-4" />
                  <span>Template upload</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
