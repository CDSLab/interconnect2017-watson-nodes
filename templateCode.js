<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <div>Hello to Watson on Node-RED</div>
        <div id="id_hello">
           <span>Hello</span>
           &nbsp;
           <span id="id_nameout"></span>
       </div>


        <form id="id_form">
            <div>
                <span>
                    What is your name:   
                </span>
                <span>
                    <input type="text" name="name"        
                                     id="id_name"/>
                </span>
            </div>
            <div>
                <input type="submit" value="Enter" 
                                      id="id_enter"/>
            </div>
        </form> 
	<script 
           src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">
     </script>
        <script type="text/javascript">
            $(document).ready(function(){
                setupPage();
            });
            
            function setupPage(){
                $('#id_hello').hide();
                $('#id_form').submit(onSubmitClicked);
                enterbutton();
            }
            
            function onSubmitClicked(event){
                $('#id_nameout').text($('#id_name').val());
                $('#id_hello').show();
                $('#id_form').hide();
                event.preventDefault();
            }
            
            function enterbutton(){
                $(function() {
                    $("form input").keypress(function (e) {
                    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                        $('#id_enter').click();
                        return false;
                    } else {
                        return true;
                    }
                });
            });
        }

        </script>        
    </body>
</html>

