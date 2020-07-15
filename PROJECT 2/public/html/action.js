var chip = {
  tag: 'chip content',
  image: '', //optional
};

$('.chips-placeholder').chips({
  placeholder: 'Enter a tag',
  secondaryPlaceholder: '+Tag',
});

var instance = M.Chips.getInstance(elem);

instance.addChip({
  tag: 'chip content',
  image: '', // optional
});