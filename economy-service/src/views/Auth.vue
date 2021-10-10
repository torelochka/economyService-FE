<template>
  <Container :width="250">
    <h1 class="app-title">m8.checker</h1>
    <img alt="Vue logo" class="eye" src="../assets/eye.gif">
    <form action="" class="auth-form">
      <TextInput name="email" type="email" placeholder="gmail"/>
      <TextInput name="password" type="password" placeholder="password" />
      <Button :on-click="() => $router.push('/add-group')">login</Button>
    </form>
  </Container>
</template>

<script>
import Container from "../components/shared/atoms/Container";
import TextInput from "../components/shared/atoms/TextInput";
import Button from "../components/shared/atoms/Button";

export default {
  name: 'Auth',
  components: {
    Container,
    TextInput,
    Button,
  }
}
</script>

<style>
.app-title {
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.eye {
  width: 100%;
  height: auto;
  margin-bottom: 100px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
</style>
