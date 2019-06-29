<template>
  <div> 
    <div class="works-container">
      <div class="works-content">
        <h1>WORKS</h1>
        <a href="http://13.112.12.171/" target="_blank">
          <p>
          ・Chat Space (非同期通信を実装したチャットアプリケーション)/Rails jQuery
          </p>
          <img src="@/assets/chatspace.svg">
        </a>
        <p>
          ・既存サービスのクローンサイトを開発中/スクラムによるアジャイル開発
        </p>
        <a href="https://vuetest-ed8b7.firebaseapp.com/" target="_blank">
          <p>
            ・メモアプリ（Vue.jsとFirebaseを学ぶための習作）/ Vue.js Firebase
          </p>
          <img src="@/assets/memoapp.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .works-container{
    margin: 70px auto auto 115px;
    text-align: left;
    border-left: 5px solid #4DC0B2;
    width: 890px;
    height: 680px;
    .works-content{
      margin: 0 0 0 10px;
    h1{
      color:#586365;
      font-size: 80px; 
      font-family: paralucent, sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 80px;
      margin: 0 0 0 10px;
      }
    a{
      text-decoration: underline;
      color: #4DC0B2;
    }
    p{
      font-size: 20px;
      font-family: a-otf-gothic-bbb-pr6n, sans-serif;
      font-weight: 100;
      color: #586365;
      }
    }
  }
</style>