<template>
    <div class="edit-note">
        <AddEditNote
                v-model="noteContent"
                bgColor="link"
                placeholder="Edit note"
                label="Редактировать заметку"
                ref="addEditNoteRef"
        >
            <template #buttons>
                <button
                        @click="$router.back()"
                        class="button is-link is-light mr-2"
                >
                    Отмена
                </button>
                <button
                        @click="handleSaveClicked"
                        class="button is-link is-success"
                        :disabled="!noteContent"
                >
                    Сохранить заметку
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}

</script>