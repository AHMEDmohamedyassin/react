
class RED {
    redColor = () => {
        console.log('red color from red class');
    }
}

class Car extends RED{
    // color = 'red';

    printColor = () => {
        console.log(this.color);
    }

    constructor(color) {
        super();            // باستخدمها بسبب وجود وراثة 
        this.color = color
    }
}

export {Car};