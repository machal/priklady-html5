<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // recommended to prevent caching of event data.

/**
 * Constructs the SSE data format and flushes that data to the client.
 *
 * @param string $id Timestamp/id of this connection.
 * @param string $msg Line of text that should be transmitted.
 */
function sendMsg($id, $msg) {
  echo "id: $id" . PHP_EOL;
  echo "data: $msg" . PHP_EOL;
  echo PHP_EOL;
  ob_flush();
  flush();
}


// Every 5 seconds
$counter = rand(1, 10);
while (1) {

  // Send server time
  $serverTime = time();
  sendMsg($serverTime, 'server time: ' . date("h:i:s", time()));

  $counter--;
  sleep(5);
}

?>