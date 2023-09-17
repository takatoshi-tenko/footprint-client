<template>
  <div>
    <h2>今日の日付</h2>
    <h2>今日の日付</h2>
    <p class="today">today</p>
    <p>目標の日付：<input type="date" name="date" /></p>
    <p>入力した日付まで後<span class="leftDay"></span>日</p>
    <button @click="enableCustomLayout">Update Layout</button>
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
    <div>
      <p>Count: {{ count }}</p>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
    <h2>{{ $hello("World") }}</h2>
    <h2>{{ data }}</h2>
    <div>
      メールアドレス<input id="mailAddress" type="mailAddress" required />
    </div>
    <div>パスワード<input id="password" type="password" required /></div>
    <button id="login">ログイン</button>
    <button id="register" @click="submit">新規登録</button>
  </div>
</template>

<script setup>
import firebase from '~/plugins/firebase'
const route = useRoute();
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp();
const { data } = useFetch("api/hello");
const enableCustomLayout = () => {
  route.meta.layout = "custom";
};
const show = ref(false);

//新規登録処理
const submit = () => {
  register.addEventListener("click", function (e) {
    var mailAddress = document.getElementById("mailAddress").value;
    var password = document.getElementById("password").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(mailAddress, password)
      .catch(function (error) {
        alert("登録できません（" + error.message + "）");
      });
  });
};

const handleClick = () => {
  show.value = true;
};
</script>
