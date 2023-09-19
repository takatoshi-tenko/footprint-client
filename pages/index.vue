<template>
  <div>
    <h1>今日も1日頑張ろう！</h1>
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
      <h1>Firebase Authentication Example</h1>
      <p class="lead">
        This example is a quick exercise to sign in with a google acount.
      </p>
      <div v-if="currentUser == null">
        <button type="button" role="button" @click="signIn">Sign In</button>
      </div>
      <div v-else>
        <button type="button" role="button" @click="signOutUser">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const route = useRoute();
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp();
const { data } = useFetch("api/hello");
const enableCustomLayout = () => {
  route.meta.layout = "custom";
};
const show = ref(false);

// data: () => ({
//         currentUser: null
//     }),
//     mounted(){
//         onAuthStateChanged(getAuth(), (user) => {
//             if ( user != null ){
//                 this.currentUser = user;
//             }else{
//                 this.currentUser = null;
//             }
//         });
//     },
//     methods: {
//         signIn() {
//             var provider = new GoogleAuthProvider();
//             signInWithPopup(getAuth(), provider)
//             .then((auth) => {
//                 console.log("login", auth.user );
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log("faild to login", errorCode, errorMessage );
//             });
//         },
//         signOutUser() {
//             signOut(getAuth());
//         }
//     }

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
