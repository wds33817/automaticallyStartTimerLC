function clickElement() {
    console.log("Trying to click the element.");

    // Log the entire document structure
    console.log("Document structure:", document.documentElement.outerHTML);

    // Select the element
    const elementToClick = document.querySelector("#__next > div.flex.min-w-\\[360px\\].flex-col.overflow-x-auto.text-label-1.dark\\:text-dark-label-1.h-\\[100vh\\] > div > div > div.relative > div > div > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(2) > div");

    // Log the element
    console.log("Selected element:", elementToClick);

    const element = document.querySelector("#__next > div.flex.min-w-\\[360px\\].flex-col.overflow-x-auto.text-label-1.dark\\:text-dark-label-1.h-\\[100vh\\] > div > div > div.relative > div > div > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.rounded-\\[3px\\].p-2.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary.text-gray-60.dark\\:text-gray-60");
      // if existed, then reset the timer.
      if (element) {
        // 创建并触发点击事件
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });

        element.dispatchEvent(clickEvent);
      } else {
        console.log('元素不存在');
      }
     
    
  
    // Check if the element is found
    if (elementToClick) {
      // Create and dispatch a click event
      const clickEvent = new Event('click', { bubbles: true });
      elementToClick.dispatchEvent(clickEvent);
      console.log("Element found and clicked!");
    } else {
      console.error('Element not found. Retrying in 2000 milliseconds.');
      // 检查元素是否存在
      

      setTimeout(clickElement, 1000);
    }
  }

  // Call the function to start the process
  clickElement();