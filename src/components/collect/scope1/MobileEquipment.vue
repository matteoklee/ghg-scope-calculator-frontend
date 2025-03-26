<script>
import { Button } from '@/components/ui/button/index.js';
import { ArrowLeft, Info, CircleHelp, Upload, Flame, Lightbulb } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert/index.js';
import { Input } from '@/components/ui/input/index.js';
import { Separator } from '@/components/ui/separator/index.js';

export default {
  name: 'MobileEquipment',
  components: {
    Separator,
    Input,
    AlertDescription,
    AlertTitle,
    Alert,
    ArrowLeft,
    Button,
    Info,
    CircleHelp,
    Upload,
    Flame,
    Lightbulb,
  },
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <div class="flex justify-between items-center">
        <div class="mb-6 inline-flex items-center">
          <Flame class="w-8 h-8 mr-2 text-orange-500" />
          <h1 class="text-4xl">Mobile Verbrennung</h1>
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
      <p class="text-lg text-gray-700 text-justify mb-4 max-w-screen-lg">
        Erfassen Sie hier alle Emissionen aus der Verbrennung von Kraftstoffen in
        unternehmenseigenen oder kontrollierten Fahrzeugen, wie Firmenwagen, LKWs, Gabelstapler oder
        andere mobile Maschinen.
      </p>
    </div>
    <div class="mt-10">
      <div class="mb-8">
        <Alert variant="">
          <Info class="w-4 h-4" />
          <AlertTitle>Eingabehilfe</AlertTitle>
          <AlertDescription>
            Erfassen Sie hier alle Brennstoffe, die in stationären Anlagen wie Heizungen, Öfen oder
            Generatoren verbrannt werden. Für jeden Brennstoff können Sie eine aktivitätsbasierte
            (tatsächlicher Verbrauch) oder ausgabenbasierte (Kosten) Berechnung wählen.
            Aktivitätsbasierte Berechnungen sind genauer, ausgabenbasierte Berechnungen sind
            einfacher, wenn Sie nur die Kosten kennen.
          </AlertDescription>
        </Alert>
      </div>

      <div class="border shadow rounded-lg border-l-4 border-l-orange-500 mb-8">
        <div class="p-8">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <p class="font-medium">Erdgas</p>
              <CircleHelp class="w-4 h-4 ml-2" />
            </div>
            <div class="flex items-center w-1/2">
              <Input id="input" type="text" placeholder="0.00" />
              <Label for="input" class="ml-2">m³</Label>
            </div>
            <div>
              <Button variant="outline">
                <Upload class="w-4 h-4" />
                Nachweis hochladen
              </Button>
            </div>
          </div>
        </div>
        <Separator class="my-8"></Separator>
        <div class="p-8">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <p class="font-medium">Heizöl</p>
              <CircleHelp class="w-4 h-4 ml-2" />
            </div>
            <div class="flex items-center w-1/2">
              <Input id="input" type="text" placeholder="0.00" />
              <Label for="input" class="ml-2">Liter</Label>
            </div>
            <div>
              <Button variant="outline">
                <Upload class="w-4 h-4" />
                Nachweis hochladen
              </Button>
            </div>
          </div>
        </div>
        <Separator class="my-8"></Separator>
        <div class="p-8">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <p class="font-medium">Kohle</p>
              <CircleHelp class="w-4 h-4 ml-2" />
            </div>
            <div class="flex items-center w-1/2">
              <Input id="input" type="text" placeholder="0.00" />
              <Label for="input" class="ml-2">kg</Label>
            </div>
            <div>
              <Button variant="outline">
                <Upload class="w-4 h-4" />
                Nachweis hochladen
              </Button>
            </div>
          </div>
        </div>
        <Separator class="mt-4"></Separator>
        <div class="bg-orange-100">
          <div class="px-8 py-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center">
                <Lightbulb class="w-4 h-4 mr-2 text-orange-500" />
                <p class="text-gray-700">
                  Tipp: Aktivitätsbasierte Berechnungen (m³, Liter) sind genauer als
                  ausgabenbasierte (€).
                </p>
              </div>
              <div>
                <Button variant="link">
                  <CircleHelp class="w-4 h-4" />
                  Hilfe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border rounded-lg border-dashed p-8 text-gray-700">
        <div class="inline-flex items-center">
          <CircleHelp class="w-4 h-4 mr-2" />
          <p class="font-semibold">Wo finde ich diese Daten?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
