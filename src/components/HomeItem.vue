<template>
  <div>
    <div class="home-conteiner">
      <!-- <div style="background-color:#4DC0B2; width:5px; height:180px;"></div> -->
      <div class="hometitle">
        <h1 class="firstname">TAKAHIRO</h1>
        <h1 class="lastname">BABA</h1>
        <h1 class="portfolio">PORTFOLIO</h1>
        <h4>Implemented SPA in Vue.js</h4>
        <a href="mailto:t.baba0222@gmail.com">
          <h4>t.baba0222@gmail.com</h4>
        </a>
      </div>
      <div class="icons">
        <a href="https://github.com/Doyaface"><img src="@/assets/icons8-ios--用-glyph.svg/" class="github"></a>
        <a href="https://twitter.com/Takahiro_b_tech"><img src="@/assets/twitter.svg/" class="twitter"></a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .home-conteiner{
    margin: 180px auto auto 115px;
    text-align: left;
    .hometitle{
        border-left: 5px solid #4DC0B2;
        font-family: paralucent, sans-serif;
        font-style: normal;
        color: #586365;
      h1{
        font-weight: 500;
        font-size: 80px;
        margin: 0 auto auto 5px;
        letter-spacing: 3px;
      }
      .firstname{
        line-height: 70px;
      }
      .lastname{
        line-height: 70px;
        color: #007B6F;
      }
      .portfolio{
        line-height: 70px;
        color: #FFC042;
      }
      h4{
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        margin: 0 auto auto 10px;
        letter-spacing: 1px;
      }
      a{
        color: #007B6F;
        line-height: 48px;
        text-decoration: none;
      }
    }
  .icons{
    margin: 20px 0 0 5px ;
    img{
      height: 34px;
      width: 34px;
    }
    .twitter{
      margin: 0 0 0 12.5px
    }
  }
  }
</style>
