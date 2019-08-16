class TypeWriter {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.index = 0;
        this.addSpeed = 40;
        this.clearSpeed = 20;
        this.waitTime = 1000;

        this.removeText = this.removeText.bind(this);
        this.addText = this.addText.bind(this);

        this.init();
    }

    removeText() {
        this.element.textContent = this.element.textContent.slice(0, -1);

        if (this.element.textContent.length == 0) {
            clearInterval(this.interval);

            var that = this;

            setTimeout(function() {
                that.index = 0;
                that.interval = setInterval(that.addText, that.addSpeed);
            }, this.waitTime);
        }
    }

    addText() {
        this.element.textContent += this.text[this.index];

        this.index = this.index + 1;

        if (this.index > this.text.length - 1) {
            clearInterval(this.interval);
        }

    }

    init() {
        this.element.textContent = '';

        this.interval = setInterval(this.addText, this.addSpeed);
    }
}

Array.from(document.getElementsByClassName("typewriter")).forEach(
    function(element) {
        new TypeWriter(element);
    }
);

function typeWriting() {
    var elements = document.getElementsByClassName('typewriter');
    for (var i = 0; i < elements.length; i++) {
        new TypeWriter(elements[i]);
    }
}