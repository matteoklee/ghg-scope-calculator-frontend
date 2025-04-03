<script>
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert/index.js';
import {
  ArrowLeft,
  Wind,
  Info,
  CircleHelp,
  Lightbulb,
  Upload,
  Plus,
  Minus,
  Trash,
  Paperclip,
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button/index.js';
import { Input } from '@/components/ui/input/index.js';
import { Separator } from '@/components/ui/separator/index.js';
import { Label } from '@/components/ui/label/index.js';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/index.js';

export default {
  name: 'FugitiveEmissions',
  components: {
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectTrigger,
    Select,
    Label,
    Separator,
    Upload,
    Lightbulb,
    Input,
    CircleHelp,
    Info,
    ArrowLeft,
    AlertTitle,
    AlertDescription,
    Button,
    Wind,
    Plus,
    Minus,
    Trash,
    Paperclip,
    Alert,
  },
  data() {
    return {
      data: [
        { id: 1, fuelType: 'Erdgas', quantity: '55', unit: '' },
        { id: 2, fuelType: 'Heizöl', quantity: '66', unit: '' },
      ],
      fuelTypes: ['Erdgas', 'Heizöl', 'Kohle', 'Holz', 'Diesel', 'Benzin'],
      units: ['m³', 'Liter', 'kg', 't', 'kWh', 'MWh'],
    };
  },
  methods: {
    addData() {
      this.data.push({ id: this.data.length + 1, fuelType: '', quantity: '', unit: '' });
    },
    removeData(index) {
      this.data.splice(index, 1);
    },
  },
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <div class="flex justify-between items-center mb-6">
        <div class="inline-flex items-center">
          <router-link to="/collect">
            <Button variant="outline" class="mr-2" size="icon">
              <ArrowLeft class="w-4 h-4"></ArrowLeft>
            </Button>
          </router-link>
          <h1 class="text-4xl">Flüchtige Emissionen</h1>
          <Wind class="w-8 h-8 ml-2 text-indigo-500" />
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
        Flüchtige Emissionen sind unbeabsichtigte Freisetzungen von Treibhausgasen, wie z.B. Leckagen
        aus Kälteanlagen (Kältemittel), Feuerlöschern oder Isoliermaterial in elektrischen Schaltanlagen.
        Kältemittel haben oft ein sehr hohes Treibhauspotenzial (GWP).
      </p>
    </div>
    <div class="mt-10">
      <div class="mb-4">
        <Alert variant="destructive">
          <Info class="w-4 h-4" />
          <AlertTitle>Wichtiger Hinweis zu Kältemitteln</AlertTitle>
          <AlertDescription>
            Kältemittel haben oft ein sehr hohes Treibhauspotenzial (GWP). Ein Kilogramm R-404A entspricht
            beispielsweise 3.922 kg CO₂. Selbst kleine Leckagen können daher erheblich zu Ihren Gesamtemissionen beitragen.
          </AlertDescription>
        </Alert>
      </div>
      <div class="mb-4">
        <div class="flex justify-end items-center">
          <Button @click="addData" variant="" class="">
            <Plus class="w-4 h-4" />
            <span>Energieträger hinzufügen</span>
          </Button>
        </div>
      </div>

      <div class="border shadow rounded-lg border-l-4 border-l-indigo-500 mb-8">
        <div v-for="(item, index) in data" :key="item.id || index">
          <div class="p-8">
            <div class="grid xl:grid-cols-3 gap-x-4 gap-y-2 grid-cols-1">
              <div class="flex items-center">
                <Label class="text-md">Brennstofftyp<span class="text-destructive">*</span></Label>
                <CircleHelp class="w-4 h-4 ml-2" />
              </div>
              <div>
                <Label class="text-md">
                  Verbrauchsmenge<span class="text-destructive">*</span>
                </Label>
              </div>
              <div>
                <Label class="text-md">Einheit<span class="text-destructive">*</span></Label>
              </div>
              <!-- -->
              <div class="inline-flex items-center">
                <Select v-model="item.fuelType">
                  <SelectTrigger class="p-2 border rounded">
                    <SelectValue placeholder="Brennstoff auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Brennstoffe</SelectLabel>
                      <SelectItem v-for="fuelType in fuelTypes" :key="fuelType" :value="fuelType">
                        {{ fuelType }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input v-model="item.quantity" id="input" type="text" placeholder="0.00" />
              </div>
              <div class="inline-flex items-center">
                <Select v-model="item.unit">
                  <SelectTrigger class="p-2 border rounded">
                    <SelectValue placeholder="Einheit auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Einheiten</SelectLabel>
                      <SelectItem v-for="unit in units" :key="unit" :value="unit">
                        {{ unit }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="xl:col-start-2 hidden xl:block">
                <p class="text-sm text-gray-500">Geben Sie die verbrauchte Menge an</p>
              </div>
              <div class="xl:col-start-3 hidden xl:block">
                <p class="text-sm text-gray-500">Wählen Sie die passende Einheit</p>
              </div>
            </div>

            <div class="mt-2">
              <Button variant="outline" class="text-gray-500">
                <Paperclip class="w-4 h-4" />
                Nachweis für Brennstoffverbrauch hinzufügen
              </Button>
            </div>

            <div v-if="data.length > 1" class="mt-2">
              <Button @click="removeData(index)" variant="ghost" size="" class="text-destructive">
                <Trash class="w-4 h-4" />
                <span>Eintrag löschen</span>
              </Button>
            </div>
          </div>
          <Separator class=""></Separator>
        </div>

        <!--
        <Separator class="mt-4"></Separator>
        -->
        <div class="bg-indigo-100">
          <div class="px-8 py-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center">
                <Lightbulb class="w-4 h-4 mr-2 text-indigo-500" />
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
    </div>
  </div>
</template>

<style scoped></style>
