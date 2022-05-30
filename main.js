var numbersList;
var colorCode = ['#000000', '#333333', '#6495ED', '#EFEFEF', '#72C3DC', '#2B8EAD', '#6F98A8', '#BFBFBF', '#2F454E']
    $(window).on("load", function () {
        numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        renderList();
    });
    function renderList() {
        numbersList.forEach( (element, i) => {
            const grid = document.createElement("div");
            grid.innerHTML = element;
            grid.style.color  = '#FFFFFF';
            grid.style.backgroundColor = colorCode[i];
            document.getElementById("flex-container").appendChild(grid);
        });
    }
    function clearDom() {
        const grid = document.getElementById("flex-container");
        grid.innerHTML = '';
    }
    function suffleList() {
        clearDom();
        for (var i = numbersList.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numbersList[i];
            numbersList[i] = numbersList[j];
            numbersList[j] = temp;
        }
        renderList();
    }
    function sortList() {
        clearDom();
        numbersList.sort();
        renderList();
    }