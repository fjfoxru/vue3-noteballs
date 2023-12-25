<template>
    <div class="notes">

        <AddEditNote
                v-model="newNote"
                placeholder="Написать новую заметку"
                ref="addEditNoteRef"
        >
            <template #buttons>
                <button
                        @click="addNote"
                        :disabled="!newNote"
                        class="button is-link has-background-success"
                >
                    Добавить заметку
                </button>
            </template>
        </AddEditNote>

        <Note
                v-for="note in storeNotes.notes"
                :key="note.id"
                :note="note"
        />

    </div>
</template>

<script setup>

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

</script>