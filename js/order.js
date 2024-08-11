// Select the masonry_gallery div
const masonry_gallery = document.querySelectorAll('.masonry_gallery');
const masonry_gallery2 = document.querySelectorAll('.masonry_gallery2');
if (masonry_gallery) {
  masonry_gallery.forEach((cimg) => {



    // Array to hold image data
    var imageData = [];
    
    // Collect image data
    const masonry_images = cimg.getElementsByTagName('img');
    Array.from(masonry_images).forEach((img) => {
      const data = {
        src: img.getAttribute('src'),
        price: img.getAttribute('data-price'),
        title: img.getAttribute('data-title'),
      };
      imageData.push(data);
    });
    
    // Function to get a random integer between min (inclusive) and max (exclusive)
    // Get the number of masonry items
    var masonry_items = imageData.length;
     // Update the class to remove 'hidden' and set grid columns
     cimg.classList.remove('hidden');
    // If the number of items is less than 5, duplicate and randomize
    if (masonry_items < 7) {
    
    
     
      var gridColumns = masonry_items>3?masonry_items==5?3:2:masonry_items;
      
      cimg.classList.add('grid', 'lg:grid-cols-' +gridColumns,'grid-cols-1' );
    
      // Create the HTML content
      var tag = '';
      for (var i = 0; i < masonry_items; i++) {
        //  <div  class="masonry_gallery gap-6 mx-2 lg:mx-0 auto-cols-max grid-cols-1 lg:grid-cols-3 bsl:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 max-h-[90vh] max-h-[60vh] max-h-[80vh]"></div> 
        var gridHeight = masonry_items!=5?'h-[40vh]':i!=2?'h-[40vh]':"h-[81vh]";
        tag += (i==0|| i==3) && masonry_items==5?'<div class="flex flex-col gap-2">':'';
        tag += `
          <div class="w-full">
            <div class="relative h-full ">
              <img class=" object-cover ${gridHeight}  w-full rounded-3xl" src="${imageData[i].src}" alt="" />
              <div class="absolute inset-0 rounded-3xl gallery_shadow"></div>
              <div class="absolute xl:bottom-16 bottom-8 left-0 right-10">
                <div class="text-white font-bold text-xl mr-2">${imageData[i].title}</div>
                <div class="flex justify-between mt-5 items-center">
                  <div class="flex gap-2 items-center">
                    <div class="bg-primary rotate-45 w-2 h-2">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD"></rect>
                      </svg>
                    </div>
                    <div class="text-base text-white">شروع قیمت از :</div>
                  </div>
                  <div class="flex gap-2 ml-5">
                    <div class="text-[#64BE0A]">${imageData[i].price}</div>
                    <div class="text-white">تومان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        tag += (i==1|| i==4) && masonry_items==5 ?'</div>':'';
      }
    
      
    
    } else {
      
        var tag='<div class="grid  gap-3 h-full place-content-between"><div class="relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[0].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-16 bottom-8 left-0 right-10"><div class="text-white font-bold text-xl mr-2">'+imageData[0].title+'</div><div class="flex justify-between mt-5 items-center"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2 ml-5"><div class="text-[#64BE0A]">'+imageData[0].price+'</div><div class="text-white">تومان</div></div></div></div></div><div class="col-span-1 grid grid-cols-2 gap-2"><div class="relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[1].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-14 bottom-7 left-0 right-5"><div class="text-white font-bold text-xl">'+imageData[1].title+'</div><div class="flex flex-col mt-5 items-start"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2"><div class="text-[#64BE0A]">'+imageData[1].price+'</div><div class="text-white">تومان</div></div></div></div></div><div class="relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[2].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-14 bottom-7 left-0 right-5"><div class="text-white font-bold text-xl">'+imageData[2].title+'</div><div class="flex flex-col mt-5 items-start"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2"><div class="text-[#64BE0A]">'+imageData[2].price+'</div><div class="text-white">تومان</div></div></div></div></div></div></div><div class="grid h-full"><div class="relative h-fit"><img class="h-[83vh] object-cover w-full rounded-3xl" src="'+imageData[3].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow"></div><div class="absolute bottom-12 left-0 right-10"><div class="text-white font-bold text-xl mr-2"> '+imageData[3].title+' </div><div class="flex justify-between mt-5 items-center"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2 ml-5"><div class="text-[#64BE0A]">'+imageData[3].price+'</div><div class="text-white">تومان</div></div></div></div></div></div><div class="grid bsl:col-span-2  bsl:grid-cols-2 grid-cols-1 gap-3 place-content-between h-full"><div class="col-span-1 relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[4].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-10 bottom-5 left-0 right-10"><div class="text-white font-bold text-xl mr-2"> '+imageData[4].title+' </div><div class="flex justify-between mt-5 items-center"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2 ml-5"><div class="text-[#64BE0A]">'+imageData[4].price+'</div><div class="text-white">تومان</div></div></div></div></div><div class="col-span-1 grid grid-cols-2 gap-2"><div class="relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[5].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-14 bottom-7 left-0 right-5"><div class="text-white font-bold text-xl">'+imageData[5].title+'</div><div class="flex flex-col mt-5 items-start"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2"><div class="text-[#64BE0A]">'+imageData[5].price+'</div><div class="text-white">تومان</div></div></div></div></div><div class="relative h-fit"><img class="h-[40vh] object-cover w-full rounded-3xl" src="'+imageData[6].src+'" alt="" /><div class="absolute inset-0 rounded-3xl gallery_shadow" ></div><div class="absolute xl:bottom-14 bottom-7 left-0 right-5"><div class="text-white font-bold text-xl">'+imageData[6].title+'</div><div class="flex flex-col mt-5 items-start"><div class="flex gap-2 items-center"><div class="bg-primary rotate-45 w-2 h-2"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect x="-0.242676" y="4" width="6" height="6" rx="2" transform="rotate(-45 -0.242676 4)" fill="#0986FD" /></svg></div><div class="text-base text-white">شروع قیمت از :</div></div><div class="flex gap-2"><div class="text-[#64BE0A]">'+imageData[6].price+'</div><div class="text-white">تومان</div></div></div></div></div></div></div>'
        cimg.classList.add('grid','grid-cols-1','lg:grid-cols-3','bsl:grid-cols-2');
    }
    // Set the inner HTML of the gallery
    cimg.innerHTML = tag;
    });
}
if (masonry_gallery2) {
  masonry_gallery2.forEach((cimg) => {



    // Array to hold image data
    var imageData = [];
    
    // Collect image data
    const masonry_images = cimg.getElementsByTagName('img');
    Array.from(masonry_images).forEach((img) => {
      const data = {
        src: img.getAttribute('src'),
      };
      imageData.push(data);
    });
    
    // Function to get a random integer between min (inclusive) and max (exclusive)
    // Get the number of masonry items
    var masonry_items = imageData.length;
     // Update the class to remove 'hidden' and set grid columns
     cimg.classList.remove('hidden');
    // If the number of items is less than 5, duplicate and randomize
    if (masonry_items < 5) {
    
    
     
      var gridColumns =masonry_items==1?1:masonry_items%2==0?2:3 ;
      
      cimg.classList.add('grid','grid-cols-'+gridColumns);
      // <div class="grid-cols-3 grid-cols-2 [32vh]"></div>
      // Create the HTML content
      var tag = '';
      for (var i = 0; i < masonry_items; i++) {
        var gridHeight = masonry_items>3?'h-[130px]':masonry_items==1?'h-full w-full':'h-full';
        tag += `
          <div>
              <img class="object-cover ${gridHeight}  rounded-lg" src="${imageData[i].src}" alt="" />
          </div>`;
      }
    
      
    
    } else {
      
        var tag=' <div class="grid grid-cols-2 gap-4"> <div> <img class="h-[130px] w-full rounded-lg" src="'+imageData[0].src+'" alt=""> </div> <div> <img class="h-[130px] w-full rounded-lg" src="'+imageData[1].src+'" alt=""> </div> </div> <div class="grid grid-cols-3 gap-4 h-fit"> <div> <img class="h-[130px] object-coverw-full rounded-lg" src="'+imageData[2].src+'" alt=""> </div> <div> <img class="h-[130px] object-coverw-full rounded-lg" src="'+imageData[3].src+'" alt=""> </div> <div> <img class="h-[130px] object-coverw-full rounded-lg" src="'+imageData[4].src+'" alt=""> </div> </div>'
        cimg.classList.add('flex','flex-col');
    }
    // Set the inner HTML of the gallery
    cimg.innerHTML = tag;
    });
}
