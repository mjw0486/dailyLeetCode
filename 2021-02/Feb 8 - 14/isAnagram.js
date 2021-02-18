/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s=== '' && t=== '') {
    return true;
  }
  
  let sMap = charMap(s);
  let tMap = charMap(t);
  for (const key in sMap) {
    if(tMap[key] !== sMap[key]) {
      return false;
    }
  }
  for (const key in tMap) {
    if(tMap[key] !== sMap[key]) {
      return false;
    }
  }
   if (s.length !== t.length) {
      return false;
    }
  return true;
  
  
    
};

const charMap = function(string) {
  let sMap = {};
  for (const char of string) {
    if (sMap[char] === undefined) {
      sMap[char] = 1;
    } else {
      sMap[char] += 1;
    }
  }
  return sMap;
}
