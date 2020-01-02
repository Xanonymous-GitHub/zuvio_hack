<template>
  <v-app justify-center>
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
          <div>按下按鈕，神奇的事情將會發生。</div>

          <div>純屬娛樂，請勿自行嘗試。</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>
            Share
          </v-btn>

          <v-btn color="orange" text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
const mainImage = () => import("@/components/mainImage");
export default {
  name: "home",
  components: {
    mainImage
  }
};
</script>
