<script>
import { Button } from '@/components/ui/button/index.js';
import { ArrowLeft, MapPin, Globe, Phone, LogOut, Mail, Save } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge/index.js'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs/index.js'
import { Label } from '@/components/ui/label/index.js'
import { Input } from '@/components/ui/input/index.js'

export default {
  name: 'ProfileView',
  components: { Input, Label, TabsContent, TabsTrigger, TabsList, Tabs, Badge, ArrowLeft, Button, MapPin, Globe, Phone, LogOut, Mail, Save },
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
            <router-link to="/">
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

          <div class="">
            <div class="border p-8 rounded-lg shadow">
              <div class="flex flex-col justify-center items-center">
                <div class="mb-2 h-24 w-24">
                  <div class="rounded-full bg-muted w-full h-full flex justify-center items-center text-2xl">MK</div>
                </div>
                <div class="text-center mb-6">
                  <h1 class="text-2xl font-bold">Max Mustermann</h1>
                  <p class="text-gray-700">Nachhaltigkeitsbeauftragter</p>
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
          </div>

          <div class="col-span-3">
            <div class="w-full">
              <Tabs default-value="account" class="w-full" orientation="horizontal">
                <TabsList class="grid w-full grid-cols-1">
                  <TabsTrigger value="account">
                    Profil
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    Einstellungen
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account" class="mt-6">
                  <div class="w-full border rounded-lg shadow p-8 mb-4">
                    <div class="mb-4">
                      <h1 class="text-2xl font-semibold mb-1">Persönliche Informationen</h1>
                      <p class="text-gray-700">Aktualisieren Sie Ihre persönlichen Daten</p>
                    </div>
                    <div class="mb-6">
                      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div>
                          <Label for="name">Name</Label>
                          <Input id="name" type="text" placeholder="Max Mustermann" />
                        </div>
                        <div>
                          <Label for="email">E-Mail</Label>
                          <Input id="email" type="email" placeholder="max.mustermann@example.de" />
                        </div>
                        <div>
                          <Label for="position">Position</Label>
                          <Input id="position" type="text" placeholder="Nachhaltigkeitsbeauftragter" />
                        </div>
                        <div>
                          <Label for="number">Telefon</Label>
                          <Input id="number" type="text" placeholder="+49 123 456789" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button>
                        <Save class="w-4 h-4" />
                        Änderungen speichern
                      </Button>
                    </div>
                  </div>

                  <div class="w-full border rounded-lg shadow p-8">
                    <div class="mb-4">
                      <h1 class="text-2xl font-semibold mb-1">Unternehmensinformationen</h1>
                      <p class="text-gray-700">Aktualisieren Sie die Daten Ihres Unternehmens</p>
                    </div>
                    <div class="mb-6">
                      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div>
                          <Label for="name">Unternehmensname</Label>
                          <Input id="name" type="text" placeholder="Hotel Beispiel GmbH" />
                        </div>
                        <div>
                          <Label for="email">Branche</Label>
                          <Input id="email" type="text" placeholder="Hotel & Beherbergung" />
                        </div>
                        <div>
                          <Label for="position">Unternehmensgröße</Label>
                          <Input id="position" type="text" placeholder="Mittel (50-249 Mitarbeiter)" />
                        </div>
                        <div>
                          <Label for="number">Webseite</Label>
                          <Input id="number" type="text" placeholder="www.hotel-beispiel.de" />
                        </div>
                        <div>
                          <Label for="name">Straße und Hausnummer</Label>
                          <Input id="name" type="text" placeholder="Beispielstraße 123" />
                        </div>
                        <div>
                          <Label for="email">Stadt</Label>
                          <Input id="email" type="text" placeholder="Berlin" />
                        </div>
                        <div>
                          <Label for="position">Postleitzahl</Label>
                          <Input id="position" type="text" placeholder="10115" />
                        </div>
                        <div>
                          <Label for="number">Land</Label>
                          <Input id="number" type="text" placeholder="Deutschland" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button>
                        <Save class="w-4 h-4" />
                        Änderungen speichern
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
