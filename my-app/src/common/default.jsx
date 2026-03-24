/* 변수명 */
export const bookName = '좋은책'; 
export const bookPage = Math.floor(Math.random() * 10) + 1;
export const user = { 
    firstName: 'KIM',
    lastName: 'Hyejin'
};

/* 기능 */
export function formatName(user) { 
    return user.firstName + '' + user.lastName; 
} 

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}