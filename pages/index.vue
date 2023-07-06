<template>
  <div class="wrap">
    <header>
        <i class="icon"></i>

        <nav>
            <a href="https://voomin.github.io/himke-web/">PROJECT</a>
            <!-- <router-link to="/test">TEST</router-link> -->
        </nav>
    </header>
    <div class="text-wrap">
        <h1>BOOMIN KIM</h1>
        <p>창의적인 웹,앱 개발자</p>
        <p>더 쉽고, 더 재미있게 만들려고 노력합니다</p>
        <p>하면된다</p>
    </div>

    <canvas id="canvas"></canvas>

    <footer>
        <a href="https://github.com/voomin">
            <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://youtube.com/@boominkim">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com/voomin">
            <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
    </footer>
  </div>  
</template>

<script setup>
useHead({
    title: 'Boomin Kim',
    meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'Boomin Kim'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }, {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        }
    ]
});

import('../assets/wave/app.js')
    .then(({ default: App }) => {
        const app = new App();

        window.addEventListener('click', app.jump.bind(app));
        window.addEventListener('pointerdown', app.jump.bind(app));

    });
</script>

<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #5D8AA9;
}

canvas {
    width: 100%;
    height: 100%;
}

header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 1;
    box-sizing: border-box;
}

.icon {
    background-image: url("../assets/android-chrome-192x192.png");
    background-size: cover;
    width: 60px;
    height: 60px;
    display: inline-block;
}

.text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

h1 {
    color: #fff;
    font-size: 2.5rem;
    animation: titleFadeIn 1s ease-in-out forwards;
    opacity: 0;
    margin-bottom: 12px;
}

p {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
    animation: textFadeIn 3s ease-in-out forwards;
    animation-delay: 1s;
    opacity: 0;
}

nav > a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
    opacity: 0.5;
}

nav > a:hover {
    opacity: 1;
    text-decoration: underline;
}

footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

footer > a {
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
    opacity: 0.5;
}

footer > a:hover {
    opacity: 1;
    text-decoration: underline;
}

footer > a > i {
    margin-right: 5px;
}

@keyframes titleFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes textFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.75;
    }
}

</style>