<?php
$file = file_get_contents('queue.json', true);
$queue = json_decode($file,true);


foreach ($queue as &$queuer) {
    if($queuer["qNum"] == $GET["qNum"] && $queuer["roomCode"] != null){
        echo $queuer["roomCode"];
        $ID = getID(7);
        $queuer["roomCode"] = $ID;
        $queueEncoded = json_encode($queue);
        file_put_contents('queue.json',$queueEncoded);
        //$rName = $_POST["rName"];
        full_copy("chat","room/".$ID);
        echo $ID;
    }
}
if(!$queuerExists){
    $queuer = array("id"=>$GET["id"], "qNum"=>$GET["qNum"], "roomCode"=>null);
    array_push($queue,$queuer);
    $queueEncoded = json_encode($queue);
    file_put_contents('queue.json',$queueEncoded);
}














?>


