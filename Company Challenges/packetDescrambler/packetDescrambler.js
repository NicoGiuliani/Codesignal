function packetDescrambler(seq, fragmentData, n){
    var hash = {};
    var message = new Array(n); 

    for(var i = 0; i < seq.length; i++){
        if(hash[seq[i]]) { 
            hash[parseInt(seq[i])][fragmentData[i]] = hash[parseInt(seq[i])][fragmentData[i]] + 1 || 1;
            if (hash[parseInt(seq[i])][fragmentData[i]] > (n*0.5)) message[seq[i]] = fragmentData[i];
        } else {
            hash[parseInt(seq[i])] = {};
            hash[parseInt(seq[i])][fragmentData[i]] = 1;
        }
    }

    const keys = Object.keys(hash);

    // check last fragment is #
    if (message[keys.length - 1] !== "#") return '';

    for(let j = 0, counter = 0; j < keys.length; j++){
    // verify only the last fragment is # and that no messages were lost entirely
        if ((message[j] === "#" && j != keys.length - 1) || !hash[counter]) return '';
        counter++;
    }

    message = message.join('');
    return (message.length === keys.length) ? message : '';
}