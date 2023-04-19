<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
<title>Jose Campillejo</title>
	
	<!--FAVICON-->
	<link rel="icon" href="images/favicono.png" type="image/png" sizes="64x64">
	<!--MAQUETACION RESPONSIVE-->
	<link href= "maquetacion_responsive.css" rel= "stylesheet" type= "text/css" >
	<!--TIPOGRAFIA-->
	<link href= "tipografia_texto.css" rel= "stylesheet" type= "text/css" >
	<!--efectojava de planos superpuestos-->
	<link href= "botones.css" rel= "stylesheet" type= "text/css" >
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="javamenu.js"></script>
	
	<!--ELEMENTOS DEL SCROLL-->
	<link href= "scroll_css.css" rel= "stylesheet" type= "text/css" >
	<!--JAVA DEL SCROLL-->
	<script src="flexcroll.js"></script>
	
	
	<style>
	
	body { margin:0;
    background: linear-gradient(-45deg, #68a8de, #68a8de, #a0a09f, #a0a09f);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite; text-align:center;

}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

</style>
	
</head>

<body>
	
 <!-- MENU RESPONSIVE -->
<div class= "row menuburger" style= "height:auto; position: sticky; z-index: 11" >
		
	<div id="scroll" class="flexcroll"><ul>
	
		<li><a href="" style="text-decoration:none">  
		<div class="container" style="margin-left: 20vw;">
  	   	<div class="text"> <div class="fondotitulo h1 boton"> josecampillejo </div></div>		
		</div></a></li>
		
		<li>  
		<div class="container" style="margin-left: 30px;">
  	   	<div class="text"><div class="fondotitulo h1 boton" onClick="toggleDiv(5)" tabindex="1"> selected works</div></div>		
		</div></li>

		<li>  
		<div class="container" style="margin-left: 30px;">
  	   	<div class="text"><div class="fondotitulo h1 boton" onClick="toggleDiv(3)" tabindex="1"> about me </div></div>		
		</div></li>

		<li>  
		<div class="container" style="margin-left: 30px; margin-right: 70px;">
  	   	<div class="text"><div class="fondotitulo h1 boton" onClisck="toggleDiv(4)" tabindex="1"> hire me </div></div>		
		</div></li>
	
		</ul>
		</div>
		</div>	
	
<!-- MENU RESPONSIVE -->	
	
	
	
	
	
	<div class= "row menu" style= "height:15vh; padding-top: 4vh; position: sticky; z-index: 11" >
		
		<div class="col-6 menu"> <a href="#" > <div id="close" class="fondotitulo h1 boton"> josecampillejo </div> </a> </div>
        <div class="col-6 menu" > <a class="fondotitulo-right h1 boton" href="#" tabindex="1"> <div  onClick="toggleDiv(2)" > selected works </div> </a> </div>
	</div>
	
	<div class= "row rowcentral"> 
		<div class= "col-12 h1max"> HOLA! i’m JOSE, a freelance designer with a focus on <br> <span class="h1max1"> GRAPHIC DESIGN </span>,<span class="h1max1"> 3D GRAPHICS</span> &amp; <span class="h1max1">BRANDING</span>. <br>
		Based in MADRID, working ANYWHERE. <br>
		Currently working at <span class="h1max1"> MURPH </span>.
		</div>
	</div>
	
	<div class= "col-12 menuburger footer h1" style= "text-decoration:underline; font-size: 20px;"> <a href="mailto:info.josecampillejo@gmail.com">info.josecampillejo@gmail.com</a> <br> <a href="https://www.instagram.com/josecampillejo/" target="_blank"> instagram </a> </div>
	
	<div class= "row menu" style= "height:17vh; position: sticky; z-index: 11;" > 
		
		<div class="col-3 menu "> <a href="#" tabindex="1"  class="fondotitulo h1 boton" style="float:left" > <div onClick="toggleDiv(3)" > about me </div> </a> </div>
		
        <div class="col-6 menu"  style= "text-align: center"> <a href="https://www.instagram.com/josecampillejo " class="h1" style="padding-top: 6px; text-decoration: underline;"> instagram </a> </div>
		
		<div class="col-3 menu"> <a class="fondotitulo-right h1 boton" href="#" tabindex="1"> <div onClick="toggleDiv(4)"> hire me </div> </a> </div>
	</div>
	
	
	
<!-- SUPERPOSICION DE PLANOS -->
	
	<div id="right-content">
		
 		 <div class="slide" id="div2"> <iframe src="selected_works/selected_works.html"  style="border:0; width:100%; height:100%; margin:0;" allowfullscreen="" loading="lazy"></iframe></div>
 		 
		<div class="slide" id="div3"><iframe src="about_me.html"  style="border:0; width:100%; height:100%; margin:0;" allowfullscreen="" loading="lazy"></iframe></div>
		
		<div class="slide" id="div4"><iframe src="contact.html"  style="border:0; width:100%; height:100%; margin:0;" allowfullscreen="" loading="lazy"></iframe></div>
		
		<div class="slide menuburger" id="div5"><iframe src="selected_works/selected_works_mobile.html"  style="border:0; width:100%; height:100%; margin:0;" allowfullscreen="" loading="lazy"></iframe></div>
	</div>	
	


	
</body>
</html>
