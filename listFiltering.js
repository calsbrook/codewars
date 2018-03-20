function filter_list(l) {
    let filtered = [];
    l.forEach(item => {
      if(typeof item === 'number') {
      filtered.push(item);
      }
    });
    return filtered;
  }