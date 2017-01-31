function convertImgToBlob(img, callback) {
   var canvas = document.createElement('canvas');
   var context = canvas.getContext('2d');
   context.drawImage(img, 0, 0);

    // Warning: toBlob() isn't supported by every browser.
    // You may want to use blob-util.
   canvas.toBlob(callback, 'image/png');
}
