<?php
$file = file_get_contents('queue.json', true);
$queue = json_decode($file,true);




//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function getID($n) { 
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    $randomString = ''; 
  
    for ($i = 0; $i < $n; $i++) { 
        $index = rand(0, strlen($characters) - 1); 
        $randomString .= $characters[$index]; 
    } 
  
    return $randomString; 
} 

function full_copy( $source, $target ) {
    if ( is_dir( $source ) ) {
        @mkdir( $target );
        $d = dir( $source );
        while ( FALSE !== ( $entry = $d->read() ) ) {
            if ( $entry == '.' || $entry == '..' ) {
                continue;
            }
            $Entry = $source . '/' . $entry; 
            if ( is_dir( $Entry ) ) {
                full_copy( $Entry, $target . '/' . $entry );
                continue;
            }
            copy( $Entry, $target . '/' . $entry );
        }

        $d->close();
    }else {
        copy( $source, $target );
    }
}












$queuerExists = false;
foreach ($queue as &$queuer) {
    if($queuer["qNum"] == $name && $queuer["roomCode"] == null){
        $queuerExists = true;

        $array_without_queuer = array_diff($queue, array($queuer));

        $queueEncoded = json_encode($array_without_queuer);
        file_put_contents('queue.json',$queueEncoded);
        echo $queuer["roomCode"];
    }
}
if(!$queuerExists){
    $queuer = array("id"=>$GET["id"], "qNum"=>$GET["qNum"], "roomCode"=>null);
    array_push($queue,$queuer);
    $queueEncoded = json_encode($queue);
    file_put_contents('queue.json',$queueEncoded);
}














?>


