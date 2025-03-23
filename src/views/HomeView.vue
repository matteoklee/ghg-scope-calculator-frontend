<script>
import {
  ArrowRight,
  Calculator,
  ChartBar,
  List,
  SquarePen,
  Files,
  Factory,
  Plug,
  Truck,
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button/index.js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion/index.js';
import { Badge } from '@/components/ui/badge/index.js';

export default {
  name: 'HomeView',
  components: {
    Badge,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
    Accordion,
    ArrowRight,
    Button,
    Calculator,
    Files,
    Factory,
    Plug,
    Truck,
  },
  data() {
    return {
      homeItems: [
        {
          label: 'Datenerfassung',
          title: 'Datenerfassung',
          description: 'Erfassen Sie Ihre Verbrauchsdaten für alle drei Scopes des GHG-Protokolls.',
          icon: SquarePen,
          path: '/collect',
        },
        {
          label: 'Ergebnisse',
          title: 'Ergebnisse',
          description: 'Sehen Sie detaillierte Auswertungen und Visualisierungen Ihrer CO2-Bilanz.',
          icon: List,
          path: '/results',
        },
        {
          label: 'Dashboard',
          title: 'Dashboard',
          description: 'Übersicht über Ihre Emissionen, Trends und Einsparpotenziale.',
          icon: ChartBar,
          path: '/dashboard',
        },
        {
          label: 'Nachweise',
          title: 'Nachweise',
          description:
            'Verwalten und validieren Sie Ihre Nachweisdokumente für die CO2-Bilanzierung.',
          icon: Files,
          path: '/results/evidence',
        },
      ],
      accordionItems: [
        {
          value: 'item-1',
          title: 'Scope 1: Direkte Emissionen',
          icon: Factory,
          description:
            'Direkte Emissionen aus eigenen oder kontrollierten Quellen, wie z.B. Verbrennung von Kraftstoffen in Unternehmensfahrzeugen oder -anlagen.',
          categories: [
            { title: 'Stationäre Verbrennung', example: '(z.B. Heizkessel, Generatoren)' },
            { title: 'Mobile Verbrennung', example: '(z.B. Firmenfahrzeuge)' },
            { title: 'Flüchtige Emissionen', example: '(z.B. Kältemittel)' },
            { title: 'Prozessemissionen', example: '(z.B. chemische Prozesse)' },
          ],
        },
        {
          value: 'item-2',
          title: 'Scope 2: Indirekte Emissionen aus gekaufter Energie',
          icon: Plug,
          description:
            'Indirekte Emissionen aus der Erzeugung von gekauftem Strom, Dampf, Heizung und Kühlung, die vom Unternehmen verbraucht werden.',
          categories: [
            { title: 'Gekaufter Strom', example: '(z.B. Netzstrom, Ökostrom)' },
            { title: 'Gekaufte Wärme', example: '(z.B. Fernwärme)' },
            { title: 'Gekaufter Dampf', example: '(z.B. Industriedampf)' },
            { title: 'Gekaufte Kühlung', example: '(z.B. Fernkälte)' },
          ],
        },
        {
          value: 'item-3',
          title: 'Scope 3: Andere indirekte Emissionen',
          icon: Truck,
          description:
            'Alle indirekten Emissionen (nicht in Scope 2 enthalten), die in der Wertschöpfungskette des Unternehmens auftreten, einschließlich vor- und nachgelagerter Emissionen.',
          categories: [
            {
              title: 'Gekaufte Güter & Dienstleistungen',
              example: '(z.B. Rohstoffe, Büromaterial)',
            },
            { title: 'Geschäftsreisen', example: '(z.B. Flüge, Bahnreisen)' },
            { title: 'Pendeln der Mitarbeiter', example: '(z.B. Auto, ÖPNV)' },
            { title: 'Weitere Kategorien', example: '(insgesamt 15 Kategorien im GHG Protocol)' },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="mx-12 mt-6">
      <div
        class="p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg relative shadow-lg border"
      >
        <div class="w-2/3">
          <h1 class="text-4xl font-bold mb-6">CO2-Fußabdruck-Rechner</h1>
          <p class="text-lg text-justify mb-4">
            Erfassen, berechnen und analysieren Sie Ihre Treibhausgasemissionen nach dem Greenhouse
            Gas Protocol. Erstellen Sie detaillierte Berichte und identifizieren Sie
            Einsparpotenziale.
          </p>
          <Button
            >Neue Berechnung
            <ArrowRight class="w-4 h-4"></ArrowRight>
          </Button>
        </div>
        <div>
          <Calculator class="absolute right-10 bottom-5 text-gray-500 w-32 h-32"></Calculator>
        </div>
      </div>
      <div class="mt-8">
        <div class="grid xl:grid-cols-4 grid-cols-1 gap-8">
          <div
            v-for="(item, index) in homeItems"
            :key="index"
            class="border rounded-lg p-6 shadow aspect-auto flex flex-col"
          >
            <div>
              <div class="inline-flex items-center">
                <component :is="item.icon" class="mr-2 h-5 w-5" />
                <span class="text-2xl font-semibold">{{ item.title }}</span>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-700 text-justify">
                  {{ item.subTitle }}
                </p>
              </div>
              <div class="mt-4 mb-2">
                <p class="text-sm text-gray-700 text-justify">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div class="mt-auto">
              <router-link :to="item.path">
                <Button class="inline-flex items-center w-full">
                  <span>{{ item.title }}</span>
                  <ArrowRight class="h-5 w-5" />
                </Button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="border shadow p-8 rounded-lg">
          <p class="text-2xl font-semibold mb-2">Das Greenhouse Gas Protocol</p>
          <p class="text-sm text-gray-500 text-justify mb-6">
            Der internationale Standard für die Treibhausgasbilanzierung.
          </p>
          <p class="text-lg text-justify">
            Das Greenhouse Gas Protocol (GHG Protocol) ist der weltweit am häufigsten verwendete
            Standard für die Bilanzierung von Treibhausgasemissionen. Es teilt Emissionen in drei
            Bereiche (Scopes) ein:
          </p>
          <div class="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem
                :value="item.value"
                v-for="(item, index) in accordionItems"
                :key="index"
              >
                <AccordionTrigger>
                  <div class="inline-flex items-center text-xl">
                    <component :is="item.icon" class="mr-2 h-4 w-4" />
                    <span>{{ item.title }}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div class="mx-6">
                    <p class="text-lg text-gray-700">{{ item.description }}</p>
                    <div class="flex flex-col my-2">
                      <div
                        v-for="(category, index) in item.categories"
                        :key="index"
                        class="flex flex-row mb-1"
                      >
                        <Badge class="px-2.5 py-1 mr-4" variant="outline">{{
                          category.title
                        }}</Badge>
                        <p class="text-sm text-gray-500">{{ category.example }}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
