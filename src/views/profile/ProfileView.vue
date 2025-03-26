<script>
import { Button } from '@/components/ui/button/index.js';
import { ArrowLeft, MapPin, Globe, Phone, LogOut, Mail } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge/index.js'

export default {
  name: 'ProfileView',
  components: { Badge, ArrowLeft, Button, MapPin, Globe, Phone, LogOut, Mail },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="m-12">
      <div class="">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl mb-6">Benutzerprofil</h1>
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
        <div class="grid xl:grid-cols-4 grid-cols-1 gap-8">

          <div class="border p-8 rounded-lg">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2 h-24 w-24">
                <div class="rounded-full bg-muted w-full h-full flex justify-center items-center text-2xl">MK</div>
              </div>
              <div class="text-center mb-6">
                <h1 class="text-2xl font-bold">Max Mustermann</h1>
                <p class="text-gray-700">Nachhaltigkeitsberater</p>
                <p class="text-gray-700 mb-2">Hotel Beispiel GmbH</p>
                <Badge>Hotel & Beherbergung</Badge>
              </div>

              <div class="space-y-1 mb-4 text-gray-700">
                <div class="inline-flex items-center">
                  <Mail class="mr-2 h-4 w-4"/>
                  <span>max.mustermann@example.de</span>
                </div>
                <div class="inline-flex items-center">
                  <Phone class="mr-2 h-4 w-4"/>
                  <span>+49 123 456789</span>
                </div>
                <div class="inline-flex items-center">
                  <MapPin class="mr-2 h-4 w-4"/>
                  <span>Beispielstraße 123, 10115 Berlin</span>
                </div>
                <div class="inline-flex items-center">
                  <Globe class="mr-2 h-4 w-4"/>
                  <span>www.hotel-beispiel.de</span>
                </div>
              </div>
              <div class="w-full">
                <Button class="w-full" variant="outline">
                  <LogOut class="w-4 h-4" />
                  <span>Abmelden</span>
                </Button>
              </div>

            </div>
          </div>
          <div class="col-span-3">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
