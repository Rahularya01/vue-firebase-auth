<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div class="container mt-5 p-5 p-md-2">
      <div class="card p-3">
        <h5 class="text-center text-uppercase mb-3 fw-bold">Register</h5>
        <form @submit.prevent="handleClick">
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              v-model="email"
              required
              type="email"
              class="form-control form-control-sm"
              id="email"
            />
          </div>
          <div class="mb-3">
            <label for="password">Password</label>
            <input
              v-model="password"
              required
              type="password"
              class="form-control form-control-sm"
              id="password"
            />
          </div>
          <button
            :disabled="disable"
            type="submit"
            class="btn btn-primary w-100"
          >
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Create an Account
          </button>
          <p v-if="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let error = ref(null);
    let disable = ref(false);
    let loading = ref(false);

    const store = useStore();
    const router = useRouter();

    const handleClick = async () => {
      // Setting loading and button disable action
      loading.value = true;
      disable.value = true;

      // Register user using firebase
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = "Something went wrong";
        // Setting loading and button disable action
        loading.value = false;
        disable.value = false;
      }
    };

    return { email, password, handleClick, error, disable, loading };
  },
};
</script>

<style></style>
