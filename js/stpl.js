$(document).ready(function () {
});

$('.class').tooltip({
    placement: 'top',
    title: function () {
        let classString = this.getAttribute('class');
        let classes = classString.split(' ');
        return classes[1];
    }
});

$('.class').click(function () {
    //TODO redirect to edit
    alert("Stunde: '"+this.id+"' geclickt");
});
