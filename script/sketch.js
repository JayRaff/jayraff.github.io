let c,s

function setup() {
  createCanvas(1000, 1000);
  background(220)
  c = 0
  s = 3

}

function draw() {
  strokeWeight(s)
  
  //create a drawing pen
  stroke(c);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  

  
  //Change colour to red button
  
  //draw button
  fill('red')
  ellipse(width-440,height-40,50,50)
  
  //compute distance
  d1 = dist(mouseX,mouseY,width-440,height-40)
  r = 50/2
  
  //button logic
  if(d1 < r && mouseIsPressed){
   c = 'red'  
  }
  
  //Change colour to orange button
  
  //draw button
  fill('orange')
  ellipse(width-500,height-40,50,50)
  
  //compute distance
  d2 = dist(mouseX,mouseY,width-500,height-40)
  r = 50/2
  
  //button logic
  if(d2 < r && mouseIsPressed){
   c = 'orange'  
  }
  
  //Change colour to yellow button
  
  //draw button
  fill('yellow')
  ellipse(width-560,height-40,50,50)
  
  //compute distance
  d3 = dist(mouseX,mouseY,width-560,height-40)
  r = 50/2
  
  //button logic
  if(d3 < r && mouseIsPressed){
   c = 'yellow'  
  }
  
  //Change colour to green button
  
  //draw button
  fill('green')
  ellipse(width-620,height-40,50,50)
  
  //compute distance
  d4 = dist(mouseX,mouseY,width-620,height-40)
  r = 50/2
  
  //button logic
  if(d4 < r && mouseIsPressed){
   c = 'green'  
  }
  
  //Change colour to blue button
  
  //draw button
  fill('blue')
  ellipse(width-680,height-40,50,50)
  
  //compute distance
    d5 = dist(mouseX,mouseY,width-680,height-40)
    r = 50/2
  
  //button logic
  if(d5 < r && mouseIsPressed){
    c = 'blue'  
  }
  
  //Change colour to indigo button
  
  //draw button
  fill('indigo')
  ellipse(width-740,height-40,50,50)
  
  //compute distance
  d6 = dist(mouseX,mouseY,width-740,height-40)
  r = 50/2
  
  //button logic
  if(d6 < r && mouseIsPressed){
   c = 'indigo'  
  }
  
  //Change colour to violet button
  
  //draw button
  fill('violet')
  ellipse(width-800,height-40,50,50)
  
  //compute distance
  d7 = dist(mouseX,mouseY,width-800,height-40)
  r = 50/2
  
  //button logic
  if(d7 < r && mouseIsPressed){
   c = 'violet'  
  }
  
  //Change colour to white button
  
  //draw button
  fill('white')
  ellipse(width-860,height-40,50,50)
  
  //compute distance
  d8 = dist(mouseX,mouseY,width-860,height-40)
  r = 50/2
  
  //button logic
  if(d8 < r && mouseIsPressed){
   c = 'white'  
  }
  
  //Change colour to black button
  
  //draw button
  fill('black')
  ellipse(width-920,height-40,50,50)
  
  //compute distance
  d9 = dist(mouseX,mouseY,width-920,height-40)
  r = 50/2
  
  //button logic
  if(d9 < r && mouseIsPressed){
   c = "black"  
  }
  
  //Erase button
  
  //draw button
  fill(179, 170, 146)
  ellipse(width-920,height-200,50,50)
  strokeWeight(1)
  textSize(15)
  textAlign(CENTER)
  fill(0)
  text("Erase",width-920,height-200)
  
  //compute distance
  d10 = dist(mouseX,mouseY,width-920,height-200)
  r = 50/2
  
  //button logic
  if(d10 < r && mouseIsPressed){
   c = 620  
  }
  
  
  
  //Change thickness to ultra thin
  
  //draw button
  fill('black')
  ellipse(width-920,height-260,50,50)
  textAlign(CENTER)
  textSize(10)
  fill(255)
  text("ultra thin",width-920,height-260)
  
  //compute distance
  d9 = dist(mouseX,mouseY,width-920,height-260)
  r = 50/2
  
  //button logic
  if(d9 < r && mouseIsPressed){
   s = 1  
  }
  
  //Change thickness to thin
  
  //draw button
  fill('black')
  ellipse(width-920,height-320,50,50)
  textAlign(CENTER)
  textSize(20)
  fill(255)
  text("thin",width-920,height-320)
  
  //compute distance
  d9 = dist(mouseX,mouseY,width-920,height-320)
  r = 50/2
  
  //button logic
  if(d9 < r && mouseIsPressed){
   s = 2  
  }
  
  //Change thickness to thick
  
  //draw button
  fill('black')
  ellipse(width-920,height-380,50,50)
  textAlign(CENTER)
  textSize(20)
  fill(255)
  text("thick",width-920,height-380)
  
  //compute distance
  d9 = dist(mouseX,mouseY,width-920,height-380)
  r = 50/2
  
  //button logic
  if(d9 < r && mouseIsPressed){
   s = 8  
  }
  
  //Change thickness to 4
  
  //draw button
  fill('black')
  ellipse(width-920,height-440,50,50)
  textAlign(CENTER)
  textSize(10)
  fill(255)
  text("super thick",width-920,height-440)
  
  //compute distance
  d9 = dist(mouseX,mouseY,width-920,height-440)
  r = 50/2
  
  //button logic
  if(d9 < r && mouseIsPressed){
   s = 20  
  }

  //Clear button
    
  //draw button
  fill('black')
  rect(40,460,70,70)
  textAlign(CENTER)
  textSize(15)
  fill(255)
  text("clear",width-920,height-500)
  
  //button logic
  if(mouseX > 40 && mouseX < 110 && mouseY > 460 && mouseY < 530 && mouseIsPressed){
    clear();
  background(220);

  }



 
  
  

  } 
