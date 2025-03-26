<script>
import { ArrowLeft } from 'lucide-vue-next';
import { Button } from '@/components/ui/button/index.js';

export default {
  name: 'CertificationView',
  components: { Button, ArrowLeft },
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl mb-6">Zertifizierungen</h1>
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
    <div class="mt-8"></div>
  </div>
</template>

<style scoped></style>
