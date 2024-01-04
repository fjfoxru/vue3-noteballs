<template>
    <div className="stats">
        <table className="table is-fullwidth">
            <thead>
            <tr>
                <th>Параметр</th>
                <th>Значение</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Количество заметок</td>
                <td>{{ storeNotes.totalNotesCount }}</td>
            </tr>
            <tr>
                <td>Количество символов (всех заметок)</td>
                <td>{{ storeNotes.totalCharactersCount }}</td>
            </tr>
            </tbody>
        </table>
        <input
          v-model="loveNoteballs"
          className="input"
          type="text"
          placeholder="Краткий текст"
          v-autofocus
        />
    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {vAutofocus} from '@/directives/vAutofocus'
import {useWatchCharacters} from '@/use/useWatchCharacters'


const storeNotes = useStoreNotes()

const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs, 50)

</script>