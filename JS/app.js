let navbar = document.getElementById("navbar")
window.addEventListener("scroll",()=>{
    if (window.scrolly > 300){
        navbar.classList.add(navbar-ani)
    } else{
        navbar.classList.toggle(navbar-ani)
    }
})

var $grid = $('.collection-list').isotope({

})

$('.filter-button-group').on('click','button', function(){
    var filterValue = $(this).attr('data-filter')
    resetFilterBtns()
    $(this).addClass('active-filter-btn')
    $grid.isotope({filter: filterValue})
})

var FilterBtns = $('.filter-button-group').find('button')
function resetFilterBtns(){
    FilterBtns.each(function(){
        $(this).removeClass('active-filter-btn')
    })
}