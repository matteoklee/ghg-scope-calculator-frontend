<script>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/index.js';
import { Input } from '@/components/ui/input/index.js';
import { Label } from '@/components/ui/label/index.js';
import { Button } from '@/components/ui/button/index.js';
import { File, Upload, Check, FileCheck, X } from 'lucide-vue-next';
import { Separator } from '@/components/ui/separator/index.js';

export default {
  name: 'UploadFileDialog',
  components: {
    Separator,
    Button,
    DialogFooter,
    Label,
    Input,
    DialogDescription,
    DialogTitle,
    DialogHeader,
    DialogContent,
    DialogTrigger,
    Dialog,
    File,
    Upload,
    Check,
    FileCheck,
    X
  },
  data() {
    return {
      uploadedFile: null,
      fileInput: null,
      isDragging: false,
      fileTypes: [
        { label: 'XLS(X)' },
        { label: 'CSV' },
        { label: 'PDF' },
        { label: 'DOC(X)' },
        { label: 'JSON' },
      ],
    };
  },
  methods: {
    openFileDialog() {
      this.fileInput.click();
    },
    handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) this.uploadedFile = file;
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file) this.uploadedFile = file;
      this.isDragging = false;
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    deleteFile() {
      this.uploadedFile = null;
    }
  },
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="" size="lg">Upload</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Dokument hochladen</DialogTitle>
        <DialogDescription>
          Laden Sie einen Nachweis für Ihre Verbrauchsdaten hoch. Unterstützt werden PDF, Bilder und Office-Dokumente
        </DialogDescription>
      </DialogHeader>
      <div class="py-4">
        <!-- border-green-600 bg-green-50 scale-[1.01] shadow-md -->
        <div v-if="!uploadedFile"
          class="mb-6 w-full border-2 border-dashed rounded-lg p-6 text-center relative transition-all duration-100"
          :class="{
            'border-gray-300': !isDragging,
            'border-greensign-700 scale-[1.01] shadow-md': isDragging,
          }"
          @dragover.prevent="handleDragOver"
          @dragleave.prevent="handleDragLeave"
          @drop.prevent="handleDrop"
        >
          <div v-if="!uploadedFile">
            <div class="flex justify-center items-center my-6">
              <Upload class="w-12 h-12 text-gray-500"></Upload>
            </div>
            <p class="text-gray-500 mb-2 mt-8 font-medium">
              <!--
              {{
                isDragging
                  ? 'Datei hier ablegen ...'
                  : "Dateien hier ablegen oder klicken zum Auswählen"
              }}
              -->
              Dateien hier ablegen oder klicken zum Auswählen
            </p>
            <p class="text-gray-400 mb-8">PDF, Bilder oder Office-Dokumente (max. 5 MB)</p>
            <div class="flex justify-center items-center">
              <Label for="evidence" class="hidden">Select File</Label>
              <Input
                id="evidence"
                type="file"
                variant="outline"
                class="border-none bg-gray-200 w-1/2 hover:border-gray-900"
                @change="handleFileSelect"
              />
            </div>
          </div>
          <div v-else>
            <div class="flex justify-center items-center my-6">
              <FileCheck class="w-12 h-12 text-green-600"></FileCheck>
            </div>
            <p class="text-xl mb-2 mt-8 font-semibold">Upload successful!</p>
            <p class="text-gray-700 mb-2">Your file has been uploaded.</p>
            <p class="text-gray-700 mb-8">
              {{ uploadedFile.name }}, {{ (uploadedFile.size / 1000).toFixed(0) }} kB,
              {{ uploadedFile.type }}
            </p>
            <div>
              <Label for="evidence" class="hidden">Select File</Label>
              <Input
                id="evidence"
                type="file"
                class="hover:border-gray-900"
                @change="handleFileSelect"
              />
            </div>
          </div>
        </div>

        <div v-else class="border rounded-lg p-4 mb-6">
          <div class="flex justify-between items-center">
            <div class="inline-flex items-center">
              <FileCheck class="w-10 h-10 text-green-600 mr-4"></FileCheck>
              <div class="flex flex-col justify-center items-start">
                <div>
                  <p class="font-medium">{{ uploadedFile.name }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">{{ (uploadedFile.size / 1000).toFixed(0) }} kB • {{ uploadedFile.type }}</p>
                </div>
              </div>
            </div>
            <div>
              <Button @click="deleteFile" variant="ghost" size="icon" class="">
                <X class="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Label>Beschreibung (optional)</Label>
          <Input type="text" placeholder="z.B. Stromrechnung 2022 oder Gasverbrauchsnachweis" />
        </div>

        <!--
        <div v-if="uploadedFile" class="font-medium text-center">
          File uploaded successfully <span class="text-green-600">{{ uploadedFile.name }}</span>
        </div>
        -->

        <!--
        <div class="mx-2 mt-4">
          <p class="font-medium mb-2 text-center">Erlaubte Filetypes</p>
          <ul class="flex flex-wrap items-center justify-center">
            <li
              v-for="type in fileTypes"
              :key="type.label"
              :label="type.label"
              class="flex items-center"
            >
              <Check class="w-5 h-5 text-green-500 mr-2" />
              <span class="mr-4">{{ type.label }}</span>
            </li>
          </ul>
        </div>
        -->
      </div>
      <DialogFooter>
        <Button type="submit">Speichern</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
