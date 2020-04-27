var canvas;
var c;
$(document).ready(function () {
    canvas = document.querySelector('canvas');
    c = canvas.getContext("2d");
    let stunden = loadStunden();
    drawTimetable(stunden);
});

/**
 * Zeichnet die Stunden in den Stundenplan
 * @param stunden ein Array aus Stunden-Objekten
 */
function drawTimetable(stunden) {
    //Draw Boundaries
    let width = canvas.width;
    let height = canvas.height;
    c.moveTo(0,0);
    c.lineTo(width,0);
    c.lineTo(width,height);
    c.lineTo(0,height);
    c.lineTo(0,0);
    c.stroke();

    let gridX = [10,width-10];
    let gridY = [10,20];
    c.moveTo(10,10);
    c.lineTo(gridX[1],gridY[0]);
    c.lineTo(gridX[1],gridY[1]);
    c.lineTo(gridX[0],gridY[1]);
    c.lineTo(gridX[0],gridY[0]);
    c.stroke();

}

class Stunde {
    /**
     * Erstellt eine Stunde
     * @param begin
     * @param end
     * @param name
     */
    constructor(begin,end,day,name) {
        this.begin = begin;
        this.end = end;
        this.day = day;
        this.name = name;
    }
}


function loadStunden() {
    let stunden = [];
    stunden[0] = new Stunde('08:00','08:50','Mo','AM');
}
