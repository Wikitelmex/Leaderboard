export class Templates {
  static scoreRow(user = '', score = 0) {
    const res = `
        <tr>
            <td>${user}</td>
            <td>${score}</td>
        </tr>
        `;
    return res;
  }

  static failAlert(text = '') {
    const res = `
        <div class="alert alert-danger alert-dismissible fade show fixed-bottom" role="alert">
            <strong>Houston, we have a problem!</strong> ${text}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    return res;
  }
}
