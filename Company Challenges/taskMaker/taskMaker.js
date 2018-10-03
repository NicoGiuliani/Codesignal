function taskMaker(source, challengeId) {
	let regex = /\s\/\/DB\s\d/;
	let response;
	let first = true;
	let found = false;

	for (let i = 0; i < source.length; i++) {
		let current = source[i].match(regex);

		if (found && current == null) {
			response.push(source[i]);
		}

		if (current != null) {

			if (found) continue;

			if (first) {
				response = source.slice(0, i - 1);
				first = false;
			}

			let otherRegex = new RegExp(/\s\/\/DB\s/.source + challengeId);

			if (current.input.match(otherRegex) != null) {
				response.push(current.input.replace(/\s\/\/DB\s\d\/\//, ' '));
				found = true;
			}
			
		}
	}
	return response;
}

const source = ["ans = 0",
				"for i in range(n):",
				"    for j in range(n):",
				"    //DB 3//for j in range(1, n):",
				"    //DB 2//for j in range(n + 1):",
				"        ans += 1",
				"return ans"];

console.log(taskMaker(source, 2));