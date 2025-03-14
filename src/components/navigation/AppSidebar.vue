<script>
import { Folder, ChevronDown, ChevronRight, Users, Factory, Plug, Truck, SquarePen, ChartBar, Files, List, Home, ShieldCheck, Link, Calculator } from 'lucide-vue-next';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar/index.js';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/index.js';

import { useRoute } from 'vue-router'

export default {
  name: 'AppSidebar',
  components: {
    SidebarSeparator,
    CollapsibleContent,
    CollapsibleTrigger,
    Collapsible,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenu,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarGroup,
    SidebarContent,
    Sidebar,
    Folder,
    ChevronDown,
    ChevronRight,
    Users,
    Factory, Plug, Truck,
    SquarePen,
    ChartBar, Files, List, Home, ShieldCheck,
    Link, Calculator,
    SidebarMenuSubItem,
    SidebarMenuSub,
  },
  setup() {
    const route = useRoute();
    return {
      route
    }
  },
  data() {
    return {
      openStates: [true, true, false],
      homeItems: [
        { label: "Datenerfassung", title: "Datenerfassung", icon: SquarePen, path: "/" },
        { label: "Ergebnisse", title: "Ergebnisse", icon: List, path: "/about" },
        { label: "Dashboard", title: "Dashboard", icon: ChartBar, path: "/dashboard" },
      ],
      dashboardItems: [
        { label: "Statistiken", title: "Statistiken", icon: ChartBar, path: "/stats" },
        { label: "Nachweise", title: "Nachweise", icon: Files, path: "/files" },
        { label: "Zertifizierungen", title: "Zertifizierungen", icon: ShieldCheck, path: "/certs" },
      ],
      scopeItems: [
        {
          label: 'Organisational Data',
          title: 'Organisational Data',
          icon: Users
        },
        {
          label: 'Scope 1: Direkte Emissionen',
          title: 'Scope 1',
          icon: Factory,
          items: [
            'Stationäre Anlagen (z.B. Heizungsanlagen)',
            'Mobile Anlagen (z.B. Firmenfahrzeuge)',
            'Prozessemissionen',
            'Flüchtige Emissionen',
          ],
        },
        {
          label: 'Scope 2: Indirekte Emissionen aus Energiebezug',
          title: 'Scope 2',
          icon: Plug,
          items: ['Strom', 'Dampf', 'Heizung (Fernwärme)', 'Kühlung'],
        },
        {
          label: 'Scope 3: Sonstige indirekte Emissionen',
          title: 'Scope 3',
          icon: Truck,
          items: [
            'Eingekaufte Waren und Dienstleistungen',
            'Kapitalgüter',
            'Brennstoff- und energiebezogene Aktivitäten',
            'Vorgelagerter Transport und Distribution',
            'Abfall aus Betriebsabläufen',
            'Geschäftsreisen',
            'Pendeln der Mitarbeiter',
            'Vorgelagerte geleaste Anlagen',
            'Nachgelagerter Transport und Distribution',
            'Verarbeitung verkaufter Produkte',
            'Nutzung verkaufter Produkte',
            'Entsorgung verkaufter Produkte',
            'Nachgelagerte geleaste Anlagen',
            'Franchises',
            'Investitionen',
          ],
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.openStates[index] = !this.openStates[index];
    },
  },
  computed: {
    navItems() {
      if (this.route.path.startsWith("/collect")) {
        return this.scopeItems;
      } else if (this.route.path.startsWith("/dashboard")) {
        return this.dashboardItems;
      } else {
        return this.homeItems;
      }
    }
  }
}
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <div class="inline-flex items-center mt-2 mb-1 mx-2">
        <Calculator class="mr-2 h-6 w-6"  />
        <SidebarGroupLabel class="text-xl text-black font-semibold">
          CO2e Rechner
        </SidebarGroupLabel>
      </div>
      <SidebarSeparator class="" />
      <SidebarGroupLabel class="text-lg font-medium text-gray-700 uppercase">
        {{ route.meta?.label }}
      </SidebarGroupLabel>
      <SidebarGroup v-for="(scope, index) in navItems" :key="index">
        <SidebarGroupLabel class="px-3 py-2 text-sm font-medium text-gray-500">
          {{ scope.label }}
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <div v-if="!scope.items">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <router-link to="/" class="flex items-center bg-gray-100 hover:bg-gray-200">
                    <component class="mr-2 h-4 w-4 flex-shrink-0"  :is="scope.icon" />
                    <span class="truncate text-sm">{{scope.title}}</span>
                  </router-link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
            <div v-else>
              <Collapsible :open="openStates[index]" @update:open="toggleOpen(index)" class="my-2">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      class="w-full justify-start px-3 py-2 hover:bg-gray-100"
                    >
                      <ChevronDown v-if="openStates[index]" class="h-4 w-4 flex-shrink-0" />
                      <ChevronRight v-else class="h-4 w-4 flex-shrink-0" />
                      <div class="flex items-center">
                        <component class="mr-2 h-4 w-4 flex-shrink-0"  :is="scope.icon" />
                        <span class="truncate text-sm">{{ scope.title }}</span>
                      </div>

                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem v-for="(item, itemIndex) in scope.items" :key="itemIndex">
                        <router-link
                          :to="item.path"
                          class="block w-full px-2 py-2 my-1 bg-gray-100 hover:bg-gray-200 rounded-lg truncate text-sm"
                        >
                          {{ item }}
                        </router-link>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </div>
          </SidebarMenu>
        </SidebarGroupContent>
        <!-- <SidebarSeparator v-if="index < scopeItems.length - 1" class="my-2" /> -->
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<style scoped></style>
