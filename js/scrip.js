   <script type="text/javascript">

        	var numer = Math.floor(Math.random()*3)+1;
        
            function hide()
            {
               $("#slide").fadeOut(500); 
            }
		
			function zmienslajd()
			{
				numer++; if (numer>3) numer=1;
				
				var plik = "<img src=\"pic/slide" + numer + ".jpg\" />";
				
				document.getElementById("slide").innerHTML = plik;
			
                $("#slide").fadeIn(400);
                
				setTimeout("zmienslajd()",5000);
                setTimeout("hide()",4600);	
            }
  
      </script>