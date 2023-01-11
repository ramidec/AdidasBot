#!/usr/bin/env bash
#
# simple bash script to simulate JavaScript's setInterval (blocking)
#
# Author: Dave Eddy <dave@daveeddy.com>
# Date: September 27, 2014
# License: MIT

setInterval() {
	local func=$1
	local sleeptime=$2
	local _start _end _delta _sleep
	while true; do
		_start=$(date +%s)
		#echo "$_start: starting work"

		# do work (unknown amount of time)
		"$func"

		_end=$(date +%s)
		_delta=$((_end - _start))
		_sleep=$((sleeptime - _delta))
		#echo "$_end: finished doing work, took $_delta seconds, sleeping for $_sleep seconds"
		sleep "$_sleep"
	done
}

dowork() {
	# this is where your code would go
    response=$(curl --silent --location --request GET 'https://www.adidas.com.ar/api/products/IB3593/availability' \
    --header 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' | python -m json.tool)
	echo -n 'doing work... '
    echo $response
	sleep 2
	echo 'done'
}

# setInterval for 5 seconds.  in this example, because `dowork` takes 2 seconds to run,
# it will be called every 3 seconds, for a total of 5 seconds elapsed time.
echo "starting loop, will sleep 5 seconds between iterations"
setInterval dowork 5