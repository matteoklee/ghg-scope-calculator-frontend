<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs/index.js'
import { Label } from '@/components/ui/label/index.js'
import { Input } from '@/components/ui/input/index.js'
import { Separator } from '@/components/ui/separator/index.js'

export default {
  name: 'OrganisationalDataView',
  components: { Separator, Input, Label, TabsContent, TabsTrigger, TabsList, Tabs }
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <h1 class="text-4xl mb-6">Deine Organisation bzw. Unternehmen</h1>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Bitte geben Sie die grundlegenden Informationen zu Ihrem Unternehmen an.
        Diese Daten sind wichtig für die korrekte Berechnung und Darstellung Ihrer CO₂-Bilanz.
      </p>
    </div>
    <div class="mt-8">
      <Tabs default-value="general" class="">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="general">
            Allgemeine Informationen
          </TabsTrigger>
          <TabsTrigger value="organisation">
            Betriebliche Kennzahlen
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <div class="mt-6">
            <div class="border rounded-lg p-6">
              <div class="mb-6">
                <h1 class="text-xl font-bold mb-2">Unternehmensinformationen</h1>
                <p class="text-gray-500 text-sm">Geben Sie hier die grundlegenden Informationen zu Ihrem Unternehmen ein.</p>
              </div>

              <div class="grid grid-cols-1 gap-4 gap-y-6 xl:grid-cols-2 mb-4">
                <div class="flex flex-col space-y-2">
                  <Label>Unternehmensname</Label>
                  <Input type="text" placeholder="z.B. Hotel Seeblick GmbH"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Rechtsform</Label>
                  <Input type="text" placeholder="Sonstige"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Branche</Label>
                  <Input type="text" placeholder="z.B. Hotel Seeblick GmbH"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Unterbranche (optional)</Label>
                  <Input type="text" placeholder="z.B. Hotel Seeblick GmbH"></Input>
                </div>
                <div class="col-span-2 flex flex-col space-y-2">
                  <Label>Adresse (Hauptsitz)</Label>
                  <Input type="text" placeholder="Straße und Hausnummer"></Input>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 gap-y-6 xl:grid-cols-3 mb-4">
                <div class="flex flex-col space-y-2">
                  <Label>PLZ</Label>
                  <Input type="text" placeholder="z.B. 10115"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Ort</Label>
                  <Input type="text" placeholder="z.B. Berlin"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Land</Label>
                  <Input type="text" placeholder="Deutschland"></Input>
                </div>
              </div>

              <Separator class="mb-4"></Separator>

              <div class="mb-4">
                <h1 class="text-lg font-bold">Kontaktinformationen</h1>
              </div>

              <div class="grid grid-cols-1 gap-4 gap-y-6 xl:grid-cols-3">
                <div class="flex flex-col space-y-2">
                  <Label>Ansprechpartner</Label>
                  <Input type="text" placeholder="Vor- und Nachname"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>E-Mail</Label>
                  <Input type="email" placeholder="name@beispiel.de"></Input>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Telefon</Label>
                  <Input type="text" placeholder="+49 123 456789"></Input>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="organisation">
          <!-- TODO: Je nach Branche z.B. Hotels andere Betriebliche Kennzahlen abfragen! z.B. Hotelzimmer, Buchungen/Belegungen pro Jahr, Konferenzfläche etc. -->
          <div class="mt-6">
            <div class="border rounded-lg p-6">
              <div class="mb-6">
                <h1 class="text-xl font-bold mb-2">Betriebliche Kennzahlen</h1>
                <p class="text-gray-500 text-sm">Diese Daten werden speziell für die Berechnung einiger Scope 3 Kategorien verwendet.</p>
              </div>

              <div class="grid grid-cols-1 gap-4 gap-y-6 xl:grid-cols-3 mb-4">
                <div class="flex flex-col space-y-2">
                  <Label>Anzahl der Mitarbeiter</Label>
                  <Input type="text" placeholder="z.B. 10"></Input>
                  <p class="text-gray-500 text-sm">Vollzeitäquivalente</p>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Jahresumsatz (€)</Label>
                  <Input type="text" placeholder="z.B. 100000"></Input>
                  <p class="text-gray-500 text-sm">Letztes Geschäftsjahr</p>
                </div>
                <div class="flex flex-col space-y-2">
                  <Label>Betriebsfläche (m²)</Label>
                  <Input type="text" placeholder="z.B. 5000"></Input>
                  <p class="text-gray-500 text-sm">Gesamte Nutzfläche</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
