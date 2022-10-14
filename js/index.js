
const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function(item){
    item.addEventListener('click', function(){
        
        contentBoxes.forEach(function(item){
            item.classList.add('hidden')
        })

        const contentBox = document.querySelector('#' + this.dataset.tab);
        console.log(contentBox)
        contentBox.classList.remove('hidden')
    })
});

var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  
  rangeSlider();
  
