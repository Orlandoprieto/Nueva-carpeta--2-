const doc = document;
const folder = document.getElementById('window');
const grid = document.getElementById('grid');
let dataFolder = folder.getBoundingClientRect();
let positionMouse = {x: null, y: null};
let resize = {
   top: false,
   right: false,
   bottom: false,
   left: false
};
const sizeColumn = ['500px', 'auto', '500px']
const sizeRow = ['100px', 'auto', '100px']

doc.addEventListener('mousemove', (e) => {
   dataFolder = folder.getBoundingClientRect()

   positionMouse = {
      x: e.pageX,
      y: e.pageY
   }

   if (resize.left) {
      sizeColumn[0] = `${positionMouse.x}px`
   } 

   if (resize.right) {
      sizeColumn[2] = `${window.innerWidth - positionMouse.x}px`
   } 

   if (resize.top) {
      sizeRow[0] = `${positionMouse.y}px`
   } 
   
   if (resize.bottom) {
      sizeRow[2] = `${window.innerHeight - positionMouse.y}px`
   }

   grid.style.gridTemplateColumns = `${sizeColumn[0]} ${sizeColumn[1]} ${sizeColumn[2]}`
   grid.style.gridTemplateRows = `${sizeRow[0]} ${sizeRow[1]} ${sizeRow[2]}`
})

folder.addEventListener('mousedown', () => {

   const {top, right, bottom, left } = dataFolder

   if (positionMouse.x <= (left + 10) 
      && positionMouse.x >= left
      && positionMouse.y > top 
      && positionMouse.y < bottom
   ) {
      resize.left = true
   }

   if ((positionMouse.x >= (right - 10) && positionMouse.x <= right) 
      && positionMouse.y > top 
      && positionMouse.y < bottom
   ) {
      resize.right = true
   }

   if ((positionMouse.y <= (top + 10) && positionMouse.y >= top) 
      && positionMouse.x < right
      && positionMouse.x > left
   ) {
      resize.top = true
   }

   if ((positionMouse.y >= (bottom - 10) && positionMouse.y <= bottom) 
      && positionMouse.x < right
      && positionMouse.x > left
   ) {
      resize.bottom = true
   }
})

doc.body.addEventListener('mouseup', () => {
   resize = {
      top: false,
      right: false,
      bottom: false,
      left: false
   };
})