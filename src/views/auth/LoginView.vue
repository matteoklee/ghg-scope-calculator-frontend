<script>
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card/index.js'
import { Input } from '@/components/ui/input/index.js'
import { Button } from '@/components/ui/button/index.js'
import { ArrowRight, Lock, User } from 'lucide-vue-next'
import { Label } from '@/components/ui/label/index.js'

export default {
  name: 'LoginView',
  components: { Label, Button, Input, CardContent, CardDescription, CardTitle, CardHeader, Card, ArrowRight, Lock, User }
}
</script>

<template>
 <div class="flex min-h-screen">

   <div class="hidden lg:block w-1/2 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')]">
     <div class="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
       <div class="text-center">
         <h2 class="text-4xl font-bold text-white mb-4">GreenSign CO2-Rechner</h2>
         <p class="text-xl text-white max-w-md">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
         </p>
       </div>
     </div>
   </div>

   <div class="w-full lg:w-1/2 flex items-center justify-center p-8"> <!-- bg-gradient-to-bl from-teal-50 to-emerald-100 -->
     <Card class="w-full max-w-md">
       <CardHeader class="space-y-1">
         <CardTitle class="text-3xl font-bold">Willkommen zurück!</CardTitle>
         <CardDescription>
           Melden Sie sich an, um auf den CO2-Rechner samt Dashboard zuzugreifen.
         </CardDescription>
       </CardHeader>
       <CardContent>
         <form onSubmit={handleLogin} class="space-y-4">
           <div class="space-y-2">
             <Label
               htmlFor="username"
               class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Benutzername
             </Label>
             <div class="relative">
               <User class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
               <Input
                 id="username"
                 type="text"
                 placeholder="max.mustermann"
                 class="pl-10"
                 value={username}
               />
               <!-- required -->
               <!--  onChange={(e) => setUsername(e.target.value)} -->
             </div>
           </div>
           <div class="space-y-2">
             <Label
               htmlFor="password"
               class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Passwort
             </Label>
             <div class="relative">
               <Lock class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
               <Input
                 id="password"
                 type="password"
                 placeholder="••••••••"
                 class="pl-10"
                 value={password}
               />
               <!-- required -->
               <!-- onChange={(e) => setPassword(e.target.value)} -->
             </div>
           </div>
           <router-link to="/" class="inline-flex items-center w-full">
             <Button class="inline-flex items-center w-full">
               <span>Anmelden</span>
               <ArrowRight class="h-4 w-4 ml-2" />
             </Button>
           </router-link>
           <!--
           <Button type="submit" class="w-full">
             Anmelden
             <ArrowRight class="ml-2 h-4 w-4" />
           </Button>
           -->
         </form>
         <div class="mt-4 text-center text-sm">
           <a href="#" class="text-blue-600 hover:underline">
             Passwort vergessen?
           </a>
         </div>
       </CardContent>
     </Card>
   </div>

 </div>
</template>

<style scoped>

</style>
