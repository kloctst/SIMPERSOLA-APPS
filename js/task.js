function toggleStrikethrough(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
      label.classList.add('checked');
    } else {
      label.classList.remove('checked');
    }
  }