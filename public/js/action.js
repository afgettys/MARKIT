var chip = {
  tag: 'chip content',
  image: '', //optional
};

//$('.chips-placeholder').chips({
//  placeholder: 'Enter a tag',
//  secondaryPlaceholder: '+Tag',
//});

var instance = M.Chips.getInstance(elem);

instance.addChip({
  tag: 'chip content',
  image: '', // optional
});

function get_additmes() {
  var additem = new Array;
  var additem_str = localStorage.getItem('additem');
  if (additem_str !== null) {
      additem = JSON.parse(todos_str); 
  }
  return todos;
}
