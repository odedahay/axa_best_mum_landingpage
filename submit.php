<?php
	if ( isset( $_POST['name'], $_POST['phone'], $_POST['email'] )){
		echo "Your name is " . $_POST['name'] . $_POST['phone'] . $_POST['email'] ;		
	}