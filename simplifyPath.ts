function simplifyPath(path: string): string {
  let currentString = path.slice();
  const simplifiedAbsolutePathStack : string[] = [];
  while (currentString.length > 1) {
    console.log('currentString: ', currentString);
    const regex = /(?<=\/)(.*?)(?=\/)/;
    let currentPath : string = regex.exec(currentString) ? currentString.slice(0, currentString.indexOf('/', 1)) : '';
    console.log('currentPath: ', currentPath);
    if (currentPath === '/..') {
      simplifiedAbsolutePathStack.pop();
    } else if (currentPath !== '/.' && currentPath !== '/' && currentPath !== '') {
      simplifiedAbsolutePathStack.push(currentPath);
    }
    if (currentPath.length) {
      currentString = currentString.slice(currentPath.length);
    } else {
      console.log('currentString in else: ', currentString);
      if (currentString === '/..') {
        console.log('stack: ', simplifiedAbsolutePathStack);
      simplifiedAbsolutePathStack.pop();
    } else if (currentString !== '/.' && currentString !== '/') {
      simplifiedAbsolutePathStack.push(currentString);
    }
      currentString = '';
    }
    console.log('stack in outer: ', simplifiedAbsolutePathStack);
  }
  console.log('currentString: ', currentString);
  return simplifiedAbsolutePathStack.join('') === '' ? '/' : simplifiedAbsolutePathStack.join('');
};