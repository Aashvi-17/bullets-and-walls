      var bullet,wall,bulletanimation1,bulletanimation2,bulletanimation3,bulletanimation4,bulletanimation5,track,border,thickness,wall,width,height;
      var bulletSpeed,bulletWeight;
      function preload(){
        bulletanimation1=loadAnimation("original.PNG");
        bulletanimation2=loadAnimation("bullet1.PNG");
        bulletanimation3=loadAnimation("bullet2.PNG");
        bulletanimation4=loadAnimation("bullet3.PNG");
        bulletanimation5=loadAnimation("bullet4.PNG");

      }
      function setup() {
        width = 1400;
        height=700
        createCanvas(width,height);

        thickness = random(22,83);

        //  wall = createSprite(1200,200,thickness,height/2);
        bulletSpeed=random(14,14);
        bulletWeight=random(400,1500);

        speed2=random(18,25);
        weight2=random(1600,2700);

        speed3=random(15,27);
        weight3=random(2700,3800);

        speed4=random(26,33);
        weight4=random(3900,5000);

        bullet1=createSprite(50,50,52,20);
        bullet1.addAnimation("car",bulletanimation1);
        bullet1.scale=0.4;


        bullet2=createSprite(50,200,52,20);
        bullet2.addAnimation("car",bulletanimation1);
        bullet2.scale=0.4;


        bullet3=createSprite(50,350,52,20);
        bullet3.addAnimation("car",bulletanimation1);
        bullet3.scale=0.4;


        bullet4=createSprite(50,500,51,20);
        bullet4.addAnimation("car",bulletanimation1);
        bullet4.scale=0.4;

        wall=createSprite(1300,50,20,45);
        wall.shapeColor="grey";

        wall2=createSprite(1300,200,20,45);
        wall2.shapeColor="grey";

        wall3=createSprite(1300,350,20,45);
        wall3.shapeColor="grey";

        wall4=createSprite(1300,500,20,45);
        wall4.shapeColor="grey";
        
      // createTrack(75); 
    //   createTrack(210); 
     //  createTrack(355); 
    //   createTrack(510); 

       border1=createSprite(0,130,3300,10);
       border1.shapeColor="white";

       border2=createSprite(0,280,3300,10);
       border2.shapeColor="white";

       border3=createSprite(0,430,3300,10);
       border3.shapeColor="white";
      }

      function createTrack(yaxis) {

        for (var i = 50; i < 1200; i = i + 150) {
          var track = createSprite(i, yaxis, 60, 7);
          track.shapeColor="white";
  
      }

      }

      function draw() {
        background("black");
        bullet1.velocityX=bulletSpeed;
      if(wall.x-bullet1.x<(bullet1.width+wall.width)/2){
        {
        bullet1.velocityX=0;
        var deformation=(0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);

        bullet1.addAnimation("car",bulletanimation5);
      }
      if(deformation<180 && deformation>100){
        bullet1.addAnimation("car",bulletanimation5);
      }
      if(deformation<100){
        bullet1.addAnimation("car",bulletanimation3);
      }
      if(deformation<180){
        bullet1.addAnimation("car",bulletanimation3);
      }
      }





      bullet2.velocityX=speed2;
      if(wall2.x-bullet2.x<(bullet2.width+wall2.width)/2 || bullet2.isTouching(wall3)){
        {
        bullet2.velocityX=0;
        var deformation2=(0.5*weight2*speed2*speed2)/2250;

        bullet2.addAnimation("car",bulletanimation2);
      }
      if(deformation2<180 && deformation2>100){
        bullet2.addAnimation("car",bulletanimation4);
      }
      if(deformation2<100){
        bullet2.addAnimation("car",bulletanimation3);
      }
      if(deformation2<180){
        bullet2.addAnimation("car",bulletanimation2);
      }
      }




      bullet3.velocityX=speed3;
      if(wall3.x-bullet3.x<(bullet3.width+wall3.width)/2){
        {
        bullet3.velocityX=0;
        var deformation3=(0.5*weight3*speed3*speed3)/2250;

        bullet3.addAnimation("car",bulletanimation4);
      }
      if(deformation3<180 && deformation3>100){
        bullet3.addAnimation("car",bulletanimation5);
      }
      if(deformation3<100){
        bullet3.addAnimation("car",bulletanimation1);
      }
      if(deformation3<180){
        bullet3.addAnimation("car",bulletanimation3);
      }
      }




      bullet4.velocityX=speed4;
      if(wall4.x-bullet4.x<(bullet4.width+wall4.width)/2){
        {
        bullet4.velocityX=0;
        var deformation4=(0.5*weight4*speed4*speed4)/2250;

        bullet4.addAnimation("car",bulletanimation5);
      }
      if(deformation4<180 && deformation4>100){
        bullet4.addAnimation("car",bulletanimation4);
      }
      if(deformation4<100){
        bullet4.shapeColor=color="yellow";
      }
      if(deformation4>180){
        bullet4.addAnimation("bullet",bulletanimation1);
      }
      }
        drawSprites();
      }