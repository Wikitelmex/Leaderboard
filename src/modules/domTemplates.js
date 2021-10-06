export function scoreRow(user = '', score = 0) {
    const res = `
    <tr>
        <td>${user}</td>
        <td>${score}</td>
    </tr>
    `
    return res;
}