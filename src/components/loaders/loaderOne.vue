<template>
  <div class="content_loader">
    <section style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
      <img src="/images/banner/upeaLogo.png" alt="" width="300" class="rotating-image">
      <div class="loading loading02">
        <span>U</span>
        <span>P</span>
        <span>E</span>
        <span>A</span>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.content_loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to left, var(--color-primary), var(--color-secondary));
  font-weight: bold;
}

@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.rotating-image {
  filter: drop-shadow(0px 0px 15px rgba(0,0,0,.3));
  animation: spin 4s linear infinite;
}


/* code #2 */
.loading02 {
  span {
    animation: loading02 1.2s infinite alternate;
    font-size: 6em;
    letter-spacing: 10px;
    color: var(--color-tertiary);
    border: none;

    @for $i from 1 through 6 {
      &:nth-child(#{$i+1}) {
        animation-delay: #{$i*.3}s;
      }
    }
  }
}

@keyframes loading02 {
  0% {
    filter: blur(0);
    opacity: 1;
  }

  100% {
    filter: blur(5px);
    opacity: .2;
  }
}</style>