function secretAgentsMeetingProposal(incomingMessage, codeNumberDiff) {
    const symbols = {
        '0': 'a', 
        '9': 'e',
        '8': 'i',
        '7': 'o',
        '6': 'u',
        '5': 'y',
        '4': 'w',
        '10': 't',
        '11': 'd',
        '12': 's',
        '13': 'n',
        '14': 'm',
        '15': 'r',
        '16': 'b',
        '17': 'k',
        '18': 'p',
        '*': "morning",
        '@': "afternoon",
        '#': "night",
        '?': '-'
    }
    
    let decoded = "";
    let sequence = incomingMessage.split('.');    
    let on = false;
    let multiplier = 0;
    let value;
    
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == '_') {
            on = true;
            multiplier++;
            continue;
        }
        if (on) {
            value = parseInt(sequence[i]);
            if (!isNaN(value)) {
                value += (codeNumberDiff * multiplier);
                sequence[i] = value;
            }
        }
        decoded += symbols[sequence[i]];
    }
    
    let info = decoded.split('-');
    let response = [decoded, "13.7"];
    
    if ((info[0] == "today" && info[2] == "park") ||
        (info[0] == "tomorrow" && info[1] == "night" && info[2] == "bar") ||
        (info[0] == "tomorrow" && info[1] == "afternoon" && info[2] == "park") ||
        (info[0] == "twodays" && info[1] == "morning" && info[2] == "restaurant")) response[1] = "5.9.12";

    return response; 
}