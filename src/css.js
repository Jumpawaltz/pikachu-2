const string = `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

*::after, *::before {
    box-sizing: border-box;
}


.skin {
    position: relative;
    background-color: #ffcb00;
}

.san {
    position: absolute;
    left: 50%;
    width: 10px;
    top: 200px;
    border: solid 10px transparent;
    border-top-color: black;
    border-radius: 50%;
    margin-left: -10px;
}

.eye {
    position: absolute;
    border: 1px solid black;
    width: 46px;
    height: 46px;
    background-color: #2d2d2e;
    border-radius: 50%;
    left: 50%;
    margin-left: -23px;
    top: 184px;
}

.san:hover {
    transform-origin: center;
}

@keyframes wave {
    25% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(-20deg);
    }
}


.eye::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 6px;
    background-color: #fff;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    animation: eyes 4s infinite linear;
}

.eye.left {
    transform: translateX(100px);
}

.eye.right {
    transform: translateX(-100px);
}

.face {
    width: 50px;
    height: 50px;
    border: 1px solid red;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 300px;
    border-radius: 50%;
    background-color: #ff5140;
}

.face.right {
    transform: translateX(160px);
}

.face.left {
    transform: translateX(-160px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 230px;
    margin-left: -100px;
    overflow: hidden;
    transform-origin: top;
    animation: mouth 4s linear;
}

@keyframes mouth {
    50% {
        transform: scaleY(0.9);
    }
}

.mouth.up {
    position: relative;
}

.mouth > .up > .lip {
    border: 2px solid black;
    height: 30px;
    width: 79px;
    position: absolute;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: black;
    z-index: 1;
    background-color: #ffcb00;
}

.mouth > .up > .lip.left {
    left: 20px;
    transform: rotate(-20deg);
    border-right-color: #ffcb00;
    border-bottom-left-radius: 340px 180px;
}

.mouth > .up > .lip.right {
    right: 20px;
    transform: rotate(20deg);
    border-left-color: #ffcb00;
    border-bottom-right-radius: 340px 180px;
}

.lip::before {
    content: '';
    position: absolute;
    height: 30px;
    width: 4px;
    background-color: #ffcb00;
}

.lip.right::before {
    margin-left: -2px;
    left: 0px;
    top: -4px;
}

.lip.left::before {
    margin-right: -2px;
    right: 0px;
    top: -4px;
}

.mouth > .down > .tongue {
    top: 12px;
    width: 120px;
    height: 140px;
    background: #cc4143;
    border: 3px solid #000;
    border-bottom-left-radius: 280px 590px;
    border-bottom-right-radius: 280px 590px;
    overflow: hidden;
    margin-left: 40px;
    position: absolute;
    animation: mouthMove 3s infinite;
}

.mouth > .down > .tongue > .shetou {
    width: 120px;
    height: 140px;
    position: absolute;
    left: 50%;
    bottom: -33px;
    margin-left: -60px;
    border-radius: 100px;
    background-color: #dd666a;
}
@keyframes eyes {
    25% {
        transform: translateX(1px);
        transform: translateY(1px);
    }
    50% {
        transform: translateX(-15px);
        transform: translateY(10px);
    }
    75% {
        transform: translateY(5px);
        transform: translateX(11px);
    }
    100% {
        transform: translateY(1px);
        transform: translateX(1px);
    }
}


`;

export default string
