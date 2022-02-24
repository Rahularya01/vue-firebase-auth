<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div class="container mt-5 p-5 p-md-2">
      <div class="card p-3">
        <h5 class="text-center text-uppercase mb-3 fw-bold">Login</h5>
        <form  @submit.prevent="handleClick">
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
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let email = ref("");
    let password = ref("");

    const handleClick = () => {
        console.log({email, password});
    }

    return { email, password, handleClick };
  },
};
</script>

<style></style>
