
// cycle through panels and set links
function openPanel(evt, panelName, panelContent) {
  const currentPanel = document.getElementById(panelName);
  const currentPanelContent = document.getElementById(panelContent);

  // sets panels to hidden
  const panels = document.getElementsByClassName("panel");
  for (let panel of panels) {
    panel.style.display = "contents";
    panel.className = panel.className.replace(" current", "");
  }
  // hides panel contents
  const panelContents = document.getElementsByClassName("panel-content");
  for (let panelCont of panelContents) {
    panelCont.style.display = "none";
    panelCont.className = panelCont.className.replace(" current", "");
  }
  // sets non-active links
  const links = document.getElementsByClassName("link");
  for (let link of links) {
    link.className = link.className.replace(" active", "");
  }

  currentPanel.style.display = "flex";
  currentPanel.className += " current";
  currentPanelContent.style.display = "flex";
  currentPanelContent.className += " current";
  evt.currentTarget.className += " active";
}

// work slideshow
function cycleWorkSlides(evt, slideName) {
  const currentSlide = document.getElementById(slideName);
  console.log(currentSlide);
  
  const slides = document.getElementsByClassName("work-slide")
  for (let slide of slides) {
    slide.style.display = "none";
    slide.className = slide.className.replace(" current-slide", "");
  }
  
  const dots = document.getElementsByClassName("dot");
  for (let dot of dots) {
    dot.className = dot.className.replace(" active-dot", "");
  }
  
  currentSlide.style.display = "flex";
  currentSlide.className += " current-slide"
  evt.currentTarget.className += " active-dot";
} 

// form labels
function showLabel(labelId) {
  const label = document.getElementById(labelId);
  
  label.style.visibility = "visible";
  label.style.opacity = "1";
  label.style.transform = "translateX(0rem) translateY(0rem)";
}

function hideLabel(labelId) {
  const label = document.getElementById(labelId);
  
  label.style.visibility = "hidden";
  label.style.opacity = "0";
  label.style.transform = "translateX(1rem) translateY(2rem)";
}

