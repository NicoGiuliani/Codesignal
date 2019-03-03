function quadraticEquation(a, b, c) {
    const first = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const second = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    if (isNaN(first) || isNaN(second)) return [];
    return (first == second) ? [first] : [first, second].sort();
}