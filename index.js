var listItems = document.querySelectorAll('nav ul li');
listItems.forEach(function(item){
    item.addEventListener('mouseover', function(){
        var subMenu = this.querySelector('ul');
        subMenu.style.display = 'block';
    });
    item.addEventListener('mouseout', function() {
        var subMenu = this.querySelector('ul');
        subMenu.style.display = 'none';
    });
});