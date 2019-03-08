(function() {
    function randomMove(selector, distance, step = 10, turn = 55) {
        const element = document.querySelector(selector);
        const maxTurn = turn; // максимальный угол поворота
        const maxDistance = distance; // максимальный translate
        const maxStep = step; //скорость движения
        let deg = +(Math.random() * 360).toFixed();
        let translate = { x: 0, y: 0 };
        
        setInterval(() => {
            deg += +(Math.random() * maxTurn * 2 - maxTurn).toFixed();
            let shift = getShift(deg, maxStep);
            
            while (Math.abs(translate.x + shift.x) >= maxDistance || Math.abs(translate.y + shift.y) >= maxDistance) {
            deg += +(Math.random() * maxTurn * 2 - maxTurn).toFixed();
            shift = getShift(deg, maxStep);
            }
            translate = {
            x: translate.x + shift.x,
            y: translate.y + shift.y,
            };
            element.style.transform = `translate(${translate.x}px,${translate.y}px)`;   
        }, 1000);
    }
    
    function getShift(deg, step) {
        return {
        x: +(Math.cos(deg * Math.PI / 180) * step).toFixed(),
        y: +(Math.sin(deg * Math.PI / 180) * step).toFixed(),
        };
    };

	window.randomMove = randomMove;}());