function searchinput(e) {
    console.log(event.key);
    if (event.keyCode === 13) {
        doSearch();
        console.log('enter');
    }
}

function doSearch(){
    location.reload(true);
}