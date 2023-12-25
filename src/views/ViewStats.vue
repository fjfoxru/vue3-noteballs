<template>
    <div class="stats">
        <table class="table is-fullwidth">
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
    </div>
</template>

<script setup>

import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

</script>