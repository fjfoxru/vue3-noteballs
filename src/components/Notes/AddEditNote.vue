<template>
    <div
            class="card p-4 mb-5"
            :class="`has-background-${ bgColor }`"
    >
        <label
                v-if="label"
                class="label has-text-white"
        >
            {{ label }}
        </label>

        <div class="field">
            <div class="control">
        <textarea
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="textarea"
                :placeholder="placeholder"
                ref="textareaRef"
                v-autofocus
                maxlength="100"
        />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'warning'
  },
  placeholder: {
    type: String,
    default: '...'
  },
  label: {
    type: String
  }
})


// const modelValue = ref(props.modelValue)
// const textNote = ref("")
// onMounted(() => {
//     textNote.value = props.modelValue
// })

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea
})

</script>