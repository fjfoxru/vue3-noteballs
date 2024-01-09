<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li
                        :class="{ 'is-active' : !register }"
                >
                    <a @click.prevent="register = false">Авторизация</a>
                </li>
                <li
                        :class="{ 'is-active' : register }"
                >
                    <a @click.prevent="register = true">Регистрация</a>
                </li>
            </ul>
        </div>

        <div class="card auth-form">
            <div class="card-content">
                <div class="title has-text-centered">
                    {{ formTitle }}
                </div>

                <form
                        @submit.prevent="onSubmit"
                >
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                    v-model="credentials.email"
                                    class="input"
                                    placeholder="test@test.ru"
                                    type="email"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Пароль</label>
                        <div class="control">
                            <input
                                    v-model="credentials.password"
                                    class="input"
                                    placeholder="Введите пароль"
                                    type="password"
                            >
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, reactive } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'


const storeAuth = useStoreAuth()

const register = ref(false)

const formTitle = computed(() => {
  return register.value ? 'Регистрация' : 'Авторизация'
})

const credentials = reactive({
  email: '',
  password: ''
})

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter an email and password gosh darnit!')
  }
  else {
    if (register.value) {
      storeAuth.registerUser(credentials)
    }
    else {
      storeAuth.loginUser(credentials)
    }
  }
}
</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>